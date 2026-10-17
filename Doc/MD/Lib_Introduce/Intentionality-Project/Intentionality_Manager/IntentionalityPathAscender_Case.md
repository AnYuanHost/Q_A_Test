# 意向性路径攀升器案例

***

本例覆盖意向性路径攀升器的完整流程：新建与释放攀升器、设置路径起点与两个检索器、写入下一个序、更新推进路径、读取当前意向性对象，演示一个攀升器从构造到归还的完整生命周期。攀升器的集合定义见[IntentionalityPathAscender](IntentionalityPathAscender.md)，各位置含义见[IntentionalityPathAscender_Struct](IntentionalityPathAscender_Struct.md)。

***

## 构造与释放

说明段：一切攀升器操作都始于[NewIntentionalityPathAscender](NewIntentionalityPathAscender.md)、终于[ReleaseIntentionalityPathAscender](ReleaseIntentionalityPathAscender.md)，两者必须成对出现；本模块没有Zero专用映射，清零复位用ZeroElementFunction，复位不能替代释放。

```C++
Element PathAscenderElement;

NewIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);

// Use PathAscenderElement

ReleaseIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);
```

注意事项：跳过释放直接析构宿主元素，将造成攀升器持有的起点对象与两个检索器资源泄漏；重复释放触发异常；释放是全量归还，五个位置一并归还，没有部分释放映射。

***

## 设置起点与检索器

说明段：攀升器的可攀升内容由四张Set映射写入，定义域都是元素序偶，其第一元素为待写入内容、第二元素为目标攀升器：路径起点对象写入IPA_First，元素环境检索器写入IPA_EES，子元素环境检索器写入IPA_SubEES，下一个序信息写入IPA_NextOrder。

```C++
Element FirstPair;
NewOrderedPairFunction(EmptyElement, FirstPair);

// Initialize IntentionalityObject element in GetPairFirstElement(FirstPair)
GetPairSecoundElement(FirstPair) &= PathAscenderElement;

SetIntentionalityPathAscenderFirstFunction(FirstPair, EmptyElement);

Element EESPair;
NewOrderedPairFunction(EmptyElement, EESPair);

// Initialize Element Environment Searcher (EES) in GetPairFirstElement(EESPair)
GetPairSecoundElement(EESPair) &= PathAscenderElement;

SetIntentionalityPathAscenderEESFunction(EESPair, EmptyElement);

Element SubEESPair;
NewOrderedPairFunction(EmptyElement, SubEESPair);

// Initialize Sub Element Environment Searcher (SubEES) in GetPairFirstElement(SubEESPair)
GetPairSecoundElement(SubEESPair) &= PathAscenderElement;

SetIntentionalityPathAscenderSubEESFunction(SubEESPair, EmptyElement);

Element NextOrderPair;
NewOrderedPairFunction(EmptyElement, NextOrderPair);

// Initialize Order information in GetPairFirstElement(NextOrderPair)
GetPairSecoundElement(NextOrderPair) &= PathAscenderElement;

SetIntentionalityPathAscenderNextOrderFunction(NextOrderPair, EmptyElement);

ZeroElementFunction(EmptyElement, NextOrderPair);
ZeroElementFunction(EmptyElement, SubEESPair);
ZeroElementFunction(EmptyElement, EESPair);
ZeroElementFunction(EmptyElement, FirstPair);
```

注意事项：四张Set映射只写位置内容，不改变攀升器结构，也不改变其他位置的内容；写入后的起点对象与两个检索器由攀升器持有，攀升器释放前不得单独释放这些位置内容，序偶参数一律用ZeroElementFunction解除；顺序上先写起点与检索器、再写下一个序，之后才可推进。

***

## 更新与读取

说明段：[UpdateIntentionalityPathAscender](UpdateIntentionalityPathAscender.md)依据当前对象与检索器推进路径、刷新攀升器内部信息，结果赋值到值域无符号整型元素：0 表示成功推进，1 表示已至路径末端；[ReadIntentionalityPathAscender](ReadIntentionalityPathAscender.md)读取当前指向的意向性对象，把它的引用传递到值域空元素上。

```C++
Element ResultElement;
NewUIntElementFunction(EmptyElement, ResultElement);

UpdateIntentionalityPathAscenderFunction(PathAscenderElement, ResultElement);

if (GetUIntElement(ResultElement) == 0)
{
	// Advanced: Internal Information has been Refreshed
}
else
{
	// Reached the End of the Path (1)
}

Element QuoteElement;
ReadIntentionalityPathAscenderFunction(PathAscenderElement, QuoteElement);

// QuoteElement is a Quote of the Current IntentionalityObject

// ... Use QuoteElement

ZeroElementFunction(EmptyElement, QuoteElement);
ZeroElementFunction(EmptyElement, ResultElement);
ReleaseIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);
```

注意事项：推进结果只取 0 与 1 两种值，必须先判定再决定是否继续；读取得到的是引用而非拷贝，必须且只能用ZeroElementFunction解除，把它当作自有元素释放会破坏攀升器内部的意向性对象；每执行一次Update，此前取得的引用立即失效，必须重新Read；已至路径末端（值为 1）之后攀升器仍然有效，可重新设置起点与检索器继续使用；解除引用之后再Release，顺序不可颠倒。

***

## 内存与引用纪律

本案例全程遵循三条纪律：构造与释放成对（NewIntentionalityPathAscender / ReleaseIntentionalityPathAscender，且没有部分释放映射）；设置与解除成对（四张Set映射的序偶参数用ZeroElementFunction解除，写入起点与检索器之后由攀升器持有，不得单独释放）；引用与解除成对（Read的引用必须ZeroElementFunction解除，且随下一次Update失效）。任何一条被打破，都会表现为引用悬空、重复释放异常或起点对象与检索器资源泄漏。最易错的一步是把Read得到的引用元素当作自有元素释放——它只是当前意向性对象的视图，必须且只能ZeroElement解除，真正归还结构要走ReleaseIntentionalityPathAscender。
