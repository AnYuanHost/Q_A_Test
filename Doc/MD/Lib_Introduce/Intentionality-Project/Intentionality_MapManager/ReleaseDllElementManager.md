# ReleaseDllElementManager

***

映射ReleaseDllElementManager接受空元素集合（NullElementSet）为定义域，动态库元素管理器集合（DllElementManager）为值域，定义为：

```C++
Map ReleaseDllElementManager(&NullElementSet, &DllElementManager, ReleaseDllElementManagerFunction);
```

动态库元素管理器释放映射（ReleaseDllElementManager）分析定义域管理器条目的超索引位置、序结构（信息、元素）、动态库元素位置与参数结构（以[DEM_End](DllElementManager_Struct.md)结尾），释放其内部资源并将条目复位。必须与[NewDllElementManager](NewDllElementManager.md)成对使用：构造在值域元素上进行，释放同样在值域元素上进行。

***

## 案例：

```C++
Element ManagerEntry;

NewDllElementManagerFunction(EmptyElement, ManagerEntry);

// 在 ManagerEntry 上登记超索引与 Windows动态库元素

ReleaseDllElementManagerFunction(EmptyElement, ManagerEntry);
```

在案例代码中，先经NewDllElementManager在ManagerEntry上构造动态库元素管理器条目，用毕经ReleaseDllElementManager释放其内部资源。释放之前，必须先清零所有经[读取超索引](ReadDllElementManagerSuperIndex.md)、[读取元素](ReadDllElementManagerElement.md)得到的引用元素；释放之后，ManagerEntry不再属于动态库元素管理器集合，若再接受动态库元素管理器映射的操作属于未定义使用。
