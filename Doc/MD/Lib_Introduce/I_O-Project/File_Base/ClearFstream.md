# ClearFstream

***

映射ClearFstream接受空元素集合（NullElementSet）为定义域，流元素集合（StreamSet）为值域，定义如下：

```C++
Map ClearFstream(&NullElementSet, &StreamSet, ClearFstreamFunction);
```

清理文件映射（ClearFstream）将值域流元素代表的地址上的文件中的信息全部清除。

***

## 案例：

```C++
Element StreamElement;

Element StringElement;
NewStringFunction(EmptyElement, StringElement);

std::cin >> GetStringElement(StringElement);

StringToStreamFunction(StringElement, StreamElement);

ClearFstreamFunction(EmptyElement, StreamElement);

ReleaseStringFunction(EmptyElement, StringElement);
```

在案例代码中，打开输入地址对应的文件后，调用ClearFstream映射清除文件中的信息。