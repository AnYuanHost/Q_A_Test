# ReleaseIntentionalitySuperIndex_1_2_MergeFeature

***

映射ReleaseIntentionalitySuperIndex_1_2_MergeFeature接受空元素集合（NullElementSet）为定义域，元素序集合（ElementOrderSet）为值域，定义为：

```C++
Map ReleaseIntentionalitySuperIndex_1_2_MergeFeature(&NullElementSet, &ElementOrderSet, ReleaseIntentionalitySuperIndex_1_2_MergeFeatureFunction);
```

意向性超索引一二合并特征释放映射（ReleaseIntentionalitySuperIndex_1_2_MergeFeature）分析并释放值域元素上构造的意向性超索引一二合并特征结构，即一个 4 元素的元素序及其内部资源。释放后值域元素不再持有合并特征，必须由[NewIntentionalitySuperIndex_1_2_MergeFeature](NewIntentionalitySuperIndex_1_2_MergeFeature.md)重新构造才能再次使用。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndex_1_2_MergeFeatureFunction(EmptyElement, FeatureElement);

// Use FeatureElement during the 1-2 Merge

ReleaseIntentionalitySuperIndex_1_2_MergeFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：构造与释放成对出现，New之后必有一次Release。合并特征是独立于管理器的元素序结构，管理器的[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)不会替它完成释放，重复释放触发异常。完整的合并与释放流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
