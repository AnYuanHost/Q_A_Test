# PageIntentionalitySuperIndexManagerSubsection

***

映射PageIntentionalitySuperIndexManagerSubsection接受意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为定义域和值域，定义为：

```C++
Map PageIntentionalitySuperIndexManagerSubsection(&IntentionalitySuperIndexManagerSet, &IntentionalitySuperIndexManagerSet, PageIntentionalitySuperIndexManagerSubsectionFunction);
```

意向性超索引管理器分段映射（PageIntentionalitySuperIndexManagerSubsection）把定义域管理器的页结构切分为子段，将子段构造为新的意向性超索引管理器置于值域。定义域管理器保持原样，不受分段影响，值域结果由调用方接管。分段语义与意向性空序的分段一致：把整体结构划分为可独立整理的子段。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element SubsectionManagerElement;
PageIntentionalitySuperIndexManagerSubsectionFunction(ManagerElement, SubsectionManagerElement);

// SubsectionManagerElement is a new Manager holding the Subsections

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, SubsectionManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域传入原管理器，分段结果在值域上新构造为一个独立管理器，不是原管理器的引用。两个管理器各自持有自己的页结构，必须分别用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放；把分段结果当作原管理器的引用而漏掉释放，将造成页序资源泄漏。完整的分段流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
