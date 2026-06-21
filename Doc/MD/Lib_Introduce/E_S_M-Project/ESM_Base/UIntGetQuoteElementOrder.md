# UIntGetQuoteElementOrder
***
映射UIntGetQuoteElementOrder接受元素序偶（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域元素，定义如下：

    Map UIntGetQuoteElementOrder(&OrderedPairSet, &NullElementSet, UIntGetQuoteElementOrderFunction);

元素序列获取引用映射（UIntGetQuoteElementOrder）分析定义域序偶元素，序偶格式为<ElementOrderSet, UIntSet>，含义为<待操作的元素序列， 操作地址>。按照地址信息从元素序列中获取对应的元素，将其引用传递到值域空元素上。

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

        UIntGetQuoteElementOrderFunction(ParaPair, ZeroElement);

        ...

        ZeroElementFunction(EmptyElement, ZeroElement);

        ...
        
    }

在案例代码中，构建并使用元素序列元素EleOrder。经过初始化等操作后，希望能够获取其下标为3的第四个元素，在操作后归零。赋值地址信息并封装到元素序偶ParaPair中，ParaPair将作为参数传递到映射UIntGetQuoteElementOrder，获取到的元素引用置于ZeroElement上。操作完成后后调用归零函数将ZeroElement归零。