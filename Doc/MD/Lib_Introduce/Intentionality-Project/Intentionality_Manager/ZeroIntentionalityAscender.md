# ZeroIntentionalityAscender

***

映射ZeroIntentionalityAscender接受空元素集合（NullElementSet）为定义域，意向性攀升器集合（IntentionalityAscenderSet）为值域，定义为：

```C++
Map ZeroIntentionalityAscender(&NullElementSet, &IntentionalityAscenderSet, ZeroIntentionalityAscenderFunction);
```

意向性攀升器清零映射（ZeroIntentionalityAscender）将值域攀升器各位置内容清零复位，不释放攀升器结构本身。被清零的是IA_Order_Size、IA_Order_Index、IA_Order、IA_EES与IA_SubEES_SuperIndex五个位置的内容，攀升器元素仍属于意向性攀升器集合（[IntentionalityAscender](IntentionalityAscender.md)），可以继续接受设置与推进操作。

***

## 案例：

```C++
Element AscenderElement;
NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement

ZeroIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// AscenderElement is empty but still valid

ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：清零只复位位置内容，攀升器结构保留，因此清零之后必须再执行[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)才完成生命周期。清零与释放的分工是：需要复位重用时用本映射，需要归还全部资源时用释放映射；对同一只执行其中一步都不构成完整的收尾。关于清零复位的完整流程，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
