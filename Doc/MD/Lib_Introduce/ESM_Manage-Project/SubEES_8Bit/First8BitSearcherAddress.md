# First8BitSearcherAddress

***

映射First8BitSearcherAddress接受8比特子元素环境检索器集合（_8BitSearcher）为定义域，无符号整型集合（UIntSet）为值域，定义如下：

```C++
Map First8BitSearcherAddress(&_8BitSearcher, &UIntSet, First8BitSearcherAddressFunction);
```

8比特子元素环境检索器第一地址映射（First8BitSearcherAddress）在定义域8比特子检索器元素中获取其第一个不为空地址信息，赋值到值域无符号整型元素上。

关于如何获取8比特子元素环境检索器第一地址信息，跳转至[8比特子检索器测试案例](../EES_Manage_Case/8Bit_Sub_EES_Test_Case.md)，以及[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
