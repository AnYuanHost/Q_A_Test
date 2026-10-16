# NewIntentionalityAscender

***

映射NewIntentionalityAscender接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalityAscender(&NullElementSet, &NullElementSet, NewIntentionalityAscenderFunction);
```

意向性攀升器新建映射（NewIntentionalityAscender）在值域空元素上构造一个空的意向性攀升器。构造完成后，值域元素即属于意向性攀升器集合（[IntentionalityAscender](IntentionalityAscender.md)），5 个位置均为空，可以接受元素序、元素环境检索器与子元素环境检索器超索引的写入。

***

## 案例：

```C++
Element AscenderElement;

NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement

ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：在空元素AscenderElement上构造意向性攀升器，随后即可写入元素序并执行攀升遍历。使用完毕必须用[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)成对释放；若跳过释放直接令元素析构，将造成攀升器持有的元素序与检索器资源泄漏。完整的构造与释放流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
