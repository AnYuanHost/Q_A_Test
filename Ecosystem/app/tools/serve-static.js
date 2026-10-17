/**
 * 纯静态服务（仅托管 app/web，不提供 /api）
 *
 * 用途：在没有后端、又无法用 file:// 直开的场合（如某些浏览器禁用 file 协议、
 * 或需要走 http 的自动化测试），用它复现"前端离线快照模式"（探活 /health 失败 → 降级）。
 *
 * 用法：node app/tools/serve-static.js [port]   （默认 3790）
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const WEB_ROOT = path.join(__dirname, '..', 'web');
const PORT = Number(process.argv[2] || process.env.PORT || 3790);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  const pathname = decodeURIComponent(req.url.split('?')[0]);
  const file = path.normalize(path.join(WEB_ROOT, pathname === '/' ? 'index.html' : pathname));
  if (file !== WEB_ROOT && !file.startsWith(WEB_ROOT + path.sep)) { res.writeHead(403); res.end('forbidden'); return; }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }  // 注意：不做 SPA 回退，/api 一律 404 → 前端降级离线
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(buf);
  });
}).listen(PORT, () => console.log(`[static] serving app/web at http://localhost:${PORT} （无 /api → 前端离线模式）`));
