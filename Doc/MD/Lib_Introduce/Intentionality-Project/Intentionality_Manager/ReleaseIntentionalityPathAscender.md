# ReleaseIntentionalityPathAscender

***

映射ReleaseIntentionalityPathAscender接受空元素集合（NullElementSet）为定义域，意向性路径攀升器集合（IntentionalityPathAscenderSet）为值域，定义为：

```C++
Map ReleaseIntentionalityPathAscender(&NullElementSet, &IntentionalityPathAscenderSet, ReleaseIntentionalityPathAscenderFunction);
```

意向性路径攀升器释放映射（ReleaseIntentionalityPathAscender）分析并释放值域攀升器及其持有的全部资源，包括首（IPA_First）、下一个序（IPA_NextOrder）、意向性对象（IPA_Object）、元素环境检索器（IPA_EES）与子元素环境检索器（IPA_SubEES）五个位置的内容。释放后值域元素不再属于意向性路径攀升器集合（[IntentionalityPathAscender](IntentionalityPathAscender.md)），必须由[NewIntentionalityPathAscender](NewIntentionalityPathAscender.md)重新构造才能再次使用。

释放前必须先解除已通过[ReadIntentionalityPathAscender](ReadIntentionalityPathAscender.md)取得的引用。

***

## 案例：

```C++
Element PathAscenderElement;
NewIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);

// Initialize PathAscenderElement

ReleaseIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);
```

案例解释：构造与释放成对出现，New之后必有一次Release。释放是全量归还：五个位置的内容与攀升器结构一并释放，重复释放触发异常；跳过释放直接析构宿主元素将造成起点对象与两个检索器的资源泄漏。路径攀升器没有部分释放映射，五个位置只能随攀升器一并归还；仅清零复位用ZeroElementFunction，复位不替代释放。
