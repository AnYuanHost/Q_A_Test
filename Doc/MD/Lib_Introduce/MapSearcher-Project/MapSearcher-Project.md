# MapSearcher项目

***

MapSearcher项目为庞杂系统提供映射搜索的服务。通过构建一个个搜索者，便可以为轮询机等模块提供通用的映射解释方法，以从整个知识环境中获得对应的信息。

基于 E_S_M 框架的通用映射检索器库，提供检索器序的构造、登录/登出调度与整检索器检索/释放接口。上层的 KRS 与轮询驱动模块通过它定位映射表单。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| UniversalMapSearcher | [UniversalMapSearcher](UniversalMapSearcher/UniversalMapSearcher.md) | 0 |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| UniversalMapSearcher.h | Lib.h.cpp/MapSearcher/h.cpp/UniversalMapSearcher.h |

***

## 说明

- UniversalMapSearcher 主结构文档已成文；SelectUniversalMapSearcher 与 ReleaseUniversalMapSearcher 仅被正文提及、无独立文档（文档未生成）。
- 语义由头文件声明、结构常量与命名约定推断。
- 在使用MapSearcher库时，可以使用源文件 “All_MapSearcher.h" 直接引入所有源文件，也可以单独引入单个文件来使用。整个MapSearcher项目打包成一个lib库，链接时会导入所有源文件。

***
