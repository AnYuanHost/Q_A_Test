# ElementNameToSuperIndexRQ

***

映射ElementNameToSuperIndexRQ接受流元素集合（StreamSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ElementNameToSuperIndexRQ(&StreamSset, &NullElementSet, ElementNameToSuperIndexRQFunction);
```

元素名称转超索引映射（ElementNameToSuperIndexRQ）在静态库公开的映射表单中，按照名称搜索其对应的超索引信息，将其拷贝到值域空元素上。

***

## 案例

```C++
Element StringElement;
NewStringElementFunction(EmptyElement, StringElement);

Element StreamElement;

std::cin >> GetStringElement(StringElement);

StringToStreamFunction(StringElement, StreamElement);

Element SuperIndexElement;
Element MapElement;

ElementNameToSuperIndexRQFunction(StreamElement, SuperIndexElement);

SuperIndexToElementRQFunction(SuperIndexElement, MapElement);

// MapElement Execute

ZeroElementFunction(EmptyElement, MapElement);
ReleaseStringFunction(EmptyElement, StringElement);
```

在该案例中，补充了[案例](SuperIndexToElementRQ.md)中的初始化SuperIndex信息的部分。使用String元素获取输入流中的映射元素的名称，并在静态库映射表单中完成检索，获得对应的超索引信息。