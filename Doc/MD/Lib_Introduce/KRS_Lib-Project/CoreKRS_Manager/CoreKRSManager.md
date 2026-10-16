# CoreKRSManager

***

集合CoreKRSManager为所有核心KRS管理器元素的集合，定义为：

```C++
Set CoreKRSManager(EmptyElement, CoreKRSManagerTest);
```

核心KRS管理器集合（CoreKRSManager）由所有核心KRS管理器元素组成，是庞杂系统知识检索调度层（KRS）的登记与调度单元：管理器以分页登记表登记若干 {知识库信息体, 状态码} 项，每项两位——知识库信息体与状态码；以参数位置记录分页运行的页容量、末尾标志、扩容量与保留容量。管理器元素共 2 个顶层位置，通过宏 GetEleOrder(元素, 序号) 读取；结构位置常量见命名空间 CoreKRSManager_Struct（[CoreKRSManager_Struct](CoreKRSManager_Struct.md)），要点如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| CoreKRS_Order | 0 | 分页登记表位置（顶层） |
| CoreKRS_Parameter | 1 | 参数位置（顶层） |
| CoreKRS_Object | 0 | 登记项：知识库信息体（CoreKRSObject） |
| CoreKRS_State | 1 | 登记项：状态码 |
| CoreKRS_End | 1 | 参数：末尾标志（已登记信息体数） |

项中的“知识库信息体”即核心KRS对象元素（[CoreKRSObject](CoreKRSObject.md)），它把超索引、动态库、符号表、子元素环境检索器与登录/登出超索引绑定于一身；信息体所需的知识库符号表由信息体自身独立维护（经 [SetCoreKRSObjectDictionaries](SetCoreKRSObjectDictionaries.md) 转交装配进信息体的 CoreKRSObject_Dictionaries 位置），管理器不另行持有符号表。项中的状态码记录在 CoreKRS_State，取值由命名空间 CoreKRSObject_StateCode 规定：CoreKRSObject_Usable=0（可用）、CoreKRSObject_Unusable=1（不可用）。

管理器与 [CoreKRSDictionaries](CoreKRSDictionaries.md)、[CoreKRSSymbolTable](CoreKRSSymbolTable.md) 同构分页：参数为 {CoreKRS_PageSize=0, CoreKRS_End=1, CoreKRS_ExpandSize=2, CoreKRS_RetainSize=3}，默认 16 / 0 / 2 / 3；CoreKRS_End 语义为已登记信息体数（末尾标志），不因注销而减（仅 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) 压缩空位时收缩）；登录前按 End/PageSize 判扩容、按 ExpandSize 增页；[SortCoreKRSManager](SortCoreKRSManager.md) 把空位沉向前端；[DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) 压缩空位并按 RetainSize 回收页表。

管理器由 [NewCoreKRSManager](NewCoreKRSManager.md) 构造、由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 释放，两者成对；信息体经 [LoginCoreKRSManager](LoginCoreKRSManager.md) 转交登录、经 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 注销，两者成对；超索引经 [SelectCoreKRSManager](SelectCoreKRSManager.md) 检索得到项下标；项状态经 [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md) 读取、经 [SetObjectStateCoreKRSManager](SetObjectStateCoreKRSManager.md) 写入。本集合的成员判定由判定函数 CoreKRSManagerTest 完成。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// ManagerElement 即属于核心KRS管理器集合

Element ObjectElement;
NewCoreKRSObjectFunction(EmptyElement, ObjectElement);

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 20;

Element SuperIndexElement;
UIntToSuperIndexFunction(UIntElement, SuperIndexElement);
// SuperIndexElement 承载信息体服务的超索引

SetCoreKRSObjectSuperIndexFunction(SuperIndexElement, ObjectElement);
// 超索引以拷贝装配写入信息体的 CoreKRSObject_SuperIndex，来源保持可用

Element TableElement;
NewCoreKRSSymbolTableFunction(EmptyElement, TableElement);
SetCoreKRSObjectDictionariesFunction(TableElement, ObjectElement);
// 符号表转交装配进信息体，TableElement 被置空

LoginCoreKRSManagerFunction(ObjectElement, ManagerElement);
// 信息体转交装配进管理器新项，ObjectElement 被置空，状态进入 CoreKRSObject_Usable

Element SelectPair;
NewOrderedPairFunction(EmptyElement, SelectPair);
GetEleOrder(SelectPair, 0) |= SuperIndexElement;
GetEleOrder(SelectPair, 1) |= ManagerElement;

Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);
SelectCoreKRSManagerFunction(SelectPair, IndexElement);
// IndexElement 得到匹配项的项下标

Element ReadPair;
NewOrderedPairFunction(EmptyElement, ReadPair);
GetEleOrder(ReadPair, 0) |= IndexElement;
GetEleOrder(ReadPair, 1) |= ManagerElement;

Element StateElement;
NewUIntElementFunction(EmptyElement, StateElement);
ReadObjectStateCoreKRSManagerFunction(ReadPair, StateElement);
// StateElement 引用该项的状态子位置（CoreKRS_State）

ZeroElementFunction(EmptyElement, StateElement);
// 引用与 Zero 成对：先解除状态引用

LogoutCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
// 按超索引注销该项，信息体与状态置空，CoreKRS_End 不减

ZeroElementFunction(EmptyElement, ReadPair);
ZeroElementFunction(EmptyElement, SelectPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseElementFunction(EmptyElement, SuperIndexElement);
ReleaseElementFunction(EmptyElement, UIntElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：先经 [NewCoreKRSManager](NewCoreKRSManager.md) 构造管理器，再构造信息体并写入超索引与符号表——符号表以转交装配写入（TableElement 随即被置空），超索引以写入方式登记于信息体的超索引位置。随后经 [LoginCoreKRSManager](LoginCoreKRSManager.md) 把信息体转交登录到管理器的新项（ObjectElement 随即被置空），状态自动进入 CoreKRSObject_Usable；再经 [SelectCoreKRSManager](SelectCoreKRSManager.md) 按超索引得到项下标，经 [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md) 读出该项状态；状态引用用毕立即以 ZeroElementFunction 解除，最后经 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 注销（信息体与状态置空，CoreKRS_End 不减）。全程遵守三条纪律：构造与释放成对（NewCoreKRSManager 对 ReleaseCoreKRSManager）、转交与清零成对（Login 与 SetCoreKRSObjectDictionaries 的来源元素被置空，不得再清零/释放）、引用与 Zero 成对（读出的状态引用先清零再释放）。信息体独立维护的符号表之登记、解析与其自身生命周期，见[核心KRS符号表案例](CoreKRSSymbolTable_Case.md)；跨模块的动态库打开与字典读取见 Windows模块的 [OpenCoreKRSObjectDll](../WinCoreKRS_Manager/OpenCoreKRSObjectDll.md)。
