/**
 * 意向性网络编辑器（工作区标签页）
 *
 * 数据模型对应内核"意向性 = 序偶<质性, 质料>"：
 *   对象 = { id, qingzhi(质性/名称), zhiliao(质料/内容), links:[目标 id] }
 *   网络 = 对象集合 + 双链
 *
 * 通过插件 `intentionality` 读写状态；可从知识域（Obsidian 双链）导入初始网络。
 * 纯前端渲染：列表 + 表单 + canvas 关系图。
 */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  let objects = [];
  let selected = null;
  let inited = false;

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  async function call(cmd, args) { return window.QAPluginHost.call('intentionality', cmd, args); }
  const status = (m) => window.QAPluginHost.status(m);

  function ensureInit() {
    if (inited) return;
    const root = $('#intent-root');
    if (!root) return;
    inited = true;

    root.innerHTML =
      '<div class="intent">' +
      '  <div class="intent-col intent-list">' +
      '    <div class="intent-toolbar">' +
      '      <button class="ws-btn ws-btn-small" id="it-new">新建</button>' +
      '      <button class="ws-btn ws-btn-small" id="it-import">导入知识域</button>' +
      '      <button class="ws-btn ws-btn-small" id="it-refresh">刷新</button>' +
      '    </div>' +
      '    <div class="ide-list" id="it-list"></div>' +
      '  </div>' +
      '  <div class="intent-col intent-form">' +
      '    <div class="intent-toolbar">' +
      '      <button class="ws-btn ws-btn-small ws-btn-accent" id="it-save">保存</button>' +
      '      <button class="ws-btn ws-btn-small" id="it-del">删除</button>' +
      '      <button class="ws-btn ws-btn-small" id="it-export">导出</button>' +
      '    </div>' +
      '    <label class="intent-field"><span>质性（名称 / 超索引）</span><input id="it-q" class="plug-input" /></label>' +
      '    <label class="intent-field"><span>质料（内容）</span><textarea id="it-z" class="intent-textarea" spellcheck="false"></textarea></label>' +
      '    <label class="intent-field"><span>指向（双链目标 id，每行一个）</span><textarea id="it-l" class="intent-textarea intent-textarea-sm" spellcheck="false"></textarea></label>' +
      '    <pre class="plug-out" id="it-out" hidden></pre>' +
      '  </div>' +
      '  <div class="intent-col intent-graph">' +
      '    <div class="intent-toolbar"><span class="ide-hint" id="it-graph-stat">关系图</span></div>' +
      '    <canvas id="it-canvas" width="520" height="420" class="plug-canvas"></canvas>' +
      '  </div>' +
      '</div>';

    root.querySelector('#it-new').addEventListener('click', () => select({ id: '', qingzhi: '', zhiliao: '', links: [] }));
    root.querySelector('#it-refresh').addEventListener('click', refresh);
    root.querySelector('#it-import').addEventListener('click', async () => {
      try { const r = await call('importObsidian', {}); status(`已导入 ${r.count} 个意向性对象`); await refresh(); }
      catch (e) { status('导入失败：' + e.message); }
    });
    root.querySelector('#it-save').addEventListener('click', async () => {
      const obj = {
        id: selected ? selected.id : undefined,
        qingzhi: root.querySelector('#it-q').value.trim(),
        zhiliao: root.querySelector('#it-z').value,
        links: root.querySelector('#it-l').value.split(/\r?\n/).map((s) => s.trim()).filter(Boolean),
      };
      if (!obj.qingzhi) { status('质性不能为空'); return; }
      try { const r = await call('upsert', { object: obj }); status('已保存：' + r.id); await refresh(); select(objects.find((o) => o.id === r.id) || null); }
      catch (e) { status('保存失败：' + e.message); }
    });
    root.querySelector('#it-del').addEventListener('click', async () => {
      if (!selected || !selected.id) { status('未选中对象'); return; }
      try { await call('remove', { id: selected.id }); status('已删除'); selected = null; await refresh(); }
      catch (e) { status('删除失败：' + e.message); }
    });
    root.querySelector('#it-export').addEventListener('click', async () => {
      try {
        const r = await call('export', {});
        const out = root.querySelector('#it-out'); out.hidden = false; out.textContent = r.json;
        await navigator.clipboard.writeText(r.json).then(() => status('已导出并复制 JSON')).catch(() => status('已导出（复制失败，可手动选中）'));
      } catch (e) { status('导出失败：' + e.message); }
    });
  }

  function select(obj) {
    selected = obj;
    const root = $('#intent-root');
    if (!root) return;
    root.querySelector('#it-q').value = obj ? obj.qingzhi || '' : '';
    root.querySelector('#it-z').value = obj ? obj.zhiliao || '' : '';
    root.querySelector('#it-l').value = obj && obj.links ? obj.links.join('\n') : '';
    renderList();
  }

  function renderList() {
    const box = $('#it-list');
    if (!box) return;
    box.innerHTML = objects.length
      ? objects.map((o) => `<div class="ide-item${selected && selected.id === o.id ? ' is-active' : ''}" data-id="${esc(o.id)}"><b>${esc(o.qingzhi)}</b><span>${o.links ? o.links.length : 0} 链</span></div>`).join('')
      : '<div class="ide-item ide-empty">尚无对象（可"导入知识域"）</div>';
    box.querySelectorAll('[data-id]').forEach((d) => d.addEventListener('click', () => {
      const o = objects.find((x) => x.id === d.dataset.id);
      if (o) select(o);
    }));
  }

  async function refresh() {
    const root = $('#intent-root');
    if (!root) return;
    if (window.DataSource && DataSource.mode !== 'live') {
      root.innerHTML = '<div class="ide-hint" style="padding:24px">意向性网络编辑器需要实时后端：运行 <code>node app\\server\\server.js</code>。</div>';
      return;
    }
    try {
      const r = await call('list', {});
      objects = r.objects || [];
      if (selected) selected = objects.find((o) => o.id === selected.id) || null;
      renderList(); select(selected);
      await drawGraph();
    } catch (e) {
      const box = $('#it-list'); if (box) box.innerHTML = `<div class="ide-item ide-empty">加载失败：${esc(e.message)}</div>`;
    }
  }

  async function drawGraph() {
    const canvas = $('#it-canvas');
    if (!canvas) return;
    const g = await call('graph', {});
    $('#it-graph-stat').textContent = `关系图 · ${g.nodeCount} 节点 / ${g.edgeCount} 边`;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, R = Math.min(W, H) / 2 - 30;
    ctx.clearRect(0, 0, W, H);
    const idx = new Map(g.nodes.map((n, i) => [n.id, i]));
    const pos = g.nodes.map((n, i) => {
      const a = (i / Math.max(1, g.nodes.length)) * Math.PI * 2;
      return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
    });
    ctx.strokeStyle = 'rgba(242,169,59,0.28)'; ctx.lineWidth = 1;
    for (const e of g.edges) {
      const a = pos[idx.get(e.from)], b = pos[idx.get(e.to)];
      if (!a || !b) continue;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    }
    ctx.fillStyle = '#f2a93b';
    for (const p of pos) { ctx.beginPath(); ctx.arc(p[0], p[1], 3, 0, Math.PI * 2); ctx.fill(); }
  }

  window.addEventListener('qa-intent-open', () => { ensureInit(); refresh(); });
  document.addEventListener('DOMContentLoaded', () => { ensureInit(); });
})();
