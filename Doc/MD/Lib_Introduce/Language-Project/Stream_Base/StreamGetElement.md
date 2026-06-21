# StreamGetElement
***
映射StreamGetElement接受元素序偶集合（&OrderedPairSet）为定义域，空元素集合（&NullElementSet）为值域，定义如下：

    Map StreamGetElement(&OrderedPairSet, &NullElementSet, StreamGetElementFunction);

流获取元素映射（StreamGetElement）分析定义域序偶元素，其格式为<StreamSet, UIntSet>。该序偶内元素含有以下信息：<被操作的流元素, 获取起始地址>。该映射会在流元素对应地址开始，获取元素信息，先读取其空间大小，构造目标元素大小后，拷贝元素信息。
和读取映射不同点在于，该映射使用拷贝来获取具体信息，创造了新的简单元素，可以通过代码块结尾的析构自动释放。但如果在循环等场景下使用，应该主动调用释放函数以避免内存泄露。

    {
        Element StreamElement;
        
        // Initialize Stream Element

        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);
        GetUIntElement(UIntElement) = 0;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element AimStreamElement;

        GetEleOrder(ParaPair, 0) |= StreamElement;
        GetEleOrder(ParaPair, 1) |= UIntElement;
        StreamGetElementFunction(ParaPair, AimStreamElement);

        ...

    }

在案例代码中，构造并使用流元素StreamElement，AimStreamElement。完成对StreamElement的初始化后，确保无符号整型元素UIntElement值代表地址可以正确获取元素。经过序偶元素ParaPair打包后，使用映射StreamGetElement完成元素获取。