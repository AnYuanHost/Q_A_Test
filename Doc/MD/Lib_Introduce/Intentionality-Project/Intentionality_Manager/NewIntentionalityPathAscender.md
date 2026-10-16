# NewIntentionalityPathAscender

***

映射NewIntentionalityPathAscender接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalityPathAscender(&NullElementSet, &NullElementSet, NewIntentionalityPathAscenderFunction);
```

意向性路径攀升器新建映射（NewIntentionalityPathAscender）在值域空元素上构造一个空的意向性路径攀升器。构造完成后，值域元素即属于意向性路径攀升器集合（[IntentionalityPathAscender](IntentionalityPathAscender.md)），五个位置均为空，等待[SetIntentionalityPathAscenderFirst](SetIntentionalityPathAscenderFirst.md)写入起点、[SetIntentionalityPathAscenderEES](SetIntentionalityPathAscenderEES.md)与[SetIntentionalityPathAscenderSubEES](SetIntentionalityPathAscenderSubEES.md)写入检索器。

***

## 案例：

```C++
Element PathAscenderElement;

NewIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);

// Initialize PathAscenderElement

ReleaseIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);
```

案例解释：构造空元素PathAscenderElement，通过映射NewIntentionalityPathAscender在其上构造空攀升器，随后即可写入起点与两个检索器并推进路径。使用完毕后，必须使用[ReleaseIntentionalityPathAscender](ReleaseIntentionalityPathAscender.md)成对释放；若跳过释放直接令元素析构，将造成攀升器持有的起点对象与检索器资源泄漏。
