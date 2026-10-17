// qaconst.hpp —— 解决方案脚本常数预处理（C++17，header-only）
//
// 把脚本中的 `const Name = N;` 展开为内核可直接接受的节点序列，并生成 .pi 参数行。
// 与生态层 `web/js/lan-toolkit.js` 的 expandConstants 行为一致（同一套规则）。
//
// 用法：
//   auto r = qa::expandConstants(source);
//   r.lan   -> 展开后的脚本
//   r.pi    -> 需追加到 .pi 的参数行
//
// 说明：仅做文本级预处理，不依赖内核；适合作为"路线 B（预处理宏）"的参考实现。
#pragma once

#include <algorithm>
#include <cctype>
#include <regex>
#include <sstream>
#include <string>
#include <vector>

namespace qa {

struct ConstDecl {
  std::string name;
  int value = 0;
  int line = 0;  // 1-based
};

struct ExpandResult {
  bool ok = true;
  std::string lan;
  std::vector<std::string> pi;
  std::vector<ConstDecl> decls;
  std::vector<std::string> warnings;
};

namespace detail {

inline std::string trim(const std::string& s) {
  size_t a = 0, b = s.size();
  while (a < b && std::isspace(static_cast<unsigned char>(s[a]))) ++a;
  while (b > a && std::isspace(static_cast<unsigned char>(s[b - 1]))) --b;
  return s.substr(a, b - a);
}

inline std::vector<std::string> splitLines(const std::string& src) {
  std::vector<std::string> out;
  std::string cur;
  for (char c : src) {
    if (c == '\r') continue;
    if (c == '\n') { out.push_back(cur); cur.clear(); }
    else cur.push_back(c);
  }
  out.push_back(cur);
  return out;
}

}  // namespace detail

// 解析所有 const 声明（行级，允许缩进）
inline std::vector<ConstDecl> parseConsts(const std::string& source) {
  static const std::regex re(R"(^\s*const\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(\d+)\s*;\s*$)");
  std::vector<ConstDecl> out;
  auto lines = detail::splitLines(source);
  for (size_t i = 0; i < lines.size(); ++i) {
    std::smatch m;
    if (std::regex_match(lines[i], m, re)) {
      ConstDecl d;
      d.name = m[1].str();
      d.value = std::stoi(m[2].str());
      d.line = static_cast<int>(i + 1);
      out.push_back(d);
    }
  }
  return out;
}

// 展开常数；maxValue 防止误写巨值撑爆脚本
inline ExpandResult expandConstants(const std::string& source, int maxValue = 255) {
  static const std::regex re(R"(^\s*const\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(\d+)\s*;\s*$)");
  ExpandResult r;
  auto lines = detail::splitLines(source);

  std::ostringstream lan;
  for (const auto& line : lines) {
    if (std::regex_match(line, re)) continue;  // 删除 const 声明行
    lan << line << "\n";
  }

  for (const auto& d : parseConsts(source)) {
    if (d.value > maxValue) {
      r.warnings.push_back("const " + d.name + " = " + std::to_string(d.value) +
                           " 超过展开上限 " + std::to_string(maxValue) + "，已跳过");
      continue;
    }
    r.decls.push_back(d);
    r.pi.push_back(d.name + " UInt " + std::to_string(d.value) + " Unlimited Login");

    lan << "\n    // ---- 常数 " << d.name << " = " << d.value << " ----\n";
    lan << "    NewUIntElement\n    EmptyElement\n    " << d.name << "\n    TraUntractable\n";
    for (int k = 0; k < d.value; ++k) {
      lan << "    UIntSuccessor\n    " << d.name << "\n    " << d.name << "\n    TraUntractable\n";
    }
  }

  r.lan = lan.str();
  return r;
}

}  // namespace qa
