# WinFileGetUInt

***

映射WinFileGetUInt接受文件集合（FstreamSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map WinFileGetUInt(&FstreamSet, &UIntSet, WinFileGetUIntFunction);
```

Windows 文件获取无符号整型映射（WinFileGetUInt）用提取运算符从定义域文件元素中按文本格式读出一个无符号整型（跳过前导空白后读取连续数字），把数值写入值域无符号整型元素，文件读取位置随之推进。

文件必须已打开且处于可读状态；读到空白后的首个字符不是数字、或已到文件尾时，提取失败，值域元素保持调用前的值。该映射返回值恒为真，不报告提取是否成功，需要区分读取结果时应由调用方预先给值域一个可识别的初值再行判定。

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
OpenFstreamFunction(StreamElement, FstreamElement);

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 0;

WinFileGetUIntFunction(FstreamElement, UIntElement);

// GetUIntElement(UIntElement) holds the value read from the file

CloseFstreamFunction(EmptyElement, FstreamElement);
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseElementFunction(EmptyElement, UIntElement);
ReleaseElementFunction(EmptyElement, StreamElement);
ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，构造文件元素FstreamElement，地址由字符串元素StringElement经StringToStream生成流元素StreamElement，经打开文件映射OpenFstream打开Test.txt。构造无符号元素UIntElement并预置 0，调用WinFileGetUInt把文件中的文本数值读入其中；预置值使得提取失败时仍能看出本次没有读到数值。使用完毕先关闭CloseFstream再释放ReleaseFstream（关闭与释放成对），随后释放无符号元素、流元素与字符串元素。与之对称的文本数值写出，跳转至[WinFilePutUInt](WinFilePutUInt.md)。
