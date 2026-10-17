# SelectIntentionalityObject

***

映射SelectIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map SelectIntentionalityObject(&OrderedPairSet, &UIntSet, SelectIntentionalityObjectFunction);
```

意向性对象检索映射（SelectIntentionalityObject）分析定义域元素序偶元素，其结构为：<SuperIndexSet, IntentionalityObjectSet>，其信息为：<待检索超索引信息，意向性对象>。按照待检索超索引信息在意向性对象中完成检索，将检索到的地址信息赋值到值域无符号整型元素上。

如果没有搜索到对应地址，则赋值值域元素为UINT_MAX。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize SuperIndex information in GetPairFirstElement(ParameterPair)
// Initialize IntentionalityObject element in GetPairSecoundElement(ParameterPair)

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

SelectIntentionalityObjectFunction(ParameterPair, UIntElement);

if (GetUIntElement(UIntElement) != UINT_MAX)
{
	// Address Information Available
}

ZeroElementFunction(EmptyElement, UIntElement);
ZeroElementFunction(EmptyElement, ParameterPair);
```

在案例代码中，构造序偶ParameterPair，其第一元素为待检索超索引信息，第二元素为意向性对象；调用SelectIntentionalityObject将检索结果地址写入UIntElement。检索失败时值为UINT_MAX，调用方必须先行判定再使用地址。使用完毕后，序偶与结果元素均需ZeroElement解除。
