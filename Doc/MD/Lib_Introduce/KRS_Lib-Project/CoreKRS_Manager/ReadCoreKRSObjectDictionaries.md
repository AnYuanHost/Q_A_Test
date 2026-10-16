# ReadCoreKRSObjectDictionaries

***

映射ReadCoreKRSObjectDictionaries接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadCoreKRSObjectDictionaries(&CoreKRSObject, &NullElementSet, ReadCoreKRSObjectDictionariesFunction);
```

核心KRS对象符号表读取映射（ReadCoreKRSObjectDictionaries）按定义域对象的符号表槽位读出其持有的符号表。该槽位常量名为 CoreKRSObject_Dictionaries（下标 2），为**历史命名**，语义即符号表槽位。读出以 `Range |= 槽位` 的**引用传递**把符号表的借用引用交给值域空元素，值域元素引用对象内部持有的符号表，不复制内容，也不取得所有权。

使用完毕必须以 ZeroElementFunction 解除该引用，**不得**对该输出元素单独调用 ReleaseElementFunction（槽位上的符号表由对象按符号表体例释放）。引用随对象失效：对象一经[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放，此前取得的引用即悬垂，须先清零再释放。写入该槽位见[SetCoreKRSObjectDictionaries](SetCoreKRSObjectDictionaries.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
SetCoreKRSObjectDictionariesFunction(Table, Object);
// 符号表已转交进对象符号表槽位

Element TableQuote;
ZeroElementFunction(EmptyElement, TableQuote);

ReadCoreKRSObjectDictionariesFunction(Object, TableQuote);
// TableQuote 引用对象符号表槽位上的符号表

// ... 经 TableQuote 检索符号

ZeroElementFunction(EmptyElement, TableQuote);
// 引用与 Zero 成对，不得单独 ReleaseElementFunction(TableQuote)

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：以对象Object为定义域，调用ReadCoreKRSObjectDictionariesFunction把符号表槽位上的符号表以引用传递到TableQuote。TableQuote 是借用引用，用毕必须用 ZeroElementFunction 成对解除，不得单独释放；槽位上的符号表本体由对象持有，其释放由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)按符号表体例完成。若Object随后被释放而未清零该引用，即构成悬垂引用。
