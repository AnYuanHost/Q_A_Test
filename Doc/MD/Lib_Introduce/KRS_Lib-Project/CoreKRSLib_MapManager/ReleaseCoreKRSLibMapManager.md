# ReleaseCoreKRSLibMapManager

***

映射ReleaseCoreKRSLibMapManager接受空元素集合（NullElementSet）为定义域，核心KRS库映射管理器集合（CoreKRSLibMapManager）为值域，定义为：

```C++
Map ReleaseCoreKRSLibMapManager(&NullElementSet, &CoreKRSLibMapManager, ReleaseCoreKRSLibMapManagerFunction);
```

核心KRS库映射管理器释放映射（ReleaseCoreKRSLibMapManager）分析定义域管理器条目的序结构（信息、元素类别）与参数结构（以[IMM_End](CoreKRSLibMapManager_Struct.md)结尾），释放其内部资源并将条目复位。必须与[NewCoreKRSLibMapManager](NewCoreKRSLibMapManager.md)成对使用：构造在值域元素上进行，释放同样在值域元素上进行。

***

## 案例：

```C++
Element ManagerElement;

NewCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);

// 使用 ManagerElement 承载核心KRS库映射管理器条目

ReleaseCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);
```

在案例代码中，先经NewCoreKRSLibMapManager在ManagerElement上构造管理器条目，用毕经ReleaseCoreKRSLibMapManager释放其内部资源。释放之后，ManagerElement不再属于核心KRS库映射管理器集合，若再接受核心KRS库映射管理器映射的操作属于未定义使用。若跳过释放直接令元素析构，将造成管理器内部资源泄漏。
