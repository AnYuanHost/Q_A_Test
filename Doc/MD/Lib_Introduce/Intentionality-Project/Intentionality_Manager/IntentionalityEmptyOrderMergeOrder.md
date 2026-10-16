# IntentionalityEmptyOrderMergeOrder

***

映射IntentionalityEmptyOrderMergeOrder接受元素序偶集合（OrderedPairSet）为定义域，意向性空序集合（IntentionalityEmptyOrderSet）为值域，定义为：

```C++
Map IntentionalityEmptyOrderMergeOrder(&OrderedPairSet, &IntentionalityEmptyOrderSet, IntentionalityEmptyOrderMergeOrderFunction);
```

意向性空序合并序映射（IntentionalityEmptyOrderMergeOrder）分析定义域元素序偶元素，其结构为：<IntentionalityEmptyOrderSet, IntentionalityEmptyOrderSet>，其信息为：<空序，空序>。将两个空序合并为一个有序空序，把合并结果构造为新的意向性空序置于值域。两个定义域空序保持原样，不受合并影响。

***

## 案例：

```C++
Element FirstEmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, FirstEmptyOrderElement);
// Initialize FirstEmptyOrderElement

Element SecondEmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, SecondEmptyOrderElement);
// Initialize SecondEmptyOrderElement

Element MergePair;
NewOrderedPairFunction(EmptyElement, MergePair);

GetPairFirstElement(MergePair) &= FirstEmptyOrderElement;
GetPairSecoundElement(MergePair) &= SecondEmptyOrderElement;

Element MergedEmptyOrderElement;
IntentionalityEmptyOrderMergeOrderFunction(MergePair, MergedEmptyOrderElement);

// MergedEmptyOrderElement is a new EmptyOrder holding both Segments

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, MergedEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, SecondEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, FirstEmptyOrderElement);
ZeroElementFunction(EmptyElement, MergePair);
```

案例解释：序偶的两个元素分别是以引用接入的两个原空序，合并结果在值域上新构造为一个独立空序。三个空序各自持有自己的分段结构，必须分别用[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)释放，序偶参数用ZeroElement解除；把合并结果当作原空序的引用而跳过其中任意一次释放，都会造成分段结构泄漏。完整的筛选与合并流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
