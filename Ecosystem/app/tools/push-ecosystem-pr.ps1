# 生态侧交付 PR：等待网络窗口 → 推送到 fork → 创建 Pull Request
# 前提：Q_A_Test-master 已在本机准备好分支 ecosystem-deliverables（含 Ecosystem/ 提交）
# 用法：powershell -ExecutionPolicy Bypass -File app\tools\push-ecosystem-pr.ps1 [-Attempts 20]
param([int]$Attempts = 20)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = 'Continue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$upstream = "AnYuanHost/Q_A_Test"
$localRoot = Join-Path $PSScriptRoot "..\..\Q_A_Test-master"
$branch = "ecosystem-deliverables"
function Log($m) { Write-Host ("[PR] " + $m) }

# ---- 1. 等待网络窗口 ----
$ok = $false
for ($i = 1; $i -le $Attempts; $i++) {
  cmd /c "git ls-remote https://github.com/$upstream HEAD >nul 2>&1"
  if ($LASTEXITCODE -eq 0) { $ok = $true; break }
  Log "第 $i/$Attempts 次：网络未通，15 秒后重试..."
  Start-Sleep -Seconds 15
}
if (-not $ok) { Log "网络在等待窗口内未恢复；分支与提交已在本地就绪，可稍后重跑本脚本。"; exit 2 }
Log "网络已通。"

# ---- 2. 凭据 ----
$cred = "protocol=https`nhost=github.com`n`n" | git credential fill 2>$null
$user = ($cred | Select-String '^username=(.+)$').Matches[0].Groups[1].Value
$token = ($cred | Select-String '^password=(.+)$').Matches[0].Groups[1].Value
$hdr = @{ Authorization = "token $token"; Accept = "application/vnd.github+json"; 'User-Agent' = 'q-a-eco' }
$me = (Invoke-RestMethod -Uri "https://api.github.com/user" -Headers $hdr -TimeoutSec 30).login
Log "身份：$me"

# ---- 3. 确保 fork 存在 ----
try { $null = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$upstream/forks" -Headers $hdr -TimeoutSec 60; Log "已请求建 fork，等待 15s"; Start-Sleep -Seconds 15 }
catch { Log "fork 可能已存在，继续" }

# ---- 4. 推送分支到 fork ----
Set-Location $localRoot
$forkUrl = "https://github.com/$me/Q_A_Test.git"
Log "推送 $branch -> $forkUrl"
git push -u $forkUrl $branch 2>&1 | Select-Object -Last 3
if ($LASTEXITCODE -ne 0) { Log "推送失败（网络或凭据问题），可重跑。"; exit 3 }

# ---- 5. 创建 PR ----
$body = @'
## 概要

生态侧（基于 opencode 的协作开发）在 Q_A_Test 内核之上完成的前后端展示版、工具链与文档，作为**一份独立交付**提交，供评估与合并。

内容统一置于 `Ecosystem/`：

- **app/** —— 内核控制台：8 视图 Web 前端（原生 HTML/CSS/JS，离线/在线双模式）+ 零依赖 Node 后端（`/api/v1` 契约，含可替换接口层）+ 工具链（一键自检 `check-all`、离线快照生成、实例矩阵、插件可选）
- **vscode-q_a_lan/** —— VSCode 插件 0.2.0：`.lan`/`.pi` 语法高亮 + 实时校验 + 常数展开 + 格式化（引擎与控制台同源，已打包 `.vsix`）
- **交付/** —— 项目简介、对接说明、商业计划书、行业背景（Word）
- **README.md / 项目手册.md / LICENSE.txt** —— 入口、内部维护手册、许可以及说明

说明：
- **不含内核本体**（不修改 `Lib/`、`Lib.h.cpp/`、案例源码等），仅在仓库内新增 `Ecosystem/` 目录；
- 前端接口层可替换：内核插件接口就绪后以 `KERNEL_MODE=kernel` 接入，页面零改动；
- 网络原因，本仓库的另两处小修补（Interpreter 空头占位、文档悬空链接）亦包含在本次分支历史中，与 PR #1 内容重叠，可按需取舍。

供评估。
'@
$pr = @{ title = "生态侧交付：内核控制台 + 工具链 + VSCode 插件 + 文档（Ecosystem/）"; body = $body; head = ($me + ':' + $branch); base = "master" } | ConvertTo-Json
$tmp = Join-Path $env:TEMP "eco-pr.json"
[System.IO.File]::WriteAllText($tmp, $pr, (New-Object System.Text.UTF8Encoding($false)))
try {
  $r = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$upstream/pulls" -Headers $hdr -InFile $tmp -ContentType "application/json" -TimeoutSec 60
  Log "✅ PR 创建成功 #$($r.number)"
  Log "URL: $($r.html_url)"
} catch {
  Log "PR 创建失败：$($_.Exception.Message)"
  try { $err = $_.ErrorDetails.Message; if ($err) { Log $err } } catch {}
  exit 4
}
