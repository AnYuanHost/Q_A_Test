# Sort8BitSearcher

***

映射Sort8BitSearcher接受空元素集合（NullElementSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域，定义如下：

```C++
Map Sort8BitSearcher(&NullElementSet, &_8BitSearcher, Sort8BitSearcherFunction);
```

8比特子元素环境检索器排序映射（Sort8BitSearcher）在值域8比特子元素环境检索器元素上完成排序。

因为8比特子元素环境检索器检索信息位置固定且不会更改，该排序主要针对已置懒元素映射关系的调整。

关于如何使用8比特子元素环境检索器排序映射，跳转至[8比特子检索器测试案例](../EES_Manage_Case/8Bit_Sub_EES_Test_Case.md)，以及[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
