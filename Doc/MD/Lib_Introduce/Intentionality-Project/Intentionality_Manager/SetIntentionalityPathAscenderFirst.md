# SetIntentionalityPathAscenderFirst

***

映射SetIntentionalityPathAscenderFirst接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalityPathAscenderFirst(&OrderedPairSet, &NullElementSet, SetIntentionalityPathAscenderFirstFunction);
```

意向性路径攀升器起点设置映射（SetIntentionalityPathAscenderFirst）分析定义域元素序偶元素，其结构为：<IntentionalityObjectSet, IntentionalityPathAscenderSet>，其信息为：<意向性对象，攀升器>。将序偶第一元素中的意向性对象设置为路径起点，写入序偶第二元素所指攀升器的起点位置，即IntentionalityPathAscender_Struct::IPA_First（序号 0）。写入只改变该位置的内容，不改变攀升器结构与其他位置的内容。

起点同时作为攀升的初始对象，[UpdateIntentionalityPathAscender](UpdateIntentionalityPathAscender.md)据此开始推进路径。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize IntentionalityObject element in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= PathAscenderElement;

SetIntentionalityPathAscenderFirstFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是意向性对象，第二元素是目标攀升器。调用映射后该对象成为攀升器的路径起点，写入IPA_First位置并由攀升器持有，攀升器释放前不要单独释放该对象；序偶参数用ZeroElementFunction解除。关于起点设置与后续推进的完整流程，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
