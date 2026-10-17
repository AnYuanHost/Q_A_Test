# ReadIntentionalityObject

***

映射ReadIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadIntentionalityObject(&OrderedPairSet, &NullElementSet, ReadIntentionalityObjectFunction);
```

意向性对象质料读取映射（ReadIntentionalityObject）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalityObjectSet>，其信息为：<地址信息，意向性对象>。按照指定地址，在意向性对象中获取指定的意向性质料，将其引用传递到值域空元素上。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize Address information (UIntSet) in GetPairFirstElement(ParameterPair)
// Initialize IntentionalityObject element in GetPairSecoundElement(ParameterPair)

Element QuoteElement;

ReadIntentionalityObjectFunction(ParameterPair, QuoteElement);

// Use QuoteElement (Quote)

ZeroElementFunction(EmptyElement, QuoteElement);
ReleaseElementFunction(EmptyElement, ParameterPair);
```

在案例代码中，按照地址信息在意向性对象中读取质料，结果以引用形式传递到QuoteElement上。读取结果是引用而非拷贝：对意向性对象执行Add、Remove、Put或Release后该引用失效；使用完毕必须ZeroElement解除，不得对引用元素执行释放类操作。
