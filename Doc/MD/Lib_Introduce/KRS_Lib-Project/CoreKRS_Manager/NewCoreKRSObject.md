# NewCoreKRSObject

***

映射NewCoreKRSObject接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewCoreKRSObject(&NullElementSet, &NullElementSet, NewCoreKRSObjectFunction);
```

新建核心KRS对象映射（NewCoreKRSObject）在值域空元素上构造一个核心KRS对象，其 6 个位置（超索引、动态库、符号表、子元素环境检索器、登录超索引、登出超索引）全部就位并置空。构造完成后，值域元素即属于核心KRS对象集合（[CoreKRSObject](CoreKRSObject.md)），可接受超索引、动态库、符号表、子元素环境检索器与登录/登出超索引的装配，并可登录到核心KRS管理器。

该映射与[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)成对：构造一次，使用完毕释放一次。对已构造的元素重复构造会覆盖原位置内容并泄漏其内部资源，故须先确认目标为空元素。位置常量与位置数量见[CoreKRSObject_Struct](CoreKRSObject_Struct.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);
// Object 即成为核心KRS对象

// 其后可经 SetCoreKRSObjectSuperIndex、SetCoreKRSObjectDll、
// SetCoreKRSObjectDictionaries、SetCoreKRSObjectSubEES、
// SetLoginSuperIndexCoreKRSObject、SetLogoutSuperIndexCoreKRSObject 装配各槽位

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：以空元素Object为值域，用NewCoreKRSObjectFunction在其上构造核心KRS对象，随后即可装配各槽位并登录到管理器。使用完毕必须由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)成对释放；跳过释放直接令元素析构，会泄漏动态库元素、符号表与子元素环境检索器等槽位的资源。对象的完整填充与释放流程见[CoreKRSObject](CoreKRSObject.md)。
