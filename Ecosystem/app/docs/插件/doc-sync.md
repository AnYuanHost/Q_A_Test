# 插件：文档同步（doc-sync）

***

检查本地文档与 `origin/master` 的差异：落后提交数、变更文档清单、未提交文件数，提示哪些索引需要刷新。

> 不主动联网；依赖本地已 fetch 的 `origin/master`。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `status` | — | `{ branch, head, dirtyFiles, behindOriginMaster, docs, hasOrigin }` |
| `updates` | `{ limit }` | `{ total, items:[{status,file}], docs }` |

## 案例

```text
POST /api/v1/plugins/doc-sync/command
{ "command": "status", "args": {} }
```

返回 `{ branch: "ecosystem-deliverables", behindOriginMaster: 0, docs: 847, … }`。

同步流程建议：`git fetch origin` → 看差异 → `git checkout origin/master -- Doc` → `node app/tools/gen-docs.js` → `node app/tools/gen-vscode-data.js`。

## 界面

工作区「文档」活动 → **文档同步**（快捷面板）；插件中心亦有面板。

***

## 相关

- 文档索引：`app/docs/文档索引.md`；能力目录：`app/docs/能力目录.md`
- VSCode 映射数据：`vscode-q_a-lan/data/maps.json`
