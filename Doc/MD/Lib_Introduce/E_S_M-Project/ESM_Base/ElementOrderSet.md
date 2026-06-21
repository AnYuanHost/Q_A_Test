# ElementOrderSet
***
集合ElementOrderSet为元素序列元素的集合，定义如下：

    Set ElementOrderSet(EmptyElement, ElementOrderSetTest);

元素序列集合（ElementOrderSet）由所有元素序列元素组成，用于处理多元序列。其特征是空间大小是元素类型大小的整数倍。元素序列元素可以通过宏GetEleOrder解析并获取序列内的元素。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element ParaOrder;
        GetUIntElement(UIntElement) = 10;
        UIntNewElementOrderFunction(UIntElement, ParaOrder);

        if(ElementOrderSetTest(ParaOrder, ElementOrderSet)){
            ...
        }

        ...
    }

在案例代码中，构造并使用元素序列元素ParaOrder。通过UIntNewElementOrder构造方法构造后，可以通过ElementOrderSetTest判断。