# KRS_PollingDrivenZero

***

知识库零轮询机模块（KRS_PollingDrivenZero）对应源头文件 `Lib.h.cpp/KRS_Base/h.cpp/KRS_PollingDrivenZero.h`，提供知识库零轮询机集合（KRSPollingDrivenZero）、映射搜索器、结构位置常量，以及设置、构造、驱动、轮询与流图各类映射。KRS 为 Knowledge Representation System（知识表达系统）的缩写，PDZ 为 Polling Driven Zero 的缩写，中文全称统一为「知识库零轮询机」。

***

| 指令 | 说明 |
| --- | --- |
| [KRSPollingDrivenZero_MapSearcher](KRSPollingDrivenZero_MapSearcher.md) | 知识库零轮询机映射检索器元素（KRSPollingDrivenZero_MapSearcher）为知识库零轮询机提供一个专有的映射检索器，该元素被初始化为标准的元映射检索元素，方便相关操作。 |
| [KRSPDZ_MS_Parameter](KRSPDZ_MS_Parameter.md) | 命名空间KRSPDZ_MS_Parameter |
| [InitializeKRSPollingDrivenZero_MapSearcher](InitializeKRSPollingDrivenZero_MapSearcher.md) | 映射InitializeKRSPollingDrivenZero_MapSearcher接受空元素集合（NullElementSet）为定义域和值域 |
| [SelectKRSPollingDrivenZero_MapSearcher](SelectKRSPollingDrivenZero_MapSearcher.md) | 映射SelectKRSPollingDrivenZero_MapSearcher接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域 |
| [InTestKRSPollingDrivenZero_MapSearcher](InTestKRSPollingDrivenZero_MapSearcher.md) | 映射InTestKRSPollingDrivenZero_MapSearcher接受超索引集合（SuperIndexSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [ReleaseKRSPollingDrivenZero_MapSearcher](ReleaseKRSPollingDrivenZero_MapSearcher.md) | 映射ReleaseKRSPollingDrivenZero_MapSearcher接受空元素集合（NullElementSet）为定义域和值域 |
| [KRSPollingDrivenZero_Struct](KRSPollingDrivenZero_Struct.md) | 命名空间KRSPollingDrivenZero_Struct |
| [KRSPollingDrivenZero](KRSPollingDrivenZero.md) | 集合KRSPollingDrivenZero为知识库零轮询机的集合 |
| [NewKRSPollingDrivenZero](NewKRSPollingDrivenZero.md) | 映射NewKRSPollingDrivenZero接受空元素集合（NullElementSet）为定义域和值域 |
| [SetKRSPollingDrivenZeroEES](SetKRSPollingDrivenZeroEES.md) | 映射SetKRSPollingDrivenZeroEES接受元素环境检索器集合（ElementEnvironmentSearcher）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [ConstructKRSPollingDrivenZeroEESMap](ConstructKRSPollingDrivenZeroEESMap.md) | 映射ConstructKRSPollingDrivenZeroEESMap接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [SetKRSPollingDrivenZeroEESMap](SetKRSPollingDrivenZeroEESMap.md) | 映射SetKRSPollingDrivenZeroEESMap接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [SetKRSPollingDrivenZeroQuestionMap](SetKRSPollingDrivenZeroQuestionMap.md) | 映射SetKRSPollingDrivenZeroQuestionMap接受问答流图集合（QuestionFlowMap）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [SetKRSPollingDrivenZeroUniversalMapSearcher](SetKRSPollingDrivenZeroUniversalMapSearcher.md) | 映射SetKRSPollingDrivenZeroUniversalMapSearcher接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [SetKRSPollingDrivenZeroPrivateMapSearcher](SetKRSPollingDrivenZeroPrivateMapSearcher.md) | 映射SetKRSPollingDrivenZeroPrivateMapSearcher接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [SetKRSPollingDrivenPrivateMapSearcher](SetKRSPollingDrivenPrivateMapSearcher.md) | 映射SetKRSPollingDrivenPrivateMapSearcher接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [SetKRSPollingDrivenZeroRecursionMap](SetKRSPollingDrivenZeroRecursionMap.md) | 映射SetKRSPollingDrivenZeroRecursionMap接受问答流图集合（QuestionFlowMap）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [ConstructKRSPollingDirvenZeroThreadMap](ConstructKRSPollingDirvenZeroThreadMap.md) | 映射ConstructKRSPollingDirvenZeroThreadMap接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [SetKRSPollingDrivneZeroThreadMap](SetKRSPollingDrivneZeroThreadMap.md) | 映射SetKRSPollingDrivneZeroThreadMap接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [ReleaseKRSPollingDrivenZero](ReleaseKRSPollingDrivenZero.md) | 映射ReleaseKRSPollingDrivenZero接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroConstructMapDomain](KRSPollingDrivenZeroConstructMapDomain.md) | 映射KRSPollingDrivenZeroConstructMapDomain接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [KRSPollingDrivenZeroDestructMapDomain](KRSPollingDrivenZeroDestrcutMapDomain.md) | 映射KRSPollingDrivenZeroDestructMapDomain接受元素序偶集合（OrderedPairSet）为定义域，元素序列集合（ElementOrderSet）为值域 |
| [KRSPollingDrivenZeroConstructMap](KRSPollingDrivenZeroConstructMap.md) | 映射KRSPollingDrivenZeroConstructMap接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [KRSPollingDrivenZeroRecursionReplace](KRSPollingDrivenZeroRecursionReplace.md) | 映射KRSPollingDrivenZeroRecursionReplace接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroRecursionActive](KRSPollingDrivenZeroRecursionActive.md) | 映射KRSPollingDrivenZeroRecursionActive接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroRecursionPushBack](KRSPollingDrivenZeroRecursionPushBack.md) | 映射KRSPollingDrivenZeroRecursionPushBack接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroRecursionRecycle](KRSPollingDrivenZeroRecrsionRecycle.md) | 映射KRSPollingDrivenZeroRecursionRecycle接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroRecursionMain](KRSPollingDrievnZeroRecursionMain.md) | 映射KRSPollingDrivenZeroRecursionMain接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroReplace](KRSPollingDrivenZeroReplace.md) | 映射KRSPollingDrivenZeroReplace接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroRecyclePD](KRSPollingDrivenZeroRecyclePD.md) | 映射KRSPollingDrivenZeroRecyclePD接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroAllotPD](KRSPollingDrivenZeroAllotPD.md) | 映射KRSPollingDrivenZeroAllotPD接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroPushBack](KRSPollingDrivenZeroPushBack.md) | 映射KRSPollingDrivenZeroPushBack接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroRecycle](KRSPollingDrivenZeroRecycle.md) | 映射KRSPollingDrivenZeroRecycle接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroConstructQuestionFlowMap](KRSPollingDrivenZeroConstructQuestionFlowMap.md) | 映射KRSPollingDrivenZeroConstructQuestionFlowMap接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroConstructRecursionFlowMap](KRSPollingDrivenZeroConstructRecursionFlowMap.md) | 映射KRSPollingDrivenZeroConstructRecursionFlwoMap接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |
| [KRSPollingDrivenZeroZeroRecursionFlowMap](KRSPollingDrivenZeroZeroRecursionFlowMap.md) | 映射KRSPollingDrivenZeroZeroRecursionFlowMap接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |

***

## 说明：

* 部分文件名带历史错拼（如 `KRSPollingDrivenZeroDestrcutMapDomain`、`KRSPollingDrivenZeroRecrsionRecycle`、`KRSPollingDrievnZeroRecursionMain`、`SetKRSPollingDrivenPrivateMapSearcher`），一律按源头原样保留，各篇正文各自加注。
* `ConstructKRSPollingDirvenZeroThreadMap` 的 `Dirven`、`SetKRSPollingDrivneZeroThreadMap` 的 `Drivne` 均为 `Driven` 的历史错拼；其配套真函数名 `ConstructKRSPollingDrivenZeroThreadMapFunction`、`SetKRSPollingDrivenZeroThreadMapFunction` 拼写正确，映射对象与真函数符号不一致处已在各篇写明。
* `SetKRSPollingDrivenZeroPrivateMapSearcher` 按源头符号独立成篇；同目录另有脱漏 `Zero` 的历史文件名 `SetKRSPollingDrivenPrivateMapSearcher`，两篇标题各自独立、并存。
* 结构位置常量以源头 `KRS_PollingDrivenZero.h` 为准：[KRSPollingDrivenZero_Struct](KRSPollingDrivenZero_Struct.md) 所载为旧版编号（`KRSPDZ_PDOrder`、`KRSPDZ_RecursionGraph`、`KRSPDZ_EES_Get` 起共 6 个 EES 位置），源头头文件为 `KRSPDZ_PDManager`、`KRSPDZ_RecursionMap`、`KRSPDZ_EES_Get` 至 `KRSPDZ_EES_Logout` 共 7 个 EES 位置，本目录各篇一律按源头书写。
* 各实体文档均给出可直接抄录的最小案例，构造与释放成对。
* `KRSPollingDrivenZeroTotalTest`（声明于 `Lib.h.cpp/KRS_Base/h.cpp/ZeroKRS.h`）为纯测试运行器，按规范跳过，不生成、不列入索引。
