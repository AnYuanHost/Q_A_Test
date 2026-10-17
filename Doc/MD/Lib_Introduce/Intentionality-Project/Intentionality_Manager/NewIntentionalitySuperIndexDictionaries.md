# NewIntentionalitySuperIndexDictionaries

***

映射NewIntentionalitySuperIndexDictionaries接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalitySuperIndexDictionaries(&NullElementSet, &NullElementSet, NewIntentionalitySuperIndexDictionariesFunction);
```

意向性超索引字典新建映射（NewIntentionalitySuperIndexDictionaries）在值域空元素上构造一个空的意向性超索引字典。构造完成后，值域元素即属于意向性超索引字典集合（[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)），两个位置均为空，等待[SetIntentionalitySuperIndexDictionariesSuperIndex](SetIntentionalitySuperIndexDictionariesSuperIndex.md)与[SetIntentionalitySuperIndexDictionariesOrder](SetIntentionalitySuperIndexDictionariesOrder.md)写入内容。

一步到位的构造方式见[CreateSuperIndexIntentionalityDictionaries](CreateSuperIndexIntentionalityDictionaries.md)。

***

## 案例：

```C++
Element DictionariesElement;

NewIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);

// Initialize DictionariesElement

ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：构造空元素DictionariesElement，通过映射NewIntentionalitySuperIndexDictionaries在其上构造空字典，随后即可写入超索引与序。使用完毕后，必须使用[ReleaseIntentionalitySuperIndexDictionaries](ReleaseIntentionalitySuperIndexDictionaries.md)成对释放；若跳过释放直接令元素析构，将造成字典内部资源泄漏。
