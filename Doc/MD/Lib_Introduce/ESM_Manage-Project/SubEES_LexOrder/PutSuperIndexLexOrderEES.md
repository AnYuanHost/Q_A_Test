# PutSuperIndexLexOrderEES

***

映射PutSuperIndexLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域，定义为：

    Map PutSuperIndexLexOrderEES(&OrderedPairSet, &LexOrderEES, PutSuperIndexLexOrderEESFunction);

字典序子元素环境检索器存入超索引信息映射（PutSuperIndexLexOrderEES）分析定义域序偶元素，其格式为：<UIntSet, SuperIndexSet>，其信息为：<字典序子元素环境检索器地址信息，待写入超索引信息>。按照地址信息将待写入超索引信息写入到字典序子元素环境检索器的指定位置上。

该存取操作需要目标位置为空元素，以防止内存泄漏等问题。存入操作属于对原本被破坏的映射关系的修复，一般和获取指令一起用来操作元素。

如果地址信息超出字典序子元素环境检索器容器范围，则抛出异常。

关于如何完成字典序子元素环境检索器的超索引信息存入，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
