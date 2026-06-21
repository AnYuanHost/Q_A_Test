# Login8BitSearcher

***

映射Login8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域，定义如下：

    Map Login8BitSearcher(&OrderedPairSet, &_8BitSearcher, Login8BitSearcherFunction);

8比特子元素环境检索器注册映射（Login8BitSearcher）分析定义域序偶元素，其格式为：<_8BitSet, SuperIndexSet>，其信息为：<8比特子检索器索引信息，8比特子检索器映射信息>。按照8比特子检索器索引信息，在8比特子元素环境检索器上完成检索，在对应位置上完成映射关系的注册。

如果检索信息已经被注册，则抛出异常。

关于如何使用8比特子元素环境检索器注册映射，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
