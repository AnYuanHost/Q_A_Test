# SetIntentionalitySuperIndexDictionariesSuperIndex

***

映射SetIntentionalitySuperIndexDictionariesSuperIndex接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalitySuperIndexDictionariesSuperIndex(&OrderedPairSet, &NullElementSet, SetIntentionalitySuperIndexDictionariesSuperIndexFunction);
```

意向性超索引字典超索引设置映射（SetIntentionalitySuperIndexDictionariesSuperIndex）分析定义域元素序偶元素，其结构为：<SuperIndexSet, IntentionalitySuperIndexDictionariesSet>，其信息为：<超索引，字典>。将序偶第一元素中的超索引写入序偶第二元素所指字典的超索引位置，即IntentionalitySuperIndexDictionaries_Struct::ISID_SuperIndex（序号 0）。写入只改变该位置的内容，不改变字典结构与序位置的内容。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize SuperIndex information in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= DictionariesElement;

SetIntentionalitySuperIndexDictionariesSuperIndexFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是待写入的超索引，第二元素是目标字典。调用映射后超索引写入字典的ISID_SuperIndex位置，由字典持有，字典释放前不要单独释放该位置内容；序偶参数用ZeroElementFunction解除。关于字典的完整写入流程，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
