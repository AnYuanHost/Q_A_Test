# LogoutCoreKRSManager

***

映射LogoutCoreKRSManager接受超索引集合（SuperIndexSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map LogoutCoreKRSManager(&SuperIndexSet, &CoreKRSManager, LogoutCoreKRSManagerFunction);
```

核心KRS管理器注销映射（LogoutCoreKRSManager）以定义域上的超索引在值域管理器的分页登记表中逐项匹配已登记信息体的超索引位置（[CoreKRSObject_Struct](CoreKRSObject_Struct.md) 的 CoreKRSObject_SuperIndex），命中后注销该项：非空信息体经 [ReleaseCoreKRSObject](ReleaseCoreKRSObject.md) 释放（连同其内部的动态库、符号表、子元素环境检索器等槽位一并释放），状态码子位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_State）经 ReleaseElementFunction 释放，登记项随之成为空位。注销不改变末尾标志（CoreKRS_End）：空位仅是内容被清空，登记项数不减，需收缩登记项数应改用 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)。

若定义域超索引在管理器中未登记，则抛出异常（throw Element）。注销依据的是超索引而非下标，因此不受项布局变动影响。配对映射为 [LoginCoreKRSManager](LoginCoreKRSManager.md)，登录一次对应注销一次。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

Element ObjectElement;
NewCoreKRSObjectFunction(EmptyElement, ObjectElement);

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 20;

Element SuperIndexElement;
UIntToSuperIndexFunction(UIntElement, SuperIndexElement);
// 经 SetCoreKRSObjectSuperIndex 写入 ObjectElement 的超索引位置

LoginCoreKRSManagerFunction(ObjectElement, ManagerElement);
// 信息体转交登录进管理器新项

LogoutCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
// 按超索引注销该项，信息体与状态置空，CoreKRS_End 不减

ReleaseElementFunction(EmptyElement, SuperIndexElement);
ReleaseElementFunction(EmptyElement, UIntElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域是超索引、值域是管理器；调用映射后管理器按超索引定位登记项，释放其中的信息体与状态码，留下空位，而 CoreKRS_End 保持不变。登录与注销必须成对、且必须落在同一管理器上：漏掉注销会使信息体永久占用管理器。超索引元素与无符号元素由本方释放，管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对释放。空位回收见 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)，完整链路见[核心KRS管理器集合](CoreKRSManager.md)。
