/**
 * 问答流图预览（Node 侧）：复用共享模块 `server/lan-flow.js`。
 */
'use strict';

const flow = require('../../server/lan-flow.js');

module.exports = {
  activate() {
    return {
      commands: {
        async graph({ lan } = {}) {
          const g = flow.build(lan);
          return Object.assign(g, { nodeCount: g.nodes.length, edgeCount: g.edges.length });
        },
        async stats({ lan } = {}) {
          const g = flow.build(lan);
          const byState = {};
          g.nodes.forEach((n) => { byState[n.state] = (byState[n.state] || 0) + 1; });
          return { graphs: g.graphs.length, nodes: g.nodes.length, edges: g.edges.length, byState, problems: g.problems.length };
        },
      },
    };
  },
};
