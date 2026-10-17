# IntentionalitySuperIndexManagerUpdateParameter

***

映射IntentionalitySuperIndexManagerUpdateParameter接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexManagerUpdateParameter(&OrderedPairSet, &NullElementSet, IntentionalitySuperIndexManagerUpdateParameterFunction);
```

意向性超索引管理器参数更新映射（IntentionalitySuperIndexManagerUpdateParameter）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalitySuperIndexManagerSet>，其信息为：<参数信息，意向性超索引管理器>。按参数信息更新管理器各页的空位数（EmptyNumber，即IntentionalitySuperIndexManager_Struct::ISIMPage_EmptyNumber）与分配数（AllotNumber，即IntentionalitySuperIndexManager_Struct::ISIMPage_AllotNumber），更新结果直接写回定义域管理器，值域元素不承载返回内容。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

Element ParameterElement;
NewUIntElementFunction(EmptyElement, ParameterElement);
// Initialize Parameter Information in ParameterElement

CopyElementFunction(ParameterElement, GetPairFirstElement(ParameterPair));
GetPairSecoundElement(ParameterPair) &= ManagerElement;

IntentionalitySuperIndexManagerUpdateParameterFunction(ParameterPair, EmptyElement);

// The EmptyNumber and AllotNumber of each Page in ManagerElement are updated

ZeroElementFunction(EmptyElement, ParameterElement);
ZeroElementFunction(EmptyElement, ParameterPair);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：序偶的第一元素是参数信息，第二元素是以引用接入的管理器。映射把参数信息逐页写回，更新发生在定义域管理器内部，因此值域用空元素接收即可，不产生新的释放责任；序偶与参数元素用ZeroElement解除，管理器最终由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放。参数更新与页登录、页登出的完整配合，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
