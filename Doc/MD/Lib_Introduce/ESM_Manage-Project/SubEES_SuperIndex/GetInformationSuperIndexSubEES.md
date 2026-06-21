# GetInformationSuperIndexSubEES

***

映射GetInformationSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetInformationLexOrderEES(&OrderedPairSet, &NullElementSet, GetInformationLexOrderEESFunction);

超索引子元素环境检索器获取信息映射（GetInformationSuperIndexSubEES）分析定义域序偶元素，其格式为：<UIntSet, SuperIndexSubEES>，其信息为：<地址信息，超索引子元素环境检索器>。按照地址信息从超索引子元素环境检索器中获取对应地址的检索超索引信息，并将其转交传递到值域空元素上。

该获取映射的目的在于获取相关信息元素并进行操作，故使用转交传递。而转交传递本质上是对容器的破坏行为，所以操作完成后应该由同一地址的放回指令传回子检索器，避免后续的错误。

如果地址信息超出字典序子元素环境检索器容器范围，则抛出异常。

关于如何完成超索引子元素环境检索器构造，跳转至[SubEES_SuperIndex案例](SubEES_SuperIndex_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
