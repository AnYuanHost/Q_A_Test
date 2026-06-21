# GetIntentionalityObject

***

映射GetIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetIntentionalityObject(&OrderedPairSet, &NullElementSet, GetIntentionalityObjectFunction);

意向性对象质料获取映射（GetIntentionalityObject）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalityObjectSet>，其信息为：<地址信息，意向性对象>。按照地址信息，从意向性对象中获取意向性质料元素，并将其转交赋值到值域空元素上。

关于意向性对象的测试案例，跳转至[Intentionality案例](Intentionality_Case.md)
