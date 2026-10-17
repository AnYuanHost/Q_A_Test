# ReleaseIntentionalityObject

***

映射ReleaseIntentionalityObject接受空元素集合（NullElementSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

```C++
Map ReleaseIntentionalityObject(&NullElementSet, &IntentionalityObjectSet, ReleaseIntentionalityObjectFunction);
```

意向性对象释放映射（ReleaseIntentionalityObject）分析并释放值域意向性对象，回收其内部持有的质性与质料资源，并将值域元素复位为空元素。

释放风险提示：对同一意向性对象重复调用释放映射，等价于重复释放，会触发异常；释放后元素的KeySpace已被改写，此前持有该对象引用的所有元素均引用失效，必须重新读取。

***

## 案例：

关于意向性对象的构造与释放配对用法，跳转至[意向性对象案例](IntentionalityObject_Case.md)。
