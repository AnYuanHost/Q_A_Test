# DataToCoreKRSDictionaries

***

映射DataToCoreKRSDictionaries接受流集合（StreamSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域，定义为：

```C++
Map DataToCoreKRSDictionaries(&StreamSet, &CoreKRSDictionaries, DataToCoreKRSDictionariesFunction);
```

数据转超索引字典映射（DataToCoreKRSDictionaries）把定义域字节流（由[CoreKRSDictionariesToData](CoreKRSDictionariesToData.md)产生）回填到值域已构造的字典中：先读头部 4 个无符号整数恢复登记数、页容量、扩容量与保留容量，按 `登记数 / 页容量 + 扩容量` 建页，再逐项取回 `[数据长度, 超索引数据]` 写入对应登记项的位置。

回填要求值域字典已由[NewCoreKRSDictionaries](NewCoreKRSDictionaries.md)构造好；回填后登记项顺序与写入流时一致（写入流前通常已排序）。

***

## 案例：

```C++
Element DataStream;
// DataStream 为 CoreKRSDictionariesToData 产生的字节流

Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);

DataToCoreKRSDictionariesFunction(DataStream, Dictionaries);
// Dictionaries 恢复为流中登记的字典

ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
ReleaseElementFunction(EmptyElement, DataStream);
```

案例解释：以字节流DataStream为定义域、已构造的空字典Dictionaries为值域，DataToCoreKRSDictionariesFunction按头部参数重建页表并逐项取回超索引。回填不校验数据合法性，流损坏会得到错误登记；值域必须是已构造的字典元素。字典的持久化与恢复流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
