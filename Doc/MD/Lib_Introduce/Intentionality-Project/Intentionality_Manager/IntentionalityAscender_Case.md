# 意向性攀升器案例

***

本例覆盖意向性攀升器的完整流程：新建攀升器、写入元素序与检索器、元素序与文本流互转、推进攀升器、清零复位与释放，演示一个攀升器从构造到归还的完整生命周期。攀升器的各位置含义见[IntentionalityAscender_Struct](IntentionalityAscender_Struct.md)。

***

## 构造与释放

说明段：一切攀升器操作都始于[NewIntentionalityAscender](NewIntentionalityAscender.md)、终于[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)，两者必须成对出现；[ZeroIntentionalityAscender](ZeroIntentionalityAscender.md)只复位位置内容，不归还结构，不能替代释放。

```C++
Element AscenderElement;

NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement

ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

注意事项：跳过释放直接析构宿主元素，将造成攀升器持有的元素序与检索器资源泄漏；重复释放触发异常；只需要复位重用时用Zero，需要归还全部资源时用Release，二者分工不可颠倒。

***

## 设置元素序与检索器

说明段：攀升器的可攀升内容由三张Set映射写入，三张映射的定义域都是元素序偶，其第一元素为待写入内容、第二元素为目标攀升器：元素序写入IA_Order，元素环境检索器写入IA_EES，子元素环境检索器超索引写入IA_SubEES_SuperIndex。

```C++
Element OrderPair;
NewOrderedPairFunction(EmptyElement, OrderPair);

// Initialize ElementOrder in GetPairFirstElement(OrderPair)
GetPairSecoundElement(OrderPair) &= AscenderElement;

SetIntentionalityAscenderOrderFunction(OrderPair, EmptyElement);

Element EESPair;
NewOrderedPairFunction(EmptyElement, EESPair);
// Initialize Element Environment Searcher (EES) in GetPairFirstElement(EESPair)
GetPairSecoundElement(EESPair) &= AscenderElement;

SetIntentionalityAscenderEESFunction(EESPair, EmptyElement);

Element SubEESSuperIndexPair;
NewOrderedPairFunction(EmptyElement, SubEESSuperIndexPair);
// Initialize SubEES SuperIndex information in GetPairFirstElement(SubEESSuperIndexPair)
GetPairSecoundElement(SubEESSuperIndexPair) &= AscenderElement;

SetIntentionalityAscenderSubEESSuperIndexFunction(SubEESSuperIndexPair, EmptyElement);

unsigned int OrderIndex = GetUIntElement(GetEleOrder(AscenderElement, IntentionalityAscender_Struct::IA_Order_Index));

ZeroElementFunction(EmptyElement, SubEESSuperIndexPair);
ZeroElementFunction(EmptyElement, EESPair);
ZeroElementFunction(EmptyElement, OrderPair);
```

注意事项：三张Set映射只写位置内容，不改变攀升器结构，也不改变其他位置的内容；写入后的元素序与检索器由攀升器持有，攀升器释放前不得单独释放这些位置内容，序偶参数一律用ZeroElementFunction解除。

***

## 流与序互转

说明段：元素序与文本流可以双向转换——[StreamToIntentionalityAscenderOrder](StreamToIntentionalityAscenderOrder.md)解析文本流写入IA_Order，[IntentionalityAscenderOrderToStream](IntentionalityAscenderOrderToStream.md)把当前元素序编码回文本流。

```C++
Element StreamElement;
NewStringFunction(EmptyElement, StreamElement);
// Initialize StreamElement with Order content

StreamToIntentionalityAscenderOrderFunction(StreamElement, AscenderElement);

Element OutStreamElement;
NewStringFunction(EmptyElement, OutStreamElement);

IntentionalityAscenderOrderToStreamFunction(AscenderElement, OutStreamElement);

// Use OutStreamElement

ZeroElementFunction(EmptyElement, OutStreamElement);
ZeroElementFunction(EmptyElement, StreamElement);
```

注意事项：解析入序之后定义域文本流即可解除，元素序由攀升器持有；编码出的文本流是拷贝结果，攀升器随后被清零或释放都不影响它；只要归还元素序而保留攀升器结构与两个检索器位置时，用[ReleaseIntentionalityAscenderOrder](ReleaseIntentionalityAscenderOrder.md)而不是整体释放。

***

## 推进与清零

说明段：[NextIntentionalityAscender](NextIntentionalityAscender.md)把攀升器推进至下一个序位置，结果赋值到值域无符号整型元素：0 表示成功推进，1 表示已至序末端；[ZeroIntentionalityAscender](ZeroIntentionalityAscender.md)把五个位置的内容一并清零复位，攀升器结构本身保留。

```C++
Element ResultElement;
NewUIntElementFunction(EmptyElement, ResultElement);

NextIntentionalityAscenderFunction(AscenderElement, ResultElement);

if (GetUIntElement(ResultElement) == 0)
{
	// Advanced to the Next Order Position
}
else
{
	// Reached the End of the Order (1)
}

ZeroIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// AscenderElement is empty but still valid

ZeroElementFunction(EmptyElement, ResultElement);
ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

注意事项：推进结果只取 0 与 1 两种值，必须先判定再决定是否继续攀升；到达序末端之后攀升器仍然有效，可重新写入元素序继续使用；清零只是复位，清零之后必须再执行一次Release，生命周期才算结束。

***

## 内存与引用纪律

本案例全程遵循三条纪律：构造与释放成对（NewIntentionalityAscender / ReleaseIntentionalityAscender）；写入与复位成对（位置内容写入后，重用前先Zero，彻底归还用Release，只交还元素序用ReleaseIntentionalityAscenderOrder）；引用与解除成对（序偶参数与结果元素用ZeroElementFunction解除，由攀升器持有的位置内容不得单独释放）。任何一条被打破，都会表现为位置内容悬空、重复释放异常或资源泄漏。最易错的一步是把IA_Order中的元素序当作自有元素释放——它由攀升器持有，只能通过ReleaseIntentionalityAscenderOrder或ReleaseIntentionalityAscender交还。
