# UIntPutElementOrder

***
映射UIntPutElementOrder接受元素序偶（OrderedPairSet）为定义域，元素序列素集合（ElementOrderSet）为值域元素，定义如下：

    Map UIntPutElementOrder(&OrderedPairSet, &ElementOrderSet, UIntPutElementOrderFunction);

元素序列存放映射（UIntPutElementOrder）分析定义域序偶元素，序偶格式为<UniversalSet, UIntSet>，含义为<待操作的元素， 操作地址>。按照地址信息将全集元素转交传递到值域元素序列的对应位置上。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element EleOrder;
        // Initialize Element Order;

        Element ZeroElement;
        NewUIntElementFunction(EmptyElement, ZeroElement);

        GetUIntElement(UIntElement) = 3;

        GetEleOrder(ParaPair, 0) &= ZeroElement;
        GetEleOrder(ParaPair, 1) |= UIntElement;

        UIntPutElementOrderFunction(ParaPair, EleOrder);

        ...
        
    }

在案例代码中，构建并使用元素序列元素EleOrder。经过初始化等操作后，希望将一个无符号整型元素转交到其下标为3的地址上。赋值地址信息并封装到元素序偶ParaPair中，ParaPair将作为参数传递到映射UIntPuttElementOrder，将元素ZeroElement转交传递到EleOrder对应位置。