# GetSuperIndexLexOrderEES

***

映射GetSuperIndexLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetSuperIndexLexOrderEES(&OrderedPairSet, &NullElementSet, GetSuperIndexLexOrderEESFunction);

字典序子元素环境检索器获取超索引映射（GetSuperIndexLexOrderEES）分析定义域序偶元素，其格式为：<UIntSet, LexOrderEES>，其信息为：<字典序子元素环境检索器地址信息，字典序子元素环境检索器>。按照地址信息从字典序子元素环境检索器中获取对应地址的超索引信息，并将其转交传递到值域空元素上。

该获取映射的目的在于获取超索引信息元素并进行操作，故使用转交传递。而转交传递本质上是对容器的破坏行为，所以操作完成后应该由同一地址的存入指令传回子检索器，避免后续的错误。

如果地址信息超出字典序子元素环境检索器容器范围，则抛出异常。

关于如何完成字典序子元素环境检索器的超索引信息获取，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
