# IntentionalityEmptyOrderLogoutMerge

***

映射IntentionalityEmptyOrderLogoutMerge接受元素序偶集合（OrderedPairSet）为定义域，意向性空序集合（IntentionalityEmptyOrderSet）为值域，定义为：

```C++
Map IntentionalityEmptyOrderLogoutMerge(&OrderedPairSet, &IntentionalityEmptyOrderSet, IntentionalityEmptyOrderLogoutMergeFunction);
```

意向性空序登出合并映射（IntentionalityEmptyOrderLogoutMerge）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalityEmptyOrderSet>，其信息为：<地址信息，空序>。将定义域地址信息代表的位置归还到空序中，并对空序执行合并整理，把合并后的空序置于值域。

***

## 案例：

```C++
Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
// Initialize EmptyOrderElement

Element LogoutMergePair;
NewOrderedPairFunction(EmptyElement, LogoutMergePair);

// Initialize Address information (UIntSet) in GetPairFirstElement(LogoutMergePair)
GetPairSecoundElement(LogoutMergePair) &= EmptyOrderElement;

Element ResultEmptyOrderElement;
IntentionalityEmptyOrderLogoutMergeFunction(LogoutMergePair, ResultEmptyOrderElement);

// ResultEmptyOrderElement holds the Logged-out and Merged EmptyOrder

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, ResultEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
ZeroElementFunction(EmptyElement, LogoutMergePair);
```

案例解释：序偶的第一元素是待归还的地址信息，必须来自该空序上一次成功的登录；第二元素是以引用接入的原空序。本映射把[LogoutIntentionalityEmptyOrder](LogoutIntentionalityEmptyOrder.md)的归还与[IntentionalityEmptyOrderMergeOrder](IntentionalityEmptyOrderMergeOrder.md)的整理合为一步，归还与整理在同一调用内完成，无需再单独登出。结果空序由调用方持有并负责释放，原空序的释放责任不变，序偶参数用ZeroElement解除。完整的登录与登出流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
