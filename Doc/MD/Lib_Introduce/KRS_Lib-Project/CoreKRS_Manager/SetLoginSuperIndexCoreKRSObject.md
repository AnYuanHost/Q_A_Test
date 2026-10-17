# SetLoginSuperIndexCoreKRSObject

***

映射SetLoginSuperIndexCoreKRSObject接受超索引集合（SuperIndexSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map SetLoginSuperIndexCoreKRSObject(&SuperIndexSet, &CoreKRSObject, SetLoginSuperIndexCoreKRSObjectFunction);
```

核心KRS对象登录超索引设置映射（SetLoginSuperIndexCoreKRSObject）把定义域超索引写入值域对象的登录超索引槽位（[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的 CoreKRSObject_LoginSuperIndex，下标 4），作为对象登录调度依据的超索引。装配为**拷贝装配**：以 CopyElementFunction 把超索引内容复制进槽位，定义域超索引元素不被改动，调用后仍保持可用，由调用方自行释放。

写入前槽位必须为空：若对象的登录超索引槽位已非空，视为重复装配，映射 `throw Element;` 抛出默认元素异常。值域对象须为已由[NewCoreKRSObject](NewCoreKRSObject.md)构造的核心KRS对象。读出该槽位见[ReadLoginSuperIndexCoreKRSObject](ReadLoginSuperIndexCoreKRSObject.md)，登出超索引见[SetLogoutSuperIndexCoreKRSObject](SetLogoutSuperIndexCoreKRSObject.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 10;

Element LoginSuperIndex;
UIntToSuperIndexFunction(UIntElement, LoginSuperIndex);

SetLoginSuperIndexCoreKRSObjectFunction(LoginSuperIndex, Object);
// 登录超索引复制进对象登录超索引槽位；LoginSuperIndex 仍可用

ReleaseElementFunction(EmptyElement, LoginSuperIndex);
ReleaseElementFunction(EmptyElement, UIntElement);
ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：先构造对象与登录超索引LoginSuperIndex，调用SetLoginSuperIndexCoreKRSObjectFunction把登录超索引写入对象的 CoreKRSObject_LoginSuperIndex 槽位。装配为拷贝语义，LoginSuperIndex 未被清空，仍由本方持有，须用 ReleaseElementFunction 成对释放；对象由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)与[NewCoreKRSObject](NewCoreKRSObject.md)成对释放。若对同一对象的登录超索引槽位再次调用本映射，槽位非空即抛出默认元素异常。读出该槽位见[ReadLoginSuperIndexCoreKRSObject](ReadLoginSuperIndexCoreKRSObject.md)。
