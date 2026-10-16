# ESM_Manage项目

***

ESM_Manage项目负责向智能体提供一系列的元素管理工具，包括静态管理和动态管理两部分。静态管理主要负责对静态库各个元素的追踪，以方便内核快速调用相关指令及静态元素。动态管理则负责智能体运行时动态分配的元素的管理。

元素管理工具库，提供 E_S_M 框架的异常码、静态库（Lib）检索、参数序偶结构、元素环境（EES）基座及子检索器（SubEES）的辅助接口。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| EES_Base | [EES_Base](EES_Base/EES_Base.md) | 40 |
| ElementEnvironment | [ElementEnvironment](ElementEnvironment/ElementEnvironment.md) | 13 |
| SubEES_8Bit | [SubEES_8Bit](SubEES_8Bit/SubEES_8Bit.md) | 26 |
| SubEES_LexOrder | [SubEES_LexOrder](SubEES_LexOrder/SubEES_LexOrder.md) | 23 |
| SubEES_SuperIndex | [SubEES_SuperIndex](SubEES_SuperIndex/SubEES_SuperIndex.md) | 23 |
| Environment_Interface | [Environment_Interface](Environment_Interface/Environment_Interface.md) | 0 |
| Sub_EES_Interface | [Sub_EES_Interface](Sub_EES_Interface/Sub_EES_Interface.md) | 0 |

***

## 案例

| 案例 | 说明 |
| --- | --- |
| [8Bit_Sub_EES_Test_Case](EES_Manage_Case/8Bit_Sub_EES_Test_Case.md) | 本案例展示8比特子检索器如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。 |
| [EES_Base_Case](EES_Manage_Case/EES_Base_Case.md) | 总元素环境检索器的生命周期跟随智能体的承载元素零轮询机。在开始构造智能体时，便为其构造总元素环境检索器。智能体完成所有任务准备注销时，也会先注销总元素环境检索器。本案例关注于总元素环境检索器的整个生命周期，包括创建，使用和注销。在使用阶段，也会展示超索引子检索器和8比特子检索器的使用。 |
| [Element_Environemnt_Case](EES_Manage_Case/Element_Environemnt_Case.md) | 本案例展示元素怒环境如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。 |
| [LexOrder_Sub_EES_Test_Case](EES_Manage_Case/LexOrder_Sub_EES_Test_Case.md) | 本案例展示字典序子检索器如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。 |
| [Sub_EES_Test_Case](EES_Manage_Case/Sub_EES_Test_Case.md) | - |
| [SuperIndex_Searcher_Case](EES_Manage_Case/SuperIndex_Searcher_Case.md) | 本案例展示超索引检索器如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。 |
| [SuperIndex_Sub_EES_Test_Case](EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md) | 本案例展示超索引子检索器如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。 |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| ESM_Exception.h | Lib.h.cpp/ESM_Manage/h.cpp/ESM_Exception.h |
| ESM_Manage.h | Lib.h.cpp/ESM_Manage/h.cpp/ESM_Manage.h |
| ESM_Manage_Lib.h | Lib.h.cpp/ESM_Manage/h.cpp/ESM_Manage_Lib.h |
| ESM_Parameter.h | Lib.h.cpp/ESM_Manage/h.cpp/ESM_Parameter.h |
| EES_Base.h | Lib.h.cpp/ESM_Manage/h.cpp/EES_Base.h |
| ElementEnvironment.h | Lib.h.cpp/ESM_Manage/h.cpp/ElementEnvironment.h |
| SubEES_SuperIndex.h | Lib.h.cpp/ESM_Manage/h.cpp/SubEES_SuperIndex.h |
| SubEES_8Bit.h | Lib.h.cpp/ESM_Manage/h.cpp/SubEES_8Bit.h |
| SubEES_LexOrder.h | Lib.h.cpp/ESM_Manage/h.cpp/SubEES_LexOrder.h |

***

## 说明

- 纯测试运行器（如 EESTotalTest、SuperIndexSearcherTest）不单独成文。
- 语义由头文件声明、结构常量与命名约定推断。
- 在使用ESM_Manage库时，可以使用源文件 “All_ESM_Manage.h" 直接引入所有源文件，也可以单独引入单个文件来使用。整个ESM_Manage项目打包成一个lib库，链接时会导入所有源文件。

***
