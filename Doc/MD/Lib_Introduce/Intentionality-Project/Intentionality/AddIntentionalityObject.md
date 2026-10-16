# AddIntentionalityObject

***

映射AddIntentionalityObject接受超索引集合（SuperIndexSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

```C++
Map AddIntentionalityObject(&SuperIndexSet, &IntentionalityObjectSet, AddIntentionalityObjectFunction);
```

意向性对象添加映射（AddIntentionalityObject）将定义域超索引元素代表的意向性（质性指向信息）添加到值域意向性对象中，为其在对象内部登记新的指向信息并分配对应地址。添加完成后，可通过[SelectIntentionalityObject](SelectIntentionalityObject.md)按同一超索引检索到该条质性。

添加会改变意向性对象的内部结构，先前通过Read/Get获取的质料引用可能因内部重排而失效，需要重新读取。

***

## 案例：

关于意向性对象的添加与检索配对用法，跳转至[意向性对象案例](IntentionalityObject_Case.md)。
