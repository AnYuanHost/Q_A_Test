# CreateCannedDataIntentioanlityObject

***

映射CreateCannedDataIntentioanlityObject接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map CreateCannedDataIntentioanlityObject(&NullElementSet, &NullElementSet, CreateCannedDataIntentionalityObjectFunction);
```

预制数据意向性对象构造映射（CreateCannedDataIntentioanlityObject）是意向性构造命名空间IntentionalityCreater中的构造映射，在值域空元素上构造预制数据意向性对象，把系统内置的预制数据（CannedData）登记为意向性对象。构造完成后，值域元素即属于意向性对象集合（[IntentionalityObjectSet](../Intentionality/IntentionalityObjectSet.md)），可以接受添加质性、检索、读取质料等意向性对象映射的操作。

注意：本映射的 Map 符号保留了历史拼写 CreateCannedDataIntentioanlityObject，其 Function 符号为 CreateCannedDataIntentionalityObjectFunction，引用时勿混淆。

***

## 案例：

```C++
Element CannedDataElement;

CreateCannedDataIntentioanlityObjectFunction(EmptyElement, CannedDataElement);

// CannedDataElement now holds the CannedData registered as an IntentionalityObject

ReleaseIntentionalityObjectFunction(EmptyElement, CannedDataElement);
```

案例解释：调用时传入的是历史拼写的Map函数CreateCannedDataIntentioanlityObjectFunction，不是CreateCannedDataIntentionalityObject——两者是同一实体的Map符号与Function符号，拼写差异来自历史遗留，不得在代码中"纠正"。构造出的预制数据意向性对象由调用方接管，使用完毕必须由ReleaseIntentionalityObject成对释放，跳过释放直接析构宿主元素将造成内部资源泄漏。
