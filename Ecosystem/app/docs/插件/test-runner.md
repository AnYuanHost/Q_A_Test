# 插件：自检运行器（test-runner）

***

在界面内运行项目自检与引擎单测，展示输出，不必切终端。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `checkAll` | — | `{ ok, code, stdout, stderr, summary:{pass,fail} }` |
| `engineTests` | — | 同上（引擎 28 项） |

实现：`child_process.execFile(node, [tools/check-all.js])`，90s 超时，4MB 输出上限。

## 案例

```text
POST /api/v1/plugins/test-runner/command
{ "command": "checkAll", "args": {} }
```

返回 `summary = { pass: 10, fail: 0 }` 与完整输出。

## 界面

工作区「文档」活动 → **自检**（快捷面板：一键自检 / 引擎单测）；插件中心亦有面板。

***

## 相关

- 自检脚本：`app/tools/check-all.js`；引擎测试：`app/tools/test-lan-toolkit.js`
