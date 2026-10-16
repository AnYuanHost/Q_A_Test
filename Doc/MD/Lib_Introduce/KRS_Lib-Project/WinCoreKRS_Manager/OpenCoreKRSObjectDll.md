# OpenCoreKRSObjectDll

***

映射OpenCoreKRSObjectDll接受流集合（StreamSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map OpenCoreKRSObjectDll(&StreamSet, &CoreKRSObject, OpenCoreKRSObjectDllFunction);
```

核心KRS对象动态库打开映射（OpenCoreKRSObjectDll）以定义域元素键空间中保存的宽字符库路径加载 Windows 动态链接库，把模块句柄封装为 Windows动态库元素（WinDll）后装配进值域对象的动态库位置（[CoreKRSObject_Dll](../CoreKRS_Manager/CoreKRSObject_Struct.md)）。

装配分三步：先由 `NewWinDllFunction` 建立动态库元素，模块句柄取 `LoadLibraryW((LPCWSTR)Domain.KeySpace)`（显式宽字符入口，避免 `UNICODE` 宏影响句柄类型）；装入后由[设置对象动态库](../CoreKRS_Manager/SetCoreKRSObjectDll.md)以**拷贝装配**写入槽位；最后释放本轮借用的动态库元素。槽位在本映射中非空（重复装载）时抛异常，须先由[CloseCoreKRSObjectDll](CloseCoreKRSObjectDll.md)卸载。

本映射只负责装载，不负责解析符号——符号解析由[读取对象符号表](ReadDictionariesCoreKRSObject.md)经独立符号表完成。

***

## 案例：

```C++
Element DllPath;
// DllPath 的键空间存放宽字符库路径

Element ObjectElement;
NewCoreKRSObjectFunction(EmptyElement, ObjectElement);

OpenCoreKRSObjectDllFunction(DllPath, ObjectElement);
// ObjectElement 的动态库槽位现持有已加载模块句柄

CloseCoreKRSObjectDllFunction(EmptyElement, ObjectElement);
ReleaseCoreKRSObjectFunction(EmptyElement, ObjectElement);
```

案例解释：以承载库路径的流元素DllPath为定义域、核心KRS对象ObjectElement为值域，OpenCoreKRSObjectDllFunction把模块句柄装配进对象的动态库槽位。装载语义与既有 LoadWinDll（文档未生成） 一致；装载一次须由[CloseCoreKRSObjectDll](CloseCoreKRSObjectDll.md)卸载一次，否则模块句柄泄漏。装载、解析与关闭的完整流程，跳转至[核心KRS对象动态库模块](WinCoreKRS_Manager.md)。
