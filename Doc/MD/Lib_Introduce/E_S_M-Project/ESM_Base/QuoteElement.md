# QuoteElement

***

映射QuoteElement接受全集（UniversalSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

```C++
Map QuoteElement(&UniversalSet, &NullElementSet, QuoteElementFunction);
```

引用元素映射（CareElement）封装了元素的引用传递运算符，将定义域全集元素引用传递到值域空元素上。

***

## 案例：

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element TestElement;
        
QuoteElementFunction(UIntElement, TestElement);

TestElement |= UIntElement;
```

在案例代码中，构建并使用无符号整型元素UIntElement。映射QuoteElement将元素UIntElement转交到值域TestElement上，其等价于使用|=重载符号。

不同点在于在代码编写中，可以使用|=符号进行引用传递，但在虚拟机解释时，只能使用QuoteElement函数来完成操作。