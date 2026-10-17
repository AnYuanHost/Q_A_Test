/**
 * 知识库管理插件（Node 侧）
 *
 * 面向两类知识源：
 *   - `KRS\*.txt`            超索引落盘的知识单元（二进制序列化对象）
 *   - `KRS\Data\Obsidian\Q_A` 中文双链知识域（质性/质料）
 *
 * 提供：统计 / 全文搜索 / 反向链接 / 双链关系图。为后续"知识库 CRUD 与内核写入"预留接口。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, '..', '..');
const ROOT = path.join(APP, '..');
const KRS = path.join(ROOT, 'Q_A_Test-master', 'KRS');
const OBS = path.join(KRS, 'Data', 'Obsidian', 'Q_A');

let _notes = null;      // { title, file, text, links[] }
let _links = null;      // { from, to }[]

function collectNotes() {
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
      try { text = fs.readFileSync(p, 'utf8'); } catch { /* ignore */ }
      const title = (text.split(/\r?\n/).find((l) => l.trim().startsWith('#')) || '').replace(/^#+\s*/, '').trim() || path.basename(e.name, '.md');
      const links = [...text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((m) => m[1].trim());
      out.push({ title, file: r, text, links, size: Buffer.byteLength(text, 'utf8') });
    }
  };
  walk(OBS, '');
  out.sort((a, b) => a.file.localeCompare(b.file, 'zh'));
  return out;
}

function ensure() {
  if (_notes) return;
  _notes = collectNotes();
  _links = [];
  const byTitle = new Map(_notes.map((n) => [n.title, n.file]));
  for (const n of _notes) for (const t of n.links) if (byTitle.has(t)) _links.push({ from: n.file, to: byTitle.get(t) });
}

function krsUnits() {
  const out = [];
  const walk = (dir) => {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!e.name.endsWith('.txt')) continue;
      const id = Number(path.basename(e.name, '.txt'));
      if (!Number.isFinite(id)) continue;
      let size = 0; try { size = fs.statSync(p).size; } catch { /* ignore */ }
      out.push({ superIndex: id, file: path.relative(KRS, p).replace(/\\/g, '/'), size });
    }
  };
  walk(KRS);
  return out.sort((a, b) => a.superIndex - b.superIndex);
}

module.exports = {
  activate(ctx) {
    return {
      commands: {
        async stats() {
          ensure();
          const units = krsUnits();
          return {
            units: units.length,
            notes: _notes.length,
            links: _links.length,
            placeholders: _notes.filter((n) => n.size === 0).length,
            krsPath: path.relative(ROOT, KRS).replace(/\\/g, '/'),
          };
        },

        async refresh() { _notes = null; _links = null; ensure(); return { ok: true, notes: _notes.length }; },

        async search({ q, limit } = {}) {
          ensure();
          const k = String(q || '').trim().toLowerCase();
          if (!k) return { results: [] };
          const hits = [];
          for (const n of _notes) {
            const idx = n.text.toLowerCase().indexOf(k);
            if (n.title.toLowerCase().includes(k) || idx >= 0) {
              const snippet = idx >= 0 ? n.text.slice(Math.max(0, idx - 30), idx + 60).replace(/\s+/g, ' ') : '';
              hits.push({ title: n.title, file: n.file, size: n.size, snippet });
              if (hits.length >= (Number(limit) || 50)) break;
            }
          }
          return { results: hits };
        },

        async backlinks({ file } = {}) {
          ensure();
          const target = String(file || '');
          const src = _links.filter((l) => l.to === target).map((l) => {
            const n = _notes.find((x) => x.file === l.from);
            return { file: l.from, title: n ? n.title : l.from };
          });
          const out = _links.filter((l) => l.from === target).map((l) => {
            const n = _notes.find((x) => x.file === l.to);
            return { file: l.to, title: n ? n.title : l.to };
          });
          return { backlinks: src, outlinks: out };
        },

        async graph() {
          ensure();
          const nodes = _notes.map((n) => ({ id: n.file, title: n.title, size: n.size }));
          return { nodes, edges: _links, nodeCount: nodes.length, edgeCount: _links.length };
        },
      },
    };
  },
};
