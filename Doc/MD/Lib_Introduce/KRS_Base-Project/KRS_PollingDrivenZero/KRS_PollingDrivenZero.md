# KRS_PollingDrivenZero

***

知识库零轮询机模块（KRS_PollingDrivenZero）对应源头文件 `Lib.h.cpp/KRS_Base/h.cpp/KRS_PollingDrivenZero.h`，提供知识库零轮询机集合（KRSPollingDrivenZero）、映射搜索器、结构位置常量，以及设置、构造、驱动、轮询与流图各类映射。KRS 为 Knowledge Representation System（知识表达系统）的缩写，PDZ 为 Polling Driven Zero 的缩写，中文全称统一为「知识库零轮询机」。

***

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [知识库零轮询机映射检索器元素](KRSPollingDrivenZero_MapSearcher.md) | 元素 | 知识库零轮询机专有的映射检索器元素 |
| [知识库零轮询机映射检索器参数](KRSPDZ_MS_Parameter.md) | 命名空间 | 定义知识库零轮询机映射检索器的参数位置常量 |
| [初始化知识库零轮询机映射检索器映射](InitializeKRSPollingDrivenZero_MapSearcher.md) | 映射 | 初始化知识库零轮询机映射检索器 |
| [知识库零轮询机映射检索器检索映射](SelectKRSPollingDrivenZero_MapSearcher.md) | 映射 | 检索超索引元素对应的映射引用 |
| [知识库零轮询机映射检索器存在测试映射](InTestKRSPollingDrivenZero_MapSearcher.md) | 映射 | 检测超索引元素是否在映射检索器中 |
| [释放知识库零轮询机映射检索器](ReleaseKRSPollingDrivenZero_MapSearcher.md) | 映射 | 释放知识库零轮询机映射检索器 |
| [知识库零轮询机结构](KRSPollingDrivenZero_Struct.md) | 命名空间 | 定义知识库零轮询机结构的位置常量 |
| [知识库零轮询机集合](KRSPollingDrivenZero.md) | 集合 | 所有知识库零轮询机元素组成的集合 |
| [新建知识库零轮询机映射](NewKRSPollingDrivenZero.md) | 映射 | 在空元素上构造知识库零轮询机元素 |
| [知识库零轮询机设置元素环境检索器映射](SetKRSPollingDrivenZeroEES.md) | 映射 | 设置知识库零轮询机元素的元素环境检索器 |
| [知识库零轮询机构造元素环境检索器映射](ConstructKRSPollingDrivenZeroEESMap.md) | 映射 | 构造知识库零轮询机元素的元素环境检索器映射组 |
| [知识库零轮询机元素环境检索器映射设置映射](SetKRSPollingDrivenZeroEESMap.md) | 映射 | 设置知识库零轮询机元素的元素环境检索器映射组 |
| [知识库零轮询机问答流图设置映射](SetKRSPollingDrivenZeroQuestionMap.md) | 映射 | 设置知识库零轮询机元素的问答流图 |
| [知识库零轮询机通用映射集合设置映射映射](SetKRSPollingDrivenZeroUniversalMapSearcher.md) | 映射 | 设置知识库零轮询机元素的通用映射集合 |
| [知识库零轮询机私有映射集合设置映射](SetKRSPollingDrivenZeroPrivateMapSearcher.md) | 映射 | 设置知识库零轮询机元素的私有映射集合 |
| [知识库零轮询机私有映射集合映射设置映射](SetKRSPollingDrivenPrivateMapSearcher.md) | 映射 | 将元素序列设置到知识库零轮询机元素的对应位置 |
| [知识库零轮询机迭代图设置映射](SetKRSPollingDrivenZeroRecursionMap.md) | 映射 | 设置知识库零轮询机元素的迭代图 |
| [知识库零轮询机构造线程映射](ConstructKRSPollingDirvenZeroThreadMap.md) | 映射 | 构造知识库零轮询机元素的线程映射组 |
| [知识库零轮询机线程映射设置映射](SetKRSPollingDrivneZeroThreadMap.md) | 映射 | 设置知识库零轮询机元素的线程映射组 |
| [释放知识库零轮询机映射](ReleaseKRSPollingDrivenZero.md) | 映射 | 分析并释放知识库零轮询机元素 |
| [知识库零轮询机构造映射域映射](KRSPollingDrivenZeroConstructMapDomain.md) | 映射 | 解释待解释域信息并构造知识库零轮询机的映射域 |
| [知识库零轮询机析构域映射域映射](KRSPollingDrivenZeroDestrcutMapDomain.md) | 映射 | 解释待解释域信息并析构知识库零轮询机的映射域 |
| [知识库零轮询机构造映射映射](KRSPollingDrivenZeroConstructMap.md) | 映射 | 在知识库零轮询机中检索映射信息并置于空元素上 |
| [知识库零轮询机递归替换映射](KRSPollingDrivenZeroRecursionReplace.md) | 映射 | 执行内循环问答流图的替换 |
| [知识库零轮询机递归执行映射](KRSPollingDrivenZeroRecursionActive.md) | 映射 | 执行内循环问答流图 |
| [知识库零轮询机递归后推映射](KRSPollingDrivenZeroRecursionPushBack.md) | 映射 | 后推内循环问答流图 |
| [知识库零轮询机递归回收映射](KRSPollingDrivenZeroRecrsionRecycle.md) | 映射 | 回收内循环问答流图 |
| [知识库零轮询机递归主映射](KRSPollingDrievnZeroRecursionMain.md) | 映射 | 执行内循环主映射 |
| [知识库零轮询机替换映射](KRSPollingDrivenZeroReplace.md) | 映射 | 完成外循环问答流图的子图替换 |
| [知识库零轮询机回收轮询机映射](KRSPollingDrivenZeroRecyclePD.md) | 映射 | 回收知识库零轮询机中的轮询机 |
| [知识库零轮询机申请轮询机映射](KRSPollingDrivenZeroAllotPD.md) | 映射 | 为知识库零轮询机申请新轮询机 |
| [知识库零轮询机后推映射](KRSPollingDrivenZeroPushBack.md) | 映射 | 后推外循环问答流图 |
| [知识库零轮询机回收映射](KRSPollingDrivenZeroRecycle.md) | 映射 | 回收外循环问答流图的节点 |
| [知识库零轮询机构造问答流图映射](KRSPollingDrivenZeroConstructQuestionFlowMap.md) | 映射 | 构造外循环问答流图 |
| [知识库零轮询机构造递归问答流图映射](KRSPollingDrivenZeroConstructRecursionFlowMap.md) | 映射 | 构造内循环问答流图 |
| [知识库零轮询机递归问答流图置零映射](KRSPollingDrivenZeroZeroRecursionFlowMap.md) | 映射 | 将内循环问答流图状态置零 |

***

## 说明：

* 部分文件名带历史错拼（如 `KRSPollingDrivenZeroDestrcutMapDomain`、`KRSPollingDrivenZeroRecrsionRecycle`、`KRSPollingDrievnZeroRecursionMain`、`SetKRSPollingDrivenPrivateMapSearcher`），一律按源头原样保留，各篇正文各自加注。
* `ConstructKRSPollingDirvenZeroThreadMap` 的 `Dirven`、`SetKRSPollingDrivneZeroThreadMap` 的 `Drivne` 均为 `Driven` 的历史错拼；其配套真函数名 `ConstructKRSPollingDrivenZeroThreadMapFunction`、`SetKRSPollingDrivenZeroThreadMapFunction` 拼写正确，映射对象与真函数符号不一致处已在各篇写明。
* `SetKRSPollingDrivenZeroPrivateMapSearcher` 按源头符号独立成篇；同目录另有脱漏 `Zero` 的历史文件名 `SetKRSPollingDrivenPrivateMapSearcher`，两篇标题各自独立、并存。
* 结构位置常量以源头 `KRS_PollingDrivenZero.h` 为准：[KRSPollingDrivenZero_Struct](KRSPollingDrivenZero_Struct.md) 所载为旧版编号（`KRSPDZ_PDOrder`、`KRSPDZ_RecursionGraph`、`KRSPDZ_EES_Get` 起共 6 个 EES 位置），源头头文件为 `KRSPDZ_PDManager`、`KRSPDZ_RecursionMap`、`KRSPDZ_EES_Get` 至 `KRSPDZ_EES_Logout` 共 7 个 EES 位置，本目录各篇一律按源头书写。
* 各实体文档均给出可直接抄录的最小案例，构造与释放成对。
* `KRSPollingDrivenZeroTotalTest`（声明于 `Lib.h.cpp/KRS_Base/h.cpp/ZeroKRS.h`）为纯测试运行器，按规范跳过，不生成、不列入索引。
