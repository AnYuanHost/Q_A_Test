/**
 * 自检运行器（前端侧）
 */
(function () {
  'use strict';

  window.QAPluginHost.registerUI('test-runner', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <button class="ws-btn ws-btn-small ws-btn-accent" id="tr-all">一键自检</button>' +
      '  <button class="ws-btn ws-btn-small" id="tr-engine">引擎单测</button>' +
      '  <span class="ide-hint" id="tr-stat">—</span>' +
      '</div>' +
      '<pre class="plug-out" id="tr-out" style="max-height:280px">（尚未运行）</pre>';

    async function run(which) {
      const out = el.querySelector('#tr-out');
      out.textContent = '运行中…';
      try {
        const r = which === 'engine'
          ? await host.call('test-runner', 'engineTests', {})
          : await host.call('test-runner', 'checkAll', {});
        const sum = r.summary ? `${r.summary.pass} PASS / ${r.summary.fail} FAIL` : (r.ok ? '完成' : '失败');
        el.querySelector('#tr-stat').textContent = sum;
        out.textContent = (r.stdout || '') + (r.stderr ? '\n[stderr]\n' + r.stderr : '');
        host.status('自检：' + sum);
      } catch (e) { out.textContent = '运行失败：' + e.message; host.status('运行失败'); }
    }

    el.querySelector('#tr-all').addEventListener('click', () => run('all'));
    el.querySelector('#tr-engine').addEventListener('click', () => run('engine'));
    return { title: '自检', element: el };
  });
})();
