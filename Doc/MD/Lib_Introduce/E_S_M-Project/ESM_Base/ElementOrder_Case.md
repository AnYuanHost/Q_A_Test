# 操作元素序偶，序列

***

元素序偶和序列是同时操作多个元素的基础，在使用复杂的映射时，必须对元素进行组合封装，本文将会演示如何在代码中操作并使用元素序偶与元素序列。

## 元素序偶和元素序列

在很多使用场景中，映射方法会接受元素序偶元素作为定义域元素或者值域元素。在本文的案例中，将会使用元素序偶方法来完成对元素序列的操作。

***

### 1. 准备工作

本节需要完成所有使用到的元素的定义和初始化，包括元素序偶元素（ParaPair），无符号整型元素（UIntElement, Address），待操作的元素序列（ElementOrder），以及一些中间元素（MidUInt）。在准备工作中，创建一个长度为5的元素序列，并在序列的每一个槽位上都建立一个无符号整型元素。

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element Address;
NewUIntElementFunction(EmptyElement, Address);

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);

Element ElementOrder;
GetUIntElement(UIntElement) = 5;
UIntNewElementOrderFunction(UIntElement, ElementOrder);

for(unsigned int midI = 0; midI < 5; midI++){

    NewUIntElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));

}

Element MidUInt;
```

***

### 2. 构造序偶进行参数传递

首先将地址无符号整型元素赋值为0，准备操作元素序列的第0号槽位。

```C++
GetUIntElement(Address) = 0;
```

使用宏GetEleOrder或者使用函数将待存入的元素的引入存入到序偶的对应位置进行操作。

```C++
GetEleOrder(ParaPair, 0) |= Address;
```

这个写法在功能实现上等价于：

```C++
PutPairFirstElementFunction(Element(Address), ParaPair);
```

第二种写法会调用Element.Element(const Element& Ele)创建一个中间元素，该构造函数等价于引用传递。逻辑等同于创建一个临时的元素，目标元素（Address）的引用信息先转移到该中间元素上，再通过函数的转交传递放置到序偶的对应位置。

该写法的另外一个好处在于，其指明了如何在系统内核中完成同样的功能，而不需要在解释器中实现运算符。

这个写法基本等价于：

```C++
Element MidAddress;
MidAddress |= Address;

PutPairFirstElementFunction(MidAddress, ParaPair);
```

区别在于这里显性的定义了一个中间元素MidAddress，该元素的生命周期相对上一节的隐式调用更长。

元素序偶ParaPair的第二个元素，引用元素序偶元素。此时，元素序偶的格式便符合映射UIntGetElementOrder的定义域要求。同时也符合映射UIntGetQuoteElementOrder的定义域要求。便可以通过下面的代码完成对元素序列中指定地址的元素的获取。

```C++
GetEleOrder(ParaPair, 1) |= ElementOrder;

UIntGetElementOrdderFunction(ParaPair, MidUInt);
```

调用获取元素的映射方法，优势在于这些代码可以递交到系统内核中解释进行。而在代码中，则可以直接使用宏GetEleOrder来完成这个任务，例如该方法便等价于：

```C++
MidUInt &= GetEleOrder(ElementOrder, GetUIntElement(Address));
```

相对应的，映射方法UIntGetQuoteElementOrder也可以通过|=运算符来完成:

```C++
UIntGetQuoteOrderFunction(ParaPair, MidUInt);
```

等价于：

```C++
MidUInt |= GetEleOrder(ElementOrder, GetUIntElement(Address));
```

使用引用的方法获取序列中的元素，需要牢记这只是弱引用，一旦原元素破坏，那么引用便会失效。但是，只要元素本身的内存空间不被释放，那么便可以随便操作。

在获取元素后便可以对该元素进行操作，这里将元素MidUInt的值设置为5：

```C++
GetUIntElement(MidUInt) = 5;
```

***

### 3. 操作的收尾，放回或解除引用

在操作完成后，需要按照获取的方式对元素进行收尾。如果是使用UIntGetElementOrder映射获取，则需要将原元素按照原地址放回到原本的槽位。而如果是获取的引用，那么需要将引用链接销毁，将引用元素赋值为空元素，以避免调用析构函数时会重复释放元素。

调用的是转交传递的方法，那么需要为序偶元素赋予新的信息，以符合放回的映射方法的要求。例如在本节案例中，使用UIntPutElementOrder映射方法将取出的元素再放回去。而UIntPutElemeentOrder映射对于定义域的要求则对如何构造其参数，提出了新的要求。因为存入时必须是一个确切的元素，而不是一个元素的引用，所以在规范上便不允许使用临时变量元素创建引用。所以在放回时，只能考虑这些逻辑上是转交传递的思路。

```C++
GetEleOrder(ParaPair, 0) &= MidUInt;
GetEleOrder(ParaPair, 1) |= Address;
UIntPutElementOrderFunction(ParaPair, ElementOrder);
```

而对于引用的案例，则需要使用ZeroElement来解除引用链接。因为元素本身仍然在序列中，被拿出来的只是引用，那么解除引用就可以了。所以对于收尾工作，只要避免内存管理出现问题即可。

```C++
ZeroElementFunction(EmptyElement, MidUInt);
```

### 4. 序偶的整个过程

在整个代码的运行中，序偶仅仅为元素提供了一个序列的空间，参数在这里中转。松散的分散在各处的元素通过序偶变得有序，可以作为复杂映射对于定义域或者值域参数的要求。而在实际实现的序偶元素的空间中，元素并不能永远停留。一般而言，引用在传递的过程中只需要归零来解除引用，而不需要进行额外的内存管理。所以只要正常使用序偶，那便不需要考虑如何释放。在使用结束时，序偶元素被直接释放，而只要其内部不会错误的出现一些被转交传递过来的元素，那么便不会丢失内存空间。


### 5. 收尾工作

在本案例中，中间元素MidUInt已经正常完成操作，其等同于空元素EmptyElement。而其余的元素都属于简单结构的元素，可以直接在代码结束时自动调用析构函数来回收。元素序列元素ElementOrder本身是简单结构，但是其内部的元素需要被释放。所以需要专门进行释放：

```C++
for(unsigned int midI; midI < 5; midI++){
    ReleaseElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));
}
```

### 6. 案例代码

在案例代码中，使用If_Select的值来选择是使用转交传递还是引用传递。

```C++
#define If_Care 0
#define If_Quote 1

#define If_Select If_Care

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element Address;
NewUIntElementFunction(EmptyElement, Address);

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);

Element ElementOrder;
GetUIntElement(UIntElement) = 5;
UIntNewElementOrderFunction(UIntElement, ElementOrder);

for(unsigned int midI = 0; midI < 5; midI++){

    NewUIntElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));

}

Element MidUInt;

#if If_Select == If_Care

GetEleOrder(ParaPair, 0) |= Address;
GetEleOrder(ParaPair, 1) |= ElementOrder;

UIntGetElementOrdderFunction(ParaPair, MidUInt);

#else

GetEleOrder(ParaPair, 0) |= Address;
GetEleOrder(ParaPair, 1) |= ElementOrder;

UIntGetQuoteElementOrderFunction(ParaPair, MidUInt);

#endif

GetUIntElement(MidUInt) == 5;

#if If_Select == If_Care

GetEleOrder(ParaPair, 0) &= MidUInt;
GetEleOrder(ParaPair, 1) |= Address;

UIntPutElementOrdderFunction(ParaPair, MidUInt);

#else

ZeroElementFunction(EmptyElement, MidUInt);

#endif

for(unsigned int midI = 0; midI < 5; midI++){
    ReleaseElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));
}
```

## 元素序列的进阶操作

在开放的指令中，元素序列的进阶操作包括元素的元素序列化映射以及合并元素序列操作。这两个操作可以补充元素序列操作的映射指令，帮助完成元素集合的操作。在本节案例中，将构建元素序列，并为其添加一个新的槽位。在实际使用中，可以用于构建异常信息树等操作。

### 1. 准备工作

本节需要初始化一个无符号整型元素（UIntElement），一个长度为5的元素序列（ElementOrder），以及一个用于存放目标元素序列的元素（AimOrder）。

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element ElementOrder;
GetUIntElement(UIntElement) = 5;
UIntNewElementOrderFunction(UIntElement, ElementOrder);

for(midI = 0; midI < 5; midI++){
    NewUIntElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));
}

Element AimOrder;
```

### 2. 元素的序列化

想要将该元素缀加到元素序列的后面，需要先将原本的元素序列化，然后再将两个序列进行合并。在本部分的设计逻辑中，不设计元素和序列的直接操作，而是使用一次序列化映射，将元素拉入到序列操作的范畴中。

在代码中，直接使用序列化映射ElementOrderation将原元素序列化。即：

```C++
ElementOrderationFunction(EmptyElement, UIntElement);
```

但是需要注意另外一点，序列化操作将原本的元素封装到一个一元序列中，而想要取回则必须使用指定地址的序列元素获取方法，例如使用UIntGetElementOrder映射来获取元素。

### 3. 序列拼接

在完成序列化的操作后，原本的无符号整型元素便可以作为序列参与操作。这里使用ElementOrderMerge映射来完成序列的合并，按照映射对于定义域的要求将原序列置于序偶元素ParaPair的对应位置上。

```C++
GetEleOrder(ParaPair, 0) &= ElementOrder;
GetEleOrder(ParaPair, 1) &= UIntElement;
ElementOrderMergeFunction(ParaPair, AimOrder);
```

此时原本的两个序列已经完成合并，两个原本的内存空间已经释放，所有信息均转移到目标的元素序列元素AimOrder中。

### 4. 收尾工作

因为完成拼接后，目标元素序列元素AimOrder的长度是原序列的长度相加之和，所以在收尾工作中，需要释放6个元素。

```C++
for(unsigned int midI = 0; midI < 5; midI++){
    ReleaseElementFunnction(EmptyElement, GetEleOrder(AimOrder, midI));
}
```

因为在整个流程中，原本的元素序列的空间均已经合并，所以在最后只需要在AimOrder中释放空间即可。

### 5. 案例代码

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element ElementOrder;
GetUIntElement(UIntElement) = 5;
UIntNewElementOrderFunction(UIntElement, ElementOrder);

for(midI = 0; midI < 5; midI++){
    NewUIntElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));
}

Element AimOrder;

ElementOrderationFunction(EmptyElement, UIntElement);

GetEleOrder(ParaPair, 0) &= ElementOrder;
GetEleOrder(ParaPair, 1) &= UIntElement;
ElementOrderMergeFunction(ParaPair, AimOrder);

for(unsigned int midI = 0; midI < 5; midI++){
    ReleaseElementFunnction(EmptyElement, GetEleOrder(AimOrder, midI));
}
```