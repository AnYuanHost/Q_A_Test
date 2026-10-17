/**
 * 参数表助手：从 .lan 收集参数名，与 .pi 比对。
 * 复用官方引擎 parse（UMD），避免与前端/控制台口径漂移。
 */
'use strict';

const engine = require('../../web/js/lan-toolkit.js');

function usedParams(lan) {
  const p = engine.parse(String(lan || ''));
  const set = new Set();
  const nodes = [];
  p.graphs.forEach((g) => { nodes.push(...g.nodes); g.parallels.forEach((x) => nodes.push(...x.nodes)); });
  for (const n of nodes) {
    if (n.segments.length < 3) continue;
    for (const seg of [n.segments[1], n.segments[2]]) {
      for (const tok of seg.replace(/[()]/g, ' ').trim().split(/\s+/).filter(Boolean)) set.add(tok);
    }
  }
  set.delete('EmptyElement');
  return set;
}

function declaredParams(pi) {
  const map = new Map();
  String(pi || '').split(/\r?\n/).forEach((l) => {
    const t = l.trim();
    if (!t || t.startsWith('//')) return;
    const name = t.split(/\s+/)[0];
    if (name && name !== 'EmptyElement') map.set(name, t);
  });
  return map;
}

const lineFor = (p) => `${p} String ${p} Unlimited Login`;

module.exports = {
  activate() {
    return {
      commands: {
        async check({ lan, pi } = {}) {
          const used = usedParams(lan);
          const declared = declaredParams(pi);
          const missing = [...used].filter((p) => !declared.has(p)).sort();
          const unused = [...declared.keys()].filter((p) => !used.has(p)).sort();
          return { used: used.size, declared: declared.size, missing, unused, ok: missing.length === 0 };
        },

        async fill({ lan, pi } = {}) {
          const used = usedParams(lan);
          const declared = declaredParams(pi);
          const missing = [...used].filter((p) => !declared.has(p)).sort();
          if (!missing.length) return { pi: String(pi || ''), added: [] };
          const base = String(pi || '').replace(/\s+$/, '');
          const next = (base ? base + '\n' : '') + missing.map(lineFor).join('\n') + '\n';
          return { pi: next, added: missing };
        },

        async prune({ lan, pi } = {}) {
          const used = usedParams(lan);
          const lines = String(pi || '').split(/\r?\n/);
          const kept = [];
          const removed = [];
          for (const l of lines) {
            const t = l.trim();
            if (!t || t.startsWith('//')) { kept.push(l); continue; }
            const name = t.split(/\s+/)[0];
            if (name === 'EmptyElement' || used.has(name)) kept.push(l);
            else removed.push(name);
          }
          return { pi: kept.join('\n'), removed };
        },
      },
    };
  },
};
