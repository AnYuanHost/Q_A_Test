/**
 * 庞杂系统 · 内核控制台 — 数据源层
 *
 * 为整个前端提供统一的数据访问入口，内置自动降级：
 *
 *   1. live    —— 后端在线：fetch /api/v1/*（实时扫描真实 KRS 目录）
 *   2. offline —— 后端不可达或 file:// 直开：读取 offline-data.js 内嵌快照，功能完全一致
 *
 * 说明：第三级"内核插件接口"由后端 kernel-adapter 承载（KERNEL_MODE=kernel 时
 *       仍以 /api/v1/* 对外），故前端本层只需处理上面两级，内核接入时页面零改动。
 *
 * 判定逻辑：
 *   - 页面以 file:// 打开            → 直接 offline（浏览器不允许跨协议请求）
 *   - 页面经 http(s) 打开            → 先探活 /api/v1/health（2s 超时），成功为 live，失败降级 offline
 *
 * 对上层（app.js）暴露的接口与 REST 契约一一对应，上层无需感知当前处于哪种模式。
 */
'use strict';

const DataSource = (() => {
  /** live 模式的 API 根路径 */
  const API_BASE = '/api/v1';

  /** 当前模式：'live' | 'offline' */
  let mode = 'offline';

  /** 探活超时（毫秒） */
  const PROBE_TIMEOUT_MS = 2000;

  /** ---------- 基础请求 ---------- */

  /** 带超时的 fetch 探活 */
  async function probe(url, timeoutMs) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const r = await fetch(url, { signal: ctrl.signal });
      return r.ok;
    } catch {
      return false;
    } finally {
      clearTimeout(timer);
    }
  }

  /** live 模式统一请求：返回 data 字段，失败抛错 */
  async function apiGet(pathname, init) {
    const r = await fetch(API_BASE + pathname, init);
    const j = await r.json().catch(() => ({ ok: false, error: 'bad json' }));
    if (!r.ok || !j.ok) throw new Error(j.error || `HTTP ${r.status}`);
    return j.data;
  }

  /** ---------- offline 模式：离线快照的字段映射 ---------- */

  const snap = () => window.QA_OFFLINE_DATA || null;

  const OFFLINE_GETTERS = {
    '/status': () => Object.assign({ mode: 'offline' }, snap().status),
    '/superindex': (query) => {
      const limit = Number(/limit=(\d+)/.exec(query || '')?.[1] || 50);
      return snap().superIndex.slice(0, Math.max(1, Math.min(limit, 500)));
    },
    '/superindex/:id': (query, id) => {
      const hit = snap().superIndex.find((x) => x.superIndex === Number(id));
      if (!hit) throw new Error(`super index ${id} 不存在（离线快照内）`);
      return hit; // 离线快照不含文件头 HEX（那需要读盘），字段缺失由渲染层兼容
    },
    '/solutions': () => snap().solutions,
    '/domains': () => snap().domains,
    '/polling': () => snap().polling,
    '/cases': () => snap().kernelCases,
    '/issues': () => snap().issues,
  };

  /** 离线路由：把 pathname 匹配到 OFFLINE_GETTERS 的键 */
  function offlineGet(pathnameWithQuery) {
    const [pathname, search = ''] = pathnameWithQuery.split('?');
    const data = snap();
    if (!data) throw new Error('离线快照未加载（offline-data.js 缺失）');

    // /superindex/123 形式的动态段
    const m = /^\/superindex\/(\d+)$/.exec(pathname);
    if (m) return OFFLINE_GETTERS['/superindex/:id'](search, m[1]);

    const getter = OFFLINE_GETTERS[pathname] || OFFLINE_GETTERS['/status'];
    return getter(search);
  }

  /** ---------- 离线问答：确定性演示推演 ---------- */

  function offlineAsk(text) {
    const steps = [
      { op: 'Intentionality', desc: '匹配意向性对象，定位相关知识域' },
      { op: 'SolutionMatch', desc: '在解决方案集合中检索可应用的子图替换规则' },
      { op: 'QuestionFlowMap', desc: '生成子问题节点，标记为可执行' },
      { op: 'PollingDriven', desc: '轮询机领取节点并执行，写回 KRS' },
    ];
    return {
      mode: 'offline',
      question: text,
      answer: `【离线演示】后端未连接，问题「${text}」已按问答流图完成一次本地模拟推演（共 ${steps.length} 步）。启动 node server/server.js 后可获得实时推演。`,
      steps,
      superIndexUsed: [65576],
      latencyMs: 0,
    };
  }

  /** ---------- 对外 API（与 REST 契约同形） ---------- */

  return {
    /** 当前数据模式 */
    get mode() { return mode; },

    /** 初始化探测：决定 live / offline，返回最终模式 */
    async init() {
      if (location.protocol === 'file:') {
        mode = 'offline';
        return mode;
      }
      // 探活用轻量 /health（不扫盘）；失败则降级离线
      mode = (await probe(API_BASE + '/health', PROBE_TIMEOUT_MS)) ? 'live' : 'offline';
      return mode;
    },

    /** GET 任意契约路径，自动选择 live / offline */
    async get(pathname) {
      if (mode === 'live') {
        try { return await apiGet(pathname); }
        catch { mode = 'offline'; throw new Error('后端连接中断，已降级为离线快照'); }
      }
      return offlineGet(pathname);
    },

    /** POST /question —— 提交问题 */
    async ask(text) {
      if (mode === 'live') {
        try {
          return await apiGet('/question', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
          });
        } catch { mode = 'offline'; return offlineAsk(text); }
      }
      return offlineAsk(text);
    },
  };
})();
