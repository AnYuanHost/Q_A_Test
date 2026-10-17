# 插件：方案推演（script-runner）

***

不依赖内核，按问答流图**分层模拟执行**脚本：输出推演轨迹、状态迁移、阻塞节点与步数。用于在真正跑内核前发现流程问题（如 Pending/Untractable 导致的死锁）。

***

## 语义（对照 `solution-script-writing`）

| 状态 | 推演行为 |
|---|---|
| `Tractable` / `TraUntractable` | 前置完成后可执行 → 计入轨迹 |
| `Pending` / `Untractable` | 前置完成后仍需等待 → 标记阻塞，本图后续层暂停 |
| 其他/未初始化 | 记为非法状态 |

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `run` | `{ lan, maxSteps }` | `{ trace[], executed, blocked[], steps, graphs, nodes, problems, ok }` |
| `plan` | `{ lan }` | `{ graphs, layers[], nodes[], problems[] }` |

`trace[i] = { step, graph, layer, node, mapping, state, action, args }`。

## 案例

```text
POST /api/v1/plugins/script-runner/command
{ "command": "run", "args": { "lan": "{\n}\n{\n  UIntAdd\n  UIntA\n  Running\n}" } }
```

返回 `blocked` 含"非法/未初始化状态 Running"，`ok = false`。

## 界面

工作区「编辑」活动 → **方案推演**面板：一键推演、轨迹列表、阻塞原因；命令面板亦有「推演当前脚本」。

***

## 相关

- 共享解析：`app/server/lan-flow.js`（与 `flow-preview` 同源）
- 面板：`web/js/ide-panels.js` → `runnerPanel`
