# NewCoreKRSDictionaries

***

映射NewCoreKRSDictionaries接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewCoreKRSDictionaries(&NullElementSet, &NullElementSet, NewCoreKRSDictionariesFunction);
```

新建超索引字典映射（NewCoreKRSDictionaries）在值域空元素上构造一个超索引字典：建立 2 个顶层位置（登记表 [CoreKRSD_Order](CoreKRSDictionaries_Struct.md)、参数 [CoreKRSD_Parameter](CoreKRSDictionaries_Struct.md)），参数结构 4 位就位，登记表置空。参数取默认值：页容量 16、末尾标志 0、扩容量 2、保留容量 3。

构造完成后，值域元素即属于超索引字典集合（[CoreKRSDictionaries](CoreKRSDictionaries.md)），可接受超索引的登记（[LoginCoreKRSDictionaries](LoginCoreKRSDictionaries.md)），登记表在容量不足时按扩容量自动增页。

该映射与[ReleaseCoreDictionaries](ReleaseCoreDictionaries.md)成对：构造一次，使用完毕释放一次；对已构造的字典重复构造会覆盖原有位置内容并泄漏页表。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);

// Dictionaries now belongs to CoreKRSDictionaries
// 登记超索引：LoginCoreKRSDictionariesFunction

ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
```

案例解释：构造空元素Dictionaries，用NewCoreKRSDictionariesFunction在其上构造超索引字典，随后即可登记超索引。使用完毕必须由[ReleaseCoreDictionaries](ReleaseCoreDictionaries.md)成对释放；跳过释放直接令元素析构，会造成登记表页表与参数结构的资源泄漏。字典的登记、注销与压缩流程，见[超索引字典集合](CoreKRSDictionaries.md)。
