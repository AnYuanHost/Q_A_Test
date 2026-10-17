/**
 * 插件脚手架（前端侧）：填写 → 预览模板 / 创建目录
 */
(function () {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.QAPluginHost.registerUI('plugin-dev', (host) => {
    const el = document.createElement('div');
    el.className = 'plug-panel';
    el.innerHTML =
      '<div class="plug-row"><input class="plug-input" id="pd-id" placeholder="插件 id（如 my-plugin）" />' +
      '<input class="plug-input" id="pd-name" placeholder="显示名" /></div>' +
      '<div class="plug-row"><input class="plug-input" id="pd-desc" placeholder="一句话描述" /></div>' +
      '<div class="plug-row"><label class="ide-hint"><input type="checkbox" id="pd-ui" checked /> 含界面（ui.js）</label>' +
      '<button class="ws-btn ws-btn-small" id="pd-preview">预览</button>' +
      '<button class="ws-btn ws-btn-small ws-btn-accent" id="pd-create">创建</button></div>' +
      '<pre class="plug-out" id="pd-out" hidden></pre>';

    const out = el.querySelector('#pd-out');
    const read = () => ({
      id: el.querySelector('#pd-id').value.trim(),
      name: el.querySelector('#pd-name').value.trim(),
      description: el.querySelector('#pd-desc').value.trim(),
      withUi: el.querySelector('#pd-ui').checked,
    });

    el.querySelector('#pd-preview').addEventListener('click', async () => {
      try {
        const r = await host.call('plugin-dev', 'template', read());
        out.hidden = false;
        out.textContent = Object.entries(r.files).map(([k, v]) => `===== ${k} =====\n${v}`).join('\n');
        host.status('已生成模板预览');
      } catch (e) { host.status('预览失败：' + e.message); }
    });

    el.querySelector('#pd-create').addEventListener('click', async () => {
      try {
        const r = await host.call('plugin-dev', 'scaffold', read());
        out.hidden = false;
        out.textContent = '已创建：' + r.dir + '\n文件：' + r.files.join(', ') + '\n\n重启后端后可在插件中心看到。';
        host.status('已创建插件：' + r.id);
      } catch (e) { host.status('创建失败：' + e.message); }
    });

    return { title: '插件脚手架', element: el };
  });
})();
