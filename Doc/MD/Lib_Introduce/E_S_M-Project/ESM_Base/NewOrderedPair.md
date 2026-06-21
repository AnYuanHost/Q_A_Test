# NewOrderedPairSet
***
映射NewOrderedPairSet接收空元素集合作为定义域值域，定义如下：

    Map NewOrderedPair(&NullElementSet, &NullElementSet, NewOrderedPairFunction);

新建序偶映射（NewOrderedPair）在值域元素上创建一个序偶元素，其第一元素和第二元素均被初始化为空元素。序偶元素可以由宏GetEleOrder解析。

    {
        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        ...
    }

在案例代码中，NewOrderedPair映射将元素ParaPair构造为一个序偶元素。