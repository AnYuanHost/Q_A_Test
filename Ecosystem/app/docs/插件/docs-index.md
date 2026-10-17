# 插件：文档检索（docs-index）

***

索引 `Q_A_Test-master/Doc/MD` 下全部 Markdown 的标题与正文，提供全文搜索，便于在工作区内直接查内核文档。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `search` | `{ q, limit }` | `{ results:[{title,file,snippet}], total }` |
| `stats` | — | `{ docs, root }` |

## 案例

```text
POST /api/v1/plugins/docs-index/command
{ "command": "search", "args": { "q": "解决方案", "limit": 5 } }
```

返回命中的文档标题、相对路径与正文片段。工作区「文档」面板直接展示结果。

***

## 相关

- 面板：`web/js/ide-panels.js` → `docsPanel`
- 索引规模：601 篇（与仓库文档数量一致）
