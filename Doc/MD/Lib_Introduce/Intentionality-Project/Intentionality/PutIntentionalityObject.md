# PutIntentionalityObject

***

映射PutIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

    Map PutIntentionalityObject(&OrderedPairSet, &IntentionalityObjectSet, PutIntentionalityObjectFunction);

意向性对象质料存入映射（PutIntentionalityObject）分析定义域元素序偶元素，其结构为：<UIntSet, StreamSet>，其信息为：<地址信息，待写入质料信息>。按照地址信息，将待写入质料信息写入到意向性指定位置。

关于意向性对象的测试案例，跳转至[Intentionality案例](Intentionality_Case.md)
