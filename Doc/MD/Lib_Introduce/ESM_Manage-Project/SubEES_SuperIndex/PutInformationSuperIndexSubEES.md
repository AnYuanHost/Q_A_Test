# PutInformationSuperIndexSubEES

***

映射PutInformationSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，超索引子元素环境检索器（SuperIndexSubEES）为值域，定义为：

    Map PutInformationSuperIndexSubEES(&OrderedPairSet, &SuperIndexSubEES, PutInformationSuperIndexSubEESFunction);

超索引子元素环境检索器存入信息映射（PutInformationSuperIndexSubEES）分析定义域序偶元素，其格式为：<UIntSet, SuperIndexSet>，其信息为：<地址信息，待写入信息>。按照地址信息将待写入信息写入到超索引子元素环境检索器的指定位置上。

该存入操作需要目标位置为空元素，以防止内存泄漏登问题。存入操作属于对原本被破坏的映射关系的修复，一般和获取指令一起用来操作元素。

如果地址信息超出超索引子元素环境检索器范围，则抛出异常。

关于如何完成超索引子元素环境检索器信息存入，跳转至[SubEES_SuperIndex案例](SubEES_SuperIndex_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
