# IntentionalityAscender

***

集合IntentionalityAscender为所有意向性攀升器元素的集合，定义为：

```C++
Set IntentionalityAscender(EmptyElement, IntentionalityAscenderTest);
```

意向性攀升器集合（IntentionalityAscender）由所有意向性攀升器元素组成，用于沿超索引层级向上攀升的遍历操作。攀升器元素共 5 个位置，通过宏GetEleOrder(元素, 序号) 读取，各位置含义（位置常量见[IntentionalityAscender_Struct](IntentionalityAscender_Struct.md)）如下：

* 序号 0：IA_Order_Size，元素序长度；
* 序号 1：IA_Order_Index，当前序号；
* 序号 2：IA_Order，元素序；
* 序号 3：IA_EES，元素环境检索器（EES）；
* 序号 4：IA_SubEES_SuperIndex，子元素环境检索器超索引（SubEES 的 SuperIndex）。

攀升器由[NewIntentionalityAscender](NewIntentionalityAscender.md)构造，由[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)释放，两者成对。

***

## 案例：

```C++
Element AscenderElement;

NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// AscenderElement now belongs to IntentionalityAscenderSet

ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：构造出的AscenderElement即属于意向性攀升器集合，可继续接受设置元素序、设置检索器、推进与清零等映射的操作，使用完毕由ReleaseIntentionalityAscender成对释放。关于攀升器的完整操作链，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
