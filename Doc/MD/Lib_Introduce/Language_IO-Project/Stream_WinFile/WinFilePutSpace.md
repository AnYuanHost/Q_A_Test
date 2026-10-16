# WinFilePutSpace

***

映射WinFilePutSpace接受空元素集合（NullElementSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map WinFilePutSpace(&NullElementSet, &FstreamSet, WinFilePutSpaceFunction);
```

Windows 文件存入空格映射（WinFilePutSpace）向值域文件元素的当前写入位置插入一个空格字符 ' '，文件写入位置随之推进一个字节。定义域不参与运算，调用时传 EmptyElement；文件必须以可写模式打开。

空格是提取运算符读取时的分隔符：本映射写出的空格会被[WinFileGetUInt](WinFileGetUInt.md)与[WinFileGetString](WinFileGetString.md)在读取时跳过，因此它只负责把并列的数值或字符串隔开，不参与内容本身。

***

## 案例：

```C++
Element FstreamElement;
NewFstreamFunction(EmptyElement, FstreamElement);

// Initialize Fstream Element by OpenFstreamByPara with std::ios::out,
// the complete sequence is shown in the case of WinFilePutUInt

Element UIntElement1;
NewUIntElementFunction(EmptyElement, UIntElement1);
GetUIntElement(UIntElement1) = 3;

Element UIntElement2;
NewUIntElementFunction(EmptyElement, UIntElement2);
GetUIntElement(UIntElement2) = 5;

WinFilePutUIntFunction(UIntElement1, FstreamElement);
WinFilePutSpaceFunction(EmptyElement, FstreamElement);
WinFilePutUIntFunction(UIntElement2, FstreamElement);

CloseFstreamFunction(EmptyElement, FstreamElement);
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseElementFunction(EmptyElement, UIntElement2);
ReleaseElementFunction(EmptyElement, UIntElement1);
```

在案例代码中，文件元素FstreamElement按WinFilePutUInt案例中的有参打开序列以 std::ios::out 打开，依次写出 3、空格、5，文件中得到 "3 5"。三个写入共用同一个当前写入位置，位置依次推进，因此顺序不可颠倒。使用完毕先关闭CloseFstream再释放ReleaseFstream（关闭与释放成对），最后释放两个无符号元素。连续写出多个数值的成组写法，跳转至[WinFilePutAllString](WinFilePutAllString.md)。
