# 插件：脚本大纲（outline）

***

解析 `.lan`，按图块 / 并行块列出节点（映射名、定义域、值域、状态、行号），供工作区侧边栏导航与跳转。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `outline` | `{ lan }` | `{ nodes[], graphs, consts, problems[] }`，节点含 `line/name/domain/range/state/kind` |
| `stats` | `{ lan }` | `{ graphs, nodes, parallels, consts, byState }` |

## 案例

```text
POST /api/v1/plugins/outline/command
{ "command": "outline", "args": { "lan": "{\n}\n{\n    NewUIntElement\n    EmptyElement\n    UIntA\n    Tractable\n}" } }
```

返回 `nodes[0] = { line: 5, name: "NewUIntElement", state: "Tractable", kind: "serial" }`。
侧边栏点击节点即跳转到对应行（`Workbench` 面板 `outlinePanel`）。

***

## 相关

- 引擎：`web/js/lan-toolkit.js`（`parse`）
- 面板：`web/js/ide-panels.js` → `outlinePanel`
