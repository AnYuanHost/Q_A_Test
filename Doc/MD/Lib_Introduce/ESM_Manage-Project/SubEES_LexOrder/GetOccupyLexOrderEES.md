# GetOccupyLexOrderEES

***

映射GetOccupyLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map GetOccupyLexOrderEES(&OrderedPairSet, &BoolSet， GetOccupyLexOrderEESFunction);

字典序子元素环境检索器获取占用映射（GetOccupyLexOrderEES）分析定义域序偶元素，其格式为：<UIntSet, LexOrderEES>，其信息为：<字典序子元素环境检索器地址信息，字典序子元素环境检索器>。按照地址信息从字典序子元素环境检索器中获取对应的占用情况，并将其布尔值赋值到值域布尔元素上。

该映射只在布尔值上进行操作，故需要保证前后元素都为合法的布尔元素。

如果地址信息超出字典序子元素环境检索器容器范围，则抛出异常。

关于如何完成字典序子元素环境检索器的占用获取，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
