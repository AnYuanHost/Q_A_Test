# SetIntentionalityAscenderSubEESSuperIndex

***

映射SetIntentionalityAscenderSubEESSuperIndex接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalityAscenderSubEESSuperIndex(&OrderedPairSet, &NullElementSet, SetIntentionalityAscenderSubEESSuperIndexFunction);
```

设置意向性攀升器子元素环境检索器超索引映射（SetIntentionalityAscenderSubEESSuperIndex）分析定义域元素序偶元素，其结构为：<SuperIndexSet, IntentionalityAscenderSet>，其信息为：<子元素环境检索器超索引，攀升器>。将子元素环境检索器超索引写入攀升器的子检索器超索引位置，即IntentionalityAscender_Struct::IA_SubEES_SuperIndex（序号 4）。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize SubEES SuperIndex information in GetPairFirstElement(ParameterPair)
// Initialize IntentionalityAscender element in GetPairSecoundElement(ParameterPair)

SetIntentionalityAscenderSubEESSuperIndexFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是子元素环境检索器超索引，第二元素是目标攀升器。调用映射后超索引写入攀升器的IA_SubEES_SuperIndex位置，攀升器释放时该位置内容一并释放，序偶参数只用ZeroElement解除。关于子检索器超索引的完整写入流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
