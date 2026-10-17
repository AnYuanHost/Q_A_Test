# 插件：问答流图预览（flow-preview）

***

把 `.lan` 解析为分层问答流图：图块 → 层 → 节点；并行块（`[]`）内节点同层；相邻层全连接。用于在工作区可视化"问题如何被分解与执行"。

***

## 分层规则

1. 每个 `{ }` 图块独立成图；
2. 图内按源码行号还原顺序：普通节点各占一层，`[]` 并行块整体占一层（块内节点同层）；
3. 相邻层之间**全连接**——串行是 1→1，并行组与前后全连接（符合 `solution-script-writing` §5）。

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `graph` | `{ lan }` | `{ nodes[], edges[], graphs[], nodeCount, edgeCount }` |
| `stats` | `{ lan }` | `{ graphs, nodes, edges, byState, problems }` |

节点：`{ id, label, state, line, kind, graph, layer }`；层：`graphs[i].layers` 为节点 id 的二维数组。

## 案例

```text
POST /api/v1/plugins/flow-preview/command
{ "command": "graph", "args": { "lan": "{\n}\n{\n  NewUIntElement\n  EmptyElement\n  UIntA\n  Tractable\n\n  [\n    UIntAdd\n    ( UIntA UIntA )\n    UIntB\n    TraUntractable\n  ][\n    UIntAdd\n    ( UIntA UIntA )\n    UIntC\n    TraUntractable\n  ]\n}" } }
```

返回 `graphs=2, nodes=4~6, edges=3~5`（视并行块数量）。

## 界面

- 工作区「问答流图」标签页（大画布，随标签页打开自动解析）
- 插件中心面板（`ui.js`）
- 绘制复用共享库 `web/js/flow-draw.js`

***

## 相关

- 解析：`web/js/lan-toolkit.js`（`parse`）
- 绘制：`web/js/flow-draw.js`；标签页：`web/js/ide-panels.js` → `ensureFlow`
