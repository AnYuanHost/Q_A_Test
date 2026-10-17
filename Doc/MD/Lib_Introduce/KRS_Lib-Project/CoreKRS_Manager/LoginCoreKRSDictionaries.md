# LoginCoreKRSDictionaries

***

映射LoginCoreKRSDictionaries接受超索引集合（SuperIndexSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域，定义为：

```C++
Map LoginCoreKRSDictionaries(&SuperIndexSet, &CoreKRSDictionaries, LoginCoreKRSDictionariesFunction);
```

超索引字典登记映射（LoginCoreKRSDictionaries）把定义域元素携带的超索引深拷贝登记到值域字典末尾，并递增末尾标志。登记前置检查：以超索引为检索信息在字典中匹配，若已存在同名超索引则抛异常（重复登记）。登记表容量不足（`GetEleOrderSize(登记表) == 末尾 / 页容量` 且 `末尾 % 页容量 == 0`）时，按扩容量（[CoreKRSD_ExpandSize](CoreKRSDictionaries_Struct.md)）新建页表、把既有登记项转交搬入并补齐空项，再接纳新登记。登记完成后自动调用[SortCoreKRSDictionaries](SortCoreKRSDictionaries.md)维持排序。

登记项的位置由两级下标定位：页号 `末尾 / 页容量`、页内偏移 `(末尾 % 页容量) * CoreKRSD_OrderSize + CoreKRSD_SuperIndex`。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);

Element SuperIndexElement;
// SuperIndexElement 为已登记的超索引

LoginCoreKRSDictionariesFunction(SuperIndexElement, Dictionaries);
// Dictionaries 末尾新增一项，登记该超索引

LogoutCoreKRSDictionariesFunction(SuperIndexElement, Dictionaries);
ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
```

案例解释：在已构造的字典Dictionaries上，以超索引元素SuperIndexElement为定义域调用LoginCoreKRSDictionariesFunction，把超索引深拷贝进字典末尾登记项；深拷贝意味着来源超索引元素保持可用，登记项与之互不影响。对同一超索引重复登记会抛异常，须先由[LogoutCoreKRSDictionaries](LogoutCoreKRSDictionaries.md)注销。注销、压缩与释放的完整流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
