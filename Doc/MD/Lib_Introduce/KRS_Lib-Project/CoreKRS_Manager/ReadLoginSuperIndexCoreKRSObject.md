# ReadLoginSuperIndexCoreKRSObject

***

映射ReadLoginSuperIndexCoreKRSObject接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadLoginSuperIndexCoreKRSObject(&CoreKRSObject, &NullElementSet, ReadLoginSuperIndexCoreKRSObjectFunction);
```

核心KRS对象登录超索引读取映射（ReadLoginSuperIndexCoreKRSObject）按定义域对象的登录超索引槽位（[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的 CoreKRSObject_LoginSuperIndex，下标 4）读出登记的登录超索引，并以 `Range |= 槽位` 的**引用传递**把该槽位的借用引用交给值域空元素。值域元素引用对象内部的超索引，不复制内容，也不取得所有权。

使用完毕必须以 ZeroElementFunction 解除该引用，**不得**对该输出元素单独调用 ReleaseElementFunction。引用随对象失效：对象一经[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放，此前取得的引用即悬垂，须先清零再释放。写入该槽位见[SetLoginSuperIndexCoreKRSObject](SetLoginSuperIndexCoreKRSObject.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element LoginSuperIndex;
// LoginSuperIndex 为登录超索引元素
SetLoginSuperIndexCoreKRSObjectFunction(LoginSuperIndex, Object);
// 登录超索引已拷贝进对象登录超索引槽位

Element SuperIndexQuote;
ZeroElementFunction(EmptyElement, SuperIndexQuote);

ReadLoginSuperIndexCoreKRSObjectFunction(Object, SuperIndexQuote);
// SuperIndexQuote 引用对象登记的登录超索引

// ... 经 SuperIndexQuote 核对登录调度依据

ZeroElementFunction(EmptyElement, SuperIndexQuote);
// 引用与 Zero 成对，不得单独 ReleaseElementFunction(SuperIndexQuote)

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：以对象Object为定义域，调用ReadLoginSuperIndexCoreKRSObjectFunction把登录超索引槽位上的超索引以引用传递到SuperIndexQuote。SuperIndexQuote 是借用引用，用毕必须用 ZeroElementFunction 成对解除，不得单独释放；超索引本体由对象持有，不因读取而转移。若Object随后被[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)释放而未清零该引用，即构成悬垂引用。实际登录由[LoginCoreKRSManager](LoginCoreKRSManager.md)完成。
