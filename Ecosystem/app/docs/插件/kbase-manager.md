# 插件：知识库管理（kbase-manager）

***

管理两类知识源：`KRS\*.txt`（超索引落盘的知识单元）与 `KRS\Data\Obsidian\Q_A`（中文双链知识域）。提供统计、全文搜索、反向链接与双链关系图。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `stats` | — | `{ units, notes, links, placeholders, krsPath }` |
| `refresh` | — | `{ ok, notes }`（清缓存后重扫） |
| `search` | `{ q, limit }` | `{ results:[{title,file,size,snippet}] }` |
| `backlinks` | `{ file }` | `{ backlinks[], outlinks[] }` |
| `graph` | — | `{ nodes[], edges[], nodeCount, edgeCount }` |

双链解析：正文中的 `[[目标]]` / `[[目标|别名]]`，按标题映射到目标文件。

## 案例

```text
POST /api/v1/plugins/kbase-manager/command
{ "command": "stats", "args": {} }
```

返回 `{ "units": 147, "notes": 93, "links": 274, "placeholders": 6 }`。

```text
{ "command": "backlinks", "args": { "file": "胡塞尔知识图谱域.md" } }
```

返回指向该文的来源（反向链接）与该文指向的目标（出链）。

***

## 相关

- 面板：`web/js/ide-panels.js` → `kbasePanel`；插件中心面板：`plugins/kbase-manager/ui.js`
- 控制台的「04 知识域」「02 超索引库」是同一数据源的浏览视图
