/**
 * 知识条目插件（Node 侧）
 *
 * 安全边界：只写生态侧目录 `app/data/knowledge/`，**不直接改写内核的 KRS/Obsidian 数据**；
 * 需要进入内核知识库时，由 `export` 输出 Markdown，人工/内核侧再导入。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, '..', '..');
const DIR = path.join(APP, 'data', 'knowledge');
const INDEX = path.join(DIR, 'index.json');

const slug = (s) => String(s || 'entry').replace(/[^\w\u4e00-\u9fa5-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'entry';

function loadIndex() {
  try { return JSON.parse(fs.readFileSync(INDEX, 'utf8')); } catch { return { items: [] }; }
}
function saveIndex(idx) {
  fs.mkdirSync(DIR, { recursive: true });
  fs.writeFileSync(INDEX, JSON.stringify(idx, null, 2), 'utf8');
}
function toMarkdown({ title, content, tags }) {
  const tagLine = (tags || []).length ? `\n标签：${(tags || []).join('、')}\n` : '';
  return `# ${title}\n${tagLine}\n${String(content || '').trim()}\n`;
}

module.exports = {
  activate(ctx) {
    return {
      commands: {
        async save({ id, title, content, tags } = {}) {
          if (!title) { const e = new Error('标题不能为空'); e.code = 400; throw e; }
          const idx = loadIndex();
          const eid = id || slug(title) + '-' + Date.now().toString(36);
          const file = eid + '.md';
          fs.mkdirSync(DIR, { recursive: true });
          fs.writeFileSync(path.join(DIR, file), toMarkdown({ title, content, tags }), 'utf8');
          const item = { id: eid, title, file, tags: tags || [], size: Buffer.byteLength(content || '', 'utf8'), at: new Date().toISOString() };
          idx.items = idx.items.filter((x) => x.id !== eid).concat(item);
          saveIndex(idx);
          ctx.emit('changed', { count: idx.items.length });
          return { ok: true, item };
        },

        async list() { return { items: loadIndex().items.slice().sort((a, b) => (b.at || '').localeCompare(a.at || '')) }; },

        async get({ id } = {}) {
          const idx = loadIndex();
          const it = idx.items.find((x) => x.id === id);
          if (!it) { const e = new Error('条目不存在'); e.code = 404; throw e; }
          let content = '';
          try { content = fs.readFileSync(path.join(DIR, it.file), 'utf8'); } catch { /* ignore */ }
          return { item: it, content };
        },

        async remove({ id } = {}) {
          const idx = loadIndex();
          const it = idx.items.find((x) => x.id === id);
          if (it) { try { fs.unlinkSync(path.join(DIR, it.file)); } catch { /* ignore */ } }
          idx.items = idx.items.filter((x) => x.id !== id);
          saveIndex(idx);
          ctx.emit('changed', { count: idx.items.length });
          return { ok: true };
        },

        /** 导出为可导入内核知识库的 Markdown 文本 */
        async export({ id } = {}) {
          const idx = loadIndex();
          const it = idx.items.find((x) => x.id === id);
          if (!it) { const e = new Error('条目不存在'); e.code = 404; throw e; }
          let content = '';
          try { content = fs.readFileSync(path.join(DIR, it.file), 'utf8'); } catch { /* ignore */ }
          return { id: it.id, file: it.file, content, note: '可将该 Markdown 放入 KRS/Data/Obsidian/Q_A 供知识域使用（需人工确认）' };
        },

        async stats() {
          const idx = loadIndex();
          return { count: idx.items.length, dir: path.relative(APP, DIR).replace(/\\/g, '/') };
        },
      },
    };
  },
};
