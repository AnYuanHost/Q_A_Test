# DefragmentCoreKRSDictionaries

***

映射DefragmentCoreKRSDictionaries接受空元素集合（NullElementSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域，定义为：

```C++
Map DefragmentCoreKRSDictionaries(&NullElementSet, &CoreKRSDictionaries, DefragmentCoreKRSDictionariesFunction);
```

超索引字典压缩映射（DefragmentCoreKRSDictionaries）把值域字典登记表中的实有登记项**前移**、空位（注销留下的空登记项）沉向末端并逐位释放，然后把末尾标志（[CoreKRSD_End](CoreKRSDictionaries_Struct.md)）改写为压缩后的实有项数。压缩后按保留容量（[CoreKRSD_RetainSize](CoreKRSDictionaries_Struct.md)）回收多余页表：保留页数取 `实有项数 / 页容量 + 保留容量`，超出部分的页表逐页释放并转交重装。

若末尾标志为 0 或登记表为空页（页数为 0），本映射直接返回、不做改动。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);

// 登记若干超索引后注销其中部分，留下空位

DefragmentCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
// 实有登记项前移，空位释放，末尾标志改写为实有项数

ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
```

案例解释：定义域为空元素（以 EmptyElement 充当），值域为待压缩的字典Dictionaries。压缩把非空登记项依次前移，尾部腾空位置逐一释放，并回收多余页表；此后登记仍按末尾标志追加。压缩不改变登记的超索引内容，只归拢空位。登记、注销与释放的完整流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
