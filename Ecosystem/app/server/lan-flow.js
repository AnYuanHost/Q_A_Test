/**
 * .lan → 分层问答流图（共享模块）
 *
 * 供 flow-preview（可视化）与 script-runner（模拟执行）共用，避免两份解析漂移。
 * 分层规则：
 *   - 每个 `{ }` 图块独立成图；
 *   - 图内按源码行号还原顺序：普通节点各占一层，`[]` 并行块整体占一层；
 *   - 相邻层全连接（并行组与前后全连接）。
 */
'use strict';

const engine = require('../web/js/lan-toolkit.js');

function build(lan) {
  const p = engine.parse(String(lan || ''));
  const nodes = [];
  const edges = [];
  const graphs = [];

  p.graphs.forEach((g, gi) => {
    const items = [
      ...g.nodes.map((n) => ({ type: 'node', startLine: n.startLine, list: [n] })),
      ...g.parallels.map((par) => ({ type: 'parallel', startLine: par.startLine, list: par.nodes })),
    ].sort((a, b) => a.startLine - b.startLine);

    const layers = [];
    items.forEach((it, li) => {
      const layer = it.list.map((n, ni) => {
        const id = `${gi}-${li}-${ni}`;
        nodes.push({
          id, graph: gi, layer: li, kind: it.type,
          label: n.segments[0] || '—',
          domain: n.segments[1] || '',
          range: n.segments[2] || '',
          state: n.segments[3] || '',
          line: n.startLine,
        });
        return id;
      });
      layers.push(layer);
    });

    for (let i = 0; i + 1 < layers.length; i++) {
      for (const a of layers[i]) for (const b of layers[i + 1]) edges.push({ from: a, to: b });
    }

    graphs.push({ index: gi, startLine: g.startLine, layers, parallelCount: g.parallels.length });
  });

  return { nodes, edges, graphs, consts: p.consts.length, problems: p.problems };
}

module.exports = { build };
