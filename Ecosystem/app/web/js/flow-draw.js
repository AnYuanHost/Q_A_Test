/**
 * 问答流图绘制（共享库）
 * 供插件面板（flow-preview/ui.js）与工作区「问答流图」标签页共用，避免重复实现。
 */
(function () {
  'use strict';

  const COLORS = {
    Tractable: '#57c98b',
    TraUntractable: '#f2a93b',
    Pending: '#6ea8ff',
    Untractable: '#e05d4b',
  };

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {{nodes:Array,edges:Array,graphs:Array}} g  flow-preview 的 graph 结果
   */
  function draw(canvas, g, opts) {
    const highlightId = opts && opts.highlightId;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    ctx.clearRect(0, 0, W, canvas.height);

    const padY = 30, gapY = 58;
    let cursorY = padY;
    const pos = new Map();

    g.graphs.forEach((gr) => {
      gr.layers.forEach((ids, li) => {
        const y = cursorY + li * gapY;
        const n = ids.length;
        ids.forEach((id, i) => pos.set(id, { x: W / 2 + (i - (n - 1) / 2) * 150, y }));
      });
      cursorY += gr.layers.length * gapY + 18;
    });

    ctx.strokeStyle = 'rgba(242,169,59,0.35)';
    ctx.lineWidth = 1;
    for (const e of g.edges) {
      const a = pos.get(e.from), b = pos.get(e.to);
      if (!a || !b) continue;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y + 14);
      ctx.bezierCurveTo(a.x, a.y + 34, b.x, b.y - 34, b.x, b.y - 14);
      ctx.stroke();
    }

    ctx.font = '12px Consolas, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const node of g.nodes) {
      const p = pos.get(node.id);
      if (!p) continue;
      const w = 124, h = 28;
      const color = COLORS[node.state] || '#5c6670';
      const on = highlightId && node.id === highlightId;
      ctx.fillStyle = on ? 'rgba(242,169,59,0.18)' : 'rgba(16,20,26,0.95)';
      ctx.strokeStyle = on ? '#ffc76b' : color;
      ctx.lineWidth = on ? 2.5 : 1.5;
      if (on) { ctx.shadowColor = 'rgba(242,169,59,0.8)'; ctx.shadowBlur = 10; }
      else { ctx.shadowBlur = 0; }
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(p.x - w / 2, p.y - h / 2, w, h, 7);
      else ctx.rect(p.x - w / 2, p.y - h / 2, w, h);
      ctx.fill(); ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = color;
      ctx.fillText(node.label.length > 14 ? node.label.slice(0, 13) + '…' : node.label, p.x, p.y);
    }

    ctx.fillStyle = '#5c6670';
    ctx.textAlign = 'left';
    g.graphs.forEach((gr, i) => {
      const firstId = gr.layers[0] && gr.layers[0][0];
      const first = firstId ? pos.get(firstId) : null;
      if (first) ctx.fillText(`图 ${i + 1}`, 10, first.y - 18);
    });
  }

  window.FlowDraw = { draw };
})();
