# WinFileGetAllString

***

映射WinFileGetAllString接受文件集合（FstreamSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map WinFileGetAllString(&FstreamSet, &NullElementSet, WinFileGetAllStringFunction);
```

Windows 文件获取全量字符串映射（WinFileGetAllString）分三步完成整批读取：先用[WinFileGetUInt](WinFileGetUInt.md)从定义域文件元素中读出一个无符号整型个数 N；再按 N 在值域元素上经UIntNewElementOrderFunction构造容纳 N 个位置的元素序；随后逐位置构造字符串元素并用[WinFileGetString](WinFileGetString.md)读入一个文本。调用结束后值域元素是元素序集合（ElementOrderSet）的元素，各位置为字符串元素。

使用本映射需满足三条前提：文件已打开且当前位置起是一个无符号整型的文本个数（配套写出见[WinFilePutAllString](WinFilePutAllString.md)，其前必须先用[WinFilePutUInt](WinFilePutUInt.md)写出个数）；值域元素必须是尚未持有存储空间的空元素，否则覆盖其空间会造成原有内容无法回收；N 必须与文件中实际跟随的字符串个数一致，个数偏大时超出部分的字符串提取会失败并保持空串。

***

## 案例：

```C++
Element FstreamElement;
NewFstreamFunction(EmptyElement, FstreamElement);

Element StringElement;
NewStringFunction(EmptyElement, StringElement);
GetStringElement(StringElement) = "Test.txt";

Element StreamElement;
StringToStreamFunction(StringElement, StreamElement);

Element ModeElement;
NewUIntElementFunction(EmptyElement, ModeElement);
GetUIntElement(ModeElement) = std::ios::out;

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);
GetEleOrder(ParaPair, 0) &= StreamElement;
GetEleOrder(ParaPair, 1) &= ModeElement;
OpenFstreamByParaFunction(ParaPair, FstreamElement);

Element CountElement;
NewUIntElementFunction(EmptyElement, CountElement);
GetUIntElement(CountElement) = 2;

Element OrderElement;
UIntNewElementOrderFunction(CountElement, OrderElement);

NewStringFunction(EmptyElement, GetEleOrder(OrderElement, 0));
GetStringElement(GetEleOrder(OrderElement, 0)) = "First";

NewStringFunction(EmptyElement, GetEleOrder(OrderElement, 1));
GetStringElement(GetEleOrder(OrderElement, 1)) = "Second";

WinFilePutUIntFunction(CountElement, FstreamElement);
WinFilePutAllStringFunction(OrderElement, FstreamElement);

CloseFstreamFunction(EmptyElement, FstreamElement);

StringToStreamFunction(StringElement, StreamElement);
OpenFstreamFunction(StreamElement, FstreamElement);

Element ReadOrderElement;
WinFileGetAllStringFunction(FstreamElement, ReadOrderElement);

// GetEleOrder(ReadOrderElement, 0) holds "First",
// GetEleOrder(ReadOrderElement, 1) holds "Second"

CloseFstreamFunction(EmptyElement, FstreamElement);
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseStringFunction(EmptyElement, GetEleOrder(ReadOrderElement, 1));
ReleaseStringFunction(EmptyElement, GetEleOrder(ReadOrderElement, 0));
ReleaseElementFunction(EmptyElement, ReadOrderElement);

ReleaseStringFunction(EmptyElement, GetEleOrder(OrderElement, 1));
ReleaseStringFunction(EmptyElement, GetEleOrder(OrderElement, 0));
ReleaseElementFunction(EmptyElement, OrderElement);
ReleaseElementFunction(EmptyElement, CountElement);

ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 1));
ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 0));
ReleaseElementFunction(EmptyElement, ParaPair);
ReleaseElementFunction(EmptyElement, StreamElement);
ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，先以 std::ios::out 打开文件元素FstreamElement，构造 2 个位置的字符串元素序并用WinFilePutUInt写出个数 2、用WinFilePutAllString写出两行文本，文件内容为 "2First\nSecond\n"，随后关闭文件。重新以OpenFstream按读方式打开同一地址，调用WinFileGetAllString：它先读出个数 2，构造 2 个位置的元素序ReadOrderElement，再逐位置读入 "First" 与 "Second"。读取完毕先关闭再释放文件元素；结果元素序的两个字符串位置先各自ReleaseString，再ReleaseElement释放元素序本身，写出侧的元素序、个数元素同法释放，最后释放序偶两侧、序偶本身、流元素与地址字符串——每块空间只释放一次，`&=` 移交过的源元素已为空，不再释放。整批读写共用同一地址与同一个数格式，个数、行数、释放三层必须同时对齐。
