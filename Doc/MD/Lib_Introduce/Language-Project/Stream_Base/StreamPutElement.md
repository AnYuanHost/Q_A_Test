# StreamPutElement
***
映射StreamPutElement接受元素序偶集合（&OrderedPairSet）为定义域，流集合（&StreamSet）为值域，定义如下：

    Map StreamPutElement(&OrderedPairSet, &NullElementSet, StreamGetElementFunction);

流存放元素映射（StreamPutElement）分析定义域序偶元素，其格式为<UniversalSet, UIntSet>。该序偶内元素含有以下信息：<待存入的全集元素, 存放起始地址>。该映射会在值域流元素对应地址开始，存放元素信息，先存放其空间大小，随后拷贝元素信息。

    {
        Element StreamElement;
        
        // Initialize Stream Element

        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);
        GetUIntElement(UIntElement) = 0;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element AimStreamElement;

        // Initialize Aim Stream Element Space Size

        GetEleOrder(ParaPair, 0) |= StreamElement;
        GetEleOrder(ParaPair, 1) |= UIntElement;
        StreamPutElementFunction(ParaPair, AimStreamElement);

        ...

    }

在案例代码中，构造并使用流元素StreamElement，AimStreamElement。完成对StreamElement的初始化后，确保无符号整型元素UIntElement值代表地址可以正确存放元素。经过序偶元素ParaPair打包后，使用映射StreamGetElement完成元素存放。