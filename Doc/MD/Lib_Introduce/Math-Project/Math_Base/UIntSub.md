# UIntSub
***
映射UIntSub接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（UIntSet）为值域，定义如下：

    Map UIntSub(&OrderedPairSet, &UIntSet, UIntSubFunction);

无符号整型减映射（UIntAdd）分析定义域元素序偶元素，格式为<UIntSet, UIntSet>。将两个无符号整型相减，结果值存储到值域无符号整型元素中。
虽然减计算允许值域无符号整型元素和定义域内的无符号整型元素重合，但在框架下应该尽量避免这种操作。

    {
        Element UIntElement1;
        NewUIntElementFunction(EmptyElement, UIntElement1);
        GetUIntElement(UIntElement1) = 7;

        Element UIntElement2;
        NewUIntElementFunction(EmptyElement, UIntElement2);
        GetUIntElement(UIntElement2) = 4;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element UIntElement3;
        NewUIntElementFunction(EmptyElement, UIntElement3);

        GetEleOrder(ParaPair, 0) |= UIntElement1;
        GetEleOrder(ParaPair, 1) |= UIntElement2;
        UIntSubFunction(ParaPair, UIntElement3);

        ...
    }

在案例代码中，构造并使用无符号整型元素UIntElement1，UIntElement2，UIntElement3。通过序偶元素ParaPair打包无符号整型元素，通过映射UIntSub完成计算将减的结果置于UIntElement3中。此时，UIntElement3的无符号值为3。