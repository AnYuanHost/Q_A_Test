# 浏览器实测脚本（playwright-cli）

这里是用 `playwright-cli` 的 `run-code` 执行的端到端冒烟脚本（`async page => {...}` 形式）。
用于在真实浏览器里验证控制台前端（离线 / 台账 / 工作台三条路径），弥补 `check-all.js` 只做静态检查的不足。

> ⚠️ 该浏览器**禁用了 `file:` 协议**，因此离线路径改用"纯静态服务"复现（无 `/api` → 前端自动降级快照）。

## 运行步骤

```powershell
# 1. 起后端（live）与静态服务（offline），两个窗口或后台
node app\server\server.js          # 3789 → live
node app\tools\serve-static.js 3790  # 3790 → offline

# 2. 打开有头浏览器（技能强制要求 --headed）
playwright-cli open --headed http://localhost:3789/

# 3. 逐个跑脚本
playwright-cli run-code --filename=app/tools/tests/ui-offline-test.js
playwright-cli run-code --filename=app/tools/tests/ui-issues-test.js
playwright-cli run-code --filename=app/tools/tests/ui-workbench-test.js

# 4. 清理
playwright-cli close
```

## 脚本清单

| 脚本 | 目标 | 关键断言 |
|---|---|---|
| `ui-offline-test.js` | 离线降级（3790） | `DataSource.mode === 'offline'`、超索引行数、案例卡数 |
| `ui-issues-test.js` | 项目台账视图（3789） | `.issue-card` 数量、汇总文案 |
| `ui-workbench-test.js` | 脚本工作台（3789） | 校验问题数、常数展开（10×UIntSuccessor）、高亮 token、`.pi` 追加行 |

截图产物落在运行目录（`verify-*.png`）；正式验收截图归档在 `app\验收截图\`。
