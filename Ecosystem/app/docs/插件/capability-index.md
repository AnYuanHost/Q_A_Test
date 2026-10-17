# 插件：能力索引（capability-index）

***

回应"没有文档 AI 不知道该用什么"：把**插件 / 技能（skill）/ 内核文档 / 映射**汇总成一份可搜索的能力目录。

***

## 索引内容

| 类别 | 来源 | 字段 |
|---|---|---|
| 插件 | `app/plugins/*/plugin.json` | id / 名称 / 描述 / 命令 / 路径 |
| 技能 | `.opencode/skill/*/SKILL.md` | name / description |
| 文档 | `Q_A_Test-master/Doc/MD/Lib_Introduce/*-Project` | 项目名 / 手册篇数 |
| 映射 | `Doc/MD` 中的 `Map X(...)` 定义 | 总数 |

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `catalog` | — | `{ plugins[], skills[], docs[], summary }` |
| `search` | `{ q, limit }` | `{ results[], total, summary }` |

## 案例

```text
POST /api/v1/plugins/capability-index/command
{ "command": "search", "args": { "q": "映射" } }
```

返回命中的插件/技能/文档条目；界面同时显示规模概览（插件数 / 技能数 / 文档项目数 / 映射数）。

## 界面

工作区「文档」活动 → **能力索引**面板（搜索 + 概览）；插件中心亦有面板。

***

## 相关

- 映射检索：`maplib`；文档检索：`docs-index`；知识库：`kbase-manager`
- 面板：`web/js/ide-panels.js` → `capPanel`
