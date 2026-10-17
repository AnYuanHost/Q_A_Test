# Solution项目

***

解决方案库，是系统上层的应用框架：提供解决方案语言（Solution_Language）、解释/信息管理器（Solution_Manager）、解决方案工厂（SolutionFactory）、解决方案与 KRS 对接（Solution）及地址构造（AddressCreater）。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| AddressCreater | [AddressCreater](AddressCreater/AddressCreater.md) | 7 |
| InformationCreater | [InformationCreater](InformationCreater/InformationCreater.md) | 0 |
| Solution | [Solution](Solution/Solution.md) | 14 |
| Solution_Language | [Solution_Language](Solution_Language/Solution_Language.md) | 89 |
| Solution_Manager | [Solution_Manager](Solution_Manager/Solution_Manager.md) | 42 |
| Solution_Language_Syntax | [Solution_Language_Syntax](Solution_Language_Syntax/Solution_Language_Syntax.md) | 2 |
| SolutionFactory | [SolutionFactory](SolutionFatcory/SolutionFactory_MD.md) | 8 |
| SolutionBootstrap（文档未生成） | - | - |
| SolutionMatch（文档未生成） | - | - |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| Solution_Language.h | Lib.h.cpp/Solution/h.cpp/Solution_Language.h |
| Solution_Manager.h | Lib.h.cpp/Solution/h.cpp/Solution_Manager.h |
| SolutionFactory.h | Lib.h.cpp/Solution/h.cpp/SolutionFactory.h |
| Solution.h | Lib.h.cpp/Solution/h.cpp/Solution.h |
| AddressCreater.h | Lib.h.cpp/Solution/h.cpp/AddressCreater.h |

***

## 说明

- 目录名 SolutionFatcory 为历史错拼。AddressCreaterTransform 与 ReleaseAddressCreater 见 [AddressCreater_hcpp](AddressCreater/AddressCreater_hcpp.md)。
- 历史拼写 Langauge（RecursionDataConstructSolutionLangaugeNodeOrderParameter）与 Secound（SolutionFactorySecoundNodeOrder 族）保留原符号并加注。
- FstreamSolutionLanguageInformationTest 等集合判定函数并入所属集合文档，测试运行器不单独成文。
- 语义由头文件声明、结构常量与命名约定推断。

***
