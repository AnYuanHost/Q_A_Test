/**
 * 映射库检索插件：从内核文档 `Doc/MD` 中抽取 `Map X(...)` 定义行，
 * 建立"映射名 → 定义域/值域/文档"索引。供脚本编辑器"选映射→生成节点"。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const DOC = path.join(ROOT, 'Q_A_Test-master', 'Doc', 'MD');

let _index = null;

function collect() {
  const out = [];
  const walk = (dir) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!e.name.endsWith('.md')) continue;
      let text = '';
      try { text = fs.readFileSync(p, 'utf8'); } catch { continue; }
      const re = /^\s*Map\s+([A-Za-z_]\w*)\s*\(\s*&?\s*([A-Za-z_]\w*)\s*,\s*&?\s*([A-Za-z_]\w*)/gm;
      let m;
      while ((m = re.exec(text))) {
        out.push({ name: m[1], domain: m[2], range: m[3], file: path.relative(DOC, p).replace(/\\/g, '/') });
      }
    }
  };
  walk(DOC);
  // 去重（同名取首个）
  const seen = new Set();
  return out.filter((x) => (seen.has(x.name) ? false : (seen.add(x.name), true)));
}

function index() { if (!_index) _index = collect(); return _index; }

module.exports = {
  activate() {
    return {
      commands: {
        async search({ q, limit } = {}) {
          const k = String(q || '').trim().toLowerCase();
          const all = index();
          const hits = k ? all.filter((x) => x.name.toLowerCase().includes(k) || x.domain.toLowerCase().includes(k) || x.range.toLowerCase().includes(k)) : all;
          return { results: hits.slice(0, Number(limit) || 100), total: all.length };
        },
        async node({ name } = {}) {
          const hit = index().find((x) => x.name === name);
          if (!hit) { const e = new Error('映射不存在：' + name); e.code = 404; throw e; }
          const lan = `    ${hit.name}\n    EmptyElement\n    ${hit.name}_Out\n    TraUntractable\n`;
          return { name: hit.name, domain: hit.domain, range: hit.range, lan, note: '请按映射文档把 EmptyElement / *_Out 替换为真实参数（多参数用 ( A B )）' };
        },
        async stats() {
          const all = index();
          const domains = new Map();
          all.forEach((x) => domains.set(x.domain, (domains.get(x.domain) || 0) + 1));
          return { total: all.length, topDomains: [...domains.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, v]) => ({ domain: k, count: v })) };
        },
      },
    };
  },
};
