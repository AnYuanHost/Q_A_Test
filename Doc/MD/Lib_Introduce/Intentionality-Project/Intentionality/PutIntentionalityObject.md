# PutIntentionalityObject

***

映射PutIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

```C++
Map PutIntentionalityObject(&OrderedPairSet, &IntentionalityObjectSet, PutIntentionalityObjectFunction);
```

意向性对象质料存入映射（PutIntentionalityObject）分析定义域元素序偶元素，其结构为：<UIntSet, StreamSet>，其信息为：<地址信息，待写入质料信息>。按照地址信息，将待写入质料信息写入到意向性指定位置。

存入操作会改写目标地址上的质料内容，此前通过[ReadIntentionalityObject](ReadIntentionalityObject.md)获取的该地址引用内容随之改变；若存入导致质料结构重建，旧引用失效。

***

## 案例：

关于意向性对象质料的存入与读取配对用法，跳转至[意向性对象案例](IntentionalityObject_Case.md)。
