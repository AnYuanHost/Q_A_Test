# PutSuperIndexTo8BitSearcher

***

映射PutSuperIndexTo8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域，定义如下：

    Map PutSuperIndexTo8BitSarcher(&OrderedPairSet, &_8BitSearcher, PutSuperIndexTo8BitSearcherFunction);

8比特子元素环境检索器存放超索引映射（PutSuperIndexTo8BitSearcher）分析定义域元素序偶元素，其格式为：<UIntSet, SuperIndexSet>，其信息为：<8比特子检索器地址信息，待操作超索引>。在8比特子检索器对应地址上完成超索引信息的存放，将超索引信息转交传递到对应位置。

如果地址信息超出8比特子元素环境检索器容器范围，则抛出异常。

关于如何从8比特子元素环境检索器存放超索引信息，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
