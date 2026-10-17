/**
 * 脚本大纲插件：解析 .lan → 节点列表（供工作区侧边栏导航）。
 * 复用官方脚本引擎的 parse（UMD）。
 */
'use strict';

const engine = require('../../web/js/lan-toolkit.js');

function flatten(parsed) {
  const nodes = [];
  parsed.graphs.forEach((g, gi) => {
    const push = (n, kind) => nodes.push({
      graph: gi + 1, kind,
      line: n.startLine,
      name: n.segments[0] || '',
      domain: n.segments[1] || '',
      range: n.segments[2] || '',
      state: n.segments[3] || '',
    });
    g.nodes.forEach((n) => push(n, 'serial'));
    g.parallels.forEach((p, pi) => p.nodes.forEach((n) => push(n, `parallel#${pi + 1}`)));
  });
  return nodes;
}

module.exports = {
  activate() {
    return {
      commands: {
        async outline({ lan } = {}) {
          const p = engine.parse(String(lan || ''));
          const nodes = flatten(p);
          return {
            nodes,
            graphs: p.graphs.length,
            consts: p.consts.length,
            problems: p.problems,
          };
        },
        async stats({ lan } = {}) {
          const p = engine.parse(String(lan || ''));
          const nodes = flatten(p);
          const byState = {};
          nodes.forEach((n) => { byState[n.state] = (byState[n.state] || 0) + 1; });
          return { graphs: p.graphs.length, nodes: nodes.length, parallels: p.graphs.reduce((s, g) => s + g.parallels.length, 0), consts: p.consts.length, byState };
        },
      },
    };
  },
};
