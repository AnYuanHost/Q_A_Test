# ReleaseIntentionalitySuperIndexManager

***

映射ReleaseIntentionalitySuperIndexManager接受空元素集合（NullElementSet）为定义域，意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为值域，定义为：

```C++
Map ReleaseIntentionalitySuperIndexManager(&NullElementSet, &IntentionalitySuperIndexManagerSet, ReleaseIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器释放映射（ReleaseIntentionalitySuperIndexManager）分析并释放值域意向性超索引管理器及其持有的全部页序资源。释放后值域元素不再属于意向性超索引管理器集合，必须由[NewIntentionalitySuperIndexManager](NewIntentionalitySuperIndexManager.md)重新构造才能再次使用。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：构造与释放成对出现，New之后必有一次Release。释放是全量归还：页序、各页条目与管理器元素一并释放，重复释放触发异常；若管理器上仍有未登出的登录条目，这些条目将随管理器一并消亡，释放前必须确认登录与登出已全部配平。完整的构造与释放流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
