# SuperIndexLE
***
映射SuperIndexLE接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，定义如下：

    Map SuperIndexLE(&OrderedPairSet, &BoolSet, SuperIndexLEFunction);

超索引小于等于映射（SuperIndexLE）分析定义域序偶元素，其格式为<SuperIndexSet, SuperIndexSet>。判断序偶元素第一超索引元素小于等于第二超索引元素，将判断结果置于值域布尔类型元素上。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element SuperIndex1；
        GetUIntElement(UIntElement) = 3;
        UIntToSuperIndexFunction(UIntElement, SuperIndex1);

        Element SuperIndex2;
        GetUIntElement(UIntElement) = 3;
        UIntToSuperIndexFunction(UIntElement, SuperIndex2);

        Element ParaPair;
        NewOrderedPairFUnction(EmptyElement, ParaPair);

        Element BoolElement;
        NewBollElementFunction(EmptyElement, BoolElmeent);

        GetEleOrder(ParaPair, 0) |= SuperIndex1;
        GetEleOrder(ParaPair, 1) |= SuperIndex2;
        SuperIndexLEFunction(ParaPair, BoolElement);

        ...
    }

在案例代码中，构造并使用超索引元素SuperIndex1，SuperIndex2。超索引元素通过无符号整型元素UIntElement构造。在经过序偶元素ParaPair打包后，使用映射SuperIndexLE判断，将结果值存储到布尔类型元素BoolElement中。