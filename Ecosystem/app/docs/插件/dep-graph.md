# 插件：方案依赖图（dep-graph）

***

扫描 `KRS` 下的 `.lan`，统计每个方案使用的映射，以及**跨方案共享**的映射，帮助发现复用点与耦合。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `graph` | — | `{ plans:[{file,maps[],nodes}], shared:[{map,files[]}], totals }` |
| `shared` | — | `{ shared, totals }` |

## 案例

```text
POST /api/v1/plugins/dep-graph/command
{ "command": "graph", "args": {} }
```

返回方案清单、每个方案的映射列表，以及被多个方案共同使用的映射。

## 界面

工作区「库」活动 → **依赖图**（快捷面板）；插件中心亦有面板。

***

## 相关

- 解析：`web/js/lan-toolkit.js`（`parse`）
- 映射语义：`app/server/doc-index.js`
