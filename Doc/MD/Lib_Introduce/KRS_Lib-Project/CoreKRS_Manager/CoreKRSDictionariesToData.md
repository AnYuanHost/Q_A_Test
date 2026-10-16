# CoreKRSDictionariesToData

***

映射CoreKRSDictionariesToData接受超索引字典集合（CoreKRSDictionaries）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map CoreKRSDictionariesToData(&CoreKRSDictionaries, &NullElementSet, CoreKRSDictionariesToDataFunction);
```

超索引字典转数据映射（CoreKRSDictionariesToData）把值域字典序列化为一段字节流写到值域元素上，供持久化或跨进程传递。流结构为：头部 4 个无符号整数 `[登记数, 页容量, 扩容量, 保留容量]`，随后逐项 `[数据长度, 超索引数据]`；空位（未登记项）跳过不计。

输出流写入值域元素键空间，调用方无需预先分配长度——映射按实际登记项计算总长并调整值域元素尺寸。

***

## 案例：

```C++
Element Dictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
// 登录若干超索引

Element DataStream;
CoreKRSDictionariesToDataFunction(Dictionaries, DataStream);
// DataStream 承载可持久化的字典字节流

Element NewDictionaries;
NewCoreKRSDictionariesFunction(EmptyElement, NewDictionaries);
DataToCoreKRSDictionariesFunction(DataStream, NewDictionaries);
// NewDictionaries 与原字典登记项一致

ReleaseElementFunction(EmptyElement, DataStream);
ReleaseCoreKRSDictionariesFunction(EmptyElement, Dictionaries);
ReleaseCoreKRSDictionariesFunction(EmptyElement, NewDictionaries);
```

案例解释：以字典Dictionaries为定义域、空元素DataStream为值域，CoreKRSDictionariesToDataFunction把登记的超索引序列化为字节流；由[DataToCoreKRSDictionaries](DataToCoreKRSDictionaries.md)回填得到内容等价的新字典。同一元素既作定义域又作值域会自毁，故须用不同元素。超索引字典的完整流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
