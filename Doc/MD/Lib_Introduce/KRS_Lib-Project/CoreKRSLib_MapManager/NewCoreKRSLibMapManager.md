# NewCoreKRSLibMapManager

***

映射NewCoreKRSLibMapManager接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewCoreKRSLibMapManager(&NullElementSet, &NullElementSet, NewCoreKRSLibMapManagerFunction);
```

核心KRS库映射管理器新建映射（NewCoreKRSLibMapManager）在值域空元素上构造一个空的映射管理器条目。构造完成后，值域元素即属于核心KRS库映射管理器集合（[CoreKRSLibMapManager](CoreKRSLibMapManager.md)），可以接受[排序](SortCoreKRSLibMapManager.md)、[结构写入](FstreamStructCoreKRSLibMapManager.md)等映射的操作。

***

## 案例：

```C++
Element ManagerElement;

NewCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);

// 在 ManagerElement 上登记映射表单，填写序位置与参数位置

ReleaseCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);
```

在案例代码中，构造空元素ManagerElement，通过映射NewCoreKRSLibMapManager在其上构造核心KRS库映射管理器条目，随后登记映射表单。使用完毕后，必须使用[ReleaseCoreKRSLibMapManager](ReleaseCoreKRSLibMapManager.md)成对释放；若跳过释放直接令元素析构，将造成管理器内部资源泄漏。
