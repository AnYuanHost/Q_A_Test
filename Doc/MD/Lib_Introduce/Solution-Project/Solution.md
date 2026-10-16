# Solution 项目

解决方案库，是系统上层的应用框架：提供解决方案语言（Solution_Language）、解释/信息管理器（Solution_Manager）、解决方案工厂（SolutionFactory）、解决方案与 KRS 对接（Solution）及地址构造（AddressCreater）。

## 源文件

| 头文件 | 路径 |
| --- | --- |
| Solution_Language.h | Lib.h.cpp/Solution/h.cpp/Solution_Language.h |
| Solution_Manager.h | Lib.h.cpp/Solution/h.cpp/Solution_Manager.h |
| SolutionFactory.h | Lib.h.cpp/Solution/h.cpp/SolutionFactory.h |
| Solution.h | Lib.h.cpp/Solution/h.cpp/Solution.h |
| AddressCreater.h | Lib.h.cpp/Solution/h.cpp/AddressCreater.h |

## 模块

| 模块 | 模块索引 | 本文档库生成实体 |
| --- | --- | --- |
| Solution_Language | [Solution_Language](Solution/Solution_Language/Solution_Language.md) | 23 |
| Solution_Manager | [Solution_Manager](Solution/Solution_Manager/Solution_Manager.md) | 9 |
| SolutionFactory | [SolutionFactory](Solution/SolutionFactory/SolutionFactory.md) | 14 |
| Solution | [Solution](Solution/Solution/Solution.md) | 2 |
| AddressCreater | [AddressCreater](Solution/AddressCreater/AddressCreater.md) | 2 |

## 说明

- 固定文档库 [Solution-Project](D:/AGI/Q_A/AI0001/Q_A/Doc/MD/Lib_Introduce/Solution-Project/) 已覆盖的实体不在本目录重复生成，详见各模块索引「已在固定文档库完成」一节。固定库目录名 SolutionFatcory 为历史错拼。AddressCreaterTransform 与 ReleaseAddressCreater 由固定库 AddressCreater_hcpp.md 承载，视为已覆盖。
- 历史拼写 Langauge（RecursionDataConstructSolutionLangaugeNodeOrderParameter）与 Secound（SolutionFactorySecoundNodeOrder 族）保留原符号并加注。
- FstreamSolutionLanguageInformationTest 等集合判定函数并入所属集合文档，测试运行器不单独成文。
- 语义由头文件声明、结构常量与命名约定推断。
