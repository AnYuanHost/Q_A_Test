# SetCoreKRSObjectDll

***

映射SetCoreKRSObjectDll接受Windows动态库元素集合（WinDllSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map SetCoreKRSObjectDll(&WinDllSet, &CoreKRSObject, SetCoreKRSObjectDllFunction);
```

核心KRS对象动态库设置映射（SetCoreKRSObjectDll）把定义域Windows动态库元素写入值域对象的动态库槽位（[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的 CoreKRSObject_Dll，下标 1）。装配为**拷贝装配**：以 CopyElementFunction 把 Windows动态库元素复制进槽位，定义域元素不被改动，调用后仍保持可用，由调用方自行释放。

写入前槽位必须为空：若对象的动态库槽位已非空，视为重复装配，映射 `throw Element;` 抛出默认元素异常。值域对象须为已由[NewCoreKRSObject](NewCoreKRSObject.md)构造的核心KRS对象。本映射只负责把元素放入槽位；模块的加载与卸载由 Windows 模块的[OpenCoreKRSObjectDll](../WinCoreKRS_Manager/OpenCoreKRSObjectDll.md)与[CloseCoreKRSObjectDll](../WinCoreKRS_Manager/CloseCoreKRSObjectDll.md)负责，读取见[GetCoreKRSObjectDll](GetCoreKRSObjectDll.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element DllElement;
NewWinDllFunction(EmptyElement, DllElement);
GetWinDllElement(DllElement) = NULL;
// DllElement 为尚未打开的 Windows动态库元素（句柄为空）

SetCoreKRSObjectDllFunction(DllElement, Object);
// 复制进对象动态库槽位（CoreKRSObject_Dll）；DllElement 仍可用

ReleaseWinDllFunction(EmptyElement, DllElement);
ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例解释：先构造对象与 Windows动态库元素DllElement，调用SetCoreKRSObjectDllFunction把该元素复制进对象的 CoreKRSObject_Dll 槽位。装配为拷贝语义，DllElement 未被清空，仍由本方持有，须用ReleaseWinDll（文档未生成）成对释放；对象由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)与[NewCoreKRSObject](NewCoreKRSObject.md)成对释放。装载真实模块时，先经[OpenCoreKRSObjectDll](../WinCoreKRS_Manager/OpenCoreKRSObjectDll.md)打开、退出前经[CloseCoreKRSObjectDll](../WinCoreKRS_Manager/CloseCoreKRSObjectDll.md)关闭——打开与关闭成对。
