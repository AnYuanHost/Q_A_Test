# LexOrderEESOutTest

***

映射LexOrderEESOutTest接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

```C++
Map LexOrderEESOutTest(&OrderedPairSet, &BoolSet, LexOrderEESOutTestFunction);
```

字典序子元素环境检索器越界测试映射（LexOrderEESOutTest）分析定义域序偶元素（OrderedPairSet），其格式为：<UIntSet, LexOrderEES>，其信息为：<待测试地址信息，字典序子元素环境检索器>。该映射检测地址信息在字典序子元素环境检索器中是否越界，并将结果布尔值赋值到值域布尔元素上。

关于如何完成字典序子元素环境检索器越界测试，跳转至[字典序子检索器测试案例](../EES_Manage_Case/LexOrder_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
