/**
 * 方案推演（Node 侧）：按问答流图分层"模拟执行"，不接触内核。
 *
 * 语义（对照 solution-script-writing）：
 *   - Tractable / TraUntractable：前置完成后可执行；
 *   - Pending：前置完成后仍需等待外部条件；
 *   - Untractable：前置完成后只进入 Pending，不能直接执行。
 * 推演按层推进；若某层存在 Pending/Untractable，则后续层视为"受阻"，给出阻塞原因。
 */
'use strict';

const flow = require('../../server/lan-flow.js');

const RUNNABLE = new Set(['Tractable', 'TraUntractable']);
const BLOCKING = new Set(['Pending', 'Untractable']);

function run(lan, maxSteps) {
  const g = flow.build(lan);
  const limit = Number(maxSteps) || 200;
  const trace = [];
  let step = 0;
  let executed = 0;
  const blocked = [];

  for (const gr of g.graphs) {
    let stalled = false;
    for (let li = 0; li < gr.layers.length; li++) {
      if (stalled) {
        for (const id of gr.layers[li]) {
          const n = g.nodes.find((x) => x.id === id);
          blocked.push({ id, label: n ? n.label : id, reason: '前置层存在未决状态（Pending/Untractable）' });
        }
        continue;
      }
      for (const id of gr.layers[li]) {
        if (step >= limit) { blocked.push({ id, label: id, reason: '超过 maxSteps 上限' }); continue; }
        const n = g.nodes.find((x) => x.id === id);
        if (!n) continue;
        step++;
        if (RUNNABLE.has(n.state)) {
          executed++;
          trace.push({ step, nodeId: id, graph: gr.index + 1, layer: li + 1, node: n.label, mapping: n.label, state: n.state, action: '执行映射', args: `${n.domain} → ${n.range}`, domain: n.domain, range: n.range, line: n.line });
        } else if (BLOCKING.has(n.state)) {
          stalled = true;
          blocked.push({ id, label: n.label, reason: `节点状态 ${n.state}：需等待外部条件或知识库决策` });
          trace.push({ step, nodeId: id, graph: gr.index + 1, layer: li + 1, node: n.label, state: n.state, action: '挂起（不执行）', domain: n.domain, range: n.range, line: n.line });
        } else {
          blocked.push({ id, label: n.label, reason: `非法/未初始化状态 "${n.state}"` });
        }
      }
    }
  }

  return {
    trace, executed, blocked,
    steps: step,
    graphs: g.graphs.length,
    nodes: g.nodes.length,
    problems: g.problems,
    ok: blocked.length === 0,
  };
}

module.exports = {
  activate() {
    return {
      commands: {
        async run({ lan, maxSteps } = {}) { return run(lan, maxSteps); },
        async plan({ lan } = {}) {
          const g = flow.build(lan);
          return {
            graphs: g.graphs.length,
            layers: g.graphs.map((x) => x.layers.length),
            nodes: g.nodes.map((n) => ({ line: n.line, label: n.label, state: n.state, layer: n.layer, graph: n.graph + 1 })),
            problems: g.problems,
          };
        },
      },
    };
  },
};
