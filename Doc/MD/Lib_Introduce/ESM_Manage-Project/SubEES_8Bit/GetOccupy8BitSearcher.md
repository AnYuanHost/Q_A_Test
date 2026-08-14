# GetOccupy8BitSearcher

***

映射GetOccupy8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，定义如下：

```C++
Map GetOccupy8BitSearcher(&OrderedPairSet, &UIntSet, GetOccupy8BitSearcherFunction);
```

8比特子元素环境检索器获取占用映射（GetOccupy8BitSearcher）分析定义域元素序偶元素，其格式为：<UIntSet, _8BitSearcher>，其信息为：<8比特子检索器地址，8比特子检索器>。在8比特子检索器对应地址上，完成占用情况的获取，将占用信息赋值到值域布尔类型元素上。

如果地址信息超出8比特子元素环境检索器容器范围，则抛出异常。

关于如何获取8比特子元素环境检索器占用信息，跳转至[8比特子检索器测试案例](../EES_Manage_Case/8Bit_Sub_EES_Test_Case.md)，以及[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
