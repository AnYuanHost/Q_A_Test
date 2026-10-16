# SetCoreKRSObjectDictionaries

***

映射SetCoreKRSObjectDictionaries接受符号表集合（CoreKRSSymbolTable）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map SetCoreKRSObjectDictionaries(&CoreKRSSymbolTable, &CoreKRSObject, SetCoreKRSObjectDictionariesFunction);
```

核心KRS对象符号表设置映射（SetCoreKRSObjectDictionaries）把定义域符号表写入值域对象的符号表槽位。该槽位常量名为 CoreKRSObject_Dictionaries（下标 2），是**历史命名**，语义即符号表槽位，承载的核心元素是符号表（[CoreKRSSymbolTable](CoreKRSSymbolTable.md)），名称沿用早期草案而原样保留。装配为**转交装配**：以 `operator&=` 把符号表整体转交进槽位，定义域符号表元素随即被置空，持有权转移给对象，此后不得再对该来源元素清零或释放。

写入前槽位必须为空：若对象的符号表槽位已非空，视为重复装配，映射 `throw Element;` 抛出默认元素异常。值域对象须为已由[NewCoreKRSObject](NewCoreKRSObject.md)构造的核心KRS对象。槽位上的符号表由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)按符号表体例释放，读出引用见[ReadCoreKRSObjectDictionaries](ReadCoreKRSObjectDictionaries.md)，Windows 模块侧的读入见[ReadDictionariesCoreKRSObject](../WinCoreKRS_Manager/ReadDictionariesCoreKRSObject.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);

SetCoreKRSObjectDictionariesFunction(Table, Object);
// 符号表转交进对象符号表槽位；Table 被置空

// 此后不得再对 Table 调用 ZeroElementFunction 或 ReleaseCoreKRSSymbolTableFunction

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：先构造对象与符号表Table，调用SetCoreKRSObjectDictionariesFunction把符号表**转交装配**进对象的 CoreKRSObject_Dictionaries 槽位。转交语义意味着 Table 被置空、持有权转移到对象，此后不得再对 Table 清零或释放（否则重复释放同一符号表）。符号表最终随[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)按符号表体例释放——转交与清零成对、构造与释放成对，缺一不可。
