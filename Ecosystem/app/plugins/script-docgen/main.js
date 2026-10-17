/**
 * 方案文档生成（Node 侧）
 * 依据 md-documentation-standard 的版式：标题 → 定义 → 表格 → 案例/风险。
 */
'use strict';

const engine = require('../../web/js/lan-toolkit.js');
const flow = require('../../server/lan-flow.js');

function generate({ lan, pi, title } = {}) {
  const src = String(lan || '');
  const p = engine.parse(src);
  const g = flow.build(src);
  const issues = engine.validate(src, String(pi || ''));

  const nodes = [];
  p.graphs.forEach((gr, gi) => {
    gr.nodes.forEach((n) => nodes.push({ graph: gi + 1, kind: '串行', line: n.startLine, seg: n.segments }));
    gr.parallels.forEach((par, pi2) => par.nodes.forEach((n) => nodes.push({ graph: gi + 1, kind: `并行#${pi2 + 1}`, line: n.startLine, seg: n.segments })));
  });

  const md =
`# ${title || '解决方案脚本说明'}

***

由 \`script-docgen\` 自动生成。图块 ${p.graphs.length} 个，节点 ${nodes.length} 个，常数 ${p.consts.length} 个。

***

## 1. 图块

| 图块 | 起始行 | 节点数 | 并行块 |
|---|---|---|---|
${p.graphs.map((gr, i) => `| ${i + 1} | ${gr.startLine} | ${gr.nodes.length + gr.parallels.reduce((s, x) => s + x.nodes.length, 0)} | ${gr.parallels.length} |`).join('\n')}

## 2. 节点

| 图块 | 类型 | 行 | 映射 | 定义域 | 值域 | 状态 |
|---|---|---|---|---|---|---|
${nodes.map((n) => `| ${n.graph} | ${n.kind} | ${n.line} | ${n.seg[0] || ''} | ${n.seg[1] || ''} | ${n.seg[2] || ''} | ${n.seg[3] || ''} |`).join('\n')}

## 3. 流图层

${g.graphs.map((gr, i) => `- 图 ${i + 1}：${gr.layers.map((l) => l.length).join(' + ')}（共 ${gr.layers.length} 层）`).join('\n')}

## 4. 参数表

\`\`\`text
${String(pi || '').trim() || '（未提供）'}
\`\`\`

## 5. 校验

${issues.length === 0 ? '✓ 无问题' : issues.map((x) => `- ${x.level.toUpperCase()} L${x.line || '—'}：${x.message}`).join('\n')}

## 6. 脚本

\`\`\`text
${src.trim()}
\`\`\`
`;
  return { markdown: md, stats: { graphs: p.graphs.length, nodes: nodes.length, constants: p.consts.length, issues: issues.length } };
}

module.exports = {
  activate(ctx) {
    return {
      commands: {
        async generate(args) { return generate(args); },
        /** 生成并存为知识条目（复用 kbase-write 插件） */
        async saveAsKnowledge(args) {
          const r = generate(args);
          const saved = await ctx.call('kbase-write', 'save', {
            title: (args && args.title) || ('解决方案说明 ' + new Date().toLocaleTimeString('zh-CN', { hour12: false })),
            content: r.markdown,
            tags: ['方案文档', '自动生成'],
          });
          return { markdown: r.markdown, stats: r.stats, item: saved.item };
        },
      },
    };
  },
};
