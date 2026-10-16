# NewIntentionalitySuperIndexManager

***

映射NewIntentionalitySuperIndexManager接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalitySuperIndexManager(&NullElementSet, &NullElementSet, NewIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器新建映射（NewIntentionalitySuperIndexManager）在值域空元素上构造一个空的意向性超索引管理器，页数与页序位置随之初始化。构造完成后，值域元素即属于意向性超索引管理器集合（[IntentionalitySuperIndexManager](IntentionalitySuperIndexManager.md)），可以接受页登录、检索、合并与分段等映射的操作。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：构造空元素ManagerElement，通过映射NewIntentionalitySuperIndexManager在其上构造意向性超索引管理器。使用完毕后，必须使用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)成对释放；若跳过释放直接令元素析构，将造成管理器页序内部资源泄漏。完整的构造与释放流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
