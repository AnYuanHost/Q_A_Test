# SortCoreKRSDictionaries

***

映射SortCoreKRSDictionaries接受空元素集合（NullElementSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域，定义为：

```C++
Map SortCoreKRSDictionaries(&NullElementSet, &CoreKRSDictionaries, SortCoreKRSDictionariesFunction);
```

超索引字典排序映射（SortCoreKRSDictionaries）对值域字典的前末尾标志（[CoreKRSD_End](CoreKRSDictionaries_Struct.md)）个登记项做冒泡排序：**空位视为最小**沉向前端，实有登记项按超索引升序排在后段。比较由超索引小于判定 `SuperIndexLessFunction`（参数为序偶）完成，交换由 `SwapElementFunction` 完成；一趟无交换即提前结束。

排序只重排登记项次序，不改末尾标志。登记映射[LoginCoreKRSDictionaries](LoginCoreKRSDictionaries.md)在每次登记后自动调用本映射。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);

// 登录若干超索引

SortCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
// 实有登记项按超索引升序排列，空位沉向前端

ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
```

案例解释：定义域为空元素，值域为待排序的字典Dictionaries。排序把空位集中到前段、实有项按超索引升序排在后段，便于压缩（[DefragmentCoreKRSDictionaries](DefragmentCoreKRSDictionaries.md)）与转数据（[CoreKRSDictionariesToData](CoreKRSDictionariesToData.md)）。排序不改变登记内容与末尾标志。超索引字典的完整流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
