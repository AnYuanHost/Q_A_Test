/**
 * 方案文档生成（前端侧）
 */
(function () {
  'use strict';

  window.QAPluginHost.registerUI('script-docgen', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row">' +
      '  <button class="ws-btn ws-btn-small ws-btn-accent" id="sdg-gen">生成文档</button>' +
      '  <button class="ws-btn ws-btn-small" id="sdg-save">存为知识条目</button>' +
      '  <button class="ws-btn ws-btn-small" id="sdg-copy">复制</button>' +
      '  <span class="ide-hint" id="sdg-stat"></span>' +
      '</div>' +
      '<pre class="plug-out" id="sdg-out" style="max-height:320px">（尚未生成）</pre>';

    let last = '';

    async function gen() {
      try {
        const pi = document.querySelector('#ws-pi') ? document.querySelector('#ws-pi').value : '';
        const r = await host.call('script-docgen', 'generate', { lan: host.editor.getText(), pi });
        last = r.markdown;
        el.querySelector('#sdg-out').textContent = r.markdown;
        el.querySelector('#sdg-stat').textContent = `${r.stats.graphs} 图 · ${r.stats.nodes} 节点 · ${r.stats.issues} 问题`;
        host.status('文档已生成');
      } catch (e) { host.status('生成失败：' + e.message); }
    }

    el.querySelector('#sdg-gen').addEventListener('click', gen);
    el.querySelector('#sdg-save').addEventListener('click', async () => {
      try {
        const pi = document.querySelector('#ws-pi') ? document.querySelector('#ws-pi').value : '';
        const r = await host.call('script-docgen', 'saveAsKnowledge', { lan: host.editor.getText(), pi });
        last = r.markdown;
        el.querySelector('#sdg-out').textContent = r.markdown;
        host.status('已存为知识条目：' + r.item.title);
      } catch (e) { host.status('保存失败：' + e.message); }
    });
    el.querySelector('#sdg-copy').addEventListener('click', async () => {
      if (!last) { host.status('先生成文档'); return; }
      try { await navigator.clipboard.writeText(last); host.status('已复制'); } catch { host.status('复制失败'); }
    });

    return { title: '方案文档', element: el };
  });
})();
