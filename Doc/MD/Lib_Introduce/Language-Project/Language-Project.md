# Language项目

***

Language项目负责提供文本流的相关操作，用于满足庞杂系统针对文本流的操作需求。其中Stream_Base完成对流元素的基本定义和操作。

基于 E_S_M 框架的语言/词法库，提供 ANSI 字符集合族、文本流的裁剪与转换，以及词法分析用的确定状态机（DeteminingState，历史拼写）结构。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| Stream_Base | [Stream_Base](Stream_Base/Stream_Base.md) | 11 |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| C_ANSI_Char.h | Lib.h.cpp/Language/h.cpp/C_ANSI_Char.h |
| Stream_Base.h | Lib.h.cpp/Language/h.cpp/Stream_Base.h |
| Lex_Base.h | Lib.h.cpp/Language/h.cpp/Lex_Base.h |

***

## 说明

- StreamSetTest 等集合判定函数并入所属集合文档，不单独成文。
- DeteminingState* 命名为历史拼写（规范拼写 Determining），文档一律保留原符号并加注。
- 语义由头文件声明、结构常量与命名约定推断。
- 在使用Language库时，可以使用源文件 “All_Language.h" 直接引入所有源文件，也可以单独引入单个文件来使用。整个Language项目打包成一个lib库，链接时会导入所有源文件。

***
