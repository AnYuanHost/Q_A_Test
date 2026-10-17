# CreateFirstEmptyOrder

***

映射CreateFirstEmptyOrder接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map CreateFirstEmptyOrder(&NullElementSet, &NullElementSet, CreateFirstEmptyOrderFunction);
```

首个意向性空序构造映射（CreateFirstEmptyOrder）是意向性构造命名空间IntentionalityCreater中的构造映射，在值域空元素上构造初始空序，即覆盖全部可用地址的空闲序，作为地址分配与回收的起点。构造完成后，值域元素即属于意向性空序集合（[IntentionalityEmptyOrder](IntentionalityEmptyOrder.md)），可以接受登录、登出、筛选、合并等空序映射的操作。

只构造空序时用本映射；需要同时得到首个意向性对象时改用[CreateFirstEmptyOrderIntentionality](CreateFirstEmptyOrderIntentionality.md)。

***

## 案例：

```C++
Element EmptyOrderElement;

CreateFirstEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// EmptyOrderElement now holds the First EmptyOrder covering all usable addresses

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：空元素进入、初始空序离开，值域元素随即属于意向性空序集合。初始空序覆盖全部可用地址，因此构造之后即可直接登录（占用）位置；使用完毕必须由ReleaseIntentionalityEmptyOrder成对释放，跳过释放直接析构宿主元素将造成分段结构泄漏。
