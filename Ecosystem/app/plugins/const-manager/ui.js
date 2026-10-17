/**
 * 常数管理插件（前端侧）—— VSCode 式面板
 * 通过 host.call 与 Node 侧插件通信；通过 host.editor 读写脚本工作台编辑器。
 */
(function () {
  'use strict';

  window.QAPluginHost.registerUI('const-manager', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <input class="plug-input" id="cm-name" placeholder="常数名，如 UIntTen" />' +
      '  <input class="plug-input plug-input-sm" id="cm-value" type="number" min="0" value="10" />' +
      '  <button class="ws-btn ws-btn-small" id="cm-define">定义</button>' +
      '</div>' +
      '<div class="plug-row">' +
      '  <button class="ws-btn ws-btn-small" id="cm-insert-decl">插入 const 声明</button>' +
      '  <button class="ws-btn ws-btn-small" id="cm-insert-nodes">插入节点序列</button>' +
      '  <button class="ws-btn ws-btn-small" id="cm-expand">展开编辑器脚本</button>' +
      '</div>' +
      '<div class="plug-list" id="cm-list"></div>' +
      '<pre class="plug-out" id="cm-out" hidden></pre>';

    async function refresh() {
      const r = await host.call('const-manager', 'list', {});
      const list = r.constants || [];
      el.querySelector('#cm-list').innerHTML = list.length
        ? list.map((c) => `<div class="plug-item"><b>${c.name}</b><span>= ${c.value} (${c.type})</span><button class="plug-x" data-del="${c.name}">×</button></div>`).join('')
        : '<div class="plug-item plug-empty">尚无常数，先定义一个</div>';
      el.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', async () => {
        await host.call('const-manager', 'remove', { name: b.dataset.del });
      }));
    }

    el.querySelector('#cm-define').addEventListener('click', async () => {
      const name = el.querySelector('#cm-name').value.trim();
      const value = Number(el.querySelector('#cm-value').value);
      if (!name) { host.status('请填写常数名'); return; }
      try { await host.call('const-manager', 'define', { name, value }); el.querySelector('#cm-name').value = ''; host.status(`已定义 ${name} = ${value}`); }
      catch (e) { host.status('定义失败：' + e.message); }
    });

    el.querySelector('#cm-insert-decl').addEventListener('click', async () => {
      const r = await host.call('const-manager', 'serialize', {});
      if (!r.count) { host.status('常数表为空'); return; }
      host.editor.insert(r.declarations + '\n');
      host.status(`已插入 ${r.count} 条 const 声明`);
    });

    el.querySelector('#cm-insert-nodes').addEventListener('click', async () => {
      const r = await host.call('const-manager', 'serialize', {});
      if (!r.count) { host.status('常数表为空'); return; }
      host.editor.insert(r.nodes + '\n');
      show(r.nodes + '\n\n# 需在 .pi 追加：\n' + r.pi.join('\n'));
      host.status(`已插入 ${r.count} 个常数的节点序列`);
    });

    el.querySelector('#cm-expand').addEventListener('click', async () => {
      const r = await host.call('const-manager', 'expand', { lan: host.editor.getText(), withLibrary: true });
      if (!r.expanded.length && !r.warnings.length) { host.status('脚本中没有 const 声明'); return; }
      host.editor.setText(r.lan);
      show((r.warnings.length ? '⚠ ' + r.warnings.join('；') + '\n\n' : '') + '展开：' + r.expanded.map((x) => `${x.name}=${x.value}(${x.nodes}节点)`).join('，') + '\n\n# .pi 追加：\n' + r.piExtra.join('\n'));
      host.status('已展开并写回编辑器');
    });

    function show(text) { const o = el.querySelector('#cm-out'); o.hidden = false; o.textContent = text; }

    host.bus.on('const-manager', (topic) => { if (topic === 'changed') refresh(); });
    refresh();
    return { title: '常数表', element: el };
  });
})();
