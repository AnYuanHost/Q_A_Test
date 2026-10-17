# 尝试向 AnYuanHost/Q_A_Test 发起 Pull Request（自动等待网络窗口）
# 前提：本机已有 GitHub 凭据（Git Credential Manager）
$ErrorActionPreference = 'Continue'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$repo = "AnYuanHost/Q_A_Test"
$localRoot = "F:\000000\QSX20261480\disk\学习\zyq\Q_A_Test-master"
function Log($m) { Write-Host ("[PR] " + $m) }

# ---- 1. 等待网络窗口（最多 15 分钟，每 20 秒试一次） ----
$ok = $false
for ($i = 1; $i -le 45; $i++) {
  cmd /c "git ls-remote https://github.com/AnYuanHost/Q_A_Test HEAD >nul 2>&1"
  if ($LASTEXITCODE -eq 0) { $ok = $true; break }
  Log "第 $i 次尝试：网络未通，20 秒后重试..."
  Start-Sleep -Seconds 20
}
if (-not $ok) { Log "15 分钟内网络未恢复，退出（可重跑本脚本）"; exit 2 }
Log "网络已通！"

# ---- 2. 取凭据 ----
$cred = "protocol=https`nhost=github.com`n`n" | git credential fill 2>$null
$user = ($cred | Select-String '^username=(.+)$').Matches[0].Groups[1].Value
$token = ($cred | Select-String '^password=(.+)$').Matches[0].Groups[1].Value
Log "凭据用户: $user"
if ($user -eq 'AnYuanHost') { Log "当前凭据就是仓库主人，无需 PR，直接 push 即可"; }

$hdr = @{ Authorization = "token $token"; Accept = "application/vnd.github+json"; 'User-Agent' = 'q-a-eco' }

# ---- 3. 确认身份 ----
$me = Invoke-RestMethod -Uri "https://api.github.com/user" -Headers $hdr -TimeoutSec 30
Log "API 身份: $($me.login)"

# ---- 4. Fork ----
try {
  $null = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$repo/forks" -Headers $hdr -TimeoutSec 60
  Log "Fork 请求已发送，等待 15 秒生成..."
  Start-Sleep -Seconds 15
} catch { Log "Fork 返回: $($_.Exception.Message)（可能已存在，继续）" }

# ---- 5. 本地准备干净分支（基于远程 master，只带我们的修复） ----
Set-Location $localRoot
git fetch origin 2>$null
git branch -D ecosystem-fixes 2>$null | Out-Null
git checkout -b ecosystem-fixes origin/master 2>$null
if ($LASTEXITCODE -ne 0) { Log "基于 origin/master 建分支失败"; exit 3 }

# 修复1：Interpreter 空头文件
New-Item -ItemType Directory -Path "Lib.h.cpp\Interpreter\h.cpp" -Force | Out-Null
Set-Content -Path "Lib.h.cpp\Interpreter\h.cpp\All_Interpreter.h" -Encoding UTF8 -Value @'
#pragma once

// [生态侧占位] 仓库 zip 快照缺失 Lib.h.cpp\Interpreter\ 目录（Lib\ 内有 Interpreter.lib）。
// 已验证 LexOrder_Sub_EES_Case.hpp 仅需本头文件存在、未使用 Interpreter 的任何符号，
// 故此空头文件即可恢复 LexOrder 案例的编译。待官方版本发布后替换本文件。
'@
# 修复2：文档悬空链接（origin/master 上的版本）
$mdPath = "Doc\MD\MainMarkDown.md"
$md = [System.IO.File]::ReadAllText($mdPath, [System.Text.Encoding]::UTF8)
$md = $md.Replace('## [庞杂系统介绍](Q_A_Introduce.md)', '## 庞杂系统介绍（暂以[文本资料目录](TextualMaterial/Catalogue.md)代替）')
[System.IO.File]::WriteAllText($mdPath, $md, (New-Object System.Text.UTF8Encoding($false)))

git add -A
git commit -m "生态侧修补：补 Interpreter 空头文件占位（恢复 LexOrder 案例编译）+ 修复文档入口悬空链接"
Log "分支提交完成: $(git log --oneline -1)"

# ---- 6. Push 到 fork ----
$forkUrl = "https://github.com/$($me.login)/Q_A_Test.git"
git push -u $forkUrl ecosystem-fixes 2>&1 | Select-Object -Last 2

# ---- 7. 创建 PR ----
$body = @'
## 概要

生态侧（opencode + 前端控制台）在本仓库上做开发时发现并修补了两个小问题，请评估是否合并。

### 1. 补 `Lib.h.cpp\Interpreter\h.cpp\All_Interpreter.h`（空头文件占位）

- 现状：`Lib\` 内有 `Interpreter.lib`，但 `Lib.h.cpp\Interpreter\` 目录整个缺失，导致 `LexOrder_Sub_EES_Case.hpp` 的 `#include<Interpreter/h.cpp/All_Interpreter.h>` 编译失败（C1083），`Q_A_Test` 项目无法构建
- 已验证：该案例未使用 Interpreter 的任何符号，仅需头文件存在
- 本 PR 放入带说明注释的空头文件 → LexOrder 案例回归，全部案例可构建
- 若官方头文件将发布，直接替换本文件即可

### 2. 修复 `Doc\MD\MainMarkDown.md` 入口悬空链接

- 原链接指向缺失的 `Q_A_Introduce.md`，现暂指向 `TextualMaterial\Catalogue.md` 并注明，待原件补齐后恢复

### 附：未包含在本 PR 的本地改动（供参考）

- `Lib\KRS_Lib.lib` 缺失导致 Execute 无法链接 → 本地按 `CoreKRS_Manager.h` 声明生成了分析用 stub 库（30 符号保守返回 false），仅用于构建/启动验证，不建议合入仓库
- 另发现 `Execute` 的 `LoadIntentionalityFunction` 中 `OpenFstreamFunction` 失败后未检查返回值，文件打不开时会以 0xC0000005 崩溃（运行时 CWD 必须是 exe 所在的 `x64\debug\` 目录，否则相对路径 `..\..\KRS` 会失效）——建议加失败防护

—— 生态侧（控制台前端 / VSCode 插件 / 脚本常数展开）协作方
'@
$pr = @{ title = "生态侧修补：Interpreter 空头占位（恢复 LexOrder）+ 文档悬空链接修复"; body = $body; head = "$($me.login):ecosystem-fixes"; base = "master" } | ConvertTo-Json
[System.IO.File]::WriteAllText("$env:TEMP\pr.json", $pr, (New-Object System.Text.UTF8Encoding($false)))
try {
  $result = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$repo/pulls" -Headers $hdr -InFile "$env:TEMP\pr.json" -ContentType "application/json" -TimeoutSec 60
  Log "✅ PR 创建成功！#$($result.number)"
  Log "URL: $($result.html_url)"
} catch {
  Log "PR 创建失败: $($_.Exception.Message)"
  try { $err = $_.ErrorDetails.Message; if ($err) { Log $err } } catch {}
  exit 4
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12