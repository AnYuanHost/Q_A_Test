# AddIntentionalityObject

***

映射AddIntentionalityObject接受超索引元素集合（SuperIndexSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

    Map AddIntentionalityObject(&SuperIndexSet, &IntentionalityObjectSet, AddIntentionalityObjectFunction);

意向性对象添加映射（AddIntentionalityObject）在值域意向性对象中进行检索，并将搜索到的地址信息赋值到值域无符号整型元素上。

如果没有搜索到对应信息，则赋值值域元素元素为UINT_MAX。

关于意向性对象的测试案例，跳转至[Intentionality案例](Intentionality_Case.md)
