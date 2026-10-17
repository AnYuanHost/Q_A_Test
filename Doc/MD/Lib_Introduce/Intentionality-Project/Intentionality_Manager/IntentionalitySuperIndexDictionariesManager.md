# IntentionalitySuperIndexDictionariesManager

***

集合IntentionalitySuperIndexDictionariesManager为所有意向性超索引字典管理器元素的集合，定义为：

```C++
Set IntentionalitySuperIndexDictionariesManager(EmptyElement, IntentionalitySuperIndexDictionariesManagerTest);
```

意向性超索引字典管理器集合（IntentionalitySuperIndexDictionariesManager）由所有意向性超索引字典管理器元素组成，用于按编号管理多本意向性超索引字典的相关操作。管理器元素共 2 个位置，通过宏GetEleOrder(元素, 序号) 读取，各位置含义（位置常量见[IntentionalitySuperIndexDictionariesManager_Struct](IntentionalitySuperIndexDictionariesManager_Struct.md)）如下：

* 序号 0：ISIDM_Number，字典编号；
* 序号 1：ISIDM_Order，字典序。

管理器由[NewIntentionalitySuperIndexDictionariesManager](NewIntentionalitySuperIndexDictionariesManager.md)构造，由[ReleaseIntentionalitySuperIndexDictionariesManager](ReleaseIntentionalitySuperIndexDictionariesManager.md)释放，两者成对；被管理的字典本体见[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexDictionariesManagerFunction(EmptyElement, ManagerElement);

// ManagerElement now belongs to IntentionalitySuperIndexDictionariesManagerSet

ReleaseIntentionalitySuperIndexDictionariesManagerFunction(EmptyElement, ManagerElement);
```

案例解释：构造出的ManagerElement即属于意向性超索引字典管理器集合，可继续按编号组织多本字典，使用完毕由ReleaseIntentionalitySuperIndexDictionariesManager成对释放；跳过释放直接析构宿主元素将造成编号与字典序结构的资源泄漏。关于字典与编号的配合用法，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
