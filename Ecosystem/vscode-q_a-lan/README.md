# Q_A 解决方案脚本语言 — VSCode 插件

为庞杂系统 Q_A_Test 的解决方案脚本提供**语法高亮 + 实时校验 + 常数展开 + 格式化**。

| 扩展名 | 语言 ID | 内容 |
|---|---|---|
| `.lan` | `q-a-lan` | 主脚本：图块 `{}`、并行块 `[]`/`][`、节点四段、状态关键字、`const` 常数声明、`//` 注释 |
| `.pi` | `q-a-pi` | 参数表：逐行五字段着色（参数名/类型/基础信息/语境/参数状态），`EmptyElement` 固定行特例 |

## 功能

- **语法高亮**：状态关键字、映射名、括号、`const` 声明、注释分别着色
- **实时诊断**：打开 / 编辑 / 保存时按 skill 规则校验，问题直接标在行上
  - 结构：成对前/后图、`[]` 不得嵌套、节点恰好四段、合法状态关键字
  - 参数表：五字段、类型/状态关键字、脚本用到的参数是否登记（自动读取同目录同名 `.pi`）
  - `const`：重复声明、与参数重名、声明未使用、超限提示
- **命令**（命令面板 / 右键菜单 / `Q_A` 分类）
  - `Q_A: 校验脚本 (.lan/.pi)`
  - `Q_A: 展开常数 (const → 节点序列)` —— 在侧栏生成内核可接受的新脚本，可复制 `.pi` 参数行
  - `Q_A: 格式化脚本` —— 规范缩进与空行
  - `Q_A: 插入示例脚本`
- **代码动作**：光标停在 `const X = N;` 行时，快速修复里提供「展开常数」

## 安装

方式一（本机立即生效，无需打包）：

```powershell
Copy-Item ".\vscode-q_a-lan" "$env:USERPROFILE\.vscode\extensions\q-a-ecosystem.q-a-lan-0.2.0" -Recurse -Force
# 重启 VSCode（或 Ctrl+Shift+P → Reload Window）
```

方式二（打包 .vsix 分发）：

```powershell
# 先同步引擎（保证与 app/web/js/lan-toolkit.js 一致）
node ..\app\tools\sync-engine.js
npx @vscode/vsce package --no-dependencies --allow-missing-repository
code --install-extension q-a-lan-0.2.0.vsix
```

## 设置

| 项 | 默认 | 说明 |
|---|---|---|
| `qALan.validateOnSave` | `true` | 保存 `.lan` / `.pi` 时自动校验 |
| `qALan.maxExpandValue` | `255` | 常数展开上限（防止误写巨值撑爆脚本） |

## 验证

打开示例文件（随控制台项目分发，位于 `app\docs\插件示例\Solution.lan` 与 `Solution.pi`）：
- 状态关键字（`Tractable` 等）为关键字色；映射名为函数名色；`//` 注释灰色斜体；`const` 声明整行绿色
- `.pi` 每行五段分别着色，`Unlimited`/`Login` 等为关键字色
- 把节点改成三段、或写个非法的状态关键字，保存后应看到红色波浪线

## 引擎与单一源头

校验 / 展开 / 格式化全部复用 `engine/lan-toolkit.js`（**自动同步副本**，与浏览器控制台、Node 单测是同一份实现）。
唯一手改处是 `app/web/js/lan-toolkit.js`；改后跑 `node app/tools/sync-engine.js` 同步，`check-all.js` 会校验一致性。

## 语法依据

- `solution-script-writing` skill（四段式节点、`[]` 规则、五字段参数表）
- `Q_A_Test-master\Doc\MD\Lib_Introduce\Solution-Project\Solution_Language\`（节点状态流信息等）
- `Node_State_Stream` 源码定义：Tractable / Pending / Untractable / TraUntractable

## Roadmap

- [x] 校验/常数展开/格式化 移植进编辑器（0.2.0）
- [ ] 映射名悬停文档：从 `Doc\MD\Lib_Introduce` 的映射 md 提取定义域/值域做 hover 提示
- [ ] 片段：常用节点模板（New/Release/输出）snippets
- [ ] 「展开常数」原地替换（当前为新文档预览）
