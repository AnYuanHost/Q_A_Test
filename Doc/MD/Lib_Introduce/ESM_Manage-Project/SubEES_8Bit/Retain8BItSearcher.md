# Retain8BitSearcher

***

映射Retain8BitSearcher接受无符号整型集合（UIntSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域，定义如下：

```C++
Map Retain8BitSearcher(&UIntSet, &8BitSearcher, Retain8BitSearcherFunction);
```

8比特子元素环境检索器缩容映射（Retain8BitSearcher）调整值域8比特子元素环境检索器状态，完成缩容操作。

因为是固定容器，没有严格意义上的缩容操作，仅重置其懒元素地址，并将所有懒元素值清除。

关于如何完成8比特子元素环境检索器缩容，跳转至[8比特子检索器测试案例](../EES_Manage_Case/8Bit_Sub_EES_Test_Case.md)，以及[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
