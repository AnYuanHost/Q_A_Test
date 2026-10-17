# Language 项目

基于 E_S_M 框架的语言/词法库，提供 ANSI 字符集合族、文本流的裁剪与转换，以及词法分析用的确定状态机（DeteminingState，历史拼写）结构。

## 源文件

| 头文件 | 路径 |
| --- | --- |
| C_ANSI_Char.h | Lib.h.cpp/Language/h.cpp/C_ANSI_Char.h |
| Stream_Base.h | Lib.h.cpp/Language/h.cpp/Stream_Base.h |
| Lex_Base.h | Lib.h.cpp/Language/h.cpp/Lex_Base.h |

## 模块

| 模块 | 模块索引 | 本文档库生成实体 |
| --- | --- | --- |
| C_ANSI_Char | [C_ANSI_Char](Language/C_ANSI_Char/C_ANSI_Char.md) | 9 |
| Stream_Base | [Stream_Base](Language/Stream_Base/Stream_Base.md) | 7 |
| Lex_Base | [Lex_Base](Language/Lex_Base/Lex_Base.md) | 18 |

## 说明

- 固定文档库 [Language-Project](D:/AGI/Q_A/AI0001/Q_A/Doc/MD/Lib_Introduce/Language-Project/) 已覆盖的实体（StreamSet、StringSet、StreamLexicographicalOrderBefore 等）不在本目录重复生成，详见各模块索引「已在固定文档库完成」一节。
- StreamSetTest 等集合判定函数并入所属集合文档，不单独成文。
- DeteminingState* 命名为历史拼写（规范拼写 Determining），文档一律保留原符号并加注。
- 语义由头文件声明、结构常量与命名约定推断。
