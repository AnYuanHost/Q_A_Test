# SetIntentionalityPathAscenderSubEES

***

映射SetIntentionalityPathAscenderSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalityPathAscenderSubEES(&OrderedPairSet, &NullElementSet, SetIntentionalityPathAscenderSubEESFunction);
```

意向性路径攀升器子元素环境检索器设置映射（SetIntentionalityPathAscenderSubEES）分析定义域元素序偶元素，其结构为：<UniversalSet, IntentionalityPathAscenderSet>，其信息为：<子元素环境检索器，攀升器>。将序偶第一元素中的子元素环境检索器写入序偶第二元素所指攀升器的子检索器位置，即IntentionalityPathAscender_Struct::IPA_SubEES（序号 4）。写入只改变该位置的内容，不改变攀升器结构与其他位置的内容。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize Sub Element Environment Searcher (SubEES) in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= PathAscenderElement;

SetIntentionalityPathAscenderSubEESFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是子元素环境检索器，第二元素是目标攀升器。调用映射后子检索器写入攀升器的IPA_SubEES位置，与IPA_EES位置的检索器各司其职；位置内容由攀升器持有，攀升器释放前不要单独释放，序偶参数用ZeroElementFunction解除。关于检索器的完整写入流程，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
