# SystemLoginIntentionalitySuperIndexDictionaries

***

映射SystemLoginIntentionalitySuperIndexDictionaries接受意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SystemLoginIntentionalitySuperIndexDictionaries(&IntentionalitySuperIndexDictionariesSet, &NullElementSet, SystemLoginIntentionalitySuperIndexDictionariesFunction);
```

意向性超索引字典系统登录映射（SystemLoginIntentionalitySuperIndexDictionaries）把定义域字典登记入系统字典表单，使该字典进入工作态、供全局检索使用。登录不改变字典自身的超索引与序内容，也不改变字典的归属——字典仍由原调用方持有，仍由[ReleaseIntentionalitySuperIndexDictionaries](ReleaseIntentionalitySuperIndexDictionaries.md)负责释放。

登录与[SystemLogoutIntentionalitySuperIndexDictionaries](SystemLogoutIntentionalitySuperIndexDictionaries.md)成对。

***

## 案例：

```C++
SystemLoginIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);

// DictionariesElement is now registered in the System Dictionaries Table

SystemLogoutIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);

ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：登录之后字典进入系统字典表单，系统级检索即可命中它；登录只登记位置，不转移所有权，因此释放仍由调用方完成。登录与登出必须成对——带着未登出的字典直接释放，将使系统字典表单中残留指向已释放字典的悬空条目。完整的登录与登出流程，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
