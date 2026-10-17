# NewIntentionalitySuperIndexDictionariesManager

***

映射NewIntentionalitySuperIndexDictionariesManager接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalitySuperIndexDictionariesManager(&NullElementSet, &NullElementSet, NewIntentionalitySuperIndexDictionariesManagerFunction);
```

意向性超索引字典管理器新建映射（NewIntentionalitySuperIndexDictionariesManager）在值域空元素上构造一个空的意向性超索引字典管理器。构造完成后，值域元素即属于意向性超索引字典管理器集合（[IntentionalitySuperIndexDictionariesManager](IntentionalitySuperIndexDictionariesManager.md)），字典编号位置（ISIDM_Number）与字典序位置（ISIDM_Order）均为空，等待写入编号与序内容。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexDictionariesManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

ReleaseIntentionalitySuperIndexDictionariesManagerFunction(EmptyElement, ManagerElement);
```

案例解释：构造空元素ManagerElement，通过映射NewIntentionalitySuperIndexDictionariesManager在其上构造空管理器，随后即可按编号组织多本字典。使用完毕后，必须使用[ReleaseIntentionalitySuperIndexDictionariesManager](ReleaseIntentionalitySuperIndexDictionariesManager.md)成对释放；若跳过释放直接令元素析构，将造成管理器内部资源泄漏。
