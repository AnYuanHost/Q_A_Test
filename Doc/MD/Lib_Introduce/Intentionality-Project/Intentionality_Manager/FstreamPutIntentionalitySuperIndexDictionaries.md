# FstreamPutIntentionalitySuperIndexDictionaries

***

映射FstreamPutIntentionalitySuperIndexDictionaries接受意向性超索引字典集合（IntentionalitySuperIndexDictionariesSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map FstreamPutIntentionalitySuperIndexDictionaries(&IntentionalitySuperIndexDictionariesSet, &FstreamSet, FstreamPutIntentionalitySuperIndexDictionariesFunction);
```

意向性超索引字典文件写入映射（FstreamPutIntentionalitySuperIndexDictionaries）把定义域字典序列化写入值域文件元素，其写入内容为字典两个位置上的超索引与序。写入只读取定义域字典的内容，不转移它的所有权——字典仍由调用方持有，仍由[ReleaseIntentionalitySuperIndexDictionaries](ReleaseIntentionalitySuperIndexDictionaries.md)释放；值域文件元素由文件流自身管理。

本模块只声明写入方向的文件序列化映射，头文件中不存在字典的文件读取映射。

***

## 案例：

```C++
Element DictionariesElement;

NewIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);

// Initialize SuperIndex and Order content of DictionariesElement

Element FileElement;
// Initialize FileElement as FstreamSet Element

FstreamPutIntentionalitySuperIndexDictionariesFunction(DictionariesElement, FileElement);

// FileElement now holds the serialized Dictionaries

ZeroElementFunction(EmptyElement, FileElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：先构造字典并写入超索引与序，再准备目标文件元素，调用映射把字典序列化写入文件。写入是只读操作，字典的释放责任不随之转移；文件元素按其自身内容用ZeroElementFunction解除。关于字典的完整操作链，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
