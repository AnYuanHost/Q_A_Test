# 插件：片段库（snippets）

***

提供常用节点与整段解决方案模板（建元素 / 自增 / 求和 / 释放 / 并行 / 完整流水线），一键插入脚本；支持保存自定义片段（持久化在插件状态中）。

***

## 内置片段

| id | 标题 | 说明 |
|---|---|---|
| `new-uint` | 新建 UInt 元素 | `NewUIntElement`（初值 0） |
| `successor` | 自增（后继） | `UIntSuccessor`：值域 = 定义域 + 1 |
| `add` | 无符号整数相加 | `UIntAdd`：定义域为序偶 |
| `release` | 释放元素 | `ReleaseElement` |
| `parallel` | 并行块模板 | 两个互不依赖的节点并行 |
| `pipeline` | 完整流水线 | 建 → 自增 → 求和 → 释放 |

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `list` | — | `{ snippets:[{id,title,desc,custom}] }` |
| `get` | `{ id }` | `{ id, title, lan }` |
| `save` | `{ id, title, lan }` | `{ snippets[] }` |
| `remove` | `{ id }` | `{ ok }` |

## 案例

```text
POST /api/v1/plugins/snippets/command
{ "command": "get", "args": { "id": "pipeline" } }
```

返回可直接粘贴进后图的整段文本。工作区「片段」面板点击即插入到脚本光标处。

***

## 相关

- 面板：`web/js/ide-panels.js` → `snippetsPanel`
- 语法：`solution-script-writing` skill（`[]` 首尾必须是节点、禁止嵌套）
