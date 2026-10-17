// demo_server.cpp —— qacomm + qaconst 演示：内核侧插件的最小 HTTP 服务
// 编译：cl /EHsc /std:c++17 demo_server.cpp
// 运行：demo_server.exe            （持续服务，Ctrl+C 退出）
//       demo_server.exe --once     （只处理一次请求，便于测试）
#include <iostream>
#include <string>
#include "qacomm.hpp"
#include "qaconst.hpp"

int main(int argc, char** argv) {
  qa::HttpServer server;

  auto handler = [](const qa::Request& req) -> qa::Response {
    qa::Response res;
    if (req.path == "/api/v1/status") {
      res.body = qa::okJson(
          "{\"mode\":\"kernel-plugin\",\"name\":\"qacomm-demo\","
          "\"version\":\"0.1.0\",\"capabilities\":[\"status\",\"const\"]}");
      return res;
    }
    if (req.path == "/api/v1/const/expand" && req.method == "POST") {
      auto r = qa::expandConstants(req.body);
      std::string data = "{\"lan\":\"" + qa::jsonEscape(r.lan) + "\",\"piCount\":" +
                         std::to_string(r.pi.size()) + ",\"warningCount\":" +
                         std::to_string(r.warnings.size()) + "}";
      res.body = qa::okJson(data);
      return res;
    }
    res.status = 404;
    res.body = qa::errJson("not found");
    return res;
  };

  if (!server.start(3799, handler)) {
    std::cerr << "[qacomm] start failed\n";
    return 1;
  }
  std::cout << "[qacomm] listening on http://127.0.0.1:3799\n";
  std::cout << "[qacomm] GET /api/v1/status ; POST /api/v1/const/expand\n";

  if (argc > 1 && std::string(argv[1]) == "--once") server.runOnce();
  else server.runLoop();
  return 0;
}
