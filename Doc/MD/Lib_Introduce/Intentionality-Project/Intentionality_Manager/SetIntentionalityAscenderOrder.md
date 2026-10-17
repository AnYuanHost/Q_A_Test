# SetIntentionalityAscenderOrder

***

映射SetIntentionalityAscenderOrder接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalityAscenderOrder(&OrderedPairSet, &NullElementSet, SetIntentionalityAscenderOrderFunction);
```

设置意向性攀升器元素序映射（SetIntentionalityAscenderOrder）分析定义域元素序偶元素，其结构为：<ElementOrderSet, IntentionalityAscenderSet>，其信息为：<待设置的元素序，攀升器>。将待设置的元素序写入攀升器的元素序位置，即IntentionalityAscender_Struct::IA_Order（序号 2）。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize ElementOrder in GetPairFirstElement(ParameterPair)
// Initialize IntentionalityAscender element in GetPairSecoundElement(ParameterPair)

SetIntentionalityAscenderOrderFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是待设置的元素序，第二元素是目标攀升器。调用映射后，元素序已写入攀升器的IA_Order位置，序偶仅作为参数载体，用ZeroElement解除即可；攀升器本身的释放仍由[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)负责，不要在序偶上释放攀升器。关于元素序的完整写入流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
