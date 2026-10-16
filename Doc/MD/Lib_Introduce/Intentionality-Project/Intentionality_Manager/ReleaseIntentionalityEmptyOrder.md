# ReleaseIntentionalityEmptyOrder

***

映射ReleaseIntentionalityEmptyOrder接受空元素集合（NullElementSet）为定义域，意向性空序集合（IntentionalityEmptyOrderSet）为值域，定义为：

```C++
Map ReleaseIntentionalityEmptyOrder(&NullElementSet, &IntentionalityEmptyOrderSet, ReleaseIntentionalityEmptyOrderFunction);
```

意向性空序释放映射（ReleaseIntentionalityEmptyOrder）分析并释放值域意向性空序及其持有的全部分段结构资源。释放后值域元素不再属于意向性空序集合，必须由[NewIntentionalityEmptyOrder](NewIntentionalityEmptyOrder.md)重新构造才能再次使用。

***

## 案例：

```C++
Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// Initialize EmptyOrderElement

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：构造与释放成对出现，New之后必有一次Release。释放是全量归还：分段结构与空序元素一并释放，重复释放触发异常；若空序上仍有未登出的工作态位置，这些位置将随空序一并消亡，释放前必须确认登录与登出已全部配平。完整的构造与释放流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
