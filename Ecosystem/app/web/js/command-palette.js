/**
 * 命令面板（Command Palette）
 *
 * 把"工作区动作 + 插件命令"汇总成可搜索、可键盘执行的命令列表（Ctrl/Cmd+K）。
 * 这是前端逻辑串联的入口：任何跨插件流程都可注册为一条命令。
 *
 * 用法：
 *   CommandPalette.register({ id, title, hint, run })
 *   CommandPalette.open()
 */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const cmds = [];
  let filtered = [];
  let index = 0;

  function register(c) {
    if (!c || !c.id || !c.title) return;
    if (cmds.some((x) => x.id === c.id)) return;
    cmds.push(c);
  }

  function paint() {
    const list = $('#palette-list');
    if (!list) return;
    list.innerHTML = filtered.length
      ? filtered.map((c, i) => `<div class="palette-item${i === index ? ' is-active' : ''}" data-i="${i}"><b>${c.title}</b>${c.hint ? `<span>${c.hint}</span>` : ''}</div>`).join('')
      : '<div class="palette-empty">无匹配命令</div>';
    list.querySelectorAll('[data-i]').forEach((el) => {
      el.addEventListener('mouseenter', () => { index = Number(el.dataset.i); paint(); });
      el.addEventListener('click', () => run(index));
    });
  }

  function filter(q) {
    const k = String(q || '').toLowerCase();
    filtered = cmds.filter((c) => (c.title + ' ' + (c.hint || '') + ' ' + c.id).toLowerCase().includes(k));
    index = 0;
    paint();
  }

  function run(i) {
    const c = filtered[i];
    if (!c) return;
    close();
    setTimeout(() => {
      try {
        const r = c.run();
        if (r && typeof r.catch === 'function') r.catch((e) => window.QAPluginHost.status('命令失败：' + e.message));
      } catch (e) { window.QAPluginHost.status('命令失败：' + e.message); }
    }, 0);
  }

  function open() {
    const el = $('#palette');
    const input = $('#palette-input');
    if (!el || !input) return;
    el.hidden = false;
    input.value = '';
    filter('');
    input.focus();
  }

  function close() { const el = $('#palette'); if (el) el.hidden = true; }

  document.addEventListener('keydown', (e) => {
    const el = $('#palette');
    const openNow = el && !el.hidden;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openNow ? close() : open(); return; }
    if (!openNow) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); index = Math.min(filtered.length - 1, index + 1); paint(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); index = Math.max(0, index - 1); paint(); }
    else if (e.key === 'Enter') { e.preventDefault(); run(index); }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const input = $('#palette-input');
    if (input) input.addEventListener('input', () => filter(input.value));
  });

  window.CommandPalette = { register, open, close, get commands() { return cmds; } };
})();
