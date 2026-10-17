# SelectCoreKRSManager

***

映射SelectCoreKRSManager接受序偶集合（OrderedPairSet）为定义域，无符号元素集合（UIntSet）为值域，定义为：

```C++
Map SelectCoreKRSManager(&OrderedPairSet, &UIntSet, SelectCoreKRSManagerFunction);
```

核心KRS管理器检索映射（SelectCoreKRSManager）以定义域序偶“超索引 + 管理器”为检索信息，在值域无符号元素上给出登记项的项下标：序偶第一位置为待检索的超索引，第二位置为待检索的管理器。检索在末尾标志（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_End）限定的范围内**线性扫描**，逐项取超索引子位置（CoreKRSM_SuperIndex）与定义域超索引比较（相等判定由 ElementEqualFunction 完成），空位（注销留下的空项）跳过。

命中时值域写入该项下标并返回；未命中时值域写入 UINT_MAX（即 `4294967295`）。检索只读管理器、不改动其内容。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 已登记若干超索引

Element SelectPair;
NewOrderedPairFunction(EmptyElement, SelectPair);
GetEleOrder(SelectPair, 0) |= SuperIndexElement;   // 待检索的超索引
GetEleOrder(SelectPair, 1) |= ManagerElement;      // 待检索的管理器

Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);
SelectCoreKRSManagerFunction(SelectPair, IndexElement);
// 命中则 IndexElement 为项下标；未命中则为 UINT_MAX

ZeroElementFunction(EmptyElement, SelectPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域序偶第一位置为超索引、第二位置为管理器，值域为承载项下标的无符号元素IndexElement。命中的下标可由 [ReadCoreKRSManagerDll](ReadCoreKRSManagerDll.md)/[GetCoreKRSManagerDll](GetCoreKRSManagerDll.md) 与 [ReadCoreKRSManagerUMap](ReadCoreKRSManagerUMap.md)/[GetCoreKRSManagerUMap](GetCoreKRSManagerUMap.md) 继续读取该项的槽位，也可由 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md) 与 [PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md) 继续装配。检索不改动管理器，故其结果在使用前应保持不变；完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
