# OrderedPairSet
***
集合OrderedPairSet被所有序偶元素属于，其定义如下：

    Set OrderedPairSet(EmptyElement, OrderedPairSet);

序偶集合（OrderedPairSet）应该被所有序偶元素属于，其判断函数围绕格式<UniversalSet, UniversalSet>展开。

    {
        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        if(!OrderedPairSetTest(ParaPair, OrderedPairSet)){
            Element ExcElement;
            throw ExcElement;
        }

        ...
    }

在案例代码中创建并判断了序偶元素。
序偶集合元素可通过相关构造方法构造，并通过宏GetEleOrder和相关操作进行处理，