# SetIntentionalitySuperIndexDictionariesOrder

***

映射SetIntentionalitySuperIndexDictionariesOrder接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetIntentionalitySuperIndexDictionariesOrder(&OrderedPairSet, &NullElementSet, SetIntentionalitySuperIndexDictionariesOrderFunction);
```

意向性超索引字典序设置映射（SetIntentionalitySuperIndexDictionariesOrder）分析定义域元素序偶元素，其结构为：<IntentionalitySuperIndexOrderSet, IntentionalitySuperIndexDictionariesSet>，其信息为：<序信息，字典>。将序偶第一元素中的序信息写入序偶第二元素所指字典的序位置，即IntentionalitySuperIndexDictionaries_Struct::ISID_Order（序号 1）。写入只改变该位置的内容，不改变字典结构与超索引位置的内容。

***

## 案例：

```C++
Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

// Initialize Order information in GetPairFirstElement(ParameterPair)
GetPairSecoundElement(ParameterPair) &= DictionariesElement;

SetIntentionalitySuperIndexDictionariesOrderFunction(ParameterPair, EmptyElement);

ZeroElementFunction(EmptyElement, ParameterPair);
```

案例解释：序偶的第一元素是待写入的序信息，第二元素是目标字典。调用映射后序信息写入字典的ISID_Order位置，与已写入的超索引构成完整对应条目；位置内容由字典持有，字典释放前不要单独释放，序偶参数用ZeroElementFunction解除。关于字典的完整写入流程，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
