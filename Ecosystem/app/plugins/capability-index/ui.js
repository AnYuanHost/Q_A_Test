/**
 * 能力索引（前端侧）：搜索「插件 / 技能 / 文档」，显示规模概览。
 */
(function () {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('capability-index', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row"><input class="plug-input" id="ci-q" placeholder="搜索：映射 / 插件 / 技能 / 文档…" />' +
      '<button class="ws-btn ws-btn-small" id="ci-go">搜</button></div>' +
      '<div class="ide-stat" id="ci-stat"></div>' +
      '<div class="plug-list" id="ci-list"></div>';

    const list = el.querySelector('#ci-list');
    const stat = el.querySelector('#ci-stat');

    const run = async () => {
      const q = el.querySelector('#ci-q').value.trim();
      const r = await host.call('capability-index', 'search', { q, limit: 80 });
      stat.textContent = `插件 ${r.summary.plugins} · 技能 ${r.summary.skills} · 文档项目 ${r.summary.docProjects} · 映射 ${r.summary.maps}`;
      list.innerHTML = r.results.length
        ? r.results.map((x) => `<div class="plug-item"><b>[${esc(x.type)}] ${esc(x.title)}</b><span>${esc(x.desc)}${x.where ? ' · ' + esc(x.where) : ''}</span></div>`).join('')
        : '<div class="plug-item plug-empty">无匹配</div>';
    };

    el.querySelector('#ci-go').addEventListener('click', run);
    el.querySelector('#ci-q').addEventListener('keydown', (e) => { if (e.key === 'Enter') run(); });
    run();
    return { title: '能力索引', element: el };
  });
})();
