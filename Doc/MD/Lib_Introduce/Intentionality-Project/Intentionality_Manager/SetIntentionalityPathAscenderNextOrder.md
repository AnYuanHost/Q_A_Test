# SetIntentionalityPathAscenderNextOrder

***

映射SetIntentionalityPathAscenderNextOrder接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalityPathAscenderNextOrder(&OrderedPairSet, &NullElementSet, SetIntentionalityPathAscenderNextOrderFunction);
```

意向性路径攀升器下一个序设置映射（SetIntentionalityPathAscenderNextOrder）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalityPathAscenderSet>，其信息为：<序信息，攀升器>。将序偶第一元素中的序信息写入序偶第二元素所指攀升器的下一个序位置，即IntentionalityPathAscender_Struct::IPA_NextOrder（序号 1）。写入只改变该位置的内容，不改变攀升器结构与其他位置的内容。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize Order information in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= PathAscenderElement;

SetIntentionalityPathAscenderNextOrderFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是无符号整型的序信息，第二元素是目标攀升器。调用映射后序信息写入攀升器的IPA_NextOrder位置，[UpdateIntentionalityPathAscender](UpdateIntentionalityPathAscender.md)据此决定下一次推进的目标；位置内容由攀升器持有，序偶参数用ZeroElementFunction解除。关于下一个序的写入与推进，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
