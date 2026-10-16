# Math项目

***

Math项目被打包成一个静态库，用于提供一系列的基础数学操作，以及超索引的相关操作。

基于 E_S_M 框架的数学库，提供布尔/整型/浮点运算、超索引集合、表达式结构、线性代数容器与数据评估（K-Means、闵可夫斯基距离）接口。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| Math_Base | [Math_Base](Math_Base/Math_Base.md) | 18 |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| Math_Base.h | Lib.h.cpp/Math/h.cpp/Math_Base.h |
| Expression_Base.h | Lib.h.cpp/Math/h.cpp/Expression_Base.h |
| Linear_Algebra.h | Lib.h.cpp/Math/h.cpp/Linear_Algebra.h |
| Set_Base.h | Lib.h.cpp/Math/h.cpp/Set_Base.h |
| Data.h | Lib.h.cpp/Math/h.cpp/Data.h |

***

## 说明

- 集合判定函数并入所属集合文档，测试运行器不单独成文。
- 语义由头文件声明、结构常量与命名约定推断。
- 在使用Math库时，可以使用源文件 “All_Math.h" 直接引入所有源文件，也可以单独引入单个文件来使用。整个Math项目打包成一个lib库，链接时会导入所有源文件。

***
