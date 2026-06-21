# Read8BitIn8BitSearcher

***

映射Read8BitIn8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map Read8BitIn8BitSearcherFunction(&OrderedPairSet, &NullElementSet, Read8BitIn8BitSearcherFunction);

8比特子元素环境检索器读取8比特映射（Read8BitIn8BitSearcher）分析定义域序偶元素，其格式为：<UIntSet, _8BitSearcher>，其信息为：<8比特子检索器地址信息，8比特子检索器>。在8比特子检索器对应地址上完成8比特信息的读取，将对应元素引用传递到值域空元素上。

如果地址信息超出8比特子元素环境检索器容器范围，则抛出异常。

关于如何从8比特子元素环境检索器读取8比特信息，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
