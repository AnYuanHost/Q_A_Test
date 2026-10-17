# 插件：文档驱动生成（script-composer）

***

从 847 篇内核文档建立结构化索引，按**自然语言需求**推荐映射，并生成四段节点与 `.pi` 参数行（参数元数/类型由定义域/值域集合推断）。

***

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `suggest` | `{ need, limit }` | `{ candidates:[{name,domain,range,inArity,outArity,file,score}] }` |
| `compose` | `{ name }` | `{ lan, pi, params, validation, ... }` |
| `composeByNeed` | `{ need }` | 最佳映射的 `compose` 结果 + `candidates` |
| `stats` | — | `{ totals, topProjects }` |

## 匹配策略

- 中文意图 → 英文符号（`相加→add`、`新建→new`、`释放→release`…）
- 映射名按**驼峰词精确匹配**（`UIntAdd` 的 `add`），避免 `Address` 误命中
- 短名优先（`ReleaseElement` 优于 `ReleaseDllElementManager`）
- 案例数加分

## 元数/类型推断

| 集合 | 参数个数 | .pi 类型 |
|---|---|---|
| `NullElementSet` | 0（`EmptyElement`） | — |
| `OrderedPairSet` | 2（`( A B )`） | String |
| `UIntSet` | 1 | UInt |
| `FstreamSet` | 1 | String |
| `BoolSet` | 1 | Bool |

## 案例

```text
POST /api/v1/plugins/script-composer/command
{ "command": "composeByNeed", "args": { "need": "无符号相加" } }
```

返回 `UIntAdd`：

```text
    UIntAdd
    ( UIntAdd_In1 UIntAdd_In2 )
    UIntAdd_Out1
    TraUntractable
```

`.pi`：`UIntAdd_In1 String …` / `UIntAdd_Out1 UInt …`，校验 0 错误。

## 界面

工作区「库」活动 → **需求生成**：输入需求 → 生成 → 候选（点击切换）→ 自动插入脚本与参数表。

***

## 相关

- 索引：`app/server/doc-index.js`；面板：`web/js/ide-panels.js` → `demandPanel`
- 文档检索：`maplib` / `docs-index`；能力索引：`capability-index`
