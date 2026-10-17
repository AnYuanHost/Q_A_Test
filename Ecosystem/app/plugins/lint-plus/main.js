/**
 * 深度校验（Node 侧）：结构校验之外，结合文档索引核对语义。
 *   - 映射是否存在于文档索引
 *   - 定义域参数个数是否与映射定义一致
 *   - 值域参数个数是否合理（不一致给提示而非错误）
 */
'use strict';

const engine = require('../../web/js/lan-toolkit.js');
const docIndex = require('../../server/doc-index.js');

function params(seg) {
  const s = String(seg || '').trim();
  if (!s || s === 'EmptyElement') return [];
  if (s.startsWith('(')) return s.replace(/[()]/g, ' ').trim().split(/\s+/).filter(Boolean);
  return [s];
}

module.exports = {
  activate() {
    return {
      commands: {
        async check({ lan } = {}) {
          const p = engine.parse(String(lan || ''));
          const issues = [];
          const nodes = [];
          p.graphs.forEach((g) => { nodes.push(...g.nodes); g.parallels.forEach((x) => nodes.push(...x.nodes)); });

          let checked = 0;
          for (const n of nodes) {
            if (n.segments.length < 4) continue;
            const name = n.segments[0];
            const m = docIndex.find(name);
            if (!m) {
              issues.push({ level: 'warn', line: n.startLine, message: `映射 ${name} 未在文档索引中找到（拼写错误或文档缺失）` });
              continue;
            }
            checked++;
            const ins = params(n.segments[1]);
            const outs = params(n.segments[2]);
            if (ins.length !== m.inArity) {
              issues.push({ level: 'error', line: n.startLine + 1, message: `${name} 定义域应为 ${m.inArity} 个参数（${m.domain}），当前 ${ins.length} 个` });
            }
            if (outs.length !== m.outArity) {
              issues.push({ level: 'warn', line: n.startLine + 2, message: `${name} 值域通常为 ${m.outArity} 个参数（${m.range}），当前 ${outs.length} 个` });
            }
            if (m.piDomain && dup(ins)) {
              issues.push({ level: 'warn', line: n.startLine + 1, message: `${name} 定义域存在重复参数，可能导致映射自覆盖` });
            }
          }

          return { checked, issues, byLevel: { error: issues.filter((x) => x.level === 'error').length, warn: issues.filter((x) => x.level === 'warn').length } };
        },
      },
    };
  },
};

function dup(arr) { return new Set(arr).size !== arr.length; }
