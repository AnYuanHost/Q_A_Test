/**
 * 问答流图预览（前端侧）——使用共享绘制库 window.FlowDraw
 */
(function () {
  'use strict';

  window.QAPluginHost.registerUI('flow-preview', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <button class="ws-btn ws-btn-small" id="fp-refresh">解析当前脚本</button>' +
      '  <span class="ide-hint" id="fp-stat">—</span>' +
      '</div>' +
      '<canvas id="fp-canvas" width="760" height="420" class="plug-canvas"></canvas>';

    async function refresh() {
      try {
        const lan = host.editor.getText();
        const g = await host.call('flow-preview', 'graph', { lan });
        const canvas = el.querySelector('#fp-canvas');
        canvas.height = Math.max(300, 60 + g.graphs.reduce((s, x) => s + x.layers.length * 58, 0));
        window.FlowDraw.draw(canvas, g);
        el.querySelector('#fp-stat').textContent = `${g.graphs.length} 图 · ${g.nodeCount} 节点 · ${g.edgeCount} 边`;
      } catch (e) { host.status('解析失败：' + e.message); }
    }

    el.querySelector('#fp-refresh').addEventListener('click', refresh);
    host.bus.on('changed', refresh);
    refresh();
    return { title: '问答流图', element: el };
  });
})();
