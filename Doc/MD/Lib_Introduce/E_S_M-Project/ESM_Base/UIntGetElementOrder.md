# UIntGetElementOrder
***
映射UIntGetElementOrder接受元素序偶（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域元素，定义如下：

    Map UIntGetElementOrder(&OrderedPairSet, &NullElementSet, UIntGetElementOrderFunction);

元素序列获取映射（UIntGetElementOrder）分析定义域序偶元素，序偶格式为<ElementOrderSet, UIntSet>，含义为<待操作的元素序列， 操作地址>。按照地址信息从元素序列中获取对应的元素，将其转交传递到值域空元素上。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element EleOrder;
        // Initialize Element Order;

        Element ZeroElement;

        GetUIntElement(UIntElement) = 3;

        GetEleOrder(ParaPair, 0) |= EleOrder;
        GetEleOrder(ParaPair, 1) |= UIntElement;

        UIntGetElementOrderFunction(ParaPair, ZeroElement);

        ReleaseElementFunction(EmptyElement, ZeroElement);

        ...
        
    }

在案例代码中，构建并使用元素序列元素EleOrder。经过初始化等操作后，希望能够获取其下标为3的第四个元素，并将其释放。赋值地址信息并封装到元素序偶ParaPair中，ParaPair将作为参数传递到映射UIntGetElementOrder，获取到的元素置于ZeroElement上。随后调用释放函数将ZeroElement释放。