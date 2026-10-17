# IntentionalitySuperIndexManagerToDictionaries

***

映射IntentionalitySuperIndexManagerToDictionaries接受意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为定义域，意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexManagerToDictionaries(&IntentionalitySuperIndexManagerSet, &IntentionalitySuperIndexDictionariesSet, IntentionalitySuperIndexManagerToDictionariesFunction);
```

意向性超索引管理器转字典映射（IntentionalitySuperIndexManagerToDictionaries）分析定义域管理器中登记的超索引与序信息，把它们提取为值域上的意向性超索引字典，一次得到超索引位置（ISID_SuperIndex）与序位置（ISID_Order）均已填充的完整字典。提取是拷贝式操作：定义域管理器的内容与归属不变，值域字典由调用方接管。

字典得到后须由[SystemLoginIntentionalitySuperIndexDictionaries](SystemLoginIntentionalitySuperIndexDictionaries.md)登记入系统字典表单才能参与全局检索。

***

## 案例：

```C++
Element DictionariesElement;
IntentionalitySuperIndexManagerToDictionariesFunction(SuperIndexManagerElement, DictionariesElement);

// DictionariesElement now holds the SuperIndex and Order extracted from the Manager

SystemLoginIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);

SystemLogoutIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：以意向性超索引管理器为定义域，一步在值域上得到已填充的字典，省去逐项写入超索引与序的操作。提取结果是独立字典而非管理器的引用，因此有自己的登录、登出与释放责任；管理器本身的释放不在本映射职责范围内。完整的字典操作链，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
