# KRS_Lib 项目

核心 KRS 管理器库，提供核心 KRS 超索引字典、知识库信息体（核心KRS对象）、独立符号表与信息管理器的构造、释放、登录/登出调度、超索引/动态链接库/符号表/子元素环境（SubEES）读写与登记项槽位读写，以及 Windows 环境下核心 KRS 对象动态库的打开/关闭与符号表读取；并提供核心KRS库映射管理器（静态库映射表单的排序与结构信息写入）与核心KRS库Windows映射管理器（Windows动态库元素管理）。

## 源文件

| 头文件 | 路径 |
| --- | --- |
| CoreKRS_Manager.h | Lib.h.cpp/KRS_Lib/h.cpp/CoreKRS_Manager.h |
| WinCoreKRS_Manager.h | Lib.h.cpp/KRS_Lib/h.cpp/WinCoreKRS_Manager.h |
| CoreKRSLib_MapManager.h | Lib.h.cpp/KRS_Lib/h.cpp/CoreKRSLib_MapManager.h |
| CoreKRSLib_WinMapManager.h | Lib.h.cpp/KRS_Lib/h.cpp/CoreKRSLib_WinMapManager.h |

## 模块

| 模块 | 模块索引 | 本文档库生成实体 |
| --- | --- | --- |
| CoreKRS_Manager | [CoreKRS_Manager](KRS_Lib/CoreKRS_Manager/CoreKRS_Manager.md) | 60 |
| WinCoreKRS_Manager | [WinCoreKRS_Manager](KRS_Lib/WinCoreKRS_Manager/WinCoreKRS_Manager.md) | 3 |
| CoreKRSLib_MapManager | [CoreKRSLib_MapManager](KRS_Lib/CoreKRSLib_MapManager/CoreKRSLib_MapManager.md) | 17 |
| CoreKRSLib_WinMapManager（文档未生成） | - | - |

## 说明

- 固定文档库无 KRS_Lib-Project 目录，本项目实体全部由本文档库生成；术语参照 [KRS_Base-Project](D:/AGI/Q_A/AI0001/Q_A/Doc/MD/Lib_Introduce/KRS_Base-Project/)。
- `CoreKRS_Manager` 模块的 60 个实体分属四组：超索引字典（10）、知识库信息体（15）、符号表（19）、信息管理器（16）；另有一篇跨实体案例 [CoreKRSSymbolTable_Case](KRS_Lib/CoreKRS_Manager/CoreKRSSymbolTable_Case.md)。
- 信息体的符号表槽位与 [ReadDictionariesCoreKRSObject](KRS_Lib/WinCoreKRS_Manager/ReadDictionariesCoreKRSObject.md) 沿用历史命名 `Dictionaries`，语义即"符号表"。
- 分页家族（超索引字典、符号表、信息管理器）共用分页运行参数（页容量、末尾标志、扩容量、保留容量，默认 16 / 0 / 2 / 3）；[CoreKRSDictionaries_Struct](KRS_Lib/CoreKRS_Manager/CoreKRSDictionaries_Struct.md) 沿用历史声明形式（非 constexpr 的 `unsigned int`），其余结构命名空间为 `constexpr unsigned int`；[CoreKRSManager_Struct](KRS_Lib/CoreKRS_Manager/CoreKRSManager_Struct.md) 另设空位计数（CoreKRSM_EmptyNumber）。
- 语义由头文件声明、结构常量与命名约定推断。
