# RemoveIntentionalityObject

***

映射RemoveIntentionalityObject接受超索引集合（SuperIndexSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

```C++
Map RemoveIntentionalityObject(&SuperIndexSet, &IntentionalityObjectSet, RemoveIntentionalityObjectFunction);
```

意向性对象移除映射（RemoveIntentionalityObject）在值域意向性对象上移除定义域超索引代表的意向性（质性指向信息），并回收其占用的内部地址。

移除后，按该超索引的[SelectIntentionalityObject](SelectIntentionalityObject.md)检索将返回UINT_MAX；移除前通过该地址Read/Get得到的质料引用随之失效，不得继续使用。

***

## 案例：

关于意向性对象的添加与移除配对用法，跳转至[意向性对象案例](IntentionalityObject_Case.md)。
