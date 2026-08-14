# Select8BitSearcher

***

映射Select8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义如下：

```C++
Map Select8BitSearcher(&OrderedPairSet, &UIntSet, Select8BitSearcherFunction);
```

8比特子元素环境检索器检索映射（Select8BitSearcher）分析定义域序偶元素，其格式为：<_8BitElement, _8BitSearcher>，其信息为：<待检索8比特信息，8比特子元素环境检索器>。按照8比特检索信息，在8比特子元素环境检索器中完成检索，将检索到的地址信息存储到值域无符号整型元素上。

如果未能检索到对应信息，则赋值UINT_MAX。

关于如何使用8比特子元素环境检索器检索映射，跳转至[8比特子检索器测试案例](../EES_Manage_Case/8Bit_Sub_EES_Test_Case.md)，以及[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
