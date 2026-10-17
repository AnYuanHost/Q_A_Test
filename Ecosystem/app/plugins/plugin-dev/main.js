/**
 * 插件脚手架（Node 侧）：生成新插件模板，或只预览模板内容。
 *
 * 安全：
 *   - id 仅允许 [a-z0-9-]；
 *   - 目标目录已存在时拒绝覆盖；
 *   - 只写入 app/plugins/<id>/。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, '..', '..');
const PLUGINS = path.join(APP, 'plugins');

const ID_RE = /^[a-z][a-z0-9-]{1,40}$/;

function files(id, name, description, withUi) {
  const manifest = {
    id, name, version: '0.1.0',
    description: description || '待填写：这个插件解决什么问题',
    author: '生态侧',
    main: 'main.js',
    ui: withUi ? 'ui.js' : null,
    contributes: {
      commands: [{ id: 'hello', title: '示例命令' }],
      panels: withUi ? [{ id: `${id}.panel`, title: name, location: 'sidebar' }] : [],
    },
  };
  const main = `/**\n * ${name}（Node 侧）\n * 命令返回的数据会原样作为 HTTP data 返回前端。\n */\n'use strict';\n\nmodule.exports = {\n  activate(ctx) {\n    return {\n      commands: {\n        async hello({ who } = {}) {\n          ctx.emit('hello', { who: who || 'world' });\n          return { message: 'hello ' + (who || 'world'), state: ctx.state };\n        },\n      },\n    };\n  },\n};\n`;
  const ui = `/**\n * ${name}（前端侧）\n */\n(function () {\n  'use strict';\n  window.QAPluginHost.registerUI('${id}', (host) => {\n    const el = document.createElement('div');\n    el.className = 'plug-panel';\n    el.innerHTML = '<div class="plug-row"><button class="ws-btn ws-btn-small" id="${id}-go">执行示例命令</button></div><pre class="plug-out" id="${id}-out" hidden></pre>';\n    el.querySelector('#${id}-go').addEventListener('click', async () => {\n      const r = await host.call('${id}', 'hello', { who: 'Q_A' });\n      const out = el.querySelector('#${id}-out');\n      out.hidden = false; out.textContent = JSON.stringify(r, null, 2);\n      host.status(r.message);\n    });\n    return { title: '${name}', element: el };\n  });\n})();\n`;

  return {
    'plugin.json': JSON.stringify(manifest, null, 2) + '\n',
    'main.js': main,
    ...(withUi ? { 'ui.js': ui } : {}),
  };
}

module.exports = {
  activate() {
    return {
      commands: {
        async template({ id, name, description, withUi } = {}) {
          if (!ID_RE.test(String(id || ''))) { const e = new Error('插件 id 非法（小写字母开头，仅 a-z0-9-）'); e.code = 400; throw e; }
          return { id, files: files(id, name || id, description, withUi !== false) };
        },

        async scaffold({ id, name, description, withUi } = {}) {
          if (!ID_RE.test(String(id || ''))) { const e = new Error('插件 id 非法（小写字母开头，仅 a-z0-9-）'); e.code = 400; throw e; }
          const dir = path.join(PLUGINS, id);
          if (fs.existsSync(dir)) { const e = new Error('插件已存在：' + id); e.code = 409; throw e; }
          fs.mkdirSync(dir, { recursive: true });
          const f = files(id, name || id, description, withUi !== false);
          for (const [fn, content] of Object.entries(f)) fs.writeFileSync(path.join(dir, fn), content, 'utf8');
          return { ok: true, id, dir: path.relative(APP, dir).replace(/\\/g, '/'), files: Object.keys(f) };
        },

        async list() {
          let dirs = [];
          try { dirs = fs.readdirSync(PLUGINS, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith('_')).map((e) => e.name); } catch { /* ignore */ }
          return { plugins: dirs.sort() };
        },
      },
    };
  },
};
