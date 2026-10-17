# GetCoreKRSManagerUMap

***

映射GetCoreKRSManagerUMap接受序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map GetCoreKRSManagerUMap(&OrderedPairSet, &NullElementSet, GetCoreKRSManagerUMapFunction);
```

取出核心KRS管理器通用映射序映射（GetCoreKRSManagerUMap）以定义域序偶“下标 + 管理器”为检索信息，把该项的通用映射序子位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_UMapOrder）**转交移出**到值域：序偶第一位置为项下标，第二位置为管理器。值域经 `&=` 接收槽位内容，槽位随之被置空，值域须为以 New 构造的空元素。

下标越界（`下标 >= 末尾标志 CoreKRSM_End`）时抛异常。

本映射与 [ReadCoreKRSManagerUMap](ReadCoreKRSManagerUMap.md) 的区别：Read 取引用、原地读写；Get 取所有权、移出槽位。移出后槽位为空，如需再次填写，经 [PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md) 装配。

***

## 案例：

```C++
Element ManagerElement;
// 已登记并装配通用映射序

Element IndexElement;
// IndexElement 为经 SelectCoreKRSManager 得到的项下标

Element GetPair;
NewOrderedPairFunction(EmptyElement, GetPair);
GetEleOrder(GetPair, 0) |= IndexElement;
GetEleOrder(GetPair, 1) |= ManagerElement;

Element UMapElement;
// UMapElement 为承接移出内容的空元素
GetCoreKRSManagerUMapFunction(GetPair, UMapElement);
// 通用映射序移出到 UMapElement，登记项该槽位被置空

ZeroElementFunction(EmptyElement, GetPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseElementFunction(EmptyElement, UMapElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域序偶第一位置为项下标、第二位置为管理器，值域为承接移出内容的空元素UMapElement。移出后登记项槽位置空，但末尾标志与项下标不变；如需重新装配该项，经 [PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md) 写入。动态库的移出见 [GetCoreKRSManagerDll](GetCoreKRSManagerDll.md)。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
