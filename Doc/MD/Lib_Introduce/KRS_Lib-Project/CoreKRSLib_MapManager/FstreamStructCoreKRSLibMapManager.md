# FstreamStructCoreKRSLibMapManager

***

映射FstreamStructCoreKRSLibMapManager接受核心KRS库映射管理器集合（CoreKRSLibMapManager）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map FstreamStructCoreKRSLibMapManager(&CoreKRSLibMapManager, &FstreamSet, FstreamStructCoreKRSLibMapManagerFunction);
```

核心KRS库映射管理器结构写入映射（FstreamStructCoreKRSLibMapManager）分析定义域管理器条目的结构信息（其结构为：序、参数，序结构为：信息、元素类别），将结构信息连同类型名称标注序列化写入值域的文件元素：序结构的元素类别子位置（[IMM_ElementCategory](CoreKRSLibMapManager_Struct.md)）写入[类型编号](CoreKRSLibMapManager_TypeName.md)，写入内容附带对应的类型名称字符串。执行前应先经[排序](SortCoreKRSLibMapManager.md)优化表单顺序。

***

## 案例：

```C++
Element ManagerElement;

NewCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);

// 在 ManagerElement 上登记映射表单

Element SortedManager;
ZeroElementFunction(EmptyElement, SortedManager);
SortCoreKRSLibMapManagerFunction(ManagerElement, SortedManager);

Element FileStream;
ZeroElementFunction(EmptyElement, FileStream);
// FileStream 为已构造的文件元素（文件集合 FstreamSet 成员）

FstreamStructCoreKRSLibMapManagerFunction(SortedManager, FileStream);
// 管理器的结构信息（含类型名称标注）序列化写入 FileStream

ZeroElementFunction(EmptyElement, FileStream);
ZeroElementFunction(EmptyElement, SortedManager);
ReleaseCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);
```

在案例代码中，排序后的管理器条目经FstreamStructCoreKRSLibMapManager把结构信息写入文件元素FileStream。FileStream与SortedManager均以引用/转交语义参与映射，使用完毕必须ZeroElementFunction清零；清零序偶与引用元素不释放管理器条目本身，ManagerElement仍需ReleaseCoreKRSLibMapManager成对释放。关于完整案例，跳转至[核心KRS库映射管理器案例](CoreKRSLib_MapManager_Case.md)。
