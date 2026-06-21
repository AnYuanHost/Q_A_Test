# UIntLE
***
映射UIntLE接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，定义如下：

    Map UIntLE(&OrderedPairSet, &BoolSet, UIntLEFunction);

无符号整型小于等于映射（UIntLE）分析定义域元素序偶元素，其格式为<UIntSet, UIntSet>。比较第一元素的无符号整型值是否小于等于第二元素的值，比较结果置于值域布尔类型元素上。

    {
        Element UIntElement1;
        NewUIntElementFunction(EmptyElement, UIntElement1);
        GetUIntElement(UIntElement1) = 2;

        Element UIntElement2;
        NewUIntElementFunction(EmptyElement, UIntElement2);
        GetUIntElement(UIntElement2) = 2;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element BoolElement;
        NewBoolElementFunction(EmptyElement, BoolElement);

        GetEleOrder(ParaPair, 0) |= UIntElement1;
        GetEleOrder(ParaPair, 1) |= UIntElement2;
        UIntLEFunction(ParaPair, BoolElement);

        ...
    }

在案例代码中，构建并使用无符号整型UIntElement1，UIntElement2。通过序偶元素ParaPair打包参数后，经过映射UIntLE比较后，结果布尔值赋值到布尔类型元素BoolElement上。此时，BoolElement布尔值为true。