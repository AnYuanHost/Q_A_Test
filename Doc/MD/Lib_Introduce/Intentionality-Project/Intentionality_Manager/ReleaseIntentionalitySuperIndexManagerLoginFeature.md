# ReleaseIntentionalitySuperIndexManagerLoginFeature

***

映射ReleaseIntentionalitySuperIndexManagerLoginFeature接受空元素集合（NullElementSet）为定义域，元素序集合（ElementOrderSet）为值域，定义为：

```C++
Map ReleaseIntentionalitySuperIndexManagerLoginFeature(&NullElementSet, &ElementOrderSet, ReleaseIntentionalitySuperIndexManagerLoginFeatureFunction);
```

意向性超索引管理器登录特征释放映射（ReleaseIntentionalitySuperIndexManagerLoginFeature）分析并释放值域元素上构造的意向性超索引管理器登录特征结构，即一个 4 元素的元素序及其内部资源。释放后值域元素不再持有登录特征，必须由[NewIntentionalitySuperIndexManagerLoginFeature](NewIntentionalitySuperIndexManagerLoginFeature.md)重新构造才能再次使用。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndexManagerLoginFeatureFunction(EmptyElement, FeatureElement);

// Use FeatureElement during Login

ReleaseIntentionalitySuperIndexManagerLoginFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：构造与释放成对出现，New之后必有一次Release。登录特征是独立于管理器的元素序结构，管理器的[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)不会替它完成释放，重复释放触发异常。完整的登录与释放流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
