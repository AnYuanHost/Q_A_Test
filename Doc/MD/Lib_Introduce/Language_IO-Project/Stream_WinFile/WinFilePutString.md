# WinFilePutString

***

映射WinFilePutString接受流集合（StreamSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map WinFilePutString(&StreamSet, &FstreamSet, WinFilePutStringFunction);
```

Windows 文件存入字符串映射（WinFilePutString）把定义域元素中 std::string 的文本插入到值域文件元素的当前写入位置，文件写入位置随之推进到文本之后。写入的是字符串内容本身，不附加换行，也不补结尾空字符；需要换行时配合[WinFilePutLine](WinFilePutLine.md)。

定义域登记为流集合（StreamSet，Stream_Base.h 中 StreamSet 即 UniversalSet 的宏别名，成员判定复用 UniversalSetTest，不作类型限制），但取内容走宏 GetStringElement，因此定义域元素必须实际是已由 NewStringFunction 构造的字符串元素；传入其他类型的元素会把不属于 std::string 的字节当作文本读出。文件必须以可写模式打开。

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

CloseFstreamFunction(EmptyElement, FstreamElement);
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，文件元素FstreamElement按WinFilePutUInt案例中的有参打开序列以 std::ios::out 打开，构造字符串元素StringElement并置内容 "Data"，WinFilePutString把该文本写入文件当前写入位置，写入位置推进 4 个字节。使用完毕先关闭CloseFstream再释放ReleaseFstream（关闭与释放成对），最后释放字符串元素（构造与释放成对）。与裸字节写入的区别在于：本映射只写可见文本、不写结尾空字符，而[PutStreamToFstream](../../I_O-Project/File_Base/PutElementToFstream.md)会把含结尾空字符的全部字节一并写入。有参打开的完整写法，跳转至[WinFilePutUInt](WinFilePutUInt.md)。
