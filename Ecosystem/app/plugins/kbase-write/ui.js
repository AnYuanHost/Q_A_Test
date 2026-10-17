/**
 * 知识条目（前端侧）：标题/标签/正文编辑 + 列表 + 加载/删除/导出
 */
(function () {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('kbase-write', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <input class="plug-input" id="kw-title" placeholder="条目标题" />' +
      '  <input class="plug-input" id="kw-tags" placeholder="标签（逗号分隔）" />' +
      '</div>' +
      '<textarea class="intent-textarea" id="kw-content" placeholder="正文（Markdown）"></textarea>' +
      '<div class="plug-row" style="margin-top:8px">' +
      '  <button class="ws-btn ws-btn-small ws-btn-accent" id="kw-save">保存</button>' +
      '  <button class="ws-btn ws-btn-small" id="kw-clear">清空</button>' +
      '  <button class="ws-btn ws-btn-small" id="kw-refresh">刷新</button>' +
      '  <span class="ide-hint" id="kw-stat"></span>' +
      '</div>' +
      '<div class="plug-list" id="kw-list"></div>' +
      '<pre class="plug-out" id="kw-out" hidden></pre>';

    let currentId = null;

    async function refresh() {
      const r = await host.call('kbase-write', 'list', {});
      el.querySelector('#kw-stat').textContent = r.items.length + ' 条';
      el.querySelector('#kw-list').innerHTML = r.items.length
        ? r.items.map((it) => `<div class="plug-item" data-id="${it.id}"><b>${esc(it.title)}</b><span>${(it.tags || []).join('、')} · ${it.size} B</span><button class="plug-x" data-del="${it.id}">×</button></div>`).join('')
        : '<div class="plug-item plug-empty">尚无条目</div>';
      el.querySelectorAll('[data-id]').forEach((d) => d.addEventListener('click', (ev) => {
        if (ev.target.dataset.del) return;
        load(d.dataset.id);
      }));
      el.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', async (ev) => {
        ev.stopPropagation();
        await host.call('kbase-write', 'remove', { id: b.dataset.del });
        host.status('已删除'); currentId = null; refresh();
      }));
    }

    async function load(id) {
      const r = await host.call('kbase-write', 'get', { id });
      const m = /^#\s*(.+)$/m.exec(r.content);
      const tags = /标签：(.+)/.exec(r.content);
      el.querySelector('#kw-title').value = m ? m[1].trim() : r.item.title;
      el.querySelector('#kw-tags').value = tags ? tags[1].trim() : (r.item.tags || []).join(',');
      el.querySelector('#kw-content').value = r.content.replace(/^#\s*.+\n/, '').replace(/标签：.+\n/, '').trim();
      currentId = id;
      const out = el.querySelector('#kw-out'); out.hidden = false; out.textContent = r.content;
      host.status('已加载：' + r.item.title);
    }

    el.querySelector('#kw-save').addEventListener('click', async () => {
      const title = el.querySelector('#kw-title').value.trim();
      const content = el.querySelector('#kw-content').value;
      const tags = el.querySelector('#kw-tags').value.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
      if (!title) { host.status('请填写标题'); return; }
      try {
        const r = await host.call('kbase-write', 'save', { id: currentId || undefined, title, content, tags });
        currentId = r.item.id; host.status('已保存：' + r.item.title); refresh();
      } catch (e) { host.status('保存失败：' + e.message); }
    });
    el.querySelector('#kw-clear').addEventListener('click', () => {
      currentId = null;
      el.querySelector('#kw-title').value = '';
      el.querySelector('#kw-tags').value = '';
      el.querySelector('#kw-content').value = '';
      el.querySelector('#kw-out').hidden = true;
    });
    el.querySelector('#kw-refresh').addEventListener('click', refresh);

    host.bus.on('changed', refresh);
    refresh();
    return { title: '知识条目', element: el };
  });
})();
