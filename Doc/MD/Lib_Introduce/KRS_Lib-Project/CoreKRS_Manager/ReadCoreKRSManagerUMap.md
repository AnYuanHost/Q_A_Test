# ReadCoreKRSManagerUMap

***

映射ReadCoreKRSManagerUMap接受序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadCoreKRSManagerUMap(&OrderedPairSet, &NullElementSet, ReadCoreKRSManagerUMapFunction);
```

读取核心KRS管理器通用映射序映射（ReadCoreKRSManagerUMap）以定义域序偶“下标 + 管理器”为检索信息，把值域元素**引用**到该项的通用映射序子位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_UMapOrder）：序偶第一位置为项下标（通常由 [SelectCoreKRSManager](SelectCoreKRSManager.md) 得到），第二位置为管理器。值域经 `|=` 取得该子位置的引用，可**原地读写**；读出的引用是登记项槽位的借用，用毕须以 ZeroElementFunction 解除引用，不得释放。

下标越界（`下标 >= 末尾标志 CoreKRSM_End`）时抛异常。

***

## 案例：

```C++
Element ManagerElement;
// 已登记并装配通用映射序

Element IndexElement;
// IndexElement 为经 SelectCoreKRSManager 得到的项下标

Element ReadPair;
NewOrderedPairFunction(EmptyElement, ReadPair);
GetEleOrder(ReadPair, 0) |= IndexElement;
GetEleOrder(ReadPair, 1) |= ManagerElement;

Element UMapRef;
ReadCoreKRSManagerUMapFunction(ReadPair, UMapRef);
// UMapRef 引用该项的 CoreKRSM_UMapOrder 子位置，可原地读写

ZeroElementFunction(EmptyElement, UMapRef);
ZeroElementFunction(EmptyElement, ReadPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域序偶第一位置为项下标、第二位置为管理器，值域为承接引用的元素UMapRef。引用读取便于原地查看或改动该项的通用映射序，但解除引用必须以 ZeroElementFunction 完成；若要整体移出该槽位，改用 [GetCoreKRSManagerUMap](GetCoreKRSManagerUMap.md)。动态库的引用读取见 [ReadCoreKRSManagerDll](ReadCoreKRSManagerDll.md)。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
