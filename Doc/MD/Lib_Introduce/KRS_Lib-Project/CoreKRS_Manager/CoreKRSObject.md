# CoreKRSObject

***

集合CoreKRSObject为所有核心KRS对象元素的集合，定义为：

```C++
Set CoreKRSObject(EmptyElement, CoreKRSObjectTest);
```

核心KRS对象集合（CoreKRSObject）由所有核心KRS对象元素组成，是知识检索调度层（KRS）的调度载荷：一个对象把超索引、动态库、符号表、子元素环境检索器与登录/登出超索引绑定在同一元素上，交由核心KRS管理器（[CoreKRSManager](CoreKRSManager.md)）登记与调度。对象元素共 6 个位置（CoreKRSObject_OrderSize=6），通过宏 GetEleOrder(元素, 序号) 读取，槽位布局如下：

| 下标 | 含义 | 子元素集合 |
| --- | --- | --- |
| CoreKRSObject_SuperIndex | 0 | 超索引；超索引集合（SuperIndexSet） |
| CoreKRSObject_Dll | 1 | 动态库；Windows动态库元素集合（WinDllSet） |
| CoreKRSObject_Dictionaries | 2 | 符号表；符号表集合（CoreKRSSymbolTable） |
| CoreKRSObject_SubEES | 3 | 子元素环境检索器；全集（UniversalSet） |
| CoreKRSObject_LoginSuperIndex | 4 | 登录超索引；超索引集合（SuperIndexSet） |
| CoreKRSObject_LogoutSuperIndex | 5 | 登出超索引；超索引集合（SuperIndexSet） |

位置 CoreKRSObject_Dictionaries 是**历史命名**：该槽位承载的核心元素是符号表（[CoreKRSSymbolTable](CoreKRSSymbolTable.md)），语义即符号表槽位，名称沿用早期草案而原样保留。结构位置常量、位置数量与状态码见[CoreKRSObject_Struct](CoreKRSObject_Struct.md)；状态码（CoreKRSObject_Usable=0 可用 / CoreKRSObject_Unusable=1 不可用）不记在对象本体，而记在管理器的状态子位置。

以本集合为定义域的映射：动态库、符号表、子元素环境检索器与登录/登出超索引的读出（[GetCoreKRSObjectDll](GetCoreKRSObjectDll.md)、[ReadCoreKRSObjectDictionaries](ReadCoreKRSObjectDictionaries.md)、[ReadCoreKRSObjectSubEES](ReadCoreKRSObjectSubEES.md)、[ReadLoginSuperIndexCoreKRSObject](ReadLoginSuperIndexCoreKRSObject.md)、[ReadLogoutSuperIndexCoreKRSObject](ReadLogoutSuperIndexCoreKRSObject.md)），以及对象登录（[LoginCoreKRSManager](LoginCoreKRSManager.md)）。以本集合为值域的映射：各槽位的装配（[SetCoreKRSObjectSuperIndex](SetCoreKRSObjectSuperIndex.md)、[SetCoreKRSObjectDll](SetCoreKRSObjectDll.md)、[SetCoreKRSObjectDictionaries](SetCoreKRSObjectDictionaries.md)、[SetCoreKRSObjectSubEES](SetCoreKRSObjectSubEES.md)、[SetLoginSuperIndexCoreKRSObject](SetLoginSuperIndexCoreKRSObject.md)、[SetLogoutSuperIndexCoreKRSObject](SetLogoutSuperIndexCoreKRSObject.md)）与对象释放（[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)）。本集合的成员判定由判定函数 CoreKRSObjectTest 完成（元素序为 6 位）。

其中动态库槽位与符号表槽位由 Windows 模块经手：打开[OpenCoreKRSObjectDll](../WinCoreKRS_Manager/OpenCoreKRSObjectDll.md)、读入符号表[ReadDictionariesCoreKRSObject](../WinCoreKRS_Manager/ReadDictionariesCoreKRSObject.md)、关闭[CloseCoreKRSObjectDll](../WinCoreKRS_Manager/CloseCoreKRSObjectDll.md)。对象由[NewCoreKRSObject](NewCoreKRSObject.md)构造、由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放，两者成对。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);
// Object 即属于核心KRS对象集合

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element SuperIndex;
GetUIntElement(UIntElement) = 70;
UIntToSuperIndexFunction(UIntElement, SuperIndex);

Element LoginSuperIndex;
GetUIntElement(UIntElement) = 10;
UIntToSuperIndexFunction(UIntElement, LoginSuperIndex);

Element LogoutSuperIndex;
GetUIntElement(UIntElement) = 90;
UIntToSuperIndexFunction(UIntElement, LogoutSuperIndex);

SetCoreKRSObjectSuperIndexFunction(SuperIndex, Object);
SetLoginSuperIndexCoreKRSObjectFunction(LoginSuperIndex, Object);
SetLogoutSuperIndexCoreKRSObjectFunction(LogoutSuperIndex, Object);
// 三个超索引槽位就位（拷贝装配，来源元素保持可用）

Element Manager;
NewCoreKRSManagerFunction(EmptyElement, Manager);

LoginCoreKRSManagerFunction(Object, Manager);
// 按超索引槽位上的超索引把对象登记到核心KRS管理器；Object 被转交（置空）

LogoutCoreKRSManagerFunction(SuperIndex, Manager);
// 按超索引登出：注销该信息体与状态，留下空位

ReleaseCoreKRSManagerFunction(EmptyElement, Manager);
ReleaseElementFunction(EmptyElement, SuperIndex);
ReleaseElementFunction(EmptyElement, LoginSuperIndex);
ReleaseElementFunction(EmptyElement, LogoutSuperIndex);
ReleaseElementFunction(EmptyElement, UIntElement);
```

案例沿"构造→写超索引→写登录/登出超索引→登录管理器→登出→释放"的链路走一遍：先由[NewCoreKRSObject](NewCoreKRSObject.md)构造对象，再经[SetCoreKRSObjectSuperIndex](SetCoreKRSObjectSuperIndex.md)、[SetLoginSuperIndexCoreKRSObject](SetLoginSuperIndexCoreKRSObject.md)、[SetLogoutSuperIndexCoreKRSObject](SetLogoutSuperIndexCoreKRSObject.md)以**拷贝装配**写入三个超索引槽位，来源超索引元素不被清空、仍由本方释放；随后经[LoginCoreKRSManager](LoginCoreKRSManager.md)把对象登记到核心KRS管理器，此时对象被**转交装配**进登记项、Object 被置空，其后的释放归管理器（[ReleaseCoreKRSManager](ReleaseCoreKRSManager.md)）；使用完毕经[LogoutCoreKRSManager](LogoutCoreKRSManager.md)按超索引登出，再释放管理器。构造与释放成对、拷贝装配与来源释放成对、转交与清零成对，缺一不可。
