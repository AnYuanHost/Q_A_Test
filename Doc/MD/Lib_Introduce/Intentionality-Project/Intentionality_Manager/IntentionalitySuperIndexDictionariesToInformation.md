# IntentionalitySuperIndexDictionariesToInformation

***

映射IntentionalitySuperIndexDictionariesToInformation接受意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为定义域，全集（UniversalSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexDictionariesToInformation(&IntentionalitySuperIndexDictionariesSet, &UniversalSet, IntentionalitySuperIndexDictionariesToInformationFunction);
```

意向性超索引字典转信息映射（IntentionalitySuperIndexDictionariesToInformation）把定义域字典展开为结构信息元素（Information），在值域全集元素上给出字典两个位置的展开内容。展开是拷贝式操作：定义域字典的内容与归属不变，值域得到的是独立的信息元素。

信息元素重建为字典的配对映射见[InformationToIntentionalitySuperIndexDictionaries](InformationToIntentionalitySuperIndexDictionaries.md)。

***

## 案例：

```C++
Element InformationElement;
IntentionalitySuperIndexDictionariesToInformationFunction(DictionariesElement, InformationElement);

// InformationElement now holds the expanded structure information of the Dictionaries

ZeroElementFunction(EmptyElement, InformationElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：调用映射把字典的超索引与序展开到值域信息元素上，展开结果是拷贝，因此可以先用ZeroElementFunction解除信息元素、再释放字典，次序不构成约束。反过来重建字典时，用InformationToIntentionalitySuperIndexDictionaries以该信息元素为定义域，在值域上得到新的字典。完整的互转流程，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
