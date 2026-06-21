# Get8BitIn8BitSearcher

***

映射Get8BitIn8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map Get8BitIn8BitSearcherFunction(&OrderedPairSet, &NullElementSet, Get8BitIn8BitSearcherFunction);

8比特子元素环境检索器获取8比特映射（Get8BitIn8BitSearcher）分析定义域序偶元素，其格式为：<UIntSet, _8BitSearcher>，其信息为：<8比特子检索器地址信息，8比特子检索器>。在8比特子检索器对应地址上完成8比特信息的获取，将对应元素拷贝到值域空元素上。

因为8比特检索器容器的特殊性，其容器在检索信息对应空间上时刻保持不变，所以该获取行为变为拷贝元素，以防止对容器的破坏。

如果地址信息超出8比特子元素环境检索器容器范围，则抛出异常。

关于如何从8比特子元素环境检索器获取8比特信息，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
