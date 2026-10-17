# 插件：深度校验（lint-plus）

***

在结构校验（四段、`[]`、参数覆盖）之上，结合**文档索引**做语义检查：

- 映射是否存在于文档索引
- 定义域参数个数是否与映射定义一致
- 值域参数个数是否合理
- 定义域是否出现重复参数（可能自覆盖）

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `check` | `{ lan }` | `{ checked, issues[], byLevel:{error,warn} }` |

## 案例

```text
POST /api/v1/plugins/lint-plus/command
{ "command": "check", "args": { "lan": "{\n}\n{\n  UIntAdd\n  UIntA\n  UIntB\n  TraUntractable\n}" } }
```

返回：`UIntAdd 定义域应为 2 个参数（OrderedPairSet），当前 1 个`。

## 界面

工作区「编辑」活动 → **深度校验**（快捷面板）；插件中心亦有面板。

***

## 相关

- 索引：`app/server/doc-index.js`
- 结构校验：`web/js/lan-toolkit.js`（`validate`）
