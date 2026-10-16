# SetIntentionalityPathAscenderEES

***

映射SetIntentionalityPathAscenderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalityPathAscenderEES(&OrderedPairSet, &NullElementSet, SetIntentionalityPathAscenderEESFunction);
```

意向性路径攀升器元素环境检索器设置映射（SetIntentionalityPathAscenderEES）分析定义域元素序偶元素，其结构为：<UniversalSet, IntentionalityPathAscenderSet>，其信息为：<元素环境检索器，攀升器>。将序偶第一元素中的元素环境检索器写入序偶第二元素所指攀升器的检索器位置，即IntentionalityPathAscender_Struct::IPA_EES（序号 3）。写入只改变该位置的内容，不改变攀升器结构与其他位置的内容。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize Element Environment Searcher (EES) in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= PathAscenderElement;

SetIntentionalityPathAscenderEESFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是元素环境检索器，第二元素是目标攀升器。调用映射后检索器写入攀升器的IPA_EES位置，由攀升器持有，攀升器释放前不要单独释放该检索器；序偶参数用ZeroElementFunction解除。关于检索器的完整写入流程，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
