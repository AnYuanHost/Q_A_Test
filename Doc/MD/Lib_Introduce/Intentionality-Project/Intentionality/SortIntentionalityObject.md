# SortIntentionalityObject

***

映射SortIntentionalityObject接受空元素集合（NullElementSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

```C++
Map SortIntentionalityObject(&NullElementSet, &IntentionalityObjectSet, SortIntentionalityObjectFunction);
```

意向性对象排序映射（SortIntentionalityObject）在值域意向性对象上执行排序映射。该排序将会用于优化[SelectIntentionalityObject](SelectIntentionalityObject.md)等检索操作。

排序会重排意向性对象内部结构，排序前获取的一切地址信息与质料引用全部失效，必须重新检索。

***

## 案例：

关于意向性对象的排序用法，跳转至[意向性对象案例](IntentionalityObject_Case.md)。
