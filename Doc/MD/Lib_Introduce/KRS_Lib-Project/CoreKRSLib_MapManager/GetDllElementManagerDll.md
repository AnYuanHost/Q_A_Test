# GetDllElementManagerDll

***

映射GetDllElementManagerDll接受动态库元素管理器集合（DllElementManager）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map GetDllElementManagerDll(&DllElementManager, &NullElementSet, GetDllElementManagerDllFunction);
```

动态库元素管理器动态库获取映射（GetDllElementManagerDll）分析定义域管理器条目，将管理器持有的Windows动态库元素（其位置为[DEM_Dll](DllElementManager_Struct.md)）转交赋值到值域空元素上。转交后，值域元素成为该Windows动态库元素的持有者，原管理器条目不再持有。

***

## 案例：

```C++
Element ManagerEntry;
ZeroElementFunction(EmptyElement, ManagerEntry);
// ManagerEntry 为已设置动态库元素的管理器条目

Element DllElement;
ZeroElementFunction(EmptyElement, DllElement);

GetDllElementManagerDllFunction(ManagerEntry, DllElement);
// DllElement 转交取得管理器持有的 Windows动态库元素

ZeroElementFunction(EmptyElement, DllElement);
ZeroElementFunction(EmptyElement, ManagerEntry);
```

在案例代码中，通过GetDllElementManagerDll把ManagerEntry持有的Windows动态库元素转交到DllElement。转交为所有权转移：转交之后ManagerEntry的动态库元素位置不再持有该元素，对同一管理器条目再次执行本映射不会得到同一持有者。DllElement用毕必须ZeroElementFunction清零，ManagerEntry由[ReleaseDllElementManager](ReleaseDllElementManager.md)成对释放。
