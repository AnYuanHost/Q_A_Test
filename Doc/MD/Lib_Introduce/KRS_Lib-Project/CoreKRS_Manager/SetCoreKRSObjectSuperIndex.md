# SetCoreKRSObjectSuperIndex

***

映射SetCoreKRSObjectSuperIndex接受超索引集合（SuperIndexSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map SetCoreKRSObjectSuperIndex(&SuperIndexSet, &CoreKRSObject, SetCoreKRSObjectSuperIndexFunction);
```

核心KRS对象超索引设置映射（SetCoreKRSObjectSuperIndex）把定义域超索引写入值域对象的超索引槽位（[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的 CoreKRSObject_SuperIndex，下标 0），完成对象与超索引的绑定。装配为**拷贝装配**：以 CopyElementFunction 把超索引内容复制进槽位，定义域超索引元素不被改动，调用后仍保持可用，由调用方自行释放。

写入前槽位必须为空：若对象的超索引槽位已非空，视为重复装配，映射 `throw Element;` 抛出默认元素异常。值域对象须为已由[NewCoreKRSObject](NewCoreKRSObject.md)构造的核心KRS对象。绑定后该超索引即随对象一并交由 KRS 调度单元取用；新设计的核心KRS信息管理器（[CoreKRSManager](CoreKRSManager.md)）以超索引为登记键，须独立经[LoginCoreKRSManager](LoginCoreKRSManager.md)登记，对象本身不随之转交。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 70;

Element SuperIndex;
UIntToSuperIndexFunction(UIntElement, SuperIndex);

SetCoreKRSObjectSuperIndexFunction(SuperIndex, Object);
// 超索引复制进对象超索引槽位；SuperIndex 仍可用

ReleaseElementFunction(EmptyElement, SuperIndex);
ReleaseElementFunction(EmptyElement, UIntElement);
ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：先构造对象与超索引元素SuperIndex，调用SetCoreKRSObjectSuperIndexFunction把超索引写入对象的 CoreKRSObject_SuperIndex 槽位。装配为拷贝语义，SuperIndex 未被清空，仍由本方持有，须用 ReleaseElementFunction 成对释放；对象由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)与[NewCoreKRSObject](NewCoreKRSObject.md)成对释放。若对同一对象的超索引槽位再次调用本映射，槽位非空即抛出默认元素异常。对象不被转交进核心KRS信息管理器；如需以该超索引登记调度，独立经[LoginCoreKRSManager](LoginCoreKRSManager.md)登记。
