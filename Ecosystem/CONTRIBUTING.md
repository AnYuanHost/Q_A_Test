# 贡献指南（生态侧）

> 面向接力开发者与 AI。先读 `README.md` → `项目手册.md` 第〇章 → `app/README.md`。

## 1. 环境

```powershell
node --version      # v24 已验证
node app\server\server.js      # 后端 :3789
node app\tools\check-all.js    # 自检（改完必跑）
```

可选：VS2026（编译内核 / C++ 库）、VSCode（插件）。

## 2. 目录约定

```text
app/
├── server/    server.js · kernel-adapter.js · plugin-host.js · lan-flow.js · doc-index.js · files.js · ledger.js
├── plugins/   每个插件一个目录：plugin.json + main.js + ui.js
├── web/       index.html · css · js（workbench / ide-panels / workspace-* / plugin-host …）
├── docs/      文档（插件 / 术语表 / 文档索引 / 能力目录 / 脚本语言手册）
├── cpp/       qaconst.hpp · qacomm.hpp（内核侧 C++ 库）
└── tools/     check-all · gen-offline-data · gen-docs · sync-engine · md2docx …
```

## 3. 新增一个插件

1. 建目录 `app/plugins/<id>/`
2. `plugin.json`：`id / name / version / description / main / ui / contributes{commands,panels}`
3. `main.js`：`module.exports = { activate(ctx) { return { commands: {...} } } }`
4. `ui.js`：`window.QAPluginHost.registerUI('<id>', (host) => ({ title, element }))`
5. 写文档：`app/docs/插件/<id>.md`，并在 `app/docs/插件/README.md` 表格登记
6. 重启后端；`check-all` 会校验清单

> 也可用工作区「插件脚手架」面板或 `plugin-dev` 插件自动生成模板。

## 4. 新增一个映射文档

遵循 `md-documentation-standard`：

1. 一个实体一篇 md，文件名 = 实体名
2. 必含：定义句（定义域/值域集合）、定义代码块 `Map X(&A,&B,F);`、功能语义、`## 案例`
3. 更新上级索引（模块索引 → 项目索引）
4. 跑 `node app\tools\gen-docs.js` 刷新 `文档索引.md`

## 5. 前端约定

- 状态走 `WorkspaceStore`，跨插件动作走 `WorkspaceActions`，命令走 `CommandPalette`
- 面板通过 `Workbench.register({id,label,icon,panels})` 注册
- 新增标签页：`index.html` 加 `.ide-editor[data-tab]`，在 `qa-tab-open` 里渲染
- 不要直接 `fetch` 业务接口；用 `QAPluginHost.call` 或 `DataSource.get`

## 6. 代码风格

- 原生 ES2020，无构建链；`'use strict'`
- 每个文件头写清职责与数据流
- 纯函数优先；DOM 接线与逻辑分离（参考 `lan-toolkit.js` / `workbench.js`）
- 中文注释解释"为什么"，代码解释"做什么"

## 7. 提交前检查

```powershell
node app\tools\check-all.js        # 9 项
node app\tools\test-lan-toolkit.js # 28 项
node app\tools\gen-docs.js         # 若改了文档/插件
```

- 不提交运行时数据：`app/data/plugin-state/`、`app/data/knowledge/`
- 不提交个人身份信息（隐私）；外部参考资料不随交付分发

## 8. 交接

按 `q_a-handover` skill：读《项目手册》看板 → 干活 → 更新看板与进度日志 → 新问题记入问题台账。
