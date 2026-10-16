# SetCoreKRSObjectSubEES

***

映射SetCoreKRSObjectSubEES接受全集（UniversalSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map SetCoreKRSObjectSubEES(&UniversalSet, &CoreKRSObject, SetCoreKRSObjectSubEESFunction);
```

核心KRS对象子元素环境检索器设置映射（SetCoreKRSObjectSubEES）把定义域子元素环境检索器写入值域对象的子元素环境检索器槽位（[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的 CoreKRSObject_SubEES，下标 3）。定义域为全集，可接受任意元素作为检索器。装配为**转交装配**：以 `operator&=` 把检索器整体转交进槽位，定义域元素随即被置空，持有权转移给对象，此后不得再对该来源元素清零或释放。

写入前槽位必须为空：若对象的子元素环境检索器槽位已非空，视为重复装配，映射 `throw Element;` 抛出默认元素异常。值域对象须为已由[NewCoreKRSObject](NewCoreKRSObject.md)构造的核心KRS对象。检索器由对象持有，读出引用见[ReadCoreKRSObjectSubEES](ReadCoreKRSObjectSubEES.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element SubEES;
// SubEES 为子元素环境检索器元素

SetCoreKRSObjectSubEESFunction(SubEES, Object);
// 检索器转交进对象子元素环境检索器槽位；SubEES 被置空

// 此后不得再对 SubEES 调用 ZeroElementFunction，否则重复释放同一检索器

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：先构造对象与子元素环境检索器SubEES，调用SetCoreKRSObjectSubEESFunction把检索器**转交装配**进对象的 CoreKRSObject_SubEES 槽位。转交语义意味着 SubEES 被置空、持有权转移到对象，此后不得再对 SubEES 清零或释放。检索器最终随[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)逐位释放——转交与清零成对、构造与释放成对。读出该检索器见[ReadCoreKRSObjectSubEES](ReadCoreKRSObjectSubEES.md)。
