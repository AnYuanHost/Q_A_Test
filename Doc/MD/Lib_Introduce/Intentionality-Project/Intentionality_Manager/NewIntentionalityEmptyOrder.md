# NewIntentionalityEmptyOrder

***

映射NewIntentionalityEmptyOrder接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalityEmptyOrder(&NullElementSet, &NullElementSet, NewIntentionalityEmptyOrderFunction);
```

意向性空序新建映射（NewIntentionalityEmptyOrder）在值域空元素上构造一个空的意向性空序。构造完成后，值域元素即属于意向性空序集合（[IntentionalityEmptyOrder](IntentionalityEmptyOrder.md)），可以接受登录、登出、筛选、合并与分段等映射的操作。

***

## 案例：

```C++
Element EmptyOrderElement;

NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// Use EmptyOrderElement

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：在空元素EmptyOrderElement上构造意向性空序，随后即可分配与回收地址位置。使用完毕必须用[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)成对释放；若跳过释放直接令元素析构，将造成空序内部资源泄漏。完整的构造与释放流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
