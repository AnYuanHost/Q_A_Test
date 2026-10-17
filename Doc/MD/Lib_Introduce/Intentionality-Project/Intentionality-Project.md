# Intentionality项目

***

Intentionality项目为庞杂系统提供意向性网络的工程化实现基础。意向性对象作为网络的节点（剥离一切符号属性），围绕它提供三大能力：质性与质料的基础操作、地址分配与超索引检索的管理基础设施、超索引类型编号的判定。所有实体以E_S_M（Element/Set/Map）框架封装为集合与映射，映射的真正实现为同名Function真函数。

***

## 模块

| 模块 | 模块索引 | 实体数 |
| --- | --- | --- |
| Intentionality | [Intentionality](Intentionality/Intentionality.md) | 11 |
| Intentionality_Manager | [Intentionality_Manager](Intentionality_Manager/Intentionality_Manager.md) | 97 |
| Intentionality_SuperIndex | [Intentionality_SuperIndex](Intentionality_SuperIndex/Intentionality_SuperIndex.md) | 2 |

***

## 源文件

| 头文件 | 路径 |
| --- | --- |
| Intentionality.h | Lib.h.cpp/Intentionality/h.cpp/Intentionality.h |
| Intentionality_Manager.h | Lib.h.cpp/Intentionality/h.cpp/Intentionality_Manager.h |
| Intentionality_SuperIndex.h | Lib.h.cpp/Intentionality/h.cpp/Intentionality_SuperIndex.h |
| All_Intentionality.h | Lib.h.cpp/Intentionality/h.cpp/All_Intentionality.h |

在使用Intentionality库时，可以使用源文件"All_Intentionality.h"直接引入所有源文件，也可以单独引入单个文件来使用。各模块均跨平台。

***

## 说明

依据 Q_A 命名空间下各头文件的实体声明、结构位置常量与庞杂系统理论推断各集合与映射的定义域、值域及功能语义；代码符号（含 CreateCannedDataIntentioanlityObject 等历史拼写）与头文件严格一致。

***
