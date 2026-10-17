# GetCoreKRSObjectDll

***

映射GetCoreKRSObjectDll接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map GetCoreKRSObjectDll(&CoreKRSObject, &NullElementSet, GetCoreKRSObjectDllFunction);
```

核心KRS对象动态库读取映射（GetCoreKRSObjectDll）按定义域对象的动态库槽位（[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的 CoreKRSObject_Dll，下标 1）读出其持有的Windows动态库元素（WinDll），并以 `Range |= 槽位` 的**引用传递**把该槽位的借用引用交给值域空元素。值域元素引用对象内部的动态库元素，不复制内容，也不取得所有权。

读取为纯引用操作，不改变对象结构；但引用随对象失效。使用完毕必须以 ZeroElementFunction 解除该引用，**不得**对该输出元素单独调用 ReleaseElementFunction；对象一经[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放，此前取得的引用即悬垂，须先清零再释放。写入该槽位见[SetCoreKRSObjectDll](SetCoreKRSObjectDll.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

// 经 SetCoreKRSObjectDll 或 OpenCoreKRSObjectDll 已在动态库槽位写入 Windows动态库元素

Element DllQuote;
ZeroElementFunction(EmptyElement, DllQuote);

GetCoreKRSObjectDllFunction(Object, DllQuote);
// DllQuote 引用对象动态库槽位上的 Windows动态库元素

// ... 经 DllQuote 读取模块句柄

ZeroElementFunction(EmptyElement, DllQuote);
// 引用与 Zero 成对，不得单独 ReleaseElementFunction(DllQuote)

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：以对象Object为定义域，调用GetCoreKRSObjectDllFunction把动态库槽位上的 Windows动态库元素以引用传递到DllQuote。DllQuote 是借用引用，用毕必须用 ZeroElementFunction 成对解除，不得单独释放；若Object随后被[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放而未清零该引用，即构成悬垂引用。槽位元素本体始终由对象持有，不因读取而转移。
