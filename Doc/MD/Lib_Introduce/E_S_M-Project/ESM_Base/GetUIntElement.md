# GetUIntElement
***
宏GetUIntElement定义如下：

    #define GetUIntElement(Ele) (*(unsigned int*)(Ele).KeySpace)

获取无符号整型元素宏（GetUIntElement）用于将无符号整型元素解析为无符号整型。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        GetUIntElement(UIntElement) = UINT_MAX;

        ...
    }

在案例代码中，无符号整型元素UIntElement使用构造函数构造后，由宏GetUIntElement完成赋值。