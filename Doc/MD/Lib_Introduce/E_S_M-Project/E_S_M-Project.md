# E_S_M项目

***

E_S_M项目负责向整个解决方案提供基本的元素-集合-映射结构和基本操作方法。其中，E_S_M负责提供结构体。ESM_Base则负责提供基本操作的封装，辅助上层模块快速操作元素。Exception提供基础的异常操作。E_S_M库为整个庞杂项目提供了最基础的方法。

E_S_M（Element/Set/Map）框架的基础库，提供元素、集合、映射的核心结构与基本操作。本库所有其他项目均构建于此框架之上。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| E_S_M | [E_S_M](E_S_M/E_S_M.md) | 4 |
| ESM_Base | [ESM_Base](ESM_Base/ESM_Base.md) | 52 |
| Exception | [Exception](Exception/Exception.md) | 4 |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| ESM_Base.h | Lib.h.cpp/E_S_M/h.cpp/ESM_Base.h |
| Exception.h | Lib.h.cpp/E_S_M/h.cpp/Exception.h |
| E_S_M.h | Lib.h.cpp/E_S_M/h.cpp/E_S_M.h |

***

## 说明

- 集合判定函数（如 ExceptionSetTest）并入所属集合文档，测试运行器不单独成文。
- 语义由头文件声明、结构常量与命名约定推断。
- 在使用E_S_M库时，可以使用源文件 “All_E_S_M.h" 直接引入所有源文件，也可以单独引入单个文件来使用。整个E_S_M项目打包成一个lib库，链接时会导入所有源文件。

***
