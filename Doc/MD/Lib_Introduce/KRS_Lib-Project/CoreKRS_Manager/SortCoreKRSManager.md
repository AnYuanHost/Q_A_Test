# SortCoreKRSManager

***

映射SortCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map SortCoreKRSManager(&NullElementSet, &CoreKRSManager, SortCoreKRSManagerFunction);
```

核心KRS管理器排序映射（SortCoreKRSManager）对值域管理器登记表的前末尾标志（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_End）个登记项做冒泡排序：**空位视为最小**沉向前端，实有登记项按超索引升序排在后段。比较由超索引小于判定 SuperIndexLessFunction（参数为序偶，取各登记项的超索引子位置 CoreKRSM_SuperIndex）完成，交换由 SwapElementFunction 完成；每项的三个子位置（超索引 CoreKRSM_SuperIndex、动态库 CoreKRSM_Dll、通用映射序 CoreKRSM_UMapOrder）**一同交换**，故项下标与槽位的对应关系始终一致；一趟无交换即提前结束。

排序只重排登记项次序，不改末尾标志。末尾标志为 0 或登记表页数为 0 时直接返回。登记映射 [LoginCoreKRSManager](LoginCoreKRSManager.md) 在每次登记后自动调用本映射。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

// 登录若干超索引，并各自装配动态库与通用映射序

SortCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 实有登记项按超索引升序排列，空位沉向前端

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域为空元素，值域为待排序的管理器ManagerElement。排序把空位集中到前段、实有项按超索引升序排在后段，且每项的三子位置同步移动，便于压缩（[DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)）与检索（[SelectCoreKRSManager](SelectCoreKRSManager.md)）。排序不增删登记项，末尾标志不变；完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
