/**
 * 方案依赖图（Node 侧）
 * 扫描 KRS 下的 .lan，统计每个方案使用的映射，以及跨方案共享的映射。
 */
'use strict';

const fs = require('fs');
const path = require('path');
const engine = require('../../web/js/lan-toolkit.js');

const ROOT = path.join(__dirname, '..', '..', '..');
const KRS = path.join(ROOT, 'Q_A_Test-master', 'KRS');

function collect() {
  const files = [];
  const walk = (d) => {
    let es = [];
    try { es = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of es) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.lan')) files.push(p);
    }
  };
  walk(KRS);

  const plans = files.map((p) => {
    let text = '';
    try { text = fs.readFileSync(p, 'utf8'); } catch { /* ignore */ }
    const parsed = engine.parse(text);
    const maps = [];
    parsed.graphs.forEach((g) => {
      g.nodes.forEach((n) => maps.push(n.segments[0]));
      g.parallels.forEach((x) => x.nodes.forEach((n) => maps.push(n.segments[0])));
    });
    return { file: path.relative(KRS, p).replace(/\\/g, '/'), maps: maps.filter(Boolean), nodes: maps.length };
  }).filter((x) => x.maps.length);

  const usage = new Map();
  for (const pl of plans) for (const m of new Set(pl.maps)) {
    if (!usage.has(m)) usage.set(m, []);
    usage.get(m).push(pl.file);
  }
  const shared = [...usage.entries()].filter(([, fs2]) => fs2.length > 1).map(([map, files2]) => ({ map, files: files2 }));
  shared.sort((a, b) => b.files.length - a.files.length);

  return { plans, shared, totals: { plans: plans.length, maps: usage.size, shared: shared.length } };
}

module.exports = {
  activate() {
    return {
      commands: {
        async graph() { return collect(); },
        async shared() { const c = collect(); return { shared: c.shared, totals: c.totals }; },
      },
    };
  },
};
