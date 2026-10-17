# CoreKRSManager

***

集合CoreKRSManager为所有核心KRS管理器元素的集合，定义为：

```C++
Set CoreKRSManager(EmptyElement, CoreKRSManagerTest);
```

核心KRS信息管理器集合（CoreKRSManager）由所有核心KRS信息管理器元素组成，是庞杂系统知识检索调度层（KRS）的登记与调度单元：管理器以分页登记表登记若干 {超索引, 动态库, 通用映射序} 项，每项三位——超索引（登记键）、动态库（该项所依的 Windows动态库元素 WinDll）与通用映射序（该项所用的通用映射序）；以参数位置记录分页运行的末尾标志、页容量、扩容量、保留容量与空位计数。管理器元素共 2 个顶层位置，通过宏 GetEleOrder(元素, 序号) 读取；结构位置常量见命名空间 CoreKRSManager_Struct（[CoreKRSManager_Struct](CoreKRSManager_Struct.md)），要点如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| CoreKRSM_Order | 0 | 分页登记表位置（顶层） |
| CoreKRSM_Parameter | 1 | 参数位置（顶层） |
| CoreKRSM_SuperIndex | 0 | 登记项：超索引（登记键） |
| CoreKRSM_Dll | 1 | 登记项：动态库元素 |
| CoreKRSM_UMapOrder | 2 | 登记项：通用映射序 |
| CoreKRSM_End | 0 | 参数：末尾标志（已登记项数） |
| CoreKRSM_EmptyNumber | 4 | 参数：空位计数 |

项中的“超索引”即超索引集合（SuperIndexSet）的登记键；“动态库”即 Windows动态库元素（WinDllSet，与核心KRS库 Windows映射管理器 CoreKRSLib_WinMapManager 同源）；“通用映射序”即元素序集合（ElementOrderSet）承载的通用映射序。管理器与 [CoreKRSDictionaries](CoreKRSDictionaries.md) 同为分页结构，但参数布局不同：管理器的参数为 {CoreKRSM_End=0, CoreKRSM_PageSize=1, CoreKRSM_ExpandSize=2, CoreKRSM_RetainSize=3, CoreKRSM_EmptyNumber=4}，默认 0 / 16 / 2 / 3 / 0；末尾标志 CoreKRSM_End 语义为已登记项数，不因注销而减（仅 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) 压缩空位时收缩），注销留下的空位另记于 CoreKRSM_EmptyNumber。

管理器由 [NewCoreKRSManager](NewCoreKRSManager.md) 构造、由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 释放，两者成对；可由 [DictionariesConstructCoreKRSManager](DictionariesConstructCoreKRSManager.md) 依超索引字典（[CoreKRSDictionaries](CoreKRSDictionaries.md)）建出登记骨架；登记键经 [LoginCoreKRSManager](LoginCoreKRSManager.md) 登记、经 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 注销，两者成对；超索引经 [SelectCoreKRSManager](SelectCoreKRSManager.md) 检索得到项下标；登记项的动态库经 [ReadCoreKRSManagerDll](ReadCoreKRSManagerDll.md)/[GetCoreKRSManagerDll](GetCoreKRSManagerDll.md) 读出、经 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md) 写入；通用映射序经 [ReadCoreKRSManagerUMap](ReadCoreKRSManagerUMap.md)/[GetCoreKRSManagerUMap](GetCoreKRSManagerUMap.md) 读出、经 [PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md) 写入；[SortCoreKRSManager](SortCoreKRSManager.md) 把空位沉向前端，[DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) 压缩空位并按 RetainSize 回收页表。本集合的成员判定由判定函数 CoreKRSManagerTest 完成。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// ManagerElement 即属于核心KRS管理器集合

Element SuperIndexElement;
// SuperIndexElement 承载登记键超索引

LoginCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
// 登记键写入管理器新项；该项的动态库与通用映射序暂为空

Element SelectPair;
NewOrderedPairFunction(EmptyElement, SelectPair);
GetEleOrder(SelectPair, 0) |= SuperIndexElement;
GetEleOrder(SelectPair, 1) |= ManagerElement;

Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);
SelectCoreKRSManagerFunction(SelectPair, IndexElement);
// IndexElement 得到匹配项的项下标

Element DllPair;
NewOrderedPairFunction(EmptyElement, DllPair);
Element DllElement;
NewWinDllFunction(EmptyElement, DllElement);

GetEleOrder(DllPair, 0) |= IndexElement;
GetEleOrder(DllPair, 1) |= DllElement;
PutCoreKRSManagerDllFunction(DllPair, ManagerElement);
// 动态库转交装配进该项的 CoreKRSM_Dll 位置，DllElement 被置空

ZeroElementFunction(EmptyElement, DllPair);
ZeroElementFunction(EmptyElement, SelectPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseElementFunction(EmptyElement, SuperIndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：先经 [NewCoreKRSManager](NewCoreKRSManager.md) 构造管理器，再经 [LoginCoreKRSManager](LoginCoreKRSManager.md) 以超索引为登记键登记新项；随后经 [SelectCoreKRSManager](SelectCoreKRSManager.md) 按超索引取得项下标，经 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md) 以序偶“下标 + 动态库”把动态库转交写入该项的 CoreKRSM_Dll 位置；通用映射序同理经 [PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md) 写入。全程遵守三条纪律：构造与释放成对（NewCoreKRSManager 对 ReleaseCoreKRSManager）、转交与清零成对（Put 的来源元素被置空，不得再清零/释放）、引用与 Zero 成对（经 Read... 读出的槽位引用先清零再释放）。登记键的注销、检索与空位压缩，分别见 [LogoutCoreKRSManager](LogoutCoreKRSManager.md)、[SelectCoreKRSManager](SelectCoreKRSManager.md) 与 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)。
