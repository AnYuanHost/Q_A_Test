# SortCoreKRSLibMapManager

***

映射SortCoreKRSLibMapManager接受空元素集合（NullElementSet）为定义域，核心KRS库映射管理器集合（CoreKRSLibMapManager）为值域，定义为：

```C++
Map SortCoreKRSLibMapManager(&NullElementSet, &CoreKRSLibMapManager, SortCoreKRSLibMapManagerFunction);
```

核心KRS库映射管理器排序映射（SortCoreKRSLibMapManager）分析定义域管理器条目登记的映射表单，对表单执行排序，并将排序后的管理器条目转交赋值到值域元素上。排序优化静态库映射表单的检索效率，是结构写入之前的必要步骤。

***

## 案例：

```C++
Element ManagerElement;

NewCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);

// 在 ManagerElement 上登记映射表单

Element SortedManager;
ZeroElementFunction(EmptyElement, SortedManager);

SortCoreKRSLibMapManagerFunction(ManagerElement, SortedManager);
// SortedManager 转交承载排序后的管理器条目

ZeroElementFunction(EmptyElement, SortedManager);
ReleaseCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);
```

在案例代码中，先经NewCoreKRSLibMapManager构造并登记管理器条目，再通过SortCoreKRSLibMapManager把排序后的条目转交到SortedManager。SortedManager为转交语义的产物，属于核心KRS库映射管理器集合，使用完毕必须先ZeroElementFunction清零、再视登记来源决定是否释放；ManagerElement仍需ReleaseCoreKRSLibMapManager成对释放。
