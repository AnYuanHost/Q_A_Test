# Put8BitTo8BitSearcher

***

映射Put8BitTo8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域，定义如下：

    Map Put8BitTo8BitSearcher(&OrderedPairSet, &_8BitSearcher, Put8BitTo8BitSearcherFunction);

8比特子元素环境检索器存放8比特映射（Put8BitTo8BitSearcher）分析定义域元素序偶元素，其格式为：<UIntSet, _8BitSet>，其信息为：<8比特子检索器地址信息，8比特子检索器信息>。在8比特子检索器对应地址上完成8比特信息的存放，将8比特子检索器信息值赋值到对应位置。

因为8比特检索器容器的特殊性，其容器在检索信息对应空间上时刻保持不变，所以该存放行为变为赋值，以防止对容器的破坏。

如果地址信息超出8比特子元素环境检索器容器范围，则抛出异常。

关于如何从8比特子元素环境检索器存放8比特信息，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
