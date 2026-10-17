/**
 * 方案推演（前端侧）：运行 / 轨迹列表 / 阻塞提示
 */
(function () {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('script-runner', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <button class="ws-btn ws-btn-small ws-btn-accent" id="sr-run">推演当前脚本</button>' +
      '  <span class="ide-hint" id="sr-stat">—</span>' +
      '</div>' +
      '<div class="plug-list" id="sr-trace"></div>' +
      '<div class="plug-out" id="sr-blocked" hidden></div>';

    async function run() {
      try {
        const r = await host.call('script-runner', 'run', { lan: host.editor.getText() });
        el.querySelector('#sr-stat').textContent = `${r.steps} 步 · 执行 ${r.executed} · 阻塞 ${r.blocked.length}`;
        el.querySelector('#sr-trace').innerHTML = r.trace.length
          ? r.trace.map((t) => `<div class="plug-item"><b>#${t.step}</b><span>L${t.layer} ${esc(t.node)} · ${esc(t.action)}${t.args ? ' · ' + esc(t.args) : ''}</span></div>`).join('')
          : '<div class="plug-item plug-empty">无可执行节点</div>';
        const b = el.querySelector('#sr-blocked');
        if (r.blocked.length) {
          b.hidden = false;
          b.textContent = '阻塞：\n' + r.blocked.map((x) => `- ${x.label}：${x.reason}`).join('\n');
        } else { b.hidden = true; }
        host.status(r.ok ? '推演完成：无阻塞' : `推演完成：${r.blocked.length} 个阻塞`);
      } catch (e) { host.status('推演失败：' + e.message); }
    }

    el.querySelector('#sr-run').addEventListener('click', run);
    host.bus.on('changed', run);
    run();
    return { title: '方案推演', element: el };
  });
})();
