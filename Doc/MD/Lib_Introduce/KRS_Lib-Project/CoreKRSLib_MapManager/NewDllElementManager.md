# NewDllElementManager

***

映射NewDllElementManager接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewDllElementManager(&NullElementSet, &NullElementSet, NewDllElementManagerFunction);
```

动态库元素管理器新建映射（NewDllElementManager）在值域空元素上构造一个空的动态库元素管理器条目。构造完成后，值域元素即属于动态库元素管理器集合（[DllElementManager](DllElementManager.md)），可以接受[超索引设置](SetDllElementManagerSuperIndex.md)、[动态库设置](SetDllElementManagerDll.md)等映射的操作。

***

## 案例：

```C++
Element ManagerEntry;

NewDllElementManagerFunction(EmptyElement, ManagerEntry);

// 在 ManagerEntry 上登记超索引与 Windows动态库元素

ReleaseDllElementManagerFunction(EmptyElement, ManagerEntry);
```

在案例代码中，构造空元素ManagerEntry，通过映射NewDllElementManager在其上构造动态库元素管理器条目，随后登记超索引与动态库元素。使用完毕后，必须使用[ReleaseDllElementManager](ReleaseDllElementManager.md)成对释放；若跳过释放直接令元素析构，将造成管理器内部资源泄漏。
