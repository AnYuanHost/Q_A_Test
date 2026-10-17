/**
 * 方案依赖图（前端侧）
 */
(function () {
  'use strict';
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('dep-graph', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row"><button class="ws-btn ws-btn-small ws-btn-accent" id="dg-go">分析依赖</button><span class="ide-hint" id="dg-stat"></span></div>' +
      '<div class="plug-list" id="dg-plans"></div>' +
      '<div class="plug-list" id="dg-shared" style="margin-top:10px"></div>';

    async function run() {
      try {
        const r = await host.call('dep-graph', 'graph', {});
        el.querySelector('#dg-stat').textContent = `方案 ${r.totals.plans} · 映射 ${r.totals.maps} · 共享 ${r.totals.shared}`;
        el.querySelector('#dg-plans').innerHTML = r.plans.length
          ? r.plans.map((p) => `<div class="plug-item"><b>${esc(p.file)}</b><span>${p.maps.length} 个映射</span></div>`).join('')
          : '<div class="plug-item plug-empty">未找到 .lan 方案</div>';
        el.querySelector('#dg-shared').innerHTML = r.shared.length
          ? '<div class="plug-item"><b>共享映射</b><span>跨方案复用</span></div>' +
            r.shared.map((s) => `<div class="plug-item"><b>${esc(s.map)}</b><span>${s.files.length} 个方案：${s.files.map(esc).join('、')}</span></div>`).join('')
          : '<div class="plug-item plug-empty">无跨方案共享映射</div>';
        host.status('依赖分析完成');
      } catch (e) { host.status('分析失败：' + e.message); }
    }

    el.querySelector('#dg-go').addEventListener('click', run);
    run();
    return { title: '方案依赖', element: el };
  });
})();
