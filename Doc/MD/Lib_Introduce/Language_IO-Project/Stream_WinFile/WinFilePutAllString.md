# WinFilePutAllString

***

映射WinFilePutAllString接受元素序集合（ElementOrderSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map WinFilePutAllString(&ElementOrderSet, &FstreamSet, WinFilePutAllStringFunction);
```

Windows 文件存入全量字符串映射（WinFilePutAllString）遍历定义域元素序的每一个位置（位置个数为 Domain.Size / sizeof(Element)，即宏 GetEleOrderSize 的取值），对每个位置上的元素依次执行[WinFilePutString](WinFilePutString.md)写出文本、[WinFilePutLine](WinFilePutLine.md)写出换行，文件中因此得到每行一个字符串的排布，文件写入位置推进到最后一行换行之后。

本映射只写字符串与换行，不写出元素序的元素个数；而读取侧[WinFileGetAllString](WinFileGetAllString.md)会先从文件中读一个无符号整型个数。两者配套使用时，必须在调用本映射之前先用[WinFilePutUInt](WinFilePutUInt.md)把元素个数写入文件，否则读取侧会把首个字符串的前几个字符当作个数解析。定义域的每个位置必须是字符串元素，非字符串元素按 std::string 取内容会读出无关字节。

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
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 1));
ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 0));
ReleaseElementFunction(EmptyElement, ParaPair);
ReleaseStringFunction(EmptyElement, GetEleOrder(OrderElement, 1));
ReleaseStringFunction(EmptyElement, GetEleOrder(OrderElement, 0));
ReleaseElementFunction(EmptyElement, OrderElement);
ReleaseElementFunction(EmptyElement, CountElement);
ReleaseElementFunction(EmptyElement, StreamElement);
ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，构造文件元素FstreamElement，地址由字符串元素StringElement经StringToStream生成流元素StreamElement，与模式无符号元素ModeElement（值为 std::ios::out）一起以 `&=` 移交进序偶ParaPair，交由有参打开映射OpenFstreamByPara打开文件。用无符号元素CountElement取值 2，经UIntNewElementOrderFunction构造容纳 2 个位置的元素序OrderElement，两个位置各构造字符串元素并置内容 "First" 与 "Second"。先调用WinFilePutUInt写出个数 2，再调用WinFilePutAllString写出两行文本，文件中得到 "2First\nSecond\n"——个数必须先写，读取侧WinFileGetAllString正是按它确定要构造多少个字符串位置。使用完毕先关闭CloseFstream再释放ReleaseFstream（关闭与释放成对），随后依次释放序偶两个位置与序偶本身、元素序的两个字符串与元素序空间、个数元素、流元素与地址字符串：每个构造出来的空间都有唯一一次释放，源元素经 `&=` 移交后为空，不再重复释放。读取侧的对应案例，跳转至[WinFileGetAllString](WinFileGetAllString.md)。
