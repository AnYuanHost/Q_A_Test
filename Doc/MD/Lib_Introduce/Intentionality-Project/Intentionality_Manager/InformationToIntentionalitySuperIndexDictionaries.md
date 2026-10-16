# InformationToIntentionalitySuperIndexDictionaries

***

映射InformationToIntentionalitySuperIndexDictionaries接受全集（UniversalSet）为定义域，意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为值域，定义为：

```C++
Map InformationToIntentionalitySuperIndexDictionaries(&UniversalSet, &IntentionalitySuperIndexDictionariesSet, InformationToIntentionalitySuperIndexDictionariesFunction);
```

信息转意向性超索引字典映射（InformationToIntentionalitySuperIndexDictionaries）分析定义域信息元素中展开的结构信息，在值域元素上重建为意向性超索引字典，重建结果同时给出超索引位置（ISID_SuperIndex）与序位置（ISID_Order）的内容。重建是拷贝式操作：定义域信息元素不因重建而转移所有权。

***

## 案例：

```C++
Element InformationElement;
// Initialize InformationElement as UniversalSet Element

Element RebuiltDictionariesElement;
InformationToIntentionalitySuperIndexDictionariesFunction(InformationElement, RebuiltDictionariesElement);

// RebuiltDictionariesElement now belongs to IntentionalitySuperIndexDictionariesSet

ZeroElementFunction(EmptyElement, InformationElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, RebuiltDictionariesElement);
```

案例解释：以展开的结构信息元素为定义域，在值域上重建出字典，重建结果由调用方接管并负责释放。信息元素不因重建而转移所有权，用完必须ZeroElementFunction解除；两个元素的释放责任各自独立，漏掉任意一次都会泄漏。信息互转与管理器转换的完整流程，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
