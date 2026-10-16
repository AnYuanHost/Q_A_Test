# 案例矩阵实测：逐个切换 Q_A_Test 的 SwitchCase，构建+运行，收集真实结果
# 产出：app\server\data\case-results.json（供前端"内核实测"视图展示）
$ErrorActionPreference = 'SilentlyContinue'

$root = "F:\000000\QSX20261480\disk\学习\zyq\Q_A_Test-master"
$msb  = "C:\Program Files\Microsoft Visual Studio\18\MSBuild\Current\Bin\MSBuild.exe"
$main = "$root\h.cpp\Main.cpp"
$outJson = "F:\000000\QSX20261480\disk\学习\zyq\app\server\data\case-results.json"

# 案例清单：常量名 -> 说明
$cases = @(
  @{ const = 'ElementOrder_Case_Code_0';        name = 'ElementOrder 案例1' }
  @{ const = 'ElementOrder_Case_Code_1';        name = 'ElementOrder 案例2' }
  @{ const = 'Active_Map_Use_Case_Code';        name = 'Active Map 使用案例' }
  @{ const = 'Thread_Base_Case_Code';           name = '线程基础案例' }
  @{ const = 'EES_Base_Case_Code';              name = 'EES 基础案例' }
  @{ const = '_8Bit_Sub_EES_Case_Code';         name = '8Bit 子 EES 案例' }
  @{ const = 'SuperIndex_Sub_EES_Case_Code';    name = '超索引子 EES 案例' }
  @{ const = 'ElementEnvironment_Case_Code';    name = '元素环境案例' }
  @{ const = 'SuperIndex_Searcher_Case_Code';   name = '超索引检索器案例' }
)

# 备份 KRS 防写坏，备份 Main.cpp
$krsBak = "C:\Users\Administrator\AppData\Local\Temp\opencode\KRS_casebak"
if (Test-Path $krsBak) { Remove-Item $krsBak -Recurse -Force }
Copy-Item "$root\KRS" $krsBak -Recurse
$origMain = Get-Content $main -Raw -Encoding UTF8

$results = @()
$i = 0
foreach ($c in $cases) {
  $i++
  Write-Host "[$i/$($cases.Count)] $($c.name) ($($c.const))"

  # 1) 切换 SwitchCase（只改赋值行，保留其余内容）
  $content = $origMain -replace 'unsigned int SwitchCase = [A-Za-z0-9_]+;', "unsigned int SwitchCase = $($c.const);"
  Set-Content $main $content -Encoding UTF8 -NoNewline

  # 2) 构建
  $buildStart = Get-Date
  $buildOut = & $msb "$root\Q_A_Test.vcxproj" /p:Configuration=Debug /p:Platform=x64 /v:quiet /nologo 2>&1
  $buildMs = [int]((Get-Date) - $buildStart).TotalMilliseconds
  $buildOk = ($LASTEXITCODE -eq 0)
  $buildErr = ($buildOut | Where-Object { $_ -match 'error' } | Select-Object -First 1)

  $buildErrText = $null
  if ($buildErr) { $buildErrText = "$buildErr".Trim() }

  $item = [ordered]@{
    id          = $c.const
    name        = $c.name
    buildOk     = $buildOk
    buildMs     = $buildMs
    buildError  = $buildErrText
    runStatus   = $null
    runMs       = $null
    exitCode    = $null
    outputPreview = $null
    outputLines = $null
  }

  # 3) 运行（10 秒超时保护）
  if ($buildOk) {
    $exe = "$root\x64\Debug\Q_A_Test.exe"
    if (Test-Path $exe) {
      $psi = New-Object System.Diagnostics.ProcessStartInfo
      $psi.FileName = $exe
      $psi.WorkingDirectory = $root
      $psi.UseShellExecute = $false
      $psi.RedirectStandardOutput = $true
      $psi.RedirectStandardError = $true
      $runStart = Get-Date
      try {
        $proc = [System.Diagnostics.Process]::Start($psi)
        $done = $proc.WaitForExit(10000)
        $runMs = [int]((Get-Date) - $runStart).TotalMilliseconds
        if ($done) {
          $so = $proc.StandardOutput.ReadToEnd()
          $se = $proc.StandardError.ReadToEnd()
          $item.runStatus = 'exited'
          $item.exitCode  = $proc.ExitCode
          $item.runMs     = $runMs
          $lines = ($so -split "`r?`n") | Where-Object { $_ -ne '' }
          $item.outputLines = $lines.Count
          $preview = if ($lines.Count -gt 0) { ($lines | Select-Object -First 6) -join ' | ' } else { '' }
          if ($se) { $preview += " [STDERR: $($se.Substring(0, [Math]::Min(80, $se.Length)))]" }
          $item.outputPreview = $preview
        } else {
          $proc.Kill()
          $item.runStatus = 'polling-loop(10s未退出,已终止)'
          $item.runMs = $runMs
        }
      } catch {
        $item.runStatus = 'crash: ' + $_.Exception.Message
      }
    } else { $item.runStatus = 'exe missing' }
  }

  $results += [PSCustomObject]$item
  Start-Sleep -Milliseconds 300
}

# 恢复 Main.cpp 原件与 KRS
Set-Content $main $origMain -Encoding UTF8 -NoNewline
Remove-Item "$root\KRS" -Recurse -Force
Copy-Item $krsBak "$root\KRS" -Recurse
Remove-Item $krsBak -Recurse -Force

# 写 JSON（UTF8 无 BOM 友好：PS5.1 用 UTF8 会带 BOM，Node 读也能处理，这里用 .NET 写干净 UTF8）
$payload = [ordered]@{
  generatedAt = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss')
  toolchain   = 'VS2026 Community 18.11 (MSVC)'
  total       = $results.Count
  passed      = (@($results | Where-Object { $_.runStatus -eq 'exited' -and $_.exitCode -eq 0 })).Count
  cases       = $results
}
$json = $payload | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($outJson, $json, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "`n==== 汇总 ===="
$results | Format-Table name, buildOk, runStatus, exitCode, outputLines -AutoSize | Out-String
Write-Host "JSON -> $outJson"
