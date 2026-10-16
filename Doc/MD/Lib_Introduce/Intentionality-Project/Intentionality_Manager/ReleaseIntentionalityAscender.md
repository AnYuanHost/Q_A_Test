# ReleaseIntentionalityAscender

***

映射ReleaseIntentionalityAscender接受空元素集合（NullElementSet）为定义域，意向性攀升器集合（IntentionalityAscenderSet）为值域，定义为：

```C++
Map ReleaseIntentionalityAscender(&NullElementSet, &IntentionalityAscenderSet, ReleaseIntentionalityAscenderFunction);
```

意向性攀升器释放映射（ReleaseIntentionalityAscender）分析并释放值域攀升器及其持有的全部资源，包括元素序（IA_Order）、元素环境检索器（IA_EES）与子元素环境检索器超索引（IA_SubEES_SuperIndex）位置的内容。释放后值域元素不再属于意向性攀升器集合，必须由[NewIntentionalityAscender](NewIntentionalityAscender.md)重新构造才能再次使用。

***

## 案例：

```C++
Element AscenderElement;
NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement

ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：构造与释放成对出现，New之后必有一次Release。释放是全量归还：位置内容与攀升器结构一并释放，重复释放触发异常；只想保留攀升器结构而仅归还元素序时，应改用[ReleaseIntentionalityAscenderOrder](ReleaseIntentionalityAscenderOrder.md)。完整的构造与释放流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
