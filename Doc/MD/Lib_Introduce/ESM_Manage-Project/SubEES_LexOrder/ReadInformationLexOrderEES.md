# ReadInformationLexOrderEES

***

映射ReadInformationLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map ReadInformationLexOrderEES(&OrderedPairSet, &NullElementSet, ReadInformationLexOrderEESFunction);

字典序子元素环境检索器读取信息映射（ReadInformationLexOrderEES）分析定义域序偶元素，其格式为：<UIntSet, LexOrderEES>，其信息为<字典序检索信息，字典序子元素环境检索器>。按照地址信息从字典序子元素环境检索器中获取对应地址的检索信息，并将其引用传递到值域空元素上。

该获取映射的目的在于仅读取信息，故使用引用传递。该方法不会破坏原有的映射关系，但存在数据被篡改的风险。

如果地址信息超出字典序子元素环境检索器容器范围，则抛出异常。

关于如何完成字典序子元素环境检索器的信息读取，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
