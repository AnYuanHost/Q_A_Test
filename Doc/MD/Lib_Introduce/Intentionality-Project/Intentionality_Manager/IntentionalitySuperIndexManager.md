# IntentionalitySuperIndexManager

***

集合IntentionalitySuperIndexManager为所有意向性超索引管理器元素的集合，定义为：

```C++
Set IntentionalitySuperIndexManager(EmptyElement, IntentionalitySuperIndexManagerTest);
```

意向性超索引管理器集合（IntentionalitySuperIndexManager）由所有意向性超索引管理器元素组成，以页（Page）为单位管理超索引的地址信息，支撑分配、检索与整理操作。结构说明：元素内含 2 个位置，位置 0 为页数（IntentionalitySuperIndexManager_Struct::ISIManager_PageNumber），位置 1 为页序（IntentionalitySuperIndexManager_Struct::ISIManager_PageOrder），通过宏GetEleOrder(元素, 序号) 读取；页序中每个页元素包含 ISIManager_PageSize=18 个条目，每个条目 4 个位置（超索引、页信息、空位数、分配数），结构位置常量见[IntentionalitySuperIndexManager_Struct](IntentionalitySuperIndexManager_Struct.md)。

管理器由[NewIntentionalitySuperIndexManager](NewIntentionalitySuperIndexManager.md)构造，由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放，两者成对；页内条目经[LoginPageIntentionalitySuperIndexManager](LoginPageIntentionalitySuperIndexManager.md)登录（分配）、经[LogoutPageIntentionalitySuperIndexManager](LogoutPageIntentionalitySuperIndexManager.md)登出（归还），超索引地址经[IntentionalitySuperIndexManagerSelect](IntentionalitySuperIndexManagerSelect.md)检索。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// ManagerElement now belongs to IntentionalitySuperIndexManagerSet

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：构造出的ManagerElement即属于意向性超索引管理器集合，可继续接受页登录、页登出、检索、合并与分段等映射的操作，使用完毕由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)成对释放。关于管理器的完整操作链，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
