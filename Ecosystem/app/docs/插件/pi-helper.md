# 插件：参数表助手（pi-helper）

***

扫描 `.lan` 中出现的参数，与 `.pi` 比对：找出缺失 / 未使用参数，并可一键补齐或清理。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `check` | `{ lan, pi }` | `{ used, declared, missing[], unused[], ok }` |
| `fill` | `{ lan, pi }` | `{ pi, added[] }`（补齐后的完整 `.pi` 文本） |
| `prune` | `{ lan, pi }` | `{ pi, removed[] }`（清理未用参数后的 `.pi`） |

参数名从节点第 2/3 段（定义域/值域）提取，`EmptyElement` 不计入。新增行格式固定为：

```text
参数名 String 参数名 Unlimited Login
```

## 案例

```text
POST /api/v1/plugins/pi-helper/command
{ "command": "check", "args": {
  "lan": "{\n}\n{\n    UIntAdd\n    ( UIntA UIntB )\n    UIntC\n    TraUntractable\n}",
  "pi": "EmptyElement  EmptyElement  EmptyElement  Unlimited  Common"
} }
```

返回 `missing = ["UIntA","UIntB","UIntC"]`。工作区「参数表」面板提供"补齐缺失 / 清理未用"按钮。

***

## 相关

- 面板：`web/js/ide-panels.js` → `piPanel`
- 规则：`solution-script-writing` skill §7
