# NextIntentionalityAscender

***

映射NextIntentionalityAscender接受意向性攀升器集合（IntentionalityAscenderSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map NextIntentionalityAscender(&IntentionalityAscenderSet, &UIntSet, NextIntentionalityAscenderFunction);
```

下一个意向性攀升器映射（NextIntentionalityAscender）将定义域攀升器推进至下一个序位置，推进针对IA_Order位置持有的元素序展开，推进位置由IA_Order_Index记录、序末端由IA_Order_Size界定，将推进结果赋值到值域无符号整型元素：0 表示成功推进，1 表示已至序末端。

***

## 案例：

```C++
Element AscenderElement;
NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement with ElementOrder

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

ZeroElementFunction(EmptyElement, ResultElement);
ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：推进结果写入ResultElement，取值为 0 或 1，调用方必须先判定再决定是否继续攀升；结果元素只保存一次判断即失效，用ZeroElement解除。攀升器不会因推进到末端而失效，末端之后仍可清零复位重新使用，最终由[ReleaseIntentionalityAscender](ReleaseIntentionalityAscender.md)释放。完整的推进循环写法，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
