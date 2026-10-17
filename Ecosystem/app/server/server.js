/**
 * 庞杂系统 · 内核控制台 后端服务（零依赖 Node.js）
 *
 * 职责：
 *  1. 托管 web/ 静态前端
 *  2. 提供 /api/v1/* REST 接口
 *  3. 通过 kernel-adapter 访问内核数据 —— 当前为 mock 模式，
 *     将来 AnYuanHost 的内核插件接口就绪后，只需切换 adapter（见 README.md）
 *
 * 启动：node server/server.js   （默认端口 3789，可用环境变量 PORT 覆盖）
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const adapter = require('./kernel-adapter');
const host = require('./plugin-host');

const PORT = Number(process.env.PORT || 3789);
const WEB_ROOT = path.join(__dirname, '..', 'web');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function sendJSON(res, code, obj) {
  const body = JSON.stringify(obj, null, 2);
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => {
      data += c;
      if (data.length > 64 * 1024) reject(new Error('body too large'));
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

/** /api/v1 路由表 —— 每个 handler 对应内核的一种能力 */
const routes = {
  async GET(target) {
    const [pathname, search = ''] = target.split('?');
    const seg = pathname.split('/').filter(Boolean); // ['api','v1',...]
    const rest = seg.slice(2);

    if (rest[0] === 'health') return adapter.getHealth();
    if (rest.length === 0 || rest[0] === 'status') return adapter.getStatus();

    if (rest[0] === 'superindex' && rest.length === 1) {
      const limit = Number(/(?:^|[?&])limit=(\d+)/.exec(search)?.[1] || 50);
      return adapter.listSuperIndex(limit);
    }
    if (rest[0] === 'superindex' && rest.length === 2) {
      return adapter.getSuperIndex(Number(rest[1]));
    }
    if (rest[0] === 'solutions') return adapter.listSolutions();
    if (rest[0] === 'domains') return adapter.listDomains();
    if (rest[0] === 'polling') return adapter.getPollingState();
    if (rest[0] === 'cases') return adapter.getKernelCases();
    if (rest[0] === 'issues') return adapter.getIssues();
    if (rest[0] === 'plugins' && rest.length === 1) return host.list();

    const err = new Error('not found');
    err.code = 404;
    throw err;
  },
  async POST(target, payload) {
    const [pathname] = target.split('?');
    const seg = pathname.split('/').filter(Boolean);
    const rest = seg.slice(2);
    if (rest[0] === 'question') return adapter.askQuestion(payload);
    // 插件命令 / 激活：POST /api/v1/plugins/:id/:action
    if (rest[0] === 'plugins' && rest.length === 3) {
      const id = decodeURIComponent(rest[1]);
      if (rest[2] === 'activate') return host.activate(id).manifest;
      if (rest[2] === 'command') return host.invoke(id, payload.command, payload.args);
    }
    const err = new Error('not found');
    err.code = 404;
    throw err;
  },
};

/* ── 插件资源与事件（不走 JSON 封装） ── */

/** 读插件目录内的文件（防路径穿越） */
function servePluginFile(res, id, sub) {
  const base = path.join(host.PLUGIN_DIR, id);
  const file = path.normalize(path.join(base, sub));
  if (file !== base && !file.startsWith(base + path.sep)) { res.writeHead(403); res.end('forbidden'); return; }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'text/javascript; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(buf);
  });
}

/** 插件 → 前端 的事件流（SSE） */
function servePluginEvents(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive', 'Access-Control-Allow-Origin': '*' });
  res.write(': connected\n\n');
  const onEvent = (e) => { try { res.write(`data: ${JSON.stringify(e)}\n\n`); } catch { /* ignore */ } };
  host.bus.on('event', onEvent);
  const ping = setInterval(() => { try { res.write(': ping\n\n'); } catch { /* ignore */ } }, 20000);
  req.on('close', () => { host.bus.off('event', onEvent); clearInterval(ping); });
}

const LOG = process.env.QA_LOG === '1';

const server = http.createServer(async (req, res) => {
  const startedAt = Date.now();
  if (LOG) res.on('finish', () => console.log(`[Q_A] ${req.method} ${req.url} → ${res.statusCode} (${Date.now() - startedAt}ms)`));

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(url.pathname);

  // ---- 插件事件流（SSE）与资源 ----
  if (pathname === '/api/v1/plugins/events') { servePluginEvents(req, res); return; }
  let pm = /^\/api\/v1\/plugins\/assets\/([^/]+)\/(.+)$/.exec(pathname);
  if (pm) { servePluginFile(res, decodeURIComponent(pm[1]), pm[2]); return; }

  // ---- API ----
  if (pathname.startsWith('/api/')) {
    try {
      const method = req.method === 'POST' ? 'POST' : 'GET';
      let result;
      if (method === 'POST') {
        const body = await readBody(req);
        let payload = {};
        try { payload = body ? JSON.parse(body) : {}; } catch { payload = { text: body }; }
        result = await routes.POST(pathname + url.search, payload);
      } else {
        result = await routes.GET(pathname + url.search);
      }
      sendJSON(res, 200, { ok: true, data: result });
    } catch (e) {
      const code = e.code === 404 ? 404 : 500;
      sendJSON(res, code, { ok: false, error: e.message || 'internal error' });
    }
    return;
  }

  // ---- 静态文件 ----
  // 归一化后限定在 WEB_ROOT 之内（带分隔符匹配，避免 web-evil 之类的前缀绕过）
  const filePath = path.normalize(path.join(WEB_ROOT, pathname === '/' ? 'index.html' : pathname));
  if (filePath !== WEB_ROOT && !filePath.startsWith(WEB_ROOT + path.sep)) {
    res.writeHead(403); res.end('forbidden'); return;
  }
  fs.readFile(filePath, (err, buf) => {
    if (err) {
      // SPA 回退
      fs.readFile(path.join(WEB_ROOT, 'index.html'), (e2, b2) => {
        if (e2) { res.writeHead(404); res.end('not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME['.html'] });
        res.end(b2);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(buf);
  });
});

server.listen(PORT, () => {
  console.log(`[Q_A Console] server listening on http://localhost:${PORT}`);
  console.log(`[Q_A Console] kernel mode: ${adapter.mode}${LOG ? ' · request log on' : ''}`);
});

// 优雅关闭（Ctrl+C 时释放端口，避免下次启动 EADDRINUSE）
for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => {
    console.log(`\n[Q_A Console] ${sig} 收到，正在关闭…`);
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(0), 1500).unref();
  });
}
