/**
 * 工作区动作链（Workspace Actions）
 *
 * 把"选映射 → 插入节点 → 补参数表 → 校验 → 刷新流图 → 存版本/知识"这些跨插件步骤
 * 编排成**一次调用**，这是"前端逻辑串起来"的核心。
 *
 * 依赖：LanToolkit（本地校验）、QAPluginHost.call（插件命令）、WorkspaceStore（状态）。
 */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const lanEl = () => $('#ws-lan');
  const piEl = () => $('#ws-pi');
  const store = () => window.WorkspaceStore;

  const lan = () => { const e = lanEl(); return e ? e.value : ''; };
  const pi = () => { const e = piEl(); return e ? e.value : ''; };

  function setLan(text) {
    const e = lanEl(); if (!e) return;
    e.value = text; e.dispatchEvent(new Event('input'));
  }
  function setPi(text) {
    const e = piEl(); if (!e) return;
    e.value = text; e.dispatchEvent(new Event('input'));
  }
  function insertScript(text) {
    const e = lanEl(); if (!e) throw new Error('请先进入工作区');
    const s = e.selectionStart == null ? e.value.length : e.selectionStart;
    const t = e.selectionEnd == null ? s : e.selectionEnd;
    e.value = e.value.slice(0, s) + text + e.value.slice(t);
    e.selectionStart = e.selectionEnd = s + text.length;
    e.dispatchEvent(new Event('input'));
    e.focus();
  }

  const call = (id, cmd, args) => window.QAPluginHost.call(id, cmd, args);
  const notify = (m) => { store().set('status', m); window.dispatchEvent(new CustomEvent('qa-status', { detail: m })); };

  /* ---------- 校验（本地引擎，离线也可用） ---------- */
  function renderValidation(issues) {
    const box = $('#ws-issues'); const cnt = $('#ws-issue-count');
    if (!box || !cnt) return;
    const errs = issues.filter((x) => x.level === 'error').length;
    cnt.textContent = issues.length === 0 ? '✓ 全部通过' : `${errs} 错误 / ${issues.length - errs} 提示`;
    cnt.className = issues.length === 0 ? 'is-pass' : (errs ? 'is-err' : 'is-warn');
    if (issues.length === 0) {
      box.innerHTML = '<p class="ws-empty is-pass">✓ 语法与参数表全部通过校验</p>';
    } else {
      box.innerHTML = issues.map((x) =>
        `<div class="issue-item is-${x.level}"><span class="issue-line">${x.pi ? '.pi:' : ''}${x.line || '—'}</span><span class="issue-msg">${x.message}</span></div>`
      ).join('');
    }
    // 同步到底部「问题」面板
    if (issues.length === 0) window.Workbench && Workbench.problems('✓ 无问题');
    else window.Workbench && Workbench.problems(issues.map((x) => `${x.level === 'error' ? '✗' : '!'} ${x.pi ? '.pi:' : ''}L${x.line || '—'} ${x.message}`).join('\n'));
  }

  function validate() {
    let issues = [];
    try { issues = window.LanToolkit.validate(lan(), pi()); }
    catch (e) { issues = [{ line: 0, level: 'error', message: '校验异常：' + e.message }]; }
    store().set('validation', issues);
    renderValidation(issues);
    return issues;
  }

  async function refreshFlow() {
    try {
      const g = await call('flow-preview', 'graph', { lan: lan() });
      store().set('flow', g);
      return g;
    } catch { return null; }
  }

  async function refreshVersions() {
    try {
      const r = await call('script-diff', 'list', {});
      store().set('versionCount', r.snapshots.length);
    } catch { /* ignore */ }
  }

  /* ---------- 动作 ---------- */

  /** 插入节点模板（自动补 .pi → 校验 → 刷新流图） */
  async function insertNode(name) {
    const n = await call('maplib', 'node', { name });
    insertScript(n.lan);
    const added = await fillPi();
    const issues = validate();
    await refreshFlow();
    notify(`已插入 ${name}${added.length ? '，补 ' + added.length + ' 行参数' : ''}${issues.length ? '，' + issues.length + ' 条提示' : '，校验通过'}`);
    return { name, added, issues };
  }

  /** 补齐参数表，返回新增参数名 */
  async function fillPi() {
    try {
      const r = await call('pi-helper', 'fill', { lan: lan(), pi: pi() });
      if (r.added.length) setPi(r.pi);
      return r.added;
    } catch { return []; }
  }

  /** 一键整理：展开常数 → 补参数 → 格式化 → 校验 → 流图 */
  async function completeScript() {
    let expanded = 0;
    try {
      const ex = await call('const-manager', 'expand', { lan: lan(), withLibrary: false });
      if (ex.expanded.length) { setLan(ex.lan); expanded = ex.expanded.length; }
    } catch { /* ignore */ }
    const added = await fillPi();
    setLan(window.LanToolkit.format(lan()));
    const issues = validate();
    const g = await refreshFlow();
    await refreshVersions();
    notify(`整理完成：展开 ${expanded} 个常数、补 ${added.length} 行参数、${issues.length} 条提示、流图 ${g ? g.nodeCount : 0} 节点`);
    return { expanded, added, issues, flow: g };
  }

  /** 保存版本快照 */
  async function saveVersion(name) {
    const r = await call('script-diff', 'save', { name, lan: lan(), pi: pi() });
    await refreshVersions();
    notify('已保存版本：' + r.name);
    return r;
  }

  /** 把当前脚本存为知识条目 */
  async function saveKnowledge(title) {
    const content = '```text\n' + lan() + '\n```\n\n参数表：\n\n```text\n' + pi() + '\n```\n';
    const r = await call('kbase-write', 'save', { title: title || '解决方案脚本 ' + new Date().toLocaleTimeString('zh-CN', { hour12: false }), content, tags: ['脚本', '方案'] });
    notify('已存为知识条目：' + r.item.title);
    return r;
  }

  /** 选中节点（大纲 → 流图高亮） */
  function selectNode(nodeId) {
    store().set('selectedNode', nodeId || null);
  }

  /** 从当前选区/节点生成知识条目（示例动作） */
  async function exportSelectionAsKnowledge() {
    return saveKnowledge('脚本片段 ' + new Date().toLocaleTimeString('zh-CN', { hour12: false }));
  }

  /* ---------- 本地草稿（localStorage） ---------- */
  const DRAFT_KEY = 'qa.workspace.draft.v1';

  function saveDraft() {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify({ lan: lan(), pi: pi(), at: Date.now() })); } catch { /* ignore */ }
  }

  function restoreDraft() {
    try {
      const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null');
      if (!d) { notify('没有本地草稿'); return false; }
      setLan(d.lan || '');
      setPi(d.pi || '');
      validate();
      refreshFlow();
      notify('已恢复草稿（' + new Date(d.at).toLocaleString('zh-CN', { hour12: false }) + '）');
      return true;
    } catch { return false; }
  }

  window.WorkspaceActions = {
    lan, pi, setLan, setPi, insertScript,
    validate, refreshFlow, refreshVersions,
    insertNode, fillPi, completeScript, saveVersion, saveKnowledge,
    selectNode, exportSelectionAsKnowledge,
    saveDraft, restoreDraft,
  };
})();
