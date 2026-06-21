# _8BitSearcherOutTest

***

映射_8BitSearcherOutTest接受元素序偶集合（OrderedPairSet）为定义域，布尔类型元素集合（BoolSet）为值域，定义如下：

    Map _8BitSearcherOutTestFunction(&OrderedPairSet, &BoolSet, _8BitSearcherOutTestFunction);

8比特子元素环境检索器越界测试映射（_8BitSearcherOutTest）分析定义域序偶元素，其格式为：<UIntSet, _8BitSearcher>，其信息为：<8比特子检索器地址信息, 8比特子检索器>。判断8比特子检索器地址信息是否越界，将判断结果赋值给值域布尔类型元素。

关于如何完成8比特子元素环境检索器地址越界判断，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
