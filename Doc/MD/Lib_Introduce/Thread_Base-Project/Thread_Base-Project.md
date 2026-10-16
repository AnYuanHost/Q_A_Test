# Thread_Base项目

***

Thread_Base项目提供基本的线程操作。该静态库封装了std::thread的基本操作，并且提供了线程管理的一系列基础工具，以供庞杂系统分配资源执行线程。

基于 E_S_M 框架的线程基础库，提供线程元素的构造、激活、登录/登出与读取接口。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| Thread_Base | [Thread_Base](Thread_Base/Thread_Base.md) | 7 |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| Thread_Base.h | Lib.h.cpp/Thread_Base/h.cpp/Thread_Base.h |

***

## 说明

- 语义由头文件声明、结构常量与命名约定推断。
- 在使用Thread_Base库时，可以使用源文件 “All_Thread_Base.h" 直接引入所有源文件，也可以单独引入单个文件来使用。整个Thread_Base项目打包成一个lib库，链接时会导入所有源文件。

***
