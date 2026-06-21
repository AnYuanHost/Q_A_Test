# Element

***
Element（元素）结构体，作为本框架的基本操作单位，一切操作都发生在具体的元素上。其结构定义如下：

    struct Element {
        unsigned int Size;
        char* KeySpace;

        Element();
        Element(unsigned int S, char* keySpace);
        Element(const Element& Ele);
        ~Element() noexcept;
        void operator&=(Element& Ele);
        void operator=(const Element& Ele);
        void operator|=(const Element& Ele);
    };

在成员变量上，使用无符号整型成员（Size）表示空间大小，字符指针成员（KeySpace）指向分配的内存空间。这两个成员表示元素在计算机中所占的一段实际空间。
三个构造函数负责在代码编写过程中指导构造元素。无参构造函数和带参构造函数用于快速构造一个元素，深拷贝构造函数则用于快速处理一些特殊情况。
析构函数用于在编写过程中快速通用地释放元素，noexcept关键词用于防止在异常处理过程中的错误释放。
重载&=、=、|=符号用于完成基本的元素信息传递功能。

***

## 无参构造函数

    Element();

该函数无参构造一个空元素，其大小（Size）为0，内存地址（KeySpace）为nullptr。
该函数可以简洁的创建一个空元素，其可以很方便的用于其新的构造函数，虽然这往往意味着其不能快速析构。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        ReleaseElementFunction(EmptyElement, UIntElement);
    }

在上述例子中，创建一个无符号整型元素并构造，因为无符号整型元素是简单元素，所以其可以通过通用的释放函数释放，而该函数希望达成的功能基本等价于析构函数，所以可以省略释放函数，直接在代码块结束时自动调用析构函数进行释放。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        ReleaseFstreamFunction(EmptyElement, FstreamElement);
    }

在上述例子中，创建一个文件元素并构造，但文件元素并不是简单元素，不应该通过通用的释放函数进行释放，需要专有的释放函数进行处理。此时，必须写上专门的释放函数。

***

## 转交传递函数

    void operator&=(Element& Ele);

转交函数用于将一个实体元素从旧的变量转交到新的变量上，旧变量在转移后会被置空。
为了防止转交过程中出现泄露问题，被转交的新变量应该尽可能的保证为空元素。

    {
        Element A;
        Element B;

        NewUIntElementFunction(EmptyElement, A);

        B &= A;

        ...
    }

在上述例子中，无参构造两个空元素A、B，随后A元素被构造为无符号整型.此时，A表示一个无符号整型元素，B表示空元素。
在转交函数执行后，B元素表示A曾表示的无符号整型元素，A元素此时为空元素。

***

## 引用传递函数

    void operator|=(const Element& Ele);

该函数将实体元素的引用赋值到新的变量上，旧变量值不变。
不同于转交传递保证只有一个实体元素，引用传递会创造新的引用，从而可能导致一些问题。

### 重复释放导致的异常

在下方代码案例中：

    {
        Element A;
        Element B;

        NewUIntElementFunction(EmptyElement, A);

        B |= A;

        ZeroEleemntFunction(EmptyElement, B);
    }

代码中，只有A一个实体元素，当B引用了A之后，操作B会同步操作A的值。
如果没有ZeroElementFunction函数将B的值清零（解除引用），则会出现重复释放的异常。此时，逻辑上只有一个实体元素，但代码认为其有两个实体元素，A、B均是实体元素。代码块结束时，释放A，实体元素被释放;释放B，出现异常，此时重复释放了实体元素。
为了应对这个问题，在引用产生时，应该注意其在代码块结束时是否自动析构，视情况调用ZeroElement映射来解除其引用。

### 不完全引用导致的引用失效

因为元素的简单定义，其并不是通过内存空间指向实体元素的方式进行引用，这种不完全的引用模式会在操作引用时产生一些问题。
一些对元素的操作是正确的，其操作引用元素可以正常改变值而不会出现问题，这种操作的特点就是其不会修改KeySpace成员变量的值。
如果一个操作会修改KeySpace成员变量的值，则其会直接导致引用失效，潜在的解除了元素间的引用。一般New和Release这些构造和析构函数都会改变KeySpace的值，都会导致引用失效。
下面这个代码解释了引用为何会失效：

    {
        Element A;
        Element B;

        NewUIntElementFunction(EmptyElement, A);

        B |= A;

        GetUIntElement(B) = 1;

        NewUIntElementFunction(EmptyElement, B);

        GetUIntElement(B) = 2;

    }

在该部分代码中，重新构造B之前修改无符号整型元素B的值，可以修改无符号整型A的值，但重新构造后，修改B不会再修改A。这是因为出乎意料的操作解除了A、B间的引用关系。这种引用失效会导致无法继续修改值，而一些严重的情况可能会导致实体元素丢失所有的引用，彻底变成泄露元素。
这就是为什么要显示的解除引用，该规范可以确保导致引用失效的操作不会发生在引用上。
