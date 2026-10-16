# StreamToIntentionalityAscenderOrder

***

映射StreamToIntentionalityAscenderOrder接受流集合（StreamSet）为定义域，意向性攀升器集合（IntentionalityAscenderSet）为值域，定义为：

```C++
Map StreamToIntentionalityAscenderOrder(&StreamSet, &IntentionalityAscenderSet, StreamToIntentionalityAscenderOrderFunction);
```

文本流转换为意向性攀升器元素序映射（StreamToIntentionalityAscenderOrder）将定义域文本流解析为元素序，写入攀升器的元素序位置，即IntentionalityAscender_Struct::IA_Order（序号 2）。解析完成后，攀升器即可按该元素序执行攀升遍历。

***

## 案例：

```C++
Element StreamElement;
NewStringFunction(EmptyElement, StreamElement);
// Initialize StreamElement with Order content

Element AscenderElement;
NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

StreamToIntentionalityAscenderOrderFunction(StreamElement, AscenderElement);

// AscenderElement now holds the parsed ElementOrder

ZeroElementFunction(EmptyElement, StreamElement);
ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：文本流解析出的元素序写入攀升器IA_Order位置后，由攀升器持有，定义域文本流即可用ZeroElement解除；攀升器收尾时由[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)把元素序一并释放。解析结果与原文本流是两份独立内容，修改文本流不影响已写入的元素序。关于流与序互转的完整流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
