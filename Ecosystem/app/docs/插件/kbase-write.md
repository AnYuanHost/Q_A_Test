# 插件：知识条目（kbase-write）

***

在工作区内编写 / 整理**知识条目**（Markdown），保存到生态侧知识目录 `app/data/knowledge/`，支持列表、读取、删除与导出。

> **安全边界**：只写生态侧目录，**不直接改写内核的 `KRS` / `Obsidian` 数据**；需要进入内核知识库时，用 `export` 输出 Markdown，由人工/内核侧导入。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `save` | `{ id?, title, content, tags? }` | `{ ok, item }` |
| `list` | — | `{ items[] }`（按时间倒序） |
| `get` | `{ id }` | `{ item, content }` |
| `remove` | `{ id }` | `{ ok }` |
| `export` | `{ id }` | `{ id, file, content, note }` |
| `stats` | — | `{ count, dir }` |

索引文件：`app/data/knowledge/index.json`；条目文件：`<id>.md`。

## 存储格式

```markdown
# 条目标题

标签：意向性、知识图谱

正文……
```

## 案例

```text
POST /api/v1/plugins/kbase-write/command
{ "command": "save", "args": { "title": "意向性与知识图谱", "content": "质性承载对象与意向特征，质料承载非对象内容。", "tags": ["意向性","知识图谱"] } }
```

返回 `item.id = "意向性与知识图谱-xxxx"`、`size = 66`。

## 界面

工作区「文档」活动 → **知识条目**面板：标题 + 正文编辑、保存、列表加载、刷新。

***

## 相关

- 面板：`web/js/ide-panels.js` → `kwPanel`
- UI：`plugins/kbase-write/ui.js`
- 知识域浏览：`kbase-manager`；意向性编辑：`intentionality`
