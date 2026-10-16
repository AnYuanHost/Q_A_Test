# CoreKRSDictionaries

***

集合CoreKRSDictionaries为超索引字典元素的集合，定义为：

```C++
Set CoreKRSDictionaries(EmptyElement, CoreKRSDictionariesTest);
```

超索引字典（CoreKRSDictionaries）登记一组超索引，是核心KRS对象在装载期由知识库动态链接库导出的超索引清单在内存中的分页表。字典元素共 2 个位置，通过宏 GetEleOrder(元素, 序号) 读取，结构位置常量见命名空间 [CoreKRSDictionaries_Struct](CoreKRSDictionaries_Struct.md)，成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| CoreKRSD_Order | 0 | 登记表位置，分页登记超索引 |
| CoreKRSD_Parameter | 1 | 参数位置，登记页容量、末尾、扩容量、保留容量 |
| CoreKRSD_PageSize | 0 | 参数结构：页容量（每页登记项数） |
| CoreKRSD_End | 1 | 参数结构：末尾标志（已登记超索引数） |
| CoreKRSD_ExpandSize | 2 | 参数结构：扩容量（增页页数） |
| CoreKRSD_RetainSize | 3 | 参数结构：保留容量（压缩后最少保留页数） |
| CoreKRSD_OrderSize | 1 | 每项位置数量 |
| CoreKRSD_SuperIndex | 0 | 项内：超索引 |

登记表是分页阵列：第 `midI / CoreKRSD_PageSize` 页的第 `midI % CoreKRSD_PageSize` 项的第 CoreKRSD_SuperIndex 位登记一个超索引；每项位置数量为 CoreKRSD_OrderSize=1。页容量默认 16、末尾标志默认 0、扩容量默认 2、保留容量默认 3，由[新建超索引字典](NewCoreKRSDictionaries.md)设定。以本集合为值域的映射有：[NewCoreKRSDictionaries](NewCoreKRSDictionaries.md)（构造）、[LoginCoreKRSDictionaries](LoginCoreKRSDictionaries.md)（登记）、[LogoutCoreKRSDictionaries](LogoutCoreKRSDictionaries.md)（注销）、[SortCoreKRSDictionaries](SortCoreKRSDictionaries.md)（排序）、[DefragmentCoreKRSDictionaries](DefragmentCoreKRSDictionaries.md)（压缩空位）、[DataToCoreKRSDictionaries](DataToCoreKRSDictionaries.md)（数据回填）、[ReleaseCoreDictionaries](ReleaseCoreDictionaries.md)（释放）；以本集合为定义域的有：[CoreKRSDictionariesToData](CoreKRSDictionariesToData.md)。

本集合的成员判定由判定函数 CoreKRSDictionariesTest 完成，判据为：元素序共 2 位；登记表与参数两位均为元素序；参数元素序共 4 位且四位均为无符号元素。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);

Element SuperIndexElement;
// SuperIndexElement 为已登记的超索引

LoginCoreKRSDictionariesFunction(SuperIndexElement, Dictionaries);
// Dictionaries 现在登记了该超索引

LogoutCoreKRSDictionariesFunction(SuperIndexElement, Dictionaries);

ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
```

案例解释：先由[NewCoreKRSDictionaries](NewCoreKRSDictionaries.md)构造空超索引字典，再以超索引元素为定义域、字典为值域调用[LoginCoreKRSDictionaries](LoginCoreKRSDictionaries.md)完成登记（重复登记同名超索引会抛异常）。注销以超索引为定义域、字典为值域，由[LogoutCoreKRSDictionaries](LogoutCoreKRSDictionaries.md)完成；使用完毕必须由[ReleaseCoreDictionaries](ReleaseCoreDictionaries.md)成对释放，否则登记项与页表泄漏。
