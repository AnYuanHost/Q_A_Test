# ElementOrderMerge
***
映射ElementOrderMerge接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map ElementOrderMerge(&OrderedPairSet, &NullElementSet, ElementOrderMergeFunction);

元素序列合并映射（ElementOrderMerge）分析定义域序偶元素的两个元素序列元素，将其合并为一个元素序列元素并置于值域元素上。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element EleOrder1;
        GetUIntElement(UIntElement) = 3;
        UIntNewElementOrderFunction(UIntElement, EleOrder1);

        Element EleOrder2;
        GetUIntElement(UIntElement) = 4;
        UIntNewElementOrderFunction(UIntElememt, EleOrder2);

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element EleOrder3;

        GetEleOrder(ParaPair, 0) &= EleOrder1;
        GetEleOrder(ParaPair, 1) &= EleOrder2;
        ElementOrderMergeFunction(ParaPair, EleOrder3);

        ...
    }

在案例代码中，构造并使用元素序列元素EleOrder1、ElementOrder2。随后，通过序偶元素ParaPair组装信息，调用合并映射，将合并后的序列放到EleOrder3上。因为合并映射会破坏原元素序列，所以在ParaPair的赋值时使用转交赋值，而不是引用赋值。