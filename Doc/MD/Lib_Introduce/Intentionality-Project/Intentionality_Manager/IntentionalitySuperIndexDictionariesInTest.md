# IntentionalitySuperIndexDictionariesInTest

***

映射IntentionalitySuperIndexDictionariesInTest接受元素序偶集合（OrderedPairSet）为定义域，布尔集合（BoolSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexDictionariesInTest(&OrderedPairSet, &BoolSet, IntentionalitySuperIndexDictionariesInTestFunction);
```

意向性超索引字典成员测试映射（IntentionalitySuperIndexDictionariesInTest）分析定义域元素序偶元素，其结构为：<SuperIndexSet, IntentionalitySuperIndexDictionariesSet>，其信息为：<超索引，字典>。测试序偶第一元素中的超索引是否属于序偶第二元素所指的字典，将结果赋值到值域布尔元素上：真表示属于该字典，假表示不属于。测试只读取字典内容，不改变字典结构。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize SuperIndex information in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= DictionariesElement;

Element BoolElement;
IntentionalitySuperIndexDictionariesInTestFunction(ParameterPair, BoolElement);

// BoolElement is True when the SuperIndex belongs to DictionariesElement,
// and False otherwise

ZeroElementFunction(EmptyElement, BoolElement);
ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是待测试的超索引，第二元素是被测字典；调用映射后结果以真或假赋值到值域布尔元素上，调用方据此判定该超索引是否已登记在字典中。测试结果是拷贝值，随后修改或释放字典都不影响它；结果元素与序偶参数用ZeroElementFunction解除。关于字典的完整用法，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
