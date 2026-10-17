# CoreKRSSymbolTable_Case

***

本案例串联 KRS_Lib 知识库落地的完整链路：装载知识库动态链接库 → 按符号清单建独立符号表并解析地址 → 把符号表挂入核心KRS信息体 → 以信息体超索引为键登记核心KRS信息管理器 → 按超索引检索与读写登记项槽位 → 注销与释放。涉及的实体见[核心KRS管理器模块](CoreKRS_Manager.md)、[核心KRS符号表](CoreKRSSymbolTable.md)、[核心KRS对象集合](CoreKRSObject.md)与[核心KRS信息管理器集合](CoreKRSManager.md)。

***

## 案例：

```C++
// ① 构造信息体，装载知识库动态链接库
Element ObjectElement;
NewCoreKRSObjectFunction(EmptyElement, ObjectElement);

Element DllPath;
// DllPath 的键空间存放宽字符库路径
OpenCoreKRSObjectDllFunction(DllPath, ObjectElement);

// ② 按符号清单建独立符号表：建表 → 设来源库 → 逐项解析 → 转交挂入信息体
Element SymbolList;
// SymbolList 为元素序，交替存放 [符号名, 类型码]
ReadDictionariesCoreKRSObjectFunction(SymbolList, ObjectElement);

// ③ 向信息体补写调度用超索引
Element SI5;
// SI5 为知识库超索引
SetCoreKRSObjectSuperIndexFunction(SI5, ObjectElement);
SetLoginSuperIndexCoreKRSObjectFunction(SI5, ObjectElement);
SetLogoutSuperIndexCoreKRSObjectFunction(SI5, ObjectElement);

// ④ 新建信息管理器，以信息体的超索引为登记键登记；对象本身不随之转交
Element Manager;
NewCoreKRSManagerFunction(EmptyElement, Manager);
LoginCoreKRSManagerFunction(SI5, Manager);
// 登记键 SI5 深拷贝进登记项；ObjectElement 仍由本方持有、未被转交

// ⑤ 按超索引检索登记项，读出该项的动态库槽位
Element SelectPair;
NewOrderedPairFunction(EmptyElement, SelectPair);
Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);

GetEleOrder(SelectPair, 0) |= SI5;
GetEleOrder(SelectPair, 1) |= Manager;
SelectCoreKRSManagerFunction(SelectPair, IndexElement);
// IndexElement 为检索到的登记项下标（未命中为 UINT_MAX）

Element IndexPair;
NewOrderedPairFunction(EmptyElement, IndexPair);
Element DllRef;
GetEleOrder(IndexPair, 0) |= IndexElement;
GetEleOrder(IndexPair, 1) |= Manager;
ReadCoreKRSManagerDllFunction(IndexPair, DllRef);
// DllRef 引用该项的 CoreKRSM_Dll 槽位；如需装配，经 PutCoreKRSManagerDll

ZeroElementFunction(EmptyElement, DllRef);
ZeroElementFunction(EmptyElement, IndexPair);
ZeroElementFunction(EmptyElement, SelectPair);
ReleaseElementFunction(EmptyElement, IndexElement);

// ⑥ 注销登记键（留空位），压缩空位并释放管理器
LogoutCoreKRSManagerFunction(SI5, Manager);
DefragmentCoreKRSManagerFunction(EmptyElement, Manager);
ReleaseCoreKRSManagerFunction(EmptyElement, Manager);
```

案例解释：① 信息体先由[NewCoreKRSObject](NewCoreKRSObject.md)构造，再由[OpenCoreKRSObjectDll](../WinCoreKRS_Manager/OpenCoreKRSObjectDll.md)把模块句柄装配进动态链接库槽位。② [ReadDictionariesCoreKRSObject](../WinCoreKRS_Manager/ReadDictionariesCoreKRSObject.md)一步完成"按符号清单建表 → 以信息体句位设符号表来源库 → 逐项解析 → 符号表转交装配进信息体"；转交后符号表归信息体持有，由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)按符号表体例一并释放。③ 信息体的超索引、登录超索引与登出超索引三位用**拷贝装配**写入，来源元素保持可用；符号表槽位用**转交装配**写入，来源被置空。

④ 新设计的核心KRS信息管理器（[CoreKRSManager](CoreKRSManager.md)）登记 {超索引, 动态库, 通用映射序} 项：[LoginCoreKRSManager](LoginCoreKRSManager.md)以信息体的超索引为登记键，把超索引**深拷贝**进末尾登记项；信息体本身不随之转交，ObjectElement 仍由本方持有。⑤ [SelectCoreKRSManager](SelectCoreKRSManager.md)以序偶“超索引 + 管理器”返回登记项下标（未命中 UINT_MAX），[ReadCoreKRSManagerDll](ReadCoreKRSManagerDll.md)/[GetCoreKRSManagerDll](GetCoreKRSManagerDll.md)以序偶“下标 + 管理器”引用读取或移出该项的动态库槽位，通用映射序槽位同理经[ReadCoreKRSManagerUMap](ReadCoreKRSManagerUMap.md)/[GetCoreKRSManagerUMap](GetCoreKRSManagerUMap.md)读取、经[PutCoreKRSManagerDll](PutCoreKRSManagerDll.md)/[PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md)装配；经 Read 取出的引用用毕以 `ZeroElementFunction` 解除。⑥ [LogoutCoreKRSManager](LogoutCoreKRSManager.md)按超索引注销登记项（释放超索引、动态库与通用映射序三槽位）留下空位；[DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)压缩空位；最后由[ReleaseCoreKRSManager](ReleaseCoreKRSManager.md)释放整个管理器。

案例中未做动态库卸载：对象动态库槽位释放时只释放元素、不调用 `FreeLibrary`，卸载须由[CloseCoreKRSObjectDll](../WinCoreKRS_Manager/CloseCoreKRSObjectDll.md)显式完成，且必须在信息体仍可访问时执行（信息体由本方持有，随时可关）。
