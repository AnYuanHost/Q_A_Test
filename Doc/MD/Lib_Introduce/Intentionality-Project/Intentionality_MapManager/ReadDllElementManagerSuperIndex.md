# ReadDllElementManagerSuperIndex

***

映射ReadDllElementManagerSuperIndex接受动态库元素管理器集合（DllElementManager）为定义域，超索引集合（SuperIndexSet）为值域，定义为：

```C++
Map ReadDllElementManagerSuperIndex(&DllElementManager, &SuperIndexSet, ReadDllElementManagerSuperIndexFunction);
```

动态库元素管理器超索引读取映射（ReadDllElementManagerSuperIndex）按定义域管理器条目的超索引位置（[DEM_SuperIndex](DllElementManager_Struct.md)）读出登记的超索引，将其引用传递到值域元素。值域元素引用管理器条目内部的超索引，不复制内容，使用完毕必须清零。

***

## 案例：

```C++
Element ManagerEntry;
ZeroElementFunction(EmptyElement, ManagerEntry);
// ManagerEntry 为已登记超索引的管理器条目

Element SuperIndexElement;
ZeroElementFunction(EmptyElement, SuperIndexElement);

ReadDllElementManagerSuperIndexFunction(ManagerEntry, SuperIndexElement);
// SuperIndexElement 引用管理器登记的超索引

ZeroElementFunction(EmptyElement, SuperIndexElement);
ZeroElementFunction(EmptyElement, ManagerEntry);
```

在案例代码中，通过ReadDllElementManagerSuperIndex把ManagerEntry超索引位置上的超索引以引用传递到SuperIndexElement。SuperIndexElement是引用语义的读出结果，用毕必须ZeroElementFunction清零，否则将悬挂在管理器条目内部的超索引上；若ManagerEntry随后被释放而未清零该引用，即构成悬垂引用。ManagerEntry由[ReleaseDllElementManager](ReleaseDllElementManager.md)释放时，也应先清零其上的全部引用元素。
