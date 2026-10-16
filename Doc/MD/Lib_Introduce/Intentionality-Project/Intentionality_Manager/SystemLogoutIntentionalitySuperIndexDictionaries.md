# SystemLogoutIntentionalitySuperIndexDictionaries

***

映射SystemLogoutIntentionalitySuperIndexDictionaries接受意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SystemLogoutIntentionalitySuperIndexDictionaries(&IntentionalitySuperIndexDictionariesSet, &NullElementSet, SystemLogoutIntentionalitySuperIndexDictionariesFunction);
```

意向性超索引字典系统登出映射（SystemLogoutIntentionalitySuperIndexDictionaries）把定义域字典从系统字典表单中注销，使该字典离开工作态、不再参与全局检索。登出不改变字典自身的超索引与序内容，字典本身依然有效，仍可重新登录或被释放。

登出是[SystemLoginIntentionalitySuperIndexDictionaries](SystemLoginIntentionalitySuperIndexDictionaries.md)的配对映射，两者必须成对。

***

## 案例：

```C++
SystemLoginIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);

// DictionariesElement is registered in the System Dictionaries Table

SystemLogoutIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);

// DictionariesElement has left the System Dictionaries Table

ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：登出把字典从系统字典表单中摘除，之后全局检索不再命中它，但字典内容完好，可再次登录。标准次序是登录、使用、登出、释放；漏掉登出直接释放，将使系统字典表单残留悬空条目，漏掉释放则造成字典内部资源泄漏。完整的登录与登出流程，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
