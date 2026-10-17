# DictionariesConstructCoreKRSManager

***

映射DictionariesConstructCoreKRSManager接受超索引字典集合（CoreKRSDictionaries）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map DictionariesConstructCoreKRSManager(&CoreKRSDictionaries, &CoreKRSManager, DictionariesConstructCoreKRSManagerFunction);
```

字典构造核心KRS管理器映射（DictionariesConstructCoreKRSManager）以定义域超索引字典（[CoreKRSDictionaries](CoreKRSDictionaries.md)）为蓝本，在值域管理器上建出分页登记骨架：读取字典末尾标志（[CoreKRSDictionaries_Struct](CoreKRSDictionaries_Struct.md) 的 CoreKRSD_End）与参数（页容量、扩容量、保留容量），把末尾标志与三项参数写入管理器参数位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_End、CoreKRSM_PageSize、CoreKRSM_ExpandSize、CoreKRSM_RetainSize），按 `页数 = 末尾 / 页容量 + 扩容量` 重建分页登记表并逐页就位；再在末尾范围内逐项把字典登记的超索引（CoreKRSD_SuperIndex）深拷贝进管理器对应项的超索引位置（CoreKRSM_SuperIndex）。字典中的空位原样保留为空位，其个数写入空位计数（CoreKRSM_EmptyNumber）。

登记项的动态库位置（CoreKRSM_Dll）与通用映射序位置（CoreKRSM_UMapOrder）留空，须再经 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md) 与 [PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md) 装配。值域必须以 [NewCoreKRSManager](NewCoreKRSManager.md) 预先构造的管理器为落点；本映射只补登记骨架与超索引，不改变字典本体。构造出的骨架与字典同序（超索引升序），可直接经 [SelectCoreKRSManager](SelectCoreKRSManager.md) 检索。管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
// 字典中已登记若干超索引

Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

DictionariesConstructCoreKRSManagerFunction(Dictionaries, ManagerElement);
// ManagerElement 按字典的末尾与参数建出登记骨架，逐项拷贝超索引

Element SelectPair;
NewOrderedPairFunction(EmptyElement, SelectPair);
Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);
// GetEleOrder(SelectPair, 0) |= 超索引; GetEleOrder(SelectPair, 1) |= ManagerElement;
SelectCoreKRSManagerFunction(SelectPair, IndexElement);
// IndexElement 即该超索引在骨架中的项下标

ZeroElementFunction(EmptyElement, SelectPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：先构造超索引字典与空管理器，再以字典为定义域、管理器为值域调用 DictionariesConstructCoreKRSManagerFunction，把字典的末尾标志与分页参数写入管理器并逐项拷贝超索引，建出与管理器同形的登记骨架；动态库与通用映射序留待装配。定义域字典在本映射中只被读取、不被修改，仍由 [ReleaseCoreDictionaries](ReleaseCoreDictionaries.md) 释放；值域管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对释放。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
