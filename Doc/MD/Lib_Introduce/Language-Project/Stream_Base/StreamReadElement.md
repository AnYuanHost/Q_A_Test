# StreamReadElement
***
映射StreamReadElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map StreamReadElement(&OrderedPairSet, &NullElementSet, StreamReadElementFunction);

流读取元素映射（StreamReadElement）分析定义域序偶元素，其格式为<StreamSet, UIntSet>。该序偶内元素含有以下信息：<被操作的流元素, 读取起始地址>。该映射会在流元素对应地址开始，读取元素信息，先读取其空间大小，随后读取其内存空间地址，完成赋值。
通过该方法读取的元素只有相关信息，一般都属于简单元素，在使用后应保证通过归零映射ZeroElement解除引用。

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
        StreamReadElementFunction(ParaPair, AimStreamElement);

        ...

        ZeroElementFunction(EmptyElement, AimStreamElement);

    }

在案例代码中，构造并使用流元素StreamElement，AimStreamElement。完成对StreamElement的初始化后，确保无符号整型元素UIntElement值代表地址可以正确读取元素。经过序偶元素ParaPair打包后，使用映射StreamReadElement完成元素读取。操作完成后，使用归零映射ZeroElement解除AimStreamElement对StreamElement的引用占用。