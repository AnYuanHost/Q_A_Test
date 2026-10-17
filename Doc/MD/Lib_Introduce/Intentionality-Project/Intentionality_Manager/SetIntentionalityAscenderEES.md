# SetIntentionalityAscenderEES

***

映射SetIntentionalityAscenderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalityAscenderEES(&OrderedPairSet, &NullElementSet, SetIntentionalityAscenderEESFunction);
```

设置意向性攀升器元素环境检索器映射（SetIntentionalityAscenderEES）分析定义域元素序偶元素，其结构为：<UniversalSet, IntentionalityAscenderSet>，其信息为：<元素环境检索器，攀升器>。将元素环境检索器写入攀升器的检索器位置，即IntentionalityAscender_Struct::IA_EES（序号 3）。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize Element Environment Searcher (EES) in GetPairFirstElement(ParameterPair)
// Initialize IntentionalityAscender element in GetPairSecoundElement(ParameterPair)

SetIntentionalityAscenderEESFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是元素环境检索器，第二元素是目标攀升器。调用映射后检索器写入攀升器的IA_EES位置，由攀升器持有，攀升器释放前不要单独释放该检索器；序偶参数用ZeroElement解除。关于检索器的完整写入流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
