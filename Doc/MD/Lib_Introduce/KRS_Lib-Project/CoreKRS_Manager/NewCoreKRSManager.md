# NewCoreKRSManager

***

映射NewCoreKRSManager接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewCoreKRSManager(&NullElementSet, &NullElementSet, NewCoreKRSManagerFunction);
```

新建核心KRS管理器映射（NewCoreKRSManager）在值域空元素上构造一个核心KRS管理器：顶层分页登记表位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_Order）与参数位置（CoreKRSM_Parameter）就位，参数位置是一个 5 位结构，五个参数位就位并置默认值——末尾标志 CoreKRSM_End=0、页容量 CoreKRSM_PageSize=16、扩容量 CoreKRSM_ExpandSize=2、保留容量 CoreKRSM_RetainSize=3、空位计数 CoreKRSM_EmptyNumber=0。分页登记表此时为空页（页数为 0），首次登记时按扩容量建页。

构造完成后，值域元素即属于核心KRS管理器集合（[CoreKRSManager](CoreKRSManager.md)），可以接受登记键登录、注销、超索引检索、动态库/通用映射序读写与空位压缩等映射的操作；空元素集合作为定义域与值域，输入为空，返回的即是这个已构造完成的管理器本体。

该映射与 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对：构造一次，使用完毕释放一次；对已构造的管理器重复构造会覆盖原有分页登记表与参数结构并泄漏内部资源。若登记键来自既有超索引字典，可改用 [DictionariesConstructCoreKRSManager](DictionariesConstructCoreKRSManager.md) 依字典建出登记骨架。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// ManagerElement now belongs to CoreKRSManager

// 经 LoginCoreKRSManager 登记若干超索引，并装配动态库与通用映射序

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：构造空元素ManagerElement，用NewCoreKRSManagerFunction在其上构造核心KRS管理器，随后即可经[LoginCoreKRSManager](LoginCoreKRSManager.md)登记超索引、经[SelectCoreKRSManager](SelectCoreKRSManager.md)按超索引检索、经[PutCoreKRSManagerDll](PutCoreKRSManagerDll.md)与[PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md)装配动态库与通用映射序。构造与释放必须成对：使用完毕由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 释放，跳过释放直接令元素析构，会造成分页登记表与参数结构的资源泄漏。管理器的完整调度用法，见[核心KRS管理器集合](CoreKRSManager.md)。
