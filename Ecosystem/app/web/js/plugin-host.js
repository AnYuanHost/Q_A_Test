/**
 * 前端插件宿主库（浏览器侧）
 *
 * 与后端 `server/plugin-host.js` 配对，构成"插件 ↔ 前端"的通信库：
 *   - 插件 UI 通过 `window.QAPluginHost.registerUI(id, factory)` 注册；
 *   - 宿主拉取 `/api/v1/plugins` 清单，动态加载插件 `ui.js`，并以 `host` API 激活；
 *   - `host.call(id, command, args)` → 后端 → 插件 Node 逻辑 → 返回；
 *   - 插件事件经 SSE（`/api/v1/plugins/events`）推回，`host.bus.on` 订阅；
 *   - `host.editor` 与脚本工作台编辑器双向通信，`host.status` 弹出提示。
 *
 * 离线（file:// 或后端不可达）时插件不可用——插件需要 live 后端。
 */
(function () {
  'use strict';

  const uiFactories = new Map();   // pluginId -> factory(host) => {title, element}
  const panels = [];               // { pluginId, title, element }
  const listeners = new Map();     // pluginId -> Set<fn(topic,payload)>
  let manifests = [];
  let loaded = false;

  function registerUI(pluginId, factory) { uiFactories.set(pluginId, factory); }

  function onEvent(pluginId, fn) {
    if (!listeners.has(pluginId)) listeners.set(pluginId, new Set());
    listeners.get(pluginId).add(fn);
  }
  function dispatch(evt) {
    const set = listeners.get(evt.plugin);
    if (set) set.forEach((fn) => { try { fn(evt.topic, evt.payload); } catch (e) { console.warn('plugin handler error', e); } });
  }

  function connectEvents() {
    try {
      const es = new EventSource('/api/v1/plugins/events');
      es.onmessage = (m) => { try { dispatch(JSON.parse(m.data)); } catch { /* ignore */ } };
      return es;
    } catch { return null; }
  }

  /** 通用命令调用（供工作区面板等复用，无需插件 UI） */
  async function call(pluginId, command, args) {
    const r = await fetch('/api/v1/plugins/' + encodeURIComponent(pluginId) + '/command', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command, args: args || {} }),
    });
    const j = await r.json().catch(() => ({ ok: false, error: 'bad json' }));
    if (!r.ok || !j.ok) throw new Error(j.error || ('HTTP ' + r.status));
    return j.data;
  }
  function status(msg) { window.dispatchEvent(new CustomEvent('qa-status', { detail: String(msg) })); }

  function makeHost(manifest) {
    const id = manifest.id;
    return {
      id,
      manifest,
      call,
      status,
      /** 与脚本工作台编辑器通信 */
      editor: {
        el() { const t = document.querySelector('#ws-lan'); if (!t) throw new Error('请先打开「脚本工作台」'); return t; },
        getText() { return this.el().value; },
        setText(v) { const t = this.el(); t.value = v; t.dispatchEvent(new Event('input')); },
        insert(txt) {
          const t = this.el();
          const s = t.selectionStart == null ? t.value.length : t.selectionStart;
          const e = t.selectionEnd == null ? s : t.selectionEnd;
          t.value = t.value.slice(0, s) + txt + t.value.slice(e);
          t.selectionStart = t.selectionEnd = s + txt.length;
          t.dispatchEvent(new Event('input')); t.focus();
        },
      },
      /** 订阅本插件的事件（topic 为空则全部） */
      bus: { on(topic, fn) { onEvent(id, (t, p) => { if (!topic || t === topic) fn(t, p); }); } },
    };
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = () => reject(new Error('加载失败 ' + src));
      document.head.appendChild(s);
    });
  }

  /** 拉取清单并激活所有插件 UI */
  async function load() {
    if (loaded) return manifests;
    const r = await fetch('/api/v1/plugins');
    const j = await r.json();
    manifests = (j && j.data) || [];
    for (const m of manifests) {
      if (!m.ui) continue;
      try { await loadScript('/api/v1/plugins/assets/' + encodeURIComponent(m.id) + '/' + m.ui); }
      catch (e) { console.warn('[plugin-host]', e.message); }
    }
    for (const m of manifests) {
      const f = uiFactories.get(m.id);
      if (!f) continue;
      try {
        const p = f(makeHost(m));
        if (p && p.element) panels.push({ pluginId: m.id, title: p.title || m.name, element: p.element });
      } catch (e) { console.warn('[plugin-host] ui activate failed:', m.id, e); }
    }
    connectEvents();
    loaded = true;
    return manifests;
  }

  window.QAPluginHost = {
    registerUI,
    load,
    call,
    status,
    get manifests() { return manifests; },
    get panels() { return panels; },
  };
})();
