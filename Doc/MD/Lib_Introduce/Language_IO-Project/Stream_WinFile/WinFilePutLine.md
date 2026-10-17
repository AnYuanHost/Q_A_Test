# WinFilePutLine

***

映射WinFilePutLine接受空元素集合（NullElementSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map WinFilePutLine(&NullElementSet, &FstreamSet, WinFilePutLineFunction);
```

Windows 文件存入换行映射（WinFilePutLine）向值域文件元素的当前写入位置插入一个换行符 '\n'，文件写入位置随之推进一个字节。定义域不参与运算，调用时传 EmptyElement；文件必须以可写模式打开。

该映射只写这一个字符，不携带地址信息，也不改变已写入内容；读取侧以提取运算符读取时换行符按空白跳过，因此换行只影响文本的可读排布，不参与数值与字符串的提取边界。

***

## 案例：

```C++
Element FstreamElement;
NewFstreamFunction(EmptyElement, FstreamElement);

// Initialize Fstream Element by OpenFstreamByPara with std::ios::out,
// the complete sequence is shown in the case of WinFilePutUInt

Element StringElement;
NewStringFunction(EmptyElement, StringElement);
GetStringElement(StringElement) = "Data";

WinFilePutStringFunction(StringElement, FstreamElement);
WinFilePutLineFunction(EmptyElement, FstreamElement);

CloseFstreamFunction(EmptyElement, FstreamElement);
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，文件元素FstreamElement按WinFilePutUInt案例中的有参打开序列以 std::ios::out 打开，先用[WinFilePutString](WinFilePutString.md)写出文本 "Data"，再调用WinFilePutLine在其后补一个换行符，文件中得到 "Data\n"。关闭与释放成对执行，最后释放字符串元素。整行文本一次性写出（文本与换行不分两步）的做法，跳转至[WinFilePutAllString](WinFilePutAllString.md)。
