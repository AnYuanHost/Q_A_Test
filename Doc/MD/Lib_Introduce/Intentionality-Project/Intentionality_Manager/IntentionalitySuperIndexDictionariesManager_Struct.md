# IntentionalitySuperIndexDictionariesManager_Struct

***

命名空间IntentionalitySuperIndexDictionariesManager_Struct定义了意向性超索引字典管理器的结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ISIDM_Number | 0 | 字典编号 |
| ISIDM_Order | 1 | 字典序 |

结构说明：管理器元素共 2 个位置，整体作为按编号管理多本字典的索引结构使用，通过宏GetEleOrder(元素, 序号) 访问各位置。位置 0 持有字典编号，用于在多本字典之间定位；位置 1 持有字典序，用于对编号顺序进行组织。本命名空间常量的引用写法为IntentionalitySuperIndexDictionariesManager_Struct::ISIDM_Number。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexDictionariesManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

Element NumberElement;
CopyElementFunction(GetEleOrder(ManagerElement, IntentionalitySuperIndexDictionariesManager_Struct::ISIDM_Number), NumberElement);

Element OrderElement;
CopyElementFunction(GetEleOrder(ManagerElement, IntentionalitySuperIndexDictionariesManager_Struct::ISIDM_Order), OrderElement);

// Use NumberElement and OrderElement

ZeroElementFunction(EmptyElement, OrderElement);
ZeroElementFunction(EmptyElement, NumberElement);
ReleaseIntentionalitySuperIndexDictionariesManagerFunction(EmptyElement, ManagerElement);
```

案例解释：通过宏GetEleOrder取出两个位置上的元素，即可分别读到管理器的字典编号与字典序；位置号一律引用本命名空间常量，不手写 0 与 1。管理器的构造与释放由[NewIntentionalitySuperIndexDictionariesManager](NewIntentionalitySuperIndexDictionariesManager.md)与[ReleaseIntentionalitySuperIndexDictionariesManager](ReleaseIntentionalitySuperIndexDictionariesManager.md)成对完成。
