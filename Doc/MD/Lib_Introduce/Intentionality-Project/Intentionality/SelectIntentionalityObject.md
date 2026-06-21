# SelectIntentionalityObject

***

映射SelectIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map SelectIntentionalityObject(&OrderedPiarSet, &UIntSet, SelectIntentionalityObjectFunction);

意向性对象检索映射（SelectIntentionalityObject）分析定义域元素序偶元素，其格式为：<SuperIndexSet, IntentionalityObjectSet>，其信息为：<待检索超索引信息，意向性对象>。按照待检索超索引信息在意向性对象中完成检索，将检索到的地址信息赋值到值域无符号整型元素上。

如果没有搜索到对应地址，则赋值值域元素为UINT_MAX。

关于意向性对象的测试案例，跳转至[Intentionality案例](Intentionality_Case.md)
