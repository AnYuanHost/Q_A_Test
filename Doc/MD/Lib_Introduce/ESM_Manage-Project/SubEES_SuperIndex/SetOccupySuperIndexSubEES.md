# SetOccupySuperIndexSubEES

***

映射SetOccupSuperIndexEES接受元素序偶集合（OrderedPairSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域，定义为：

    Map SetOccupySuperIndexSubEES(&OrderedPairSet, &SuperIndexSubEES, SetOccupySuperIndexSubEESFunction);

超索引子元素环境检索器设置占用映射（SetOecupyLexOrderEES）分析定义域序偶元素，其格式为：<UIntSet, BoolSet>，其信息为：<地址信息，占用信息>。按照地址信息将占用信息的布尔值赋值到字典序子元素环境检索器的对应地址上。

该映射只在布尔值上进行操作，故需要保证前后元素都为合法的布尔元素。

如果地址信息超出超索引子元素环境检索器容器范围，则抛出异常。

关于如何完成超索引子元素环境检索器占用设置，跳转至[SubEES_SuperIndex案例](SubEES_SuperIndex_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
