# 插件：映射库检索（maplib）

***

从内核文档 `Doc/MD` 中抽取 `Map X(定义域, 值域, 函数)` 定义行，建立"映射名 → 定义域/值域/文档"索引。解决"写脚本时不知道有哪些映射、参数怎么给"的问题。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `search` | `{ q, limit }` | `{ results:[{name,domain,range,file}], total }` |
| `node` | `{ name }` | `{ name, domain, range, lan, note }`（四段节点模板） |
| `stats` | — | `{ total, topDomains:[{domain,count}] }` |

索引规则：逐行匹配 `Map <名称>( &<定义域>, &<值域>`，同名只保留首个。

## 案例

```text
POST /api/v1/plugins/maplib/command
{ "command": "search", "args": { "q": "UInt", "limit": 10 } }
```

返回若干映射（如 `NewUIntElement`、`UIntSuccessor`、`UIntAdd`）。
`node` 返回模板（占位参数需按映射文档替换）：

```text
    UIntAdd
    EmptyElement
    UIntAdd_Out
    TraUntractable
```

工作区「映射库」面板：搜索 → 点击 → 插入节点模板到脚本光标处。

***

## 相关

- 数据源：`Q_A_Test-master/Doc/MD`（601 篇文档，索引到 417 个映射）
- 面板：`web/js/ide-panels.js` → `maplibPanel`
- 规范：`map-library-development-standard`（定义域/值域是硬契约）
