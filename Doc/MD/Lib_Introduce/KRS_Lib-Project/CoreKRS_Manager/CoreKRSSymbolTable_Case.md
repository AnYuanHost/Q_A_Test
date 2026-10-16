# CoreKRSSymbolTable_Case

***

本案例串联 KRS_Lib 知识库落地的完整链路：装载知识库动态链接库 → 按符号清单建独立符号表并解析地址 → 把符号表挂入核心KRS信息体 → 登录信息管理器 → 按超索引检索与读写状态 → 登出与释放。涉及的实体见[核心KRS管理器模块](CoreKRS_Manager.md)、[核心KRS符号表](CoreKRSSymbolTable.md)、[核心KRS对象集合](CoreKRSObject.md)与[核心KRS信息管理器集合](CoreKRSManager.md)。

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

// ④ 新建信息管理器并登录信息体（转交装配：ObjectElement 被置空）
Element Manager;
NewCoreKRSManagerFunction(EmptyElement, Manager);
LoginCoreKRSManagerFunction(ObjectElement, Manager);

// ⑤ 按超索引检索登记项，读登记项状态
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
Element StateElement;
NewUIntElementFunction(EmptyElement, StateElement);

GetEleOrder(IndexPair, 0) |= IndexElement;
GetEleOrder(IndexPair, 1) |= Manager;
ReadObjectStateCoreKRSManagerFunction(IndexPair, StateElement);
// StateElement 为 CoreKRSObject_Usable(0) 或 CoreKRSObject_Unusable(1)

// ⑥ 登出（注销信息体与状态，留空位），压缩空位并释放管理器
LogoutCoreKRSManagerFunction(SI5, Manager);
DefragmentCoreKRSManagerFunction(EmptyElement, Manager);
ReleaseCoreKRSManagerFunction(EmptyElement, Manager);
```

案例解释：① 信息体先由[NewCoreKRSObject](NewCoreKRSObject.md)构造，再由[OpenCoreKRSObjectDll](../WinCoreKRS_Manager/OpenCoreKRSObjectDll.md)把模块句柄装配进动态链接库槽位。② [ReadDictionariesCoreKRSObject](../WinCoreKRS_Manager/ReadDictionariesCoreKRSObject.md)一步完成"按符号清单建表 → 以信息体句位设符号表来源库 → 逐项解析 → 符号表转交装配进信息体"；转交后符号表归信息体持有，由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)按符号表体例一并释放。③ 信息体的超索引、登录超索引与登出超索引三位用**拷贝装配**写入，来源元素保持可用；符号表槽位用**转交装配**写入，来源被置空。

④ [LoginCoreKRSManager](LoginCoreKRSManager.md)以信息体的超索引为登记键，把信息体**转交**进管理器并置状态为可用，故此后不得再单独释放 ObjectElement——它已属于管理器登记项。⑤ [SelectCoreKRSManager](SelectCoreKRSManager.md)以序偶"超索引 + 管理器"返回登记项下标（未命中 UINT_MAX），[ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md)以序偶"下标 + 管理器"引用传递读回状态码，读出的状态是登记项状态位的借用引用，用毕以 `ZeroElementFunction` 解除引用。⑥ [LogoutCoreKRSManager](LogoutCoreKRSManager.md)按超索引注销，释放信息体（含其动态库元素与符号表）与状态位、留下空位；[DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)压缩空位；最后由[ReleaseCoreKRSManager](ReleaseCoreKRSManager.md)释放整个管理器。

案例中未做动态库卸载：对象动态库槽位释放时只释放元素、不调用 `FreeLibrary`，卸载须由[CloseCoreKRSObjectDll](../WinCoreKRS_Manager/CloseCoreKRSObjectDll.md)显式完成，且必须在信息体仍可访问时执行（登录前，或从管理器取回条目后、登出前）。
