# CreateSuperIndexIntentionalityDictionaries

***

映射CreateSuperIndexIntentionalityDictionaries接受全集（UniversalSet）为定义域，意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为值域，定义为：

```C++
Map CreateSuperIndexIntentionalityDictionaries(&UniversalSet, &IntentionalitySuperIndexDictionariesSet, CreateSuperIndexIntentionalityDictionariesFunction);
```

意向性超索引字典构造映射（CreateSuperIndexIntentionalityDictionaries）是意向性构造命名空间IntentionalityCreater中的构造映射，分析定义域信息元素提供的超索引与序内容，在值域元素上一步构造超索引字典，即超索引与序的对应表。构造完成后，值域元素即属于意向性超索引字典集合（[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)），可以接受设置超索引、设置序、系统登录、成员测试等字典映射的操作。

定义域信息元素也可以由[InformationToIntentionalitySuperIndexDictionaries](InformationToIntentionalitySuperIndexDictionaries.md)从已有字典展开得到；不需要信息元素的逐步构造方式见[NewIntentionalitySuperIndexDictionaries](NewIntentionalitySuperIndexDictionaries.md)。

***

## 案例：

```C++
Element InformationElement;
// Initialize InformationElement as UniversalSet Element

Element DictionariesElement;
CreateSuperIndexIntentionalityDictionariesFunction(InformationElement, DictionariesElement);

// DictionariesElement now belongs to IntentionalitySuperIndexDictionariesSet

ZeroElementFunction(EmptyElement, InformationElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：信息元素提供字典的超索引与序内容，字典在值域上一步构造完成。信息元素不因构造而转移所有权，用完必须ZeroElementFunction解除；字典由调用方接管，必须由ReleaseIntentionalitySuperIndexDictionaries成对释放。关于字典从构造到释放的完整流程，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
