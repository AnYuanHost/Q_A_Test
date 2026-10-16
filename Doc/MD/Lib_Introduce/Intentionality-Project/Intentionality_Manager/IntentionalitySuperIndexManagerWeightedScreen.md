# IntentionalitySuperIndexManagerWeightedScreen

***

映射IntentionalitySuperIndexManagerWeightedScreen接受元素序偶集合（OrderedPairSet）为定义域，意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexManagerWeightedScreen(&OrderedPairSet, &IntentionalitySuperIndexManagerSet, IntentionalitySuperIndexManagerWeightedScreenFunction);
```

意向性超索引管理器加权筛选映射（IntentionalitySuperIndexManagerWeightedScreen）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalitySuperIndexManagerSet>，其信息为：<权重信息，意向性超索引管理器>。按权重条件筛选管理器中的页与位置，将筛选结果构造为新的意向性超索引管理器置于值域。定义域管理器保持原样，不受筛选影响。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

Element WeightElement;
NewUIntElementFunction(EmptyElement, WeightElement);
// Initialize Weight Information in WeightElement

CopyElementFunction(WeightElement, GetPairFirstElement(ParameterPair));
GetPairSecoundElement(ParameterPair) &= ManagerElement;

Element ScreenedManagerElement;
IntentionalitySuperIndexManagerWeightedScreenFunction(ParameterPair, ScreenedManagerElement);

// ScreenedManagerElement is a new Manager holding the selected Pages and Positions

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ScreenedManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
ZeroElementFunction(EmptyElement, WeightElement);
ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是权重信息，第二元素是被筛选的原管理器。筛选结果不是原管理器的引用，而是值域上新构造的独立管理器，因此原管理器与结果管理器各自独立释放：结果管理器用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放，序偶与权重元素用ZeroElement解除。筛选出的页与位置在原管理器中依然存在，两份管理器不可混用于同一条目的登录与登出。完整的筛选与合并流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
