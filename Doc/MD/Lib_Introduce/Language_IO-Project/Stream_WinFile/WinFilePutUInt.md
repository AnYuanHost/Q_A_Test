# WinFilePutUInt

***

映射WinFilePutUInt接受无符号整型集合（UIntSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map WinFilePutUInt(&UIntSet, &FstreamSet, WinFilePutUIntFunction);
```

Windows 文件存入无符号整型映射（WinFilePutUInt）把定义域无符号整型元素的值以十进制文本形式插入到值域文件元素的当前写入位置，文件写入位置随之推进。写入的是数字字符本身，不附加前导空白，也不换行；需要分隔时配合[WinFilePutSpace](WinFilePutSpace.md)或[WinFilePutLine](WinFilePutLine.md)。

文件必须以可写模式打开（如 OpenFstreamByPara 取 std::ios::out），否则插入不会落到文件。该映射返回值恒为真，不报告写入是否成功。

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

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 3;

WinFilePutUIntFunction(UIntElement, FstreamElement);

CloseFstreamFunction(EmptyElement, FstreamElement);
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 1));
ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 0));
ReleaseElementFunction(EmptyElement, ParaPair);
ReleaseElementFunction(EmptyElement, UIntElement);
ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，文件元素FstreamElement以有参打开映射OpenFstreamByPara按 std::ios::out 打开：地址流元素StreamElement与模式无符号元素ModeElement经 `&=` 移交进序偶ParaPair后传入。构造无符号元素UIntElement并置值 3，WinFilePutUInt把 "3" 写入文件当前写入位置。使用完毕先关闭CloseFstream再释放ReleaseFstream（关闭与释放成对），随后依次释放序偶两个位置、序偶本身、无符号元素与字符串元素。读取侧的对称写法，跳转至[WinFileGetUInt](WinFileGetUInt.md)。
