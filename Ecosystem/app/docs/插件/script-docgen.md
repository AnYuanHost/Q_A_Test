# 插件：方案文档生成（script-docgen）

***

按 `md-documentation-standard` 的版式为当前 `.lan` 生成说明文档：图块、节点表、流图层、参数表、校验结果、脚本原文。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `generate` | `{ lan, pi, title }` | `{ markdown, stats:{graphs,nodes,constants,issues} }` |
| `saveAsKnowledge` | 同上 | `{ markdown, stats, item }`（写入 `kbase-write`） |

## 输出结构

1. 图块表（起始行 / 节点数 / 并行块数）
2. 节点表（图块 / 类型 / 行 / 映射 / 定义域 / 值域 / 状态）
3. 流图层（每层节点数）
4. 参数表
5. 校验结果
6. 脚本原文

## 案例

```text
POST /api/v1/plugins/script-docgen/command
{ "command": "generate", "args": { "lan": "<脚本>", "pi": "<参数表>", "title": "UIntAdd 示例" } }
```

## 界面

工作区「编辑」活动 → **方案文档**（生成 / 存为知识条目）；插件中心面板提供复制。

***

## 相关

- 流图解析：`app/server/lan-flow.js`
- 知识条目：`kbase-write`；文档标准：`md-documentation-standard`
