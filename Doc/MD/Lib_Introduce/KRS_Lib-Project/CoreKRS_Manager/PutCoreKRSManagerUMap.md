# PutCoreKRSManagerUMap

***

映射PutCoreKRSManagerUMap接受序偶集合（OrderedPairSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map PutCoreKRSManagerUMap(&OrderedPairSet, &CoreKRSManager, PutCoreKRSManagerUMapFunction);
```

装入核心KRS管理器通用映射序映射（PutCoreKRSManagerUMap）以定义域序偶“下标 + 通用映射序”为来源，把通用映射序**转交装配**进值域管理器该项的通用映射序子位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_UMapOrder）：序偶第一位置为项下标，第二位置为待装配的通用映射序。写入经 `&=` 完成槽位接收，序偶第二位置随之被置空（转交后不得再清零或释放该来源）。

下标越界（`下标 >= 末尾标志 CoreKRSM_End`）时抛异常。若该项槽位原有非空内容，写入会先按容器的 `&=` 语义释放原值再接收，故装配在同一项上可反复进行。

本映射与 [ReadCoreKRSManagerUMap](ReadCoreKRSManagerUMap.md)/[GetCoreKRSManagerUMap](GetCoreKRSManagerUMap.md) 成对：Put 写入、Read 引用读、Get 移出。

***

## 案例：

```C++
Element ManagerElement;
// 已登记该超索引

Element IndexElement;
// IndexElement 为经 SelectCoreKRSManager 得到的项下标

Element PutPair;
NewOrderedPairFunction(EmptyElement, PutPair);

Element UMapElement;
// UMapElement 为待装配的通用映射序

GetEleOrder(PutPair, 0) |= IndexElement;
GetEleOrder(PutPair, 1) |= UMapElement;
PutCoreKRSManagerUMapFunction(PutPair, ManagerElement);
// 通用映射序转交装配进该项的 CoreKRSM_UMapOrder 位置，UMapElement 被置空

ZeroElementFunction(EmptyElement, PutPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域序偶第一位置为项下标、第二位置为待装配的通用映射序，值域为管理器ManagerElement。经本映射把通用映射序转交进槽位；转交的来源元素被置空，不得再清零/释放。动态库的装配同理，见 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md)。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
