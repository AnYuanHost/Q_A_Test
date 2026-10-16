# 庞杂系统 · 内核控制台（展示版前后端）

> 本目录是 Q_A_Test 生态的**前后端展示版**，独立于内核源码（`Q_A_Test-master\`），可整体拷贝、可接力开发。
> 内核设计思想参考了一份外部技术资料；术语对照见上层《项目手册.md》第〇章，对外短版见 `交付\对接说明.md`。

## 快速开始（两种方式）

```powershell
# 方式一：离线直开 —— 双击打开 web/index.html 即可，无需任何环境
#   （自动使用离线快照数据，功能与在线完全一致）

# 方式二：实时后端 —— 需要 Node（本机 v24 已验证）
cd app
node server/server.js        # http://localhost:3789 ，PORT 环境变量可改端口
```

## 三级数据源（自动降级，页面零改动）

```
内核插件接口（未来）  ── KERNEL_MODE=kernel + KERNEL_ENDPOINT=...  → 优先级最高
实时后端（当前 live） ── node server/server.js 实时扫描真实 KRS 目录
离线快照（offline）   ── file:// 直开 / 后端不可达时自动降级，数据来自自动生成的快照
```

- 判定逻辑在 `web/js/data-source.js`：`file://` 协议直接离线；http 页面先探活轻量 `/api/v1/health`（2s 超时），失败自动降级
- 界面左下角与顶栏实时显示当前模式（LIVE / OFFLINE），评审演示时一目了然

## 目录结构

```
app/
├── README.md                  本文件
├── docs/
│   ├── 常数扩展提案.md        给内核侧的常数支持技术提案（路线 A/B）
│   └── 插件示例/              .lan/.pi 示例（配合 VSCode 插件演示）
├── tools/
│   ├── gen-offline-data.js    离线快照生成器（从真实数据再生 web/js/offline-data.js）
│   ├── test-lan-toolkit.js    脚本引擎单测（28 项，直接 require 官方引擎）
│   ├── check-all.js           ★ 一键自检（语法 / 单测 / 引擎同步 / 数据一致性 / 产物）
│   ├── sync-engine.js         把引擎同步给 VSCode 插件（保持单一源头）
│   ├── serve-static.js        纯静态服务（无 /api → 复现"离线模式"）
│   ├── run-case-matrix.ps1    VS2026 内核案例矩阵实测（9 案例构建+运行）
│   ├── gen-industry-docx.js   生成《2.1 行业背景》Word 文档（含论文 1.1 学术脉络）
│   ├── md2docx.js             极简 Markdown → Word 转换器（用于《项目计划书》等文书）
│   ├── extract-academic.js    把学术材料 .doc/.docx 提取为可检索 Markdown 并归档
│   ├── try-pr.ps1             等待网络窗口 → fork → push → 建 PR
│   ├── krs-lib-stub/          ISS-05 分析用 stub 库源码（KRS_Lib.lib 来源）
│   └── tests/                 Playwright UI 测试脚本
├── server/
│   ├── server.js              HTTP：静态托管 + /api/v1 路由（含 /health、优雅关闭）
│   ├── kernel-adapter.js      ★ 内核接口适配层（live 实时扫描 / kernel 未来插件，含 TTL 缓存）
│   ├── ledger.js              问题台账解析（adapter 与快照生成器共用）
│   └── data/
│       └── case-results.json  VS2026 案例矩阵实测结果（9 案例构建+运行）
├── 验收截图/                  Playwright 全视图验收截图（0 控制台错误留证）
└── web/
    ├── index.html             应用外壳（启动引导 + 8 视图）
    ├── css/style.css          设计系统（工业终端风 · 琥珀磷光）
    └── js/
        ├── offline-data.js    ⚠ 自动生成，勿手改（离线快照）
        ├── data-source.js     ★ 数据源层：live/offline 自动选择（探活 /health）
        ├── lan-toolkit.js     ★ 脚本引擎（UMD）：校验/常数展开/格式化/高亮（28 项单测）
        └── app.js             应用逻辑（文件头有完整模块说明）
```

兄弟目录 `vscode-q_a-lan\`：**VSCode 插件**——语法高亮 + 实时校验 + 常数展开 + 格式化（0.2.0），安装方法见其 README。

## 视图清单（8 个）

内核概览（含问答流图状态）/ 超索引库（**搜索 + 筛选 + 列排序**）/ 解决方案（引擎级真高亮）/ 知识域 / **内核实测**（VS2026 案例矩阵）/ **脚本工作台**（校验 + 常数展开 + 格式化）/ 问答推演 / **项目台账**（《项目手册.md》台账实时视图）

交互补充：**URL 深链**（`index.html#script` 直达某视图，浏览器前进/后退可切换）；主区按 **数字键 1–8** 快速切视图；超索引表头可点击排序。

## API 契约（/api/v1）

| 方法 | 路径 | 返回 |
|---|---|---|
| GET | `/health` | 轻量健康检查（探活专用，不扫盘；含缓存状态） |
| GET | `/status` | 内核状态：模式、超索引数、入口点、运行时数据 |
| GET | `/superindex?limit=N` | 超索引单元列表（编号、标注、大小、路径） |
| GET | `/superindex/:id` | 单元详情（live 模式含文件头 HEX） |
| GET | `/solutions` | 解决方案文件（`.lan` 源码、`.pi` 参数） |
| GET | `/domains` | 中文知识域（Obsidian 知识库递归） |
| GET | `/polling` | 轮询机拓扑与问答流图状态 |
| GET | `/cases` | **内核实测矩阵**（VS2026 构建+运行结果） |
| GET | `/issues` | **项目台账**（实时解析《项目手册.md》问题台账） |
| POST | `/question` | `{ "text": "..." }` → 回答 + 推演步骤 |

统一响应包：`{ "ok": true, "data": ... }` / `{ "ok": false, "error": "..." }`。
**内核插件接入约定**：AnYuanHost 的插件接口实现以上任意子集即可，未实现的端点前端自动降级。

## 内核实测矩阵（"用 VS2026 落地"的实证）

`server/data/case-results.json` 由 `tools/run-case-matrix.ps1` 产出：对 9 个内核案例逐个「改 SwitchCase → MSBuild 构建 → 实际运行（10s 超时保护）」，跑完自动恢复源码与 KRS 数据。
当前结果：**构建 9/9 通过**；5 个一次性案例正常退出（exit 0），4 个进入轮询主循环（属内核正常事件循环行为）。
复跑：`powershell -ExecutionPolicy Bypass -File tools\run-case-matrix.ps1`（跑完后 `node tools\gen-offline-data.js` 刷新快照）。

## 设计说明（展示版 = 生态的一部分）

- **视觉方向**：工业终端风（琥珀磷光），启动引导序列 + 等宽数据字体 + 网格背景——"接入内核终端"的仪式感
- **实用与评审两不误**：离线可演示（评委现场双击即看）、live 可实证（真实数据）、内核实测视图提供一手可用性证据
- **可读性优先**：每个 JS 文件头部有模块说明；app.js 按"常量→工具→动画→切换→渲染器→问答→初始化"分节；新增视图只需 3 步（见 app.js 头部注释）
- 响应式（桌面侧栏 / 移动顶栏），无构建链（原生 HTML/CSS/JS），后续落地直接在此演进

## 质量自检（改动后必跑）

```powershell
node tools/check-all.js        # 一键：语法 + 引擎单测 + 引擎同步 + 数据一致性 + 产物存在性
```

改动 `web/js/lan-toolkit.js` 后，还必须 `node tools/sync-engine.js` 把引擎同步给 VSCode 插件（`check-all` 会校验二者是否一致）。

## 接力开发

改动前后按交接流程走：读《项目手册.md》看板 → 干活 → 更新看板与进度日志；新问题记入其"问题台账"章节。
