/**
 * 文档检索插件：索引 `Q_A_Test-master/Doc/MD` 下全部 md 的标题与正文。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const DOC = path.join(ROOT, 'Q_A_Test-master', 'Doc', 'MD');

let _docs = null;

function collect() {
  const out = [];
  const walk = (dir, rel) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) { walk(p, r); continue; }
      if (!e.name.endsWith('.md')) continue;
      let text = '';
      try { text = fs.readFileSync(p, 'utf8'); } catch { continue; }
      const title = (text.split(/\r?\n/).find((l) => l.trim().startsWith('#')) || '').replace(/^#+\s*/, '').trim() || path.basename(e.name, '.md');
      out.push({ title, file: r, text });
    }
  };
  walk(DOC, '');
  return out;
}
function docs() { if (!_docs) _docs = collect(); return _docs; }

module.exports = {
  activate() {
    return {
      commands: {
        async search({ q, limit } = {}) {
          const k = String(q || '').trim().toLowerCase();
          if (!k) return { results: [], total: docs().length };
          const hits = [];
          for (const d of docs()) {
            const idx = d.text.toLowerCase().indexOf(k);
            if (d.title.toLowerCase().includes(k) || idx >= 0) {
              hits.push({ title: d.title, file: d.file, snippet: idx >= 0 ? d.text.slice(Math.max(0, idx - 30), idx + 70).replace(/\s+/g, ' ') : '' });
              if (hits.length >= (Number(limit) || 40)) break;
            }
          }
          return { results: hits, total: docs().length };
        },
        async stats() { return { docs: docs().length, root: path.relative(ROOT, DOC).replace(/\\/g, '/') }; },
      },
    };
  },
};
