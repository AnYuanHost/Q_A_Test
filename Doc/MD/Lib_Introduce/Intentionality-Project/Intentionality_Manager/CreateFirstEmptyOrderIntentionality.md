# CreateFirstEmptyOrderIntentionality

***

映射CreateFirstEmptyOrderIntentionality接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map CreateFirstEmptyOrderIntentionality(&NullElementSet, &NullElementSet, CreateFirstEmptyOrderIntentionalityFunction);
```

意向性首个空序构造映射（CreateFirstEmptyOrderIntentionality）是意向性构造命名空间IntentionalityCreater中的构造映射，在值域空元素上构造初始空序（覆盖全部可用地址的空闲序），同时创建首个意向性对象，并将两者关联——空序与意向性对象在构造当时即建立对应关系，构成系统的起始结构。构造完成后，值域元素同时承载意向性空序（[IntentionalityEmptyOrder](IntentionalityEmptyOrder.md)）与首个意向性对象（[IntentionalityObjectSet](../Intentionality/IntentionalityObjectSet.md)）两部分内容。

只构造空序而不需要首个意向性对象时，改用[CreateFirstEmptyOrder](CreateFirstEmptyOrder.md)。

***

## 案例：

```C++
Element FirstElement;

CreateFirstEmptyOrderIntentionalityFunction(EmptyElement, FirstElement);

// FirstElement now holds the First EmptyOrder together with the First IntentionalityObject

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, FirstElement);
```

案例解释：一步得到初始空序与首个意向性对象，省去先建空序、再建对象、最后建立关联的三步操作。两者在同一元素上关联，释放也一次完成：由ReleaseIntentionalityEmptyOrder归还空序连同其关联内容；跳过释放直接析构宿主元素将造成空序分段结构与意向性对象的双重泄漏。
