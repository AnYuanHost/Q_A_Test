/**
 * 深度校验（前端侧）
 */
(function () {
  'use strict';
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('lint-plus', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row"><button class="ws-btn ws-btn-small ws-btn-accent" id="lp-go">深度检查当前脚本</button><span class="ide-hint" id="lp-stat">—</span></div>' +
      '<div class="plug-list" id="lp-list"></div>';

    async function run() {
      try {
        const r = await host.call('lint-plus', 'check', { lan: host.editor.getText() });
        el.querySelector('#lp-stat').textContent = `${r.checked} 个节点 · ${r.byLevel.error} 错误 / ${r.byLevel.warn} 提示`;
        el.querySelector('#lp-list').innerHTML = r.issues.length
          ? r.issues.map((x) => `<div class="plug-item"><b>${x.level === 'error' ? '✗' : '!'} L${x.line}</b><span>${esc(x.message)}</span></div>`).join('')
          : '<div class="plug-item plug-empty">未发现问题</div>';
        host.status(r.issues.length ? `深度检查：${r.byLevel.error} 错误 / ${r.byLevel.warn} 提示` : '深度检查通过');
      } catch (e) { host.status('检查失败：' + e.message); }
    }

    el.querySelector('#lp-go').addEventListener('click', run);
    host.bus.on('changed', run);
    run();
    return { title: '深度校验', element: el };
  });
})();
