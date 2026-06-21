# ReadIntentionalityObject

***

映射ReadIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map ReadIntentionalityObject(&OrderedPairSet, &NullElementSet, ReadIntentionalityObjectFunction);

意向性对象质料读取映射（ReadIntentionalityObject）分析定义域元素序偶元素，其格式为：<UIntSet, IntentionalityObjectSet>，其信息为：<地址信息，意向性对象>。按照指定地址，在意向性对象中获取指定的意向性质料，将其引用传递到值域空元素上。

关于意向性对象的测试案例，跳转至[Intentionality案例](Intentionality_Case.md)
