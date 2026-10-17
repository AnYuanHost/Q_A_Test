# 插件：方案版本对比（script-diff）

***

为 `.lan` / `.pi` 保存版本快照，并与当前编辑内容做**行级差异**（新增 / 删除 / 不变）。用于方案迭代时快速看清改了什么。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `save` | `{ name, lan, pi }` | `{ ok, id, name }`（最多保留 20 个快照） |
| `list` | — | `{ snapshots:[{id,name,at,lanLines}] }` |
| `get` | `{ id }` | 完整快照 |
| `remove` | `{ id }` | `{ ok }` |
| `diff` | `{ id, lan, pi }` | `{ name, lan:{ops,stat}, pi:{ops,stat} }` |

`ops` 为 `{ type: 'same' \| 'add' \| 'del', text }`；`stat = { add, del, same }`。

## 算法

行级 LCS（动态规划）；超过 1200 行截断并标记 `truncated`。

## 案例

```text
POST /api/v1/plugins/script-diff/command
{ "command": "diff", "args": { "id": "snap-...", "lan": "<当前脚本>", "pi": "<当前参数表>" } }
```

返回 `.lan +1/−1，same 24` 一类统计，并给出逐行差异。

## 界面

工作区「编辑」活动 → **版本**面板：保存快照、点击快照与当前对比（绿=新增、红=删除）。

***

## 相关

- 面板：`web/js/ide-panels.js` → `versionPanel`
- UI：`plugins/script-diff/ui.js`（插件中心）
