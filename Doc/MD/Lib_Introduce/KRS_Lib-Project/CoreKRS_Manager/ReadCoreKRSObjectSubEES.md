# ReadCoreKRSObjectSubEES

***

映射ReadCoreKRSObjectSubEES接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadCoreKRSObjectSubEES(&CoreKRSObject, &NullElementSet, ReadCoreKRSObjectSubEESFunction);
```

核心KRS对象子元素环境检索器读取映射（ReadCoreKRSObjectSubEES）按定义域对象的子元素环境检索器槽位（[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的 CoreKRSObject_SubEES，下标 3）读出其持有的子元素环境检索器，并以 `Range |= 槽位` 的**引用传递**把该槽位的借用引用交给值域空元素。值域元素引用对象内部持有的检索器，不复制内容，也不取得所有权。

使用完毕必须以 ZeroElementFunction 解除该引用，**不得**对该输出元素单独调用 ReleaseElementFunction。引用随对象失效：对象一经[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放，此前取得的引用即悬垂，须先清零再释放。检索器本体始终由对象持有，写入该槽位见[SetCoreKRSObjectSubEES](SetCoreKRSObjectSubEES.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element SubEES;
// SubEES 为子元素环境检索器元素
SetCoreKRSObjectSubEESFunction(SubEES, Object);
// 检索器已转交进对象子元素环境检索器槽位

Element SubEESQuote;
ZeroElementFunction(EmptyElement, SubEESQuote);

ReadCoreKRSObjectSubEESFunction(Object, SubEESQuote);
// SubEESQuote 引用对象子元素环境检索器槽位上的检索器

// ... 经 SubEESQuote 完成子元素环境检索

ZeroElementFunction(EmptyElement, SubEESQuote);
// 引用与 Zero 成对，不得单独 ReleaseElementFunction(SubEESQuote)

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：以对象Object为定义域，调用ReadCoreKRSObjectSubEESFunction把子元素环境检索器槽位上的检索器以引用传递到SubEESQuote。SubEESQuote 是借用引用，用毕必须用 ZeroElementFunction 成对解除，不得单独释放；检索器本体由对象持有，不因读取而转移。若Object随后被[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放而未清零该引用，即构成悬垂引用。
