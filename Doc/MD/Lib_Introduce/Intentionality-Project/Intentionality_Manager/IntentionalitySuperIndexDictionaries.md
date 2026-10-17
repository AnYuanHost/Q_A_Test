# IntentionalitySuperIndexDictionaries

***

集合IntentionalitySuperIndexDictionaries为所有意向性超索引字典元素的集合，定义为：

```C++
Set IntentionalitySuperIndexDictionaries(EmptyElement, IntentionalitySuperIndexDictionariesTest);
```

意向性超索引字典集合（IntentionalitySuperIndexDictionaries）由所有意向性超索引字典元素组成，用于超索引与序的对应登记、系统级检索与序列化相关操作。字典是超索引与序的对应表，支撑系统级检索。字典元素共 2 个位置，通过宏GetEleOrder(元素, 序号) 读取，各位置含义（位置常量见[IntentionalitySuperIndexDictionaries_Struct](IntentionalitySuperIndexDictionaries_Struct.md)）如下：

* 序号 0：ISID_SuperIndex，超索引；
* 序号 1：ISID_Order，序。

字典由[NewIntentionalitySuperIndexDictionaries](NewIntentionalitySuperIndexDictionaries.md)或[CreateSuperIndexIntentionalityDictionaries](CreateSuperIndexIntentionalityDictionaries.md)构造，由[ReleaseIntentionalitySuperIndexDictionaries](ReleaseIntentionalitySuperIndexDictionaries.md)释放，两者成对。

***

## 案例：

```C++
Element DictionariesElement;

NewIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);

// DictionariesElement now belongs to IntentionalitySuperIndexDictionariesSet

ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：构造出的DictionariesElement即属于意向性超索引字典集合，可继续接受设置超索引、设置序、系统登录与登出、成员测试、信息互转等映射的操作，使用完毕由ReleaseIntentionalitySuperIndexDictionaries成对释放。关于字典的完整操作链，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
