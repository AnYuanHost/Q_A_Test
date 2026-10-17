# IntentionalitySuperIndexManagerMergeOrder

***

映射IntentionalitySuperIndexManagerMergeOrder接受元素序偶集合（OrderedPairSet）为定义域，意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexManagerMergeOrder(&OrderedPairSet, &IntentionalitySuperIndexManagerSet, IntentionalitySuperIndexManagerMergeOrderFunction);
```

意向性超索引管理器合并序映射（IntentionalitySuperIndexManagerMergeOrder）分析定义域元素序偶元素，其结构为：<IntentionalitySuperIndexManagerSet, IntentionalitySuperIndexManagerSet>，其信息为：<意向性超索引管理器，意向性超索引管理器>。将两个管理器的序信息合并为一个管理器，把合并结果构造为新的意向性超索引管理器置于值域。两个定义域管理器保持原样，不受合并影响。

***

## 案例：

```C++
Element FirstManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, FirstManagerElement);
// Initialize FirstManagerElement

Element SecondManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, SecondManagerElement);
// Initialize SecondManagerElement

Element MergePair;
NewOrderedPairFunction(EmptyElement, MergePair);

GetPairFirstElement(MergePair) &= FirstManagerElement;
GetPairSecoundElement(MergePair) &= SecondManagerElement;

Element MergedManagerElement;
IntentionalitySuperIndexManagerMergeOrderFunction(MergePair, MergedManagerElement);

// MergedManagerElement is a new Manager holding both Orders

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, MergedManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, SecondManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, FirstManagerElement);
ZeroElementFunction(EmptyElement, MergePair);
```

案例解释：序偶的两个元素分别是以引用接入的两个原管理器，合并结果在值域上新构造为一个独立管理器。三个管理器各自持有自己的页序，必须分别用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放，序偶参数用ZeroElement解除；把合并结果当作原管理器的引用而跳过其中任意一次释放，都会造成页序资源泄漏。完整的合并流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
