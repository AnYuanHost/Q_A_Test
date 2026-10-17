# ReleaseIntentionalitySuperIndexDictionaries

***

映射ReleaseIntentionalitySuperIndexDictionaries接受空元素集合（NullElementSet）为定义域，意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为值域，定义为：

```C++
Map ReleaseIntentionalitySuperIndexDictionaries(&NullElementSet, &IntentionalitySuperIndexDictionariesSet, ReleaseIntentionalitySuperIndexDictionariesFunction);
```

意向性超索引字典释放映射（ReleaseIntentionalitySuperIndexDictionaries）分析并释放值域字典及其内部资源，包括超索引位置（ISID_SuperIndex）与序位置（ISID_Order）的内容。释放后值域元素不再属于意向性超索引字典集合（[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)），必须由[NewIntentionalitySuperIndexDictionaries](NewIntentionalitySuperIndexDictionaries.md)重新构造才能再次使用。

若字典仍在系统字典表单中，必须先执行[SystemLogoutIntentionalitySuperIndexDictionaries](SystemLogoutIntentionalitySuperIndexDictionaries.md)再释放。

***

## 案例：

```C++
Element DictionariesElement;

NewIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);

// Initialize DictionariesElement

ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：构造与释放成对出现，New之后必有一次Release。释放是全量归还：两个位置的内容与字典结构一并释放，重复释放触发异常；跳过释放直接析构宿主元素将造成字典内部资源泄漏。关于字典的完整生命周期，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
