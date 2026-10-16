# IntentionalitySuperIndexManagerMergePage

***

映射IntentionalitySuperIndexManagerMergePage接受元素序偶集合（OrderedPairSet）为定义域，意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexManagerMergePage(&OrderedPairSet, &IntentionalitySuperIndexManagerSet, IntentionalitySuperIndexManagerMergePageFunction);
```

意向性超索引管理器合并页映射（IntentionalitySuperIndexManagerMergePage）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalitySuperIndexManagerSet>，其信息为：<页信息，意向性超索引管理器>。按页信息把指定页的空闲条目合并整理，空页整页回收，把整理结果构造为新的意向性超索引管理器置于值域。定义域管理器保持原样，不受整理影响。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element PagePair;
NewOrderedPairFunction(EmptyElement, PagePair);

Element PageElement;
NewUIntElementFunction(EmptyElement, PageElement);
// Initialize Page Information in PageElement

CopyElementFunction(PageElement, GetPairFirstElement(PagePair));
GetPairSecoundElement(PagePair) &= ManagerElement;

Element MergedManagerElement;
IntentionalitySuperIndexManagerMergePageFunction(PagePair, MergedManagerElement);

// MergedManagerElement is a new Manager with the Page compacted and empty Pages reclaimed

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, MergedManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
ZeroElementFunction(EmptyElement, PageElement);
ZeroElementFunction(EmptyElement, PagePair);
```

案例解释：序偶的第一元素是指定页的页信息，第二元素是以引用接入的原管理器。整理结果不是原管理器的引用，而是值域上新构造的独立管理器，原管理器与结果管理器必须各自用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放，序偶与页信息元素用ZeroElement解除。整理后的页结构与页登录、页登出的配合，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
