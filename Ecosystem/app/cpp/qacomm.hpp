// qacomm.hpp —— 内核插件 ↔ 前端 的最小通信库（C++17 / Winsock，header-only）
//
// 目标：给内核侧插件一个"能被前端控制台调用"的最小 HTTP 服务：
//   - 实现 /api/v1/* 契约的任意子集（统一响应包 {"ok":true,"data":...}）
//   - 与生态侧控制台的 KERNEL_MODE=kernel + KERNEL_ENDPOINT=... 对接
//
// 说明：单线程阻塞循环，适合原型/内嵌插件；生产可替换为异步 IO。
#pragma once

#define WIN32_LEAN_AND_MEAN
#include <winsock2.h>
#include <ws2tcpip.h>
#pragma comment(lib, "ws2_32.lib")

#include <functional>
#include <map>
#include <sstream>
#include <string>

namespace qa {

struct Request {
  std::string method;
  std::string path;
  std::string body;
  std::map<std::string, std::string> headers;
};

struct Response {
  int status = 200;
  std::string contentType = "application/json; charset=utf-8";
  std::string body = "{\"ok\":true,\"data\":{}}";
};

// 极简 JSON 转义（够用于状态/错误信息）
inline std::string jsonEscape(const std::string& s) {
  std::ostringstream o;
  for (char c : s) {
    switch (c) {
      case '"': o << "\\\""; break;
      case '\\': o << "\\\\"; break;
      case '\n': o << "\\n"; break;
      case '\r': o << "\\r"; break;
      case '\t': o << "\\t"; break;
      default:
        if (static_cast<unsigned char>(c) < 0x20) o << ' ';
        else o << c;
    }
  }
  return o.str();
}

inline std::string okJson(const std::string& dataJson = "{}") {
  return "{\"ok\":true,\"data\":" + dataJson + "}";
}
inline std::string errJson(const std::string& msg) {
  return "{\"ok\":false,\"error\":\"" + jsonEscape(msg) + "\"}";
}

class HttpServer {
 public:
  using Handler = std::function<Response(const Request&)>;

  bool start(int port, Handler handler, const char* host = "127.0.0.1") {
    WSADATA wsa;
    if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0) return false;

    listen_ = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (listen_ == INVALID_SOCKET) return false;

    sockaddr_in addr{};
    addr.sin_family = AF_INET;
    addr.sin_port = htons(static_cast<u_short>(port));
    inet_pton(AF_INET, host, &addr.sin_addr);
    if (bind(listen_, reinterpret_cast<sockaddr*>(&addr), sizeof(addr)) == SOCKET_ERROR) return false;
    if (listen(listen_, SOMAXCONN) == SOCKET_ERROR) return false;

    handler_ = std::move(handler);
    running_ = true;
    return true;
  }

  // 阻塞运行；返回一次处理即退出（便于测试）。loop=true 时持续服务。
  void runOnce() {
    if (!running_) return;
    SOCKET c = accept(listen_, nullptr, nullptr);
    if (c == INVALID_SOCKET) return;
    handleClient(c);
    closesocket(c);
  }

  void runLoop() { while (running_) runOnce(); }

  void stop() {
    running_ = false;
    if (listen_ != INVALID_SOCKET) { closesocket(listen_); listen_ = INVALID_SOCKET; }
    WSACleanup();
  }

  ~HttpServer() { stop(); }

 private:
  SOCKET listen_ = INVALID_SOCKET;
  bool running_ = false;
  Handler handler_;

  static std::string recvAll(SOCKET c) {
    std::string data;
    char buf[4096];
    int n;
    while ((n = recv(c, buf, sizeof(buf), 0)) > 0) {
      data.append(buf, n);
      if (data.find("\r\n\r\n") != std::string::npos) {
        // 若声明了 Content-Length，继续读到足够长度
        auto hp = data.find("Content-Length:");
        if (hp == std::string::npos) hp = data.find("content-length:");
        if (hp == std::string::npos) break;
        auto eol = data.find("\r\n", hp);
        int len = std::atoi(data.substr(hp + 15, eol - hp - 15).c_str());
        auto bodyPos = data.find("\r\n\r\n") + 4;
        if (static_cast<int>(data.size() - bodyPos) >= len) break;
      }
      if (data.size() > 1024 * 1024) break;
    }
    return data;
  }

  void handleClient(SOCKET c) {
    std::string raw = recvAll(c);
    Request req;
    auto headEnd = raw.find("\r\n\r\n");
    std::string head = headEnd == std::string::npos ? raw : raw.substr(0, headEnd);
    req.body = headEnd == std::string::npos ? "" : raw.substr(headEnd + 4);

    std::istringstream hs(head);
    std::string line;
    std::getline(hs, line);
    std::istringstream first(line);
    std::string version;
    first >> req.method >> req.path >> version;
    while (std::getline(hs, line)) {
      if (!line.empty() && line.back() == '\r') line.pop_back();
      auto p = line.find(':');
      if (p != std::string::npos) {
        std::string k = line.substr(0, p), v = line.substr(p + 1);
        while (!v.empty() && v.front() == ' ') v.erase(v.begin());
        req.headers[k] = v;
      }
    }

    Response res;
    try {
      res = handler_ ? handler_(req) : Response{};
    } catch (const std::exception& e) {
      res.status = 500;
      res.body = errJson(e.what());
    }

    std::ostringstream out;
    out << "HTTP/1.1 " << res.status << " OK\r\n"
        << "Content-Type: " << res.contentType << "\r\n"
        << "Content-Length: " << res.body.size() << "\r\n"
        << "Access-Control-Allow-Origin: *\r\n"
        << "Connection: close\r\n\r\n"
        << res.body;
    std::string s = out.str();
    send(c, s.c_str(), static_cast<int>(s.size()), 0);
  }
};

}  // namespace qa
