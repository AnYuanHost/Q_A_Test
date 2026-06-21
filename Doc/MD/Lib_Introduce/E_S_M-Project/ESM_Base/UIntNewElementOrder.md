# UIntNewElementOrder
***
映射UIntNewElementOrder接受无符号整型集合（）作为定义域，空元素集合（）作为值域，定义如下：

    Map UIntNewElementOrder(&UIntSet, &NullElementSet, UIntNewElementOrderFunction);

无符号整型构造元素序列映射（UIntNewElementOrder）分析定义域无符号整型的值，分配对应长度的元素序列到值域元素上。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element EleOrder;
        GetUIntElement(UIntElement) = 3;
        UIntNewElementOrderFunction(UIntElement, EleOrder);

        ...
    }

在案例代码中，构造并使用无符号整型元素UIntElement。对UIntElement赋值后，即可使用映射UIntNewElementOrder构造元素序列元素EleOrder。