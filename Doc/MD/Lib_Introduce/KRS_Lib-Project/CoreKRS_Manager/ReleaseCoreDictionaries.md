# ReleaseCoreDictionaries

***

映射ReleaseCoreDictionaries接受空元素集合（NullElementSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域，定义为：

```C++
Map ReleaseCoreDictionaries(&NullElementSet, &CoreKRSDictionaries, ReleaseCoreKRSDictionariesFunction);
```

释放超索引字典映射（ReleaseCoreDictionaries）释放值域字典的全部资源：逐项释放登记的超索引数据、逐页释放页表、释放参数结构 4 位与参数位置、最后释放字典元素本身，使值域元素脱离超索引字典集合。执行前先以判定函数 CoreKRSDictionariesTest 校验值域确为字典元素，非字典元素直接返回、不做释放。

本映射与[NewCoreKRSDictionaries](NewCoreKRSDictionaries.md)成对。映射名沿用历史命名（缺 `KRS`，实为 `CoreKRSDictionaries` 的释放映射），按原文保留；其函数名与实现分别为 `ReleaseCoreKRSDictionariesFunction` 与 `Map ReleaseCoreDictionaries`。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
// 登录若干超索引

ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
// Dictionaries 已脱离 CoreKRSDictionaries，可被复用

NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
```

案例解释：定义域为空元素，值域为待释放的字典Dictionaries。释放逐项、逐页回收资源，释放后元素不再属于超索引字典集合，可再次构造复用。若未先释放就直接令元素析构，只释放元素自身、不回收内部登记项与页表，造成泄漏。构造与释放成对使用；字典的登记与压缩流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
