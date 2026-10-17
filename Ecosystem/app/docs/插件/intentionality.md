# 插件：意向性网络（intentionality）

***

编辑**意向性对象**（序偶 `<质性, 质料>`）与**意向性网络**（对象间的指向/双链）；可从知识域（Obsidian 双链）导入初始网络，支持导出 JSON。

对应内核概念：意向性对象 = 质性（对象 + 意向特征）+ 质料（非对象内容）；网络 = 对象集合 + 边。

***

## 数据模型

```json
{
  "objects": [
    { "id": "husserl", "qingzhi": "胡塞尔", "zhiliao": "现象学创始人……", "links": ["intentionality"] }
  ],
  "updated": "2026-10-17T..."
}
```

存储于插件状态（`app/data/plugin-state/intentionality.json`）。

## 命令

| 命令 | 入参 | 返回 |
|---|---|---|
| `list` | — | `{ objects:[{id,qingzhi,links,size}], count }` |
| `get` | `{ id }` | 对象详情 |
| `upsert` | `{ object }` | `{ ok, id }` |
| `remove` | `{ id }` | `{ ok }` |
| `importObsidian` | — | `{ ok, count }`（把知识域 md 导入为对象，`[[双链]]` 转为边） |
| `graph` | — | `{ nodes[], edges[], nodeCount, edgeCount }` |
| `export` | — | `{ json, count }` |

## 案例

```text
POST /api/v1/plugins/intentionality/command
{ "command": "importObsidian", "args": {} }
```

导入后 `graph` 返回 `93 节点 / 274 边`（与知识域双链一致）。

工作区「意向性网络」标签页：

- 左列：对象列表（新建 / 导入 / 刷新）
- 中列：质性、质料、指向（每行一个 id），保存 / 删除 / 导出
- 右列：canvas 关系图（节点 + 双链）

***

## 相关

- 编辑器：`web/js/intentionality-editor.js`
- 理论：内核文档《意向性网络》《意向性相关工具》；本插件是**生态侧**编辑与可视化，不直接改写内核数据
