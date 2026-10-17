/**
 * 工作区状态总线（Workspace Store）
 *
 * 解决"前端只是个界面、逻辑串不起来"的根因：把**当前文档与派生状态**收敛为单一数据源，
 * 所有面板/标签页/命令只读写 store，由 store 统一广播变更。
 *
 * 状态：
 *   lan / pi            当前编辑内容
 *   validation[]        校验问题
 *   flow                问答流图（flow-preview 结果）
 *   selectedNode        选中的节点（大纲 → 流图高亮）
 *   versionCount        快照数量
 *   activePluginCount   可用插件数
 *   status              一句话状态
 *   action              最近一次动作（供 UI 反馈）
 *
 * 用法：
 *   WorkspaceStore.set('lan', text)
 *   const off = WorkspaceStore.subscribe('lan', (v) => {...})
 *   WorkspaceStore.subscribe('*', (key, v) => {...})
 */
(function () {
  'use strict';

  const state = {
    lan: '',
    pi: '',
    validation: [],
    flow: null,
    selectedNode: null,
    versionCount: 0,
    activePluginCount: 0,
    status: '就绪',
    action: null,
  };

  const subs = new Map(); // key -> Set<fn>

  function fire(key, value) {
    const set = subs.get(key);
    if (set) set.forEach((fn) => { try { fn(value); } catch (e) { console.warn('[store]', e); } });
    const all = subs.get('*');
    if (all) all.forEach((fn) => { try { fn(key, value); } catch (e) { console.warn('[store]', e); } });
  }

  function set(key, value) {
    if (state[key] === value) return value;
    state[key] = value;
    fire(key, value);
    return value;
  }

  function patch(obj) {
    Object.keys(obj || {}).forEach((k) => set(k, obj[k]));
  }

  function get(key) { return key == null ? state : state[key]; }

  function subscribe(key, fn) {
    if (!subs.has(key)) subs.set(key, new Set());
    subs.get(key).add(fn);
    return () => subs.get(key).delete(fn);
  }

  window.WorkspaceStore = { get, set, patch, subscribe };
})();
