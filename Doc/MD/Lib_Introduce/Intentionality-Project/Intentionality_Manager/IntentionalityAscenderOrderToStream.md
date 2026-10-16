# IntentionalityAscenderOrderToStream

***

映射IntentionalityAscenderOrderToStream接受意向性攀升器集合（IntentionalityAscenderSet）为定义域，流集合（StreamSet）为值域，定义为：

```C++
Map IntentionalityAscenderOrderToStream(&IntentionalityAscenderSet, &StreamSet, IntentionalityAscenderOrderToStreamFunction);
```

意向性攀升器元素序转文本流映射（IntentionalityAscenderOrderToStream）将攀升器IA_Order位置持有的当前元素序编码为文本流写入值域。编码结果是元素序的文本表示，可直接输出、保存，或经[StreamToIntentionalityAscenderOrder](StreamToIntentionalityAscenderOrder.md)解析回元素序。

***

## 案例：

```C++
Element AscenderElement;
NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement with ElementOrder

Element StreamElement;
NewStringFunction(EmptyElement, StreamElement);

IntentionalityAscenderOrderToStreamFunction(AscenderElement, StreamElement);

// Use StreamElement

ZeroElementFunction(EmptyElement, StreamElement);
ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：映射只读取攀升器的IA_Order位置，不改变攀升器的推进状态，编码结果写入独立的文本流元素。文本流是拷贝结果而非引用，攀升器后续被清零或释放都不影响已编码的文本；使用完毕用ZeroElement解除，攀升器本身仍由[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)释放。关于流与序互转的完整流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
