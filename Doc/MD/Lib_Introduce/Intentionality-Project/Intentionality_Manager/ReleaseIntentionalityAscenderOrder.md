# ReleaseIntentionalityAscenderOrder

***

映射ReleaseIntentionalityAscenderOrder接受空元素集合（NullElementSet）为定义域，意向性攀升器集合（IntentionalityAscenderSet）为值域，定义为：

```C++
Map ReleaseIntentionalityAscenderOrder(&NullElementSet, &IntentionalityAscenderSet, ReleaseIntentionalityAscenderOrderFunction);
```

意向性攀升器元素序释放映射（ReleaseIntentionalityAscenderOrder）分析并释放攀升器持有的元素序，即IA_Order位置的内容，保留攀升器结构本身与IA_EES、IA_SubEES_SuperIndex两个检索器位置的内容。释放后攀升器仍属于意向性攀升器集合（[IntentionalityAscender](IntentionalityAscender.md)），可以重新写入元素序继续使用。

***

## 案例：

```C++
Element AscenderElement;
NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement with ElementOrder

ReleaseIntentionalityAscenderOrderFunction(EmptyElement, AscenderElement);

// AscenderElement keeps its EES and SubEES SuperIndex

Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize ElementOrder in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= AscenderElement;

SetIntentionalityAscenderOrderFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：本映射只归还元素序，检索器位置的内容与攀升器结构保留，适合元素序换代而检索器复用的场合。元素序归还后IA_Order位置为空，必须重新调用[SetIntentionalityAscenderOrder](SetIntentionalityAscenderOrder.md)写入新的元素序才能继续攀升；攀升器结构的最终归还仍由[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)完成，两者不可互相替代。
