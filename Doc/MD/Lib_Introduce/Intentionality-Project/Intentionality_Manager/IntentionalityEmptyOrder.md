# IntentionalityEmptyOrder

***

集合IntentionalityEmptyOrder为所有意向性空序元素的集合，定义为：

```C++
Set IntentionalityEmptyOrder(EmptyElement, IntentionalityEmptyOrderTest);
```

意向性空序集合（IntentionalityEmptyOrder）由所有意向性空序元素组成。空序是空闲地址的分段有序序列，驱动地址的分配与回收，是意向性对象地址管理的核心结构：分配即从空序中登录（Login）一个空闲位置，回收即把位置登出（Logout）归还空序，空序始终以分段有序的形态保存全部空闲地址。

空序由[NewIntentionalityEmptyOrder](NewIntentionalityEmptyOrder.md)构造，由[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)释放，两者成对；与文件、信息元素之间可经[FstreamReadIntentionalityEmptyOrder](FstreamReadIntentionalityEmptyOrder.md)、[InformationToIntentionalityEmptyOrder](InformationToIntentionalityEmptyOrder.md)等映射互转。

***

## 案例：

```C++
Element EmptyOrderElement;

NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// EmptyOrderElement now belongs to IntentionalityEmptyOrderSet

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：构造出的EmptyOrderElement即属于意向性空序集合，可继续接受登录、登出、筛选、合并与分段等映射的操作，使用完毕由ReleaseIntentionalityEmptyOrder成对释放。关于空序的完整操作链，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
