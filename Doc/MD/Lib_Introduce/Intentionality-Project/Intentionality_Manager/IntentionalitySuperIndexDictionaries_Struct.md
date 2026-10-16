# IntentionalitySuperIndexDictionaries_Struct

***

命名空间IntentionalitySuperIndexDictionaries_Struct定义了意向性超索引字典的结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ISID_SuperIndex | 0 | 超索引 |
| ISID_Order | 1 | 序 |

结构说明：字典元素共 2 个位置，整体作为超索引与序的对应表使用，通过宏GetEleOrder(元素, 序号) 访问各位置。位置 0 持有该字典条目的超索引（SuperIndex），位置 1 持有与之对应的序信息（IntentionalitySuperIndexOrder）。本命名空间常量的引用写法为IntentionalitySuperIndexDictionaries_Struct::ISID_SuperIndex。

***

## 案例：

```C++
Element DictionariesElement;

NewIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);

// Initialize DictionariesElement

Element SuperIndexElement;
CopyElementFunction(GetEleOrder(DictionariesElement, IntentionalitySuperIndexDictionaries_Struct::ISID_SuperIndex), SuperIndexElement);

Element OrderElement;
CopyElementFunction(GetEleOrder(DictionariesElement, IntentionalitySuperIndexDictionaries_Struct::ISID_Order), OrderElement);

// Use SuperIndexElement and OrderElement

ZeroElementFunction(EmptyElement, OrderElement);
ZeroElementFunction(EmptyElement, SuperIndexElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
```

案例解释：通过宏GetEleOrder取出两个位置上的元素，即可分别读到字典的超索引与序内容；位置号一律引用本命名空间常量，不手写 0 与 1。关于字典的完整用法，跳转至[意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md)。
