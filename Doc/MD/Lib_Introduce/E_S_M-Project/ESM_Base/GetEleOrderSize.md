# GetEleOrderSize
***
宏GetEleOrderSize定义如下：

    #define GetEleOrderSize(Ele) ((Ele).Size / sizeof(Element))

获取元素序列长度宏（GetEleOrderSize）用于快速获取一个元素序列的长度，一般用于代码中的快速遍历等操作。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element ParaOrder;
        GetUIntElement(UIntElement) = 10;
        UIntNewElementOrderFunction(UIntElement, ParaOrder);

        unsigned int midI;
        for(midI = 0;midI < GetEleOrderSize(ParaOrder);midI++){
            ...
        }

        ...
    }

在案例代码中，构造并使用元素序列ParaOrder。在循环操作元素序列ParaOrder的元素时，使用GetEleOrderSize获取其长度以确定遍历边界。