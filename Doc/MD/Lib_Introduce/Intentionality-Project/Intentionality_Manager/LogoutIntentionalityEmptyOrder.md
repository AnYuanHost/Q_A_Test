# LogoutIntentionalityEmptyOrder

***

映射LogoutIntentionalityEmptyOrder接受无符号整型集合（UIntSet）为定义域，意向性空序集合（IntentionalityEmptyOrderSet）为值域，定义为：

```C++
Map LogoutIntentionalityEmptyOrder(&UIntSet, &IntentionalityEmptyOrderSet, LogoutIntentionalityEmptyOrderFunction);
```

意向性空序登出映射（LogoutIntentionalityEmptyOrder）将定义域地址信息代表的位置登出（归还）到值域空序中，该位置离开工作态、重新计入空闲位置，并被合并进空序的分段有序序列。配对映射为[LoginIntentionalityEmptyOrder](LoginIntentionalityEmptyOrder.md)。

***

## 案例：

```C++
Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
// Initialize EmptyOrderElement

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

// Initialize AddressElement with Address Information from Login

LogoutIntentionalityEmptyOrderFunction(AddressElement, EmptyOrderElement);

ZeroElementFunction(EmptyElement, AddressElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：定义域地址信息必须来自同一空序上一次成功的登录结果，登出后该位置回到空序的空闲序列中，可再次登录。地址元素本身只承载数值，用ZeroElement解除；空序的最终释放仍由[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)完成。若希望归还地址的同时完成空序整理，改用[IntentionalityEmptyOrderLogoutMerge](IntentionalityEmptyOrderLogoutMerge.md)。完整的登录与登出流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
