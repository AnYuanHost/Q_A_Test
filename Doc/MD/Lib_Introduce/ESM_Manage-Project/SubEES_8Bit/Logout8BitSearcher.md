# Logout8BitSearcher

***

映射Logout8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map Logout8BItSearcher(&OrderedPairSet, &NullElementSet, Logout8BitSearcherFunction);

8比特子元素环境检索器注销映射（Logout8BitSearcher）分析定义域序偶元素，其格式为：<_8BitSet, _8BitSearcher>，其信息为：<8比特子检索器检索信息, 8比特子检索器>。按照8比特子检索器检索信息，在8比特子检索器中完成检索，在对应位置上完成对应的注销，并拷贝地址对应的超索引信息到值域空元素上。

值域元素需要拷贝超索引元素，用于在总元素环境检索器中完成后续的检索及注销行为。

如果未能检索到对应注销检索信息，则抛出异常。

关于如何使用8比特子元素环境检索器注销映射，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
