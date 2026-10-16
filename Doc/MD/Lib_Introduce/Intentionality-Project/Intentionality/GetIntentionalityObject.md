# GetIntentionalityObject

***

映射GetIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map GetIntentionalityObject(&OrderedPairSet, &NullElementSet, GetIntentionalityObjectFunction);
```

意向性对象质料获取映射（GetIntentionalityObject）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalityObjectSet>，其信息为：<地址信息，意向性对象>。按照地址信息，从意向性对象中获取意向性质料元素，并将其转交赋值到值域空元素上。

与[ReadIntentionalityObject](ReadIntentionalityObject.md)的引用传递不同，获取映射转交的是质料元素本身，值域元素接管该质料的所有权。

转交后原意向性对象中该地址的质料已被取走，同一地址再次Get将取到空元素；接管所有权的值域元素最终必须由调用方负责释放或归还。


***

## 案例：

关于意向性对象质料的获取与转交用法，跳转至[意向性对象案例](IntentionalityObject_Case.md)。