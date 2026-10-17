// demo_const.cpp —— qaconst.hpp 自测
// 编译：cl /EHsc /std:c++17 demo_const.cpp
#include <cassert>
#include <iostream>
#include "qaconst.hpp"

int main() {
  const std::string src =
      "{\n}\n{\n    const UIntTen = 10;\n    NewUIntElement\n    EmptyElement\n"
      "    UIntA\n    Tractable\n}\n";

  auto decls = qa::parseConsts(src);
  assert(decls.size() == 1);
  assert(decls[0].name == "UIntTen" && decls[0].value == 10);

  auto r = qa::expandConstants(src);
  assert(r.lan.find("const UIntTen") == std::string::npos);
  assert(r.pi.size() == 1 && r.pi[0] == "UIntTen UInt 10 Unlimited Login");

  // 1 个 NewUIntElement + 10 个 UIntSuccessor
  size_t n = 0, pos = 0;
  while ((pos = r.lan.find("UIntSuccessor", pos)) != std::string::npos) { ++n; ++pos; }
  assert(n == 10);

  auto over = qa::expandConstants("const Huge = 9999;\n{\n}\n{\n}");
  assert(over.warnings.size() == 1 && over.decls.empty());

  std::cout << "[qaconst] all tests passed\n";
  return 0;
}
