# LogoutCoreKRSDictionaries

***

映射LogoutCoreKRSDictionaries接受超索引集合（SuperIndexSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域，定义为：

```C++
Map LogoutCoreKRSDictionaries(&SuperIndexSet, &CoreKRSDictionaries, LogoutCoreKRSDictionariesFunction);
```

超索引字典注销映射（LogoutCoreKRSDictionaries）以定义域元素携带的超索引为检索信息，在值域字典中按超索引匹配对应登记项，释放该项登记的超索引数据，留下一个空位。若字典中不存在该超索引，抛异常（未登记）。注销只腾空登记项，**不缩减末尾标志**（[CoreKRSD_End](CoreKRSDictionaries_Struct.md) 仍计原登记数），空位交由[DefragmentCoreKRSDictionaries](DefragmentCoreKRSDictionaries.md)归拢。

头文件中本映射函数的定义域形参写作 `Doamin`，为原设计稿的历史拼写，按原文保留；语义即定义域（Domain）。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);

Element SuperIndexElement;
// SuperIndexElement 为已登记的超索引

LoginCoreKRSDictionariesFunction(SuperIndexElement, Dictionaries);
LogoutCoreKRSDictionariesFunction(SuperIndexElement, Dictionaries);
// Dictionaries 中该项留下空位，末尾标志不变

DefragmentCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
```

案例解释：注销以超索引元素为定义域、字典为值域，把字典中该超索引的登记项释放为空位；空位由排序沉向末端，或由[DefragmentCoreKRSDictionaries](DefragmentCoreKRSDictionaries.md)一次性压缩并回收多余页表。注销只释放登记数据，不动字典本身，使用完毕仍须[ReleaseCoreDictionaries](ReleaseCoreDictionaries.md)释放整个字典。检索、读取与释放的完整流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
