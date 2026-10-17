# WinFileGetString

***

映射WinFileGetString接受文件集合（FstreamSet）为定义域，字符串集合（StringSet）为值域，定义为：

```C++
Map WinFileGetString(&FstreamSet, &StringSet, WinFilePutStringFunction);
```

Windows 文件获取字符串映射（WinFileGetString）的读取函数 WinFileGetStringFunction 用提取运算符从定义域文件元素中按文本格式读出一个字符串（跳过前导空白，读到空白字符为止），把文本写入值域字符串元素，文件读取位置随之推进到该字符串之后。

值域元素必须先由 NewStringFunction 构造出 std::string 对象；读到文件尾或剩余部分只有空白时提取失败，值域字符串保持调用前的内容，该函数返回值恒为真，不报告提取是否成功。

需要特别注意：库中映射对象 WinFileGetString 登记的真函数是 WinFilePutStringFunction（与头文件声明的读取函数 WinFileGetStringFunction 不同），按映射对象派发将执行写入而不是读取。读取字符串时应直接调用 WinFileGetStringFunction，此处保留库中的原始登记写法。

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

Element AimStringElement;
NewStringFunction(EmptyElement, AimStringElement);

WinFileGetStringFunction(FstreamElement, AimStringElement);

// GetStringElement(AimStringElement) holds the text read from the file

CloseFstreamFunction(EmptyElement, FstreamElement);
ReleaseFstreamFunction(EmptyElement, FstreamElement);

ReleaseStringFunction(EmptyElement, AimStringElement);
ReleaseElementFunction(EmptyElement, StreamElement);
ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，构造文件元素FstreamElement并以OpenFstream打开Test.txt，构造值域字符串元素AimStringElement。调用读取函数WinFileGetStringFunction把文件中以空白分隔的下一个字符串读入AimStringElement，读取位置推进到该字符串之后（其后的空白留待下一次读取跳过）。使用完毕先关闭CloseFstream再释放ReleaseFstream（关闭与释放成对），随后释放结果字符串、流元素与地址字符串。若改按映射对象WinFileGetString派发，实际执行的是写入函数，读取流程会把文件内容覆盖，务必直接调用WinFileGetStringFunction。写出侧的对称映射，跳转至[WinFilePutString](WinFilePutString.md)。
