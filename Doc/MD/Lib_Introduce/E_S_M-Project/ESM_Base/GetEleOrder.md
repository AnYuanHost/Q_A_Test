# GetEleOrder
***
宏GetElement定义如下：

    #define GetEleorder(Order, Index) ((Element*)(Order).KeySpace)[Index]

宏GetEleOrder用于从一个元素序列中获取指定下标的元素，允许嵌套。

    {
        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        NewUIntElementFunction(EmptyElement, GetEleOrder(ParaPair, 0));
        NewOrderedPairFunction(EmptyElement, GetEleOrder(ParaPair, 1));

        ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 0));
        ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 1));

    }

在该案例中，创建并使用了一个序偶元素ParaPair。通过宏GetEleOrder可以直接操作其下的两个元素，构造和析构均可进行。但因为在代码块结束时，只有ParaPair元素会自动调用析构函数，所以需要手动调用释放函数，避免可能的内存泄露。