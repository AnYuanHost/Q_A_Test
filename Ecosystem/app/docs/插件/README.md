# 插件体系

***

本目录是**插件体系**的文档索引。插件是生态侧的扩展单位，用于在不改动内核的前提下补充能力、并向前端界面提供渲染信息（呼应内核文档《意向性网络·边的三元实现与插件》）。

***

## 目录结构

```text
app/
├── plugins/                    插件的根目录（每个子目录 = 一个插件）
│   ├── <插件id>/
│   │   ├── plugin.json         清单：id/名称/版本/贡献点（命令、面板）
│   │   ├── main.js             （可选）Node 逻辑：导出 activate(ctx) → { commands }
│   │   └── ui.js               （可选）前端逻辑：QAPluginHost.registerUI(id, factory)
│   └── _sdk/                   预留：插件开发辅助（不参与扫描）
├── server/
│   └── plugin-host.js          ★ 宿主：扫描清单、激活插件、执行命令、广播事件
└── web/js/
    └── plugin-host.js          ★ 前端库：加载插件 UI、调用命令、订阅事件、桥接编辑器
```

`_` 前缀的目录不参与扫描（用于 SDK / 资源）。

***

## 插件清单（`plugin.json`）

```json
{
  "id": "const-manager",
  "name": "常数管理",
  "version": "0.1.0",
  "description": "一句话说明插件解决的痛点",
  "main": "main.js",
  "ui": "ui.js",
  "contributes": {
    "commands": [ { "id": "list", "title": "列出常数" } ],
    "panels": [ { "id": "const-manager.table", "title": "常数表", "location": "sidebar" } ]
  }
}
```

- `main` 为 `null` 时表示纯前端插件；`ui` 省略时表示纯后端插件。
- `contributes.commands` 中的 `id` 必须与 `main.js` 返回的 `commands` 键一致。

***

## 插件清单

| 插件 | 能力 | 文档 |
|---|---|---|
| `const-manager` | 常数：定义 → 一键展开节点序列 + `.pi` | [案例：常数插件](案例_常数插件.md) |
| `kbase-manager` | 知识库：统计 / 全文搜索 / 反向链接 / 双链图 | [kbase-manager](kbase-manager.md) |
| `outline` | 脚本大纲：节点/状态/行号，可跳转 | [outline](outline.md) |
| `pi-helper` | 参数表：检查 / 补齐 / 清理 | [pi-helper](pi-helper.md) |
| `snippets` | 片段库：常用节点与整段模板 | [snippets](snippets.md) |
| `maplib` | 映射库：从内核文档索引 417 个映射，插入节点模板 | [maplib](maplib.md) |
| `docs-index` | 文档检索：601 篇内核文档全文搜索 | [docs-index](docs-index.md) |
| `intentionality` | 意向性网络：对象（质性/质料）+ 双链 + 关系图 | [intentionality](intentionality.md) |
| `flow-preview` | 问答流图：分层可视化（并行组/状态/依赖边） | [flow-preview](flow-preview.md) |
| `script-diff` | 版本对比：快照 + 行级差异 | [script-diff](script-diff.md) |
| `kbase-write` | 知识条目：编写 / 保存 / 导出（生态侧目录） | [kbase-write](kbase-write.md) |
| `script-runner` | 方案推演：分层模拟执行 + 阻塞检测 | [script-runner](script-runner.md) |
| `plugin-dev` | 插件脚手架：生成新插件模板 | [plugin-dev](plugin-dev.md) |
| `capability-index` | 能力索引：插件/技能/文档/映射 统一检索 | [capability-index](capability-index.md) |
| `script-composer` | 文档驱动生成：需求 → 映射 → 节点 + `.pi` | [script-composer](script-composer.md) |
| `lint-plus` | 深度校验：映射存在性 / 定义域元数 | [lint-plus](lint-plus.md) |
| `test-runner` | 自检运行器：界面内跑自检/单测 | [test-runner](test-runner.md) |
| `doc-sync` | 文档同步：与 origin/master 的差异 | [doc-sync](doc-sync.md) |
| `script-docgen` | 方案文档生成（按 md 标准） | [script-docgen](script-docgen.md) |
| `dep-graph` | 方案依赖图：映射使用 / 跨方案共享 | [dep-graph](dep-graph.md) |

工作区（06 工作区）的侧边栏面板就是这些插件的 UI 入口：**编辑**（大纲/参数表/片段）、**库**（映射库/知识库）、**文档**（文档检索）。

## 快速上手

1. 新建 `app/plugins/<id>/plugin.json`（按上节模板）。
2. 若需后端逻辑，写 `main.js`：`module.exports = { activate(ctx) { return { commands: { ... } } } }`。
3. 若需界面，写 `ui.js`：`window.QAPluginHost.registerUI('<id>', (host) => ({ title, element }))`。
4. 重启后端（`node app/server/server.js`），在控制台「09 插件中心」查看。

***

## 相关文档

- [通信协议](通信协议.md) —— HTTP 端点、前端 `host` API、Node `ctx` API、事件流。
- [案例：常数插件](案例_常数插件.md) —— 从"定义常数"到"插入脚本"的端到端说明。
- 其余插件：见上表"文档"列。
