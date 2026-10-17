# 内核侧 C++ 库（qaconst / qacomm）

***

给内核侧插件准备的两个**header-only** C++17 库，用于"接近内核"的两件事：

- `qaconst.hpp` —— **常数预处理**：把 `.lan` 里的 `const Name = N;` 展开为节点序列 + `.pi` 行（路线 B 的参考实现）。
- `qacomm.hpp` —— **前端通信库**：最小 HTTP 服务（Winsock），实现 `/api/v1/*` 契约的任意子集，供控制台 `KERNEL_MODE=kernel` 对接。

***

## 1. 常数预处理（qaconst.hpp）

```cpp
#include "qaconst.hpp"

auto r = qa::expandConstants(source);   // source 为 .lan 文本
// r.lan  : 展开后的脚本
// r.pi   : 需追加到 .pi 的参数行
// r.decls: 解析到的常数
// r.warnings: 超限等提示
```

规则与生态侧 `web/js/lan-toolkit.js` 一致：`const X = N` → 1 个 `NewUIntElement` + N 个 `UIntSuccessor`。

## 2. 前端通信（qacomm.hpp）

```cpp
#include "qacomm.hpp"

qa::HttpServer server;
server.start(3799, [](const qa::Request& req) {
  qa::Response res;
  if (req.path == "/api/v1/status") res.body = qa::okJson("{\"mode\":\"kernel-plugin\"}");
  else { res.status = 404; res.body = qa::errJson("not found"); }
  return res;
});
server.runLoop();
```

控制台侧：

```powershell
$env:KERNEL_MODE="kernel"; $env:KERNEL_ENDPOINT="http://127.0.0.1:3799"
node app\server\server.js
```

前端零改动——`kernel-adapter` 会把 `/api/v1/*` 转发到该端点。

## 3. 编译与自测

```powershell
# 在 "x64 Native Tools Command Prompt for VS 2026" 中：
cl /nologo /EHsc /std:c++17 /utf-8 demo_const.cpp  /Fe:demo_const.exe
cl /nologo /EHsc /std:c++17 /utf-8 demo_server.cpp /Fe:demo_server.exe

demo_const.exe
demo_server.exe          # 监听 127.0.0.1:3799
```

> 必须加 `/utf-8`：源文件为 UTF-8（无 BOM），否则 MSVC 会按 GBK 解析中文字符串而报语法错误。

## 4. 协议约定（v1）

统一响应包：

```json
{ "ok": true, "data": { } }
{ "ok": false, "error": "..." }
```

最小端点集（按需实现任意子集）：

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/v1/status` | 模式、能力列表、版本 |
| GET | `/api/v1/superindex?limit=N` | 超索引单元 |
| GET | `/api/v1/solutions` | 解决方案文件 |
| GET | `/api/v1/domains` | 知识域 |
| GET | `/api/v1/plugins` | 插件清单（若插件平台实现） |
| POST | `/api/v1/question` | 问答 |

未实现的端点由控制台自动降级，不影响其他功能。

***

## 5. 文件

| 文件 | 说明 |
|---|---|
| `qaconst.hpp` | 常数预处理（header-only） |
| `qacomm.hpp` | HTTP 通信库（header-only，Winsock） |
| `demo_const.cpp` | 常数预处理自测（含断言） |
| `demo_server.cpp` | 通信库演示（status + const/expand） |
