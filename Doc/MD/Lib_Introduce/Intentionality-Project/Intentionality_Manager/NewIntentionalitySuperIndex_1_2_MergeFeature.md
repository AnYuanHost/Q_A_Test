# NewIntentionalitySuperIndex_1_2_MergeFeature

***

映射NewIntentionalitySuperIndex_1_2_MergeFeature接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalitySuperIndex_1_2_MergeFeature(&NullElementSet, &NullElementSet, NewIntentionalitySuperIndex_1_2_MergeFeatureFunction);
```

意向性超索引一二合并特征新建映射（NewIntentionalitySuperIndex_1_2_MergeFeature）在值域空元素上构造意向性超索引一二合并所需的合并特征结构，即一个 4 元素的元素序。构造完成后，值域元素即可配合[IntentionalitySuperIndexManagerMergeOrder](IntentionalitySuperIndexManagerMergeOrder.md)与[IntentionalitySuperIndexManagerMergePage](IntentionalitySuperIndexManagerMergePage.md)记录合并过程中的状态，位置常量与合并阈值见[IntentionalitySuperIndex_1_2_MergeFeature](IntentionalitySuperIndex_1_2_MergeFeature.md)。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndex_1_2_MergeFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for the 1-2 Merge

Element ManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element MergePair;
NewOrderedPairFunction(EmptyElement, MergePair);
GetPairFirstElement(MergePair) &= ManagerElement;
GetPairSecoundElement(MergePair) &= ManagerElement;

Element MergedManagerElement;
IntentionalitySuperIndexManagerMergeOrderFunction(MergePair, MergedManagerElement);
// Use MergedManagerElement

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, MergedManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
ZeroElementFunction(EmptyElement, MergePair);
ReleaseIntentionalitySuperIndex_1_2_MergeFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：合并特征结构在独立元素上构造，与管理器本体分离，因此它的释放方式是专用的[ReleaseIntentionalitySuperIndex_1_2_MergeFeature](ReleaseIntentionalitySuperIndex_1_2_MergeFeature.md)，必须与新建成对；管理器的合并结果仍由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)单独释放，两者的释放责任互不替代。跳过特征释放将造成元素序资源残留。完整的合并流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
