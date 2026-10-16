# Q_A_Test 生态 · 前后端 + 工具链 + 交付物

> 受 **AnYuanHost** 邀请，为"庞杂系统 / Q_A_Test" 内核项目开发的**前后端展示版**与配套工具链。
> 内核设计思想参考了一份**外部技术资料**（存于 `参考资料\`，仅内部参考、**不随交付分发**；已去个人化）。
> 展示版 = 生态的一部分，后续落地直接在其上演进；接口层可替换（内核插件就绪后零改动接入）。
> 最后更新：2026-10-16（第 19 次：隐私脱敏 + 计划书删章重排 + 交付打包 + PR #2 发出）

---

## 一、目录地图

```
zyq\
├── README.md              本文件（总入口）
├── 项目手册.md            内部全量手册（项目来源/学术定位 + 项目分析 + 看板 + 问题台账 + 自检报告）——给接力者与 AI agent
├── LICENSE.txt            生态成果许可（LGPL-2.1）
├── 交付\                  ★ 对外交付（发 AnYuanHost / 交比赛）
│   ├── 项目简介.md                 一页版（答辩 / 评审）
│   ├── 对接说明.md                 给 AnYuanHost 的短版说明（可直接转发）
│   ├── 项目计划书.md / .docx        创新创业商业计划书（md 源 + Word 稿）
│   ├── 项目计划书模板.md            计划书模板（来源）
│   └── 2.1行业背景.docx             项目材料章节（Word）
├── app\                   前端 + 后端 + 工具链（零依赖 Node + 原生前端）
├── vscode-q_a-lan\        VSCode 插件（高亮 + 实时校验 + 常数展开 + 格式化，含可分发 .vsix）
├── Q_A_Test-master\       内核项目本体（官方源码，已 git 化；当前检出 ecosystem-fixes）
├── 运行快照\              两份运行现场快照（Test\ 与 Deubg_Test\，含 exe 与 KRS 数据）
└── 参考资料\              外部技术参考资料（仅内部参考、**不随交付分发**；已去个人化）
```

> ★ 术语 ↔ 代码模块 ↔ 数据层对照表见《项目手册.md》第〇章。
> ★ 对外交付物统一置于 `交付\`；可供发送的整包为根目录的 `Q_A生态交付_20261016.zip`。

## 二、快速开始

```powershell
# 控制台 · 离线（双击即开，无需任何环境，自动用离线快照）
#   双击  app\web\index.html

# 控制台 · 实时（需 Node）
node app\server\server.js           # → http://localhost:3789

# 内核 exe（Execute / Test）：双击 exe 运行即可（CWD 必须 = exe 所在 x64\debug\）
```

## 三、交付物清单（15 项）

| # | 交付物 | 位置 | 状态 |
|---|---|---|---|
| 1 | 内核控制台（前后端展示版） | `app\` | ✅ 8 视图，离线/实时双模式实测通过 |
| 2 | 脚本常数支持（解决"连常数都没有"） | `app\web\js\lan-toolkit.js` | ✅ 引擎 UMD 化，28 项单测全过 |
| 3 | VSCode 插件（高亮 + 校验 + 常数展开 + 格式化） | `vscode-q_a-lan\q-a-lan-0.2.0.vsix` | ✅ 已打包并验证可装 |
| 4 | 交接 skill（接力开发机制） | `.opencode\skill\q_a-handover\` | ✅ 已生效 |
| 5 | AnYuanHost 的 3 个 skill 入库 | `.opencode\skill\{md-documentation-standard, solution-script-writing, map-library-development-standard}` | ✅ 已生效 |
| 6 | 内核实测矩阵（VS2026 落地证据） | `app\server\data\case-results.json` | ✅ 9 案例构建 100% 通过 |
| 7 | 内部全量手册 | `项目手册.md` | ✅ 持续维护 |
| 8 | 给对方的技术提案 | `app\docs\常数扩展提案.md` | ⏳ 待对方选型（A/B） |
| 9 | 对接说明（给 AnYuanHost） | `交付\对接说明.md` | ✅ 可直接转发 |
| 10 | 《2.1 行业背景》Word 文档 | `交付\2.1行业背景.docx` | ✅ 已生成（含论文 1.1 学术脉络） |
| 11 | **一键自检工具** | `app\tools\check-all.js` | ✅ 8 项检查全过 |
| 12 | **浏览器实测记录** | `app\验收截图\` + `app\tools\tests\` | ✅ live/offline 双模式 0 错误 |
| 13 | **一页版项目简介** | `交付\项目简介.md` | ✅ 面向答辩 / 评审 |
| 14 | 外部参考资料（已去个人化） | `参考资料\` | ⚠️ 仅供内部参考，不随交付分发 |
| 15 | **创新创业项目商业计划书** | `交付\项目计划书.md`（源）/ `交付\项目计划书.docx` | ✅ 按模板扩写（十章 + 财务，6 表） |

## 四、文档导航

| 文档 | 受众 | 用途 |
|---|---|---|
| `README.md` | 所有人 | 入口：目录地图、快速开始、交付物、命令 |
| `交付\项目简介.md` | 评审 / 答辩 / 导师 | 一页版：项目定位、技术路线、成果与验证 |
| `交付\项目计划书.md`（+ .docx） | 比赛 / 投资方 | 创新创业商业计划书（十章 + 财务） |
| `项目手册.md` | 接力开发者 / AI agent | **唯一内部全量文档**：项目分析、协作背景、环境与运行、进度看板、问题台账、自检报告 |
| `交付\对接说明.md` | AnYuanHost（人） | 短而全的核心问题总结 + 生态成果 + 协作状态 |

> 控制台「08 项目台账」视图会**实时解析 `项目手册.md` 的问题台账表**，展示问题状态。

## 五、当前状态（一句话）

**9 个问题：8 项已闭环/绕过，仅 ISS-03（GitHub 网络间歇）为持续观察项**；**PR #1（内核修补）与 PR #2（生态侧交付 `Ecosystem/`）均已发出**，等待对方评估。详见 `项目手册.md` 第四、五章。

## 六、命令速查

```powershell
# 控制台（实时）
node app\server\server.js           # → http://localhost:3789

# 离线数据重新生成（KRS/台账/矩阵有变化时）
node app\tools\gen-offline-data.js

# 脚本引擎单测（改过 lan-toolkit.js 后必跑）
node app\tools\test-lan-toolkit.js

# 一键自检（发布/交付前必跑）
node app\tools\check-all.js

# 把引擎同步给 VSCode 插件（改过 lan-toolkit.js 后必跑）
node app\tools\sync-engine.js

# 纯静态服务（无 API → 复现前端"离线模式"，用于浏览器实测）
node app\tools\serve-static.js 3790

# 内核案例矩阵重跑（改过 Main.cpp 场景时）
powershell -ExecutionPolicy Bypass -File app\tools\run-case-matrix.ps1

# 《2.1 行业背景》重新生成（依赖全局 docx，需先设 NODE_PATH）
$env:NODE_PATH = "$env:APPDATA\npm\node_modules"; node app\tools\gen-industry-docx.js

# 参考资料提取（把 参考资料\ 下的 .doc/.docx 转成可检索 md，并去个人化）
$env:NODE_PATH = "<含 word-extractor 的 node_modules>"; node app\tools\extract-academic.js

# Markdown → Word（文书交付；依赖全局 docx）
$env:NODE_PATH = "$env:APPDATA\npm\node_modules"; node app\tools\md2docx.js "交付\项目计划书.md" "交付\项目计划书.docx"

# VSCode 插件打包 / 安装
node app\tools\sync-engine.js                                    # 先同步引擎
cd vscode-q_a-lan; npx @vscode/vsce package --no-dependencies --allow-missing-repository
code --install-extension q-a-lan-0.2.0.vsix                      # 安装到本机
```

## 七、接力开发

改动前后按交接流程走：读 `项目手册.md` 看板 → 干活 → 更新看板与进度日志；新问题记入其中"问题台账"章节。
