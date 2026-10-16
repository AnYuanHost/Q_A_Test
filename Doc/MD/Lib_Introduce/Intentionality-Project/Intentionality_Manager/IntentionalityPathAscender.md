# IntentionalityPathAscender

***

集合IntentionalityPathAscender为所有意向性路径攀升器元素的集合，定义为：

```C++
Set IntentionalityPathAscender(EmptyElement, IntentionalityPathAscenderTest);
```

意向性路径攀升器集合（IntentionalityPathAscender）由所有意向性路径攀升器元素组成，用于沿意向性对象构成的路径攀升遍历。攀升器元素共 5 个位置，通过宏GetEleOrder(元素, 序号) 读取，各位置含义（位置常量见[IntentionalityPathAscender_Struct](IntentionalityPathAscender_Struct.md)）如下：

* 序号 0：IPA_First，首（路径起点的意向性对象）；
* 序号 1：IPA_NextOrder，下一个序；
* 序号 2：IPA_Object，当前指向的意向性对象；
* 序号 3：IPA_EES，元素环境检索器（EES）；
* 序号 4：IPA_SubEES，子元素环境检索器（SubEES）。

攀升器由[NewIntentionalityPathAscender](NewIntentionalityPathAscender.md)构造，由[ReleaseIntentionalityPathAscender](ReleaseIntentionalityPathAscender.md)释放，两者成对。

***

## 案例：

```C++
Element PathAscenderElement;

NewIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);

// PathAscenderElement now belongs to IntentionalityPathAscenderSet

ReleaseIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);
```

案例解释：构造出的PathAscenderElement即属于意向性路径攀升器集合，可继续接受设置起点、设置检索器、更新与读取等映射的操作，使用完毕由ReleaseIntentionalityPathAscender成对释放。关于攀升器的完整操作链，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
