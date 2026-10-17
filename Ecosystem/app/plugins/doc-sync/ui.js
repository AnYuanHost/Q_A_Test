/**
 * 文档同步（前端侧）
 */
(function () {
  'use strict';
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('doc-sync', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row"><button class="ws-btn ws-btn-small ws-btn-accent" id="ds-go">检查同步状态</button><span class="ide-hint" id="ds-stat"></span></div>' +
      '<div class="plug-list" id="ds-list"></div>';

    async function run() {
      try {
        const s = await host.call('doc-sync', 'status', {});
        el.querySelector('#ds-stat').textContent = `分支 ${s.branch} · 文档 ${s.docs} · 落后 ${s.behindOriginMaster == null ? '?' : s.behindOriginMaster} · 未提交 ${s.dirtyFiles}`;
        const u = await host.call('doc-sync', 'updates', { limit: 40 });
        el.querySelector('#ds-list').innerHTML = u.items.length
          ? u.items.map((x) => `<div class="plug-item"><b>${esc(x.status)}</b><span>${esc(x.file)}</span></div>`).join('')
          : '<div class="plug-item plug-empty">与 origin/master 无文档差异</div>';
        host.status(`文档 ${s.docs} 篇；差异 ${u.total} 条`);
      } catch (e) { host.status('检查失败：' + e.message); }
    }

    el.querySelector('#ds-go').addEventListener('click', run);
    run();
    return { title: '文档同步', element: el };
  });
})();
