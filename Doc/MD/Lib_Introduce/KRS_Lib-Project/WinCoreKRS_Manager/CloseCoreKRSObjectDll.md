# CloseCoreKRSObjectDll

***

映射CloseCoreKRSObjectDll接受空元素集合（NullElementSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map CloseCoreKRSObjectDll(&NullElementSet, &CoreKRSObject, CloseCoreKRSObjectDllFunction);
```

核心KRS对象动态库关闭映射（CloseCoreKRSObjectDll）卸载值域对象动态库槽位（[CoreKRSObject_Dll](../CoreKRS_Manager/CoreKRSObject_Struct.md)）中持有的 Windows 模块，并释放该槽位元素，使槽位腾空、便于重新装载。

关闭以 `FreeLibrary` 卸载模块句柄，再释放动态库元素；只动动态库槽位，不触碰对象其他槽位。若槽位为空（无句柄或键空间为空）则直接返回、不做卸载。卸载后符号表中已解析的地址随之失效，须重新由[读取对象符号表](ReadDictionariesCoreKRSObject.md)解析。

本映射与[OpenCoreKRSObjectDll](OpenCoreKRSObjectDll.md)成对。

***

## 案例：

```C++
Element ObjectElement;
OpenCoreKRSObjectDllFunction(DllPath, ObjectElement);
ReadDictionariesCoreKRSObjectFunction(SymbolList, ObjectElement);

CloseCoreKRSObjectDllFunction(EmptyElement, ObjectElement);
// ObjectElement 的动态库槽位已腾空，可重新装载

ReleaseCoreKRSObjectFunction(EmptyElement, ObjectElement);
```

案例解释：定义域为空元素，值域为核心KRS对象ObjectElement。CloseCoreKRSObjectDllFunction卸载槽位中的模块并释放槽位元素，此后可再次装载其他库。卸载语义与既有 UnloadWinDll（文档未生成） 一致；模块卸载后符号表中的地址不再有效。装载、解析与关闭的完整流程，跳转至[核心KRS对象动态库模块](WinCoreKRS_Manager.md)。
