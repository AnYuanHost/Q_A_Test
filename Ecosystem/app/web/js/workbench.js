/**
 * 工作区外壳（Workbench）—— 工业风 IDE 骨架
 *
 * 结构：活动栏（activity）→ 侧边栏（该活动的面板）→ 标签页 + 编辑器 → 底部面板（问题/输出）。
 * 插件/内置面板通过 `Workbench.register({ id, label, icon, panels:[{title, render(el)}] })` 注册。
 * 可扩展：新增一个活动 = 一次 register；新增一个编辑标签页 = 在 HTML 里加 `.ide-editor[data-tab]`。
 */
(function () {
  'use strict';

  const activities = [];
  let activeId = null;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  function register(activity) {
    if (!activity || !activity.id) return;
    if (!activities.some((a) => a.id === activity.id)) activities.push(activity);
    if (activeId === null) activeId = activity.id;
    if ($('#ide-activity')) render();
  }

  function render() {
    const bar = $('#ide-activity');
    if (!bar) return;

    bar.innerHTML = activities.map((a) =>
      `<button class="ide-act${a.id === activeId ? ' is-active' : ''}" data-act="${a.id}" title="${a.label}" aria-label="${a.label}">${a.icon || '•'}</button>`
    ).join('');
    $$('[data-act]', bar).forEach((b) => b.addEventListener('click', () => show(b.dataset.act)));

    const act = activities.find((a) => a.id === activeId);
    $('#ide-side-title').textContent = act ? act.label : '';
    const body = $('#ide-side-body');
    body.innerHTML = '';
    if (!act) return;

    for (const p of (act.panels || [])) {
      const block = document.createElement('div');
      block.className = 'ide-block';
      const head = document.createElement('div');
      head.className = 'ide-block-head';
      head.textContent = p.title;
      const content = document.createElement('div');
      content.className = 'ide-block-body';
      block.append(head, content);
      body.appendChild(block);
      try {
        const r = p.render(content);
        if (r && typeof r.catch === 'function') r.catch((e) => { content.textContent = '面板错误：' + e.message; });
      } catch (e) { content.textContent = '面板错误：' + e.message; }
    }
  }

  function show(id) { activeId = id; render(); }

  /* ---------- 标签页 ---------- */

  function initTabs() {
    const tabs = $('#ide-tabs');
    const eds = $$('#ide-editors .ide-editor');
    if (!tabs) return;
    tabs.innerHTML = eds.map((e) =>
      `<button class="ide-tab${e.classList.contains('is-active') ? ' is-active' : ''}" data-tab="${e.dataset.tab}">${e.dataset.title || e.dataset.tab}</button>`
    ).join('');
    $$('[data-tab]', tabs).forEach((b) => b.addEventListener('click', () => selectTab(b.dataset.tab)));
    eds.forEach((e) => { if (e.classList.contains('is-active')) e.hidden = false; });

    // 命令面板入口
    tabs.insertAdjacentHTML('beforeend', '<span class="ide-tabs-spacer"></span><button class="ide-palette-btn" id="ide-palette-btn" title="命令面板 (Ctrl/Cmd+K)">⌘K</button>');
    const pb = $('#ide-palette-btn');
    if (pb) pb.addEventListener('click', () => { if (window.CommandPalette) CommandPalette.open(); });
  }

  function setStatus(text) {
    const el = $('#ide-status');
    if (el) el.textContent = text || '';
  }

  function selectTab(id) {
    $$('#ide-tabs [data-tab]').forEach((b) => b.classList.toggle('is-active', b.dataset.tab === id));
    $$('#ide-editors .ide-editor').forEach((e) => {
      const on = e.dataset.tab === id;
      e.hidden = !on;
      e.classList.toggle('is-active', on);
    });
    window.dispatchEvent(new CustomEvent('qa-tab-open', { detail: id }));
    if (id === 'intent') window.dispatchEvent(new CustomEvent('qa-intent-open'));
  }

  /* ---------- 底部面板 ---------- */

  function showBottom(panel) {
    $$('.ide-bottom-tab').forEach((b) => b.classList.toggle('is-active', b.dataset.panel === panel));
    $$('#ide-bottom-body .ide-output').forEach((x) => {
      x.hidden = x.id !== (panel === 'problems' ? 'ide-problems' : 'ide-output');
    });
  }

  function problems(text) {
    const el = $('#ide-problems');
    if (!el) return;
    el.textContent = text || '（暂无问题）';
    showBottom('problems');
  }

  function output(text, append) {
    const el = $('#ide-output');
    if (!el) return;
    el.hidden = false;
    el.textContent = append ? (el.textContent + '\n' + text) : text;
    showBottom('output');
  }

  function initBottom() {
    $$('.ide-bottom-tab').forEach((b) => b.addEventListener('click', () => showBottom(b.dataset.panel)));
    const close = $('#ide-bottom-close');
    if (close) close.addEventListener('click', () => {
      const b = $('.ide-bottom');
      if (b) b.classList.toggle('is-collapsed');
      close.textContent = b && b.classList.contains('is-collapsed') ? '+' : '—';
    });
  }

  function init() { initTabs(); initBottom(); if (activities.length) render(); }

  window.Workbench = {
    register, init, render, show, selectTab,
    problems, output, setStatus,
    get activeId() { return activeId; },
    get activities() { return activities; },
  };
})();
