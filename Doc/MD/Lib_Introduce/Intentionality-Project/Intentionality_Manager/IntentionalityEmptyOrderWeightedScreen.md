# IntentionalityEmptyOrderWeightedScreen

***

映射IntentionalityEmptyOrderWeightedScreen接受元素序偶集合（OrderedPairSet）为定义域，意向性空序集合（IntentionalityEmptyOrderSet）为值域，定义为：

```C++
Map IntentionalityEmptyOrderWeightedScreen(&OrderedPairSet, &IntentionalityEmptyOrderSet, IntentionalityEmptyOrderWeightedScreenFunction);
```

意向性空序加权筛选映射（IntentionalityEmptyOrderWeightedScreen）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalityEmptyOrderSet>，其信息为：<权重信息，空序>。按权重条件筛选空序中的空闲位置，将筛选结果构造为新的意向性空序置于值域。定义域空序保持原样，不受筛选影响。

***

## 案例：

```C++
Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
// Initialize EmptyOrderElement

Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

Element WeightElement;
NewUIntElementFunction(EmptyElement, WeightElement);
// Initialize Weight Information in WeightElement

CopyElementFunction(WeightElement, GetPairFirstElement(ParameterPair));
GetPairSecoundElement(ParameterPair) &= EmptyOrderElement;

Element ScreenedEmptyOrderElement;
IntentionalityEmptyOrderWeightedScreenFunction(ParameterPair, ScreenedEmptyOrderElement);

// ScreenedEmptyOrderElement is a new EmptyOrder holding the selected Positions

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, ScreenedEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
ZeroElementFunction(EmptyElement, WeightElement);
ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是权重信息，第二元素是被筛选的原空序。筛选结果不是原空序的引用，而是值域上新构造的独立空序，因此原空序与结果空序各自独立释放：结果空序用[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)释放，序偶与权重元素用ZeroElement解除。筛选出的位置在原空序中依然空闲，两份空序不可混用于同一地址的登录与登出。完整的筛选与合并流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
