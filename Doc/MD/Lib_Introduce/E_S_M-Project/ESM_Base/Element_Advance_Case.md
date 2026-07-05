# 元素拓展操作

***

元素除了基本的构造、析构以及赋值操作外，还可以通过ESM_Base文件提供的一些映射方法来完成进阶的操作。这些操作包括：重置空间，释放，归零，交换，以及引用和转交传递映射。在本演示案例中，将会使用这些映射方法，来介绍如何在系统内核中实现元素操作。

***

## 简单结构与复杂结构

在开发中，元素可以分为简单结构和复杂结构两类，取决于在其内存空间下是否还有其他内存空间。例如UIntSet，BoolSet集合中的元素是简单结构。而像OrderedPairSet集合中的元素属于复杂结构，因为其提供了两个槽位可以装入两个其他的元素，有其他内存空间。为了方便管理，需要进行区分，以保证只适用于简单结构的映射方法不会滥用到复杂结构上。

例如CopyElement映射便只能在简单元素上进行操作。而当OrderedPair元素下的两个子元素都是简单结构时，便可以使用专门的序偶拷贝映射CopyOrderedPair来完成拷贝。

***

## 重分配映射 ResizeElement

ResizeElement可以在内核态中重新分配一个元素所占内存空间的大小。但是，需要注意使用规范，例如其只能作用于空元素。而在代码中，则等价于其new[]操作。例如以下两段代码在功能上是等价的。

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element AimElement;
GetUIntElement(UIntElement) = 5;
ResizeElemnentFunction(UIntElement, AimElement);
```

```C++
Element AimElement(5, new char[5]);
```

只是一般在代码中考虑模块封装的要求，此处并不调用元素的构造方法，而是使用标准的重分配函数来完成任务。

***

## 归零映射 ZeroElement

ZeroElement可以在内核态中将元素信息归零，一般在目标元素引用其他元素时，用于将其引用解除。在代码中，可以用引用零元素EmptyElement或者直接使用赋值的方式来完成归零。以下三段代码在功能上是等价的。

```C++
Element AimElement;

ZeroElementFunction(EmptyElement, AimElement);
```

```C++
Element AimElement;

AimElement |= EmptyElement;
```

```C++
Element AimElement;

AimElement = {0, nullptr};
```
***

## 引用和转交传递

因为在内核中，不能使用运算符，所以需要两个专门的映射来进行处理，也就是引用传递映射QuoteElement和转交传递映射CareElement。而在编写代码时，需要注意两种写法中操作元素的顺序。下面的代码是等价的：

```C++
Element Element1, Element2;
Element Element3, Element4;

Element1 |= Element2;
Element3 &= Element4;
```

```C++
Element Element1, Element2;
Element Element3, Element4;

QuoteElementFunction(Element2, Element1);
CareElementFunction(Element4, Element3);
```