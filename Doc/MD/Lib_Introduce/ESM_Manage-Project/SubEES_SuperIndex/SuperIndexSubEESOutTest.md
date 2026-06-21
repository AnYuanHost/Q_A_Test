# SuperIndexSubEESOutTest

***

映射SuperIndexSubEESOutTest接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map SuperIndexSubEESOutTest(&OrderedPairSet, &BoolSet, SuperIndexSubEESOutTestFunction);

超索引子元素环境检索器越界测试映射（SuperIndexSubEESOutTest）分析定义域元素序偶元素，其格式为：<UIntSet, SuperIndexSubEES>，其信息为：<待测试地址信息，超索引子元素环境检索器>。该映射检测地址信息在超索引子元素环境检索器中是否越界，并将结果布尔值赋值到值域布尔元素上。

关于如何完成超索引子元素环境检索器越界测试，跳转至[SubEES_SuperIndex案例](SubEES_SuperIndex_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
