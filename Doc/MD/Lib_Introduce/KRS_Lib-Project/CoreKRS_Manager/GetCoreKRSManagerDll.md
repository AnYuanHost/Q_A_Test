# GetCoreKRSManagerDll

***

映射GetCoreKRSManagerDll接受序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map GetCoreKRSManagerDll(&OrderedPairSet, &NullElementSet, GetCoreKRSManagerDllFunction);
```

取出核心KRS管理器动态库映射（GetCoreKRSManagerDll）以定义域序偶“下标 + 管理器”为检索信息，把该项的动态库子位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_Dll）**转交移出**到值域：序偶第一位置为项下标，第二位置为管理器。值域经 `&=` 接收槽位内容，槽位随之被置空（移出后该项不再持有该动态库），值域须为以 New 构造的空元素。

下标越界（`下标 >= 末尾标志 CoreKRSM_End`）时抛异常。

本映射与 [ReadCoreKRSManagerDll](ReadCoreKRSManagerDll.md) 的区别：Read 取引用、原地读写；Get 取所有权、移出槽位。移出后槽位为空，如需再次填写，经 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md) 装配。

***

## 案例：

```C++
Element ManagerElement;
// 已登记并装配动态库

Element IndexElement;
// IndexElement 为经 SelectCoreKRSManager 得到的项下标

Element GetPair;
NewOrderedPairFunction(EmptyElement, GetPair);
GetEleOrder(GetPair, 0) |= IndexElement;
GetEleOrder(GetPair, 1) |= ManagerElement;

Element DllElement;
NewWinDllFunction(EmptyElement, DllElement);
GetCoreKRSManagerDllFunction(GetPair, DllElement);
// 动态库移出到 DllElement，登记项该槽位被置空

ZeroElementFunction(EmptyElement, GetPair);
ReleaseElementFunction(EmptyElement, IndexElement);
// 使用完毕释放移出的 DllElement
ReleaseWinDllFunction(EmptyElement, DllElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域序偶第一位置为项下标、第二位置为管理器，值域为承接移出内容的空元素DllElement。移出后登记项槽位置空，但末尾标志与项下标不变（留下的是槽位空置，非登记空位）；如需重新装配该项，经 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md) 写入。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
