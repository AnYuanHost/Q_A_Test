/**
 * 方案版本对比（前端侧）：保存快照 / 列表 / 与当前对比（行级着色）
 */
(function () {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('script-diff', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <input class="plug-input" id="sd-name" placeholder="快照名称（可空）" />' +
      '  <button class="ws-btn ws-btn-small" id="sd-save">保存当前</button>' +
      '</div>' +
      '<div class="plug-row">' +
      '  <span class="ide-hint" id="sd-count"></span>' +
      '  <button class="ws-btn ws-btn-small" id="sd-refresh">刷新</button>' +
      '</div>' +
      '<div class="plug-list" id="sd-list"></div>' +
      '<pre class="plug-out" id="sd-diff" hidden></pre>';

    async function refresh() {
      const r = await host.call('script-diff', 'list', {});
      el.querySelector('#sd-count').textContent = r.snapshots.length + ' 个快照';
      el.querySelector('#sd-list').innerHTML = r.snapshots.length
        ? r.snapshots.map((s) => `<div class="plug-item" data-id="${s.id}"><b>${esc(s.name)}</b><span>${s.lanLines} 行 · ${new Date(s.at).toLocaleString('zh-CN', { hour12: false })}</span></div>`).join('')
        : '<div class="plug-item plug-empty">尚无快照</div>';
      el.querySelectorAll('[data-id]').forEach((d) => d.addEventListener('click', () => showDiff(d.dataset.id)));
    }

    async function showDiff(id) {
      try {
        const r = await host.call('script-diff', 'diff', { id, lan: host.editor.getText(), pi: document.querySelector('#ws-pi') ? document.querySelector('#ws-pi').value : '' });
        const box = el.querySelector('#sd-diff'); box.hidden = false;
        box.textContent = '';
        const head = document.createElement('div');
        head.className = 'sd-stat';
        head.textContent = `对比「${r.name}」：.lan +${r.lan.stat.add}/-${r.lan.stat.del}；.pi +${r.pi.stat.add}/-${r.pi.stat.del}`;
        box.appendChild(head);
        const pre = document.createElement('div');
        pre.className = 'sd-lines';
        pre.innerHTML = r.lan.ops.map((o) =>
          `<div class="sd-line sd-${o.type}"><span class="sd-sign">${o.type === 'add' ? '+' : o.type === 'del' ? '−' : ' '}</span>${esc(o.text) || ' '}</div>`
        ).join('');
        box.appendChild(pre);
        host.status('已对比：' + r.name);
      } catch (e) { host.status('对比失败：' + e.message); }
    }

    el.querySelector('#sd-save').addEventListener('click', async () => {
      const name = el.querySelector('#sd-name').value.trim();
      const pi = document.querySelector('#ws-pi') ? document.querySelector('#ws-pi').value : '';
      try { const r = await host.call('script-diff', 'save', { name, lan: host.editor.getText(), pi }); host.status('已保存：' + r.name); el.querySelector('#sd-name').value = ''; await refresh(); }
      catch (e) { host.status('保存失败：' + e.message); }
    });
    el.querySelector('#sd-refresh').addEventListener('click', refresh);

    host.bus.on('changed', refresh);
    refresh();
    return { title: '版本', element: el };
  });
})();
