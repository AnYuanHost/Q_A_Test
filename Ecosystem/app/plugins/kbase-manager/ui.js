/**
 * 知识库管理插件（前端侧）—— 搜索 + 反向链接 + 双链关系图（canvas 轻量绘制）
 */
(function () {
  'use strict';

  window.QAPluginHost.registerUI('kbase-manager', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <input class="plug-input" id="kb-q" placeholder="搜索知识域（标题或正文）…" />' +
      '  <button class="ws-btn ws-btn-small" id="kb-go">搜索</button>' +
      '  <button class="ws-btn ws-btn-small" id="kb-graph">关系图</button>' +
      '</div>' +
      '<div class="plug-stat" id="kb-stat"></div>' +
      '<div class="plug-list" id="kb-list"></div>' +
      '<canvas id="kb-canvas" width="640" height="320" class="plug-canvas" hidden></canvas>';

    const listEl = el.querySelector('#kb-list');
    const statEl = el.querySelector('#kb-stat');
    const canvas = el.querySelector('#kb-canvas');

    async function stats() {
      const s = await host.call('kbase-manager', 'stats', {});
      statEl.textContent = `知识单元 ${s.units} · 知识域 ${s.notes} · 双链 ${s.links} · 占位 ${s.placeholders}`;
    }

    el.querySelector('#kb-go').addEventListener('click', async () => {
      canvas.hidden = true;
      const q = el.querySelector('#kb-q').value.trim();
      const r = await host.call('kbase-manager', 'search', { q });
      listEl.innerHTML = r.results.length
        ? r.results.map((x) => `<div class="plug-item" data-file="${x.file}"><b>${x.title}</b><span>${x.snippet || x.file}</span></div>`).join('')
        : '<div class="plug-item plug-empty">无匹配</div>';
      listEl.querySelectorAll('[data-file]').forEach((d) => d.addEventListener('click', () => showLinks(d.dataset.file)));
      host.status(`搜索到 ${r.results.length} 条`);
    });

    async function showLinks(file) {
      const r = await host.call('kbase-manager', 'backlinks', { file });
      listEl.innerHTML =
        `<div class="plug-item"><b>反向链接</b><span>${r.backlinks.length}</span></div>` +
        r.backlinks.map((x) => `<div class="plug-item"><b>${x.title}</b><span>← ${x.file}</span></div>`).join('') +
        `<div class="plug-item"><b>出链</b><span>${r.outlinks.length}</span></div>` +
        r.outlinks.map((x) => `<div class="plug-item"><b>${x.title}</b><span>→ ${x.file}</span></div>`).join('');
    }

    el.querySelector('#kb-graph').addEventListener('click', async () => {
      const g = await host.call('kbase-manager', 'graph', {});
      drawGraph(g); canvas.hidden = false;
      host.status(`关系图：${g.nodeCount} 节点 / ${g.edgeCount} 边`);
    });

    function drawGraph(g) {
      const ctx2d = canvas.getContext('2d');
      const W = canvas.width, H = canvas.height, R = Math.min(W, H) / 2 - 24, cx = W / 2, cy = H / 2;
      ctx2d.clearRect(0, 0, W, H);
      const idx = new Map(g.nodes.map((n, i) => [n.id, i]));
      const pos = g.nodes.map((n, i) => {
        const a = (i / Math.max(1, g.nodes.length)) * Math.PI * 2;
        return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
      });
      ctx2d.strokeStyle = 'rgba(242,169,59,0.35)'; ctx2d.lineWidth = 1;
      for (const e of g.edges) {
        const a = pos[idx.get(e.from)], b = pos[idx.get(e.to)];
        if (!a || !b) continue;
        ctx2d.beginPath(); ctx2d.moveTo(a[0], a[1]); ctx2d.lineTo(b[0], b[1]); ctx2d.stroke();
      }
      ctx2d.fillStyle = '#f2a93b';
      for (const p of pos) { ctx2d.beginPath(); ctx2d.arc(p[0], p[1], 3, 0, Math.PI * 2); ctx2d.fill(); }
    }

    host.bus.on('kbase-manager', () => stats());
    stats();
    return { title: '知识库检索', element: el };
  });
})();
