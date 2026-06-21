# SetOccupy8BitSearcher

***

映射SetOccupy8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，接受8比特子元素环境检索器集合（_8BitSearcher）为值域，定义如下：

    Map SetOccupy8BitSearcher(&OrderedPairSet, &_8BitSearcher, SetOccupy8BitSearcherFunction);

8比特子元素环境检索器设置占用映射（SetOccupy8BitSearcher）分析定义域元素序偶元素，其格式为：<UIntSet, BoolSet>，其信息为：<8比特子检索器地址，占用情况信息>。在8比特子检索器对应地址上，完成占用情况的设置，将占用信息赋值到对应元素上。

如果地址信息超出8比特子元素环境检索器容器范围，则抛出异常。

关于如何设置8比特子元素环境检索器占用信息，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
