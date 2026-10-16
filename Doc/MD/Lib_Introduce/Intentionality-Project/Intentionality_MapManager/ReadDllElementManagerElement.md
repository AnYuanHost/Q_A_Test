# ReadDllElementManagerElement

***

映射ReadDllElementManagerElement接受动态库元素管理器集合（DllElementManager）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadDllElementManagerElement(&DllElementManager, &NullElementSet, ReadDllElementManagerElementFunction);
```

动态库元素管理器元素读取映射（ReadDllElementManagerElement）按定义域管理器条目的序位置（[DEM_Order](DllElementManager_Struct.md)）读取 DLL 导出元素（序结构的元素子位置 DEM_Element），将其引用传递到值域空元素上。值域元素引用管理器条目内部的 DLL 导出元素，不复制内容，使用完毕必须清零。

***

## 案例：

```C++
Element ManagerEntry;
ZeroElementFunction(EmptyElement, ManagerEntry);
// ManagerEntry 为已登记动态库元素的管理器条目

Element ExportElement;
ZeroElementFunction(EmptyElement, ExportElement);

ReadDllElementManagerElementFunction(ManagerEntry, ExportElement);
// ExportElement 引用管理器条目序结构元素子位置上的 DLL 导出元素

ZeroElementFunction(EmptyElement, ExportElement);
ZeroElementFunction(EmptyElement, ManagerEntry);
```

在案例代码中，通过ReadDllElementManagerElement从ManagerEntry的序结构中读出 DLL 导出元素，以引用传递到ExportElement。ExportElement是引用语义的读出结果，用毕必须ZeroElementFunction清零；若ManagerEntry随后被[ReleaseDllElementManager](ReleaseDllElementManager.md)释放而未清零该引用，即构成悬垂引用。关于检索与读取的完整案例，跳转至[意向性映射管理器案例](Intentionality_MapManager_Case.md)。
