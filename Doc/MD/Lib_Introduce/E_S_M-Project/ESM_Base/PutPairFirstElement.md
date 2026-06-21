# PutPairFirstElement
***
映射PutPairFirstElement接受定义域为全集，值域为序偶集合，定义如下：

    Map PutPairFirstElement(&UniversalSet, &OrderedPairSet, PutPairFirstElementFunction);

存序偶第一元素映射（PutPairFirstElement）将定义域元素转交传递到值域序偶元素的第一元素上。该方法主要用于在虚拟机中执行序偶相关操作。

    {
        Element FirstElement;
        NewUIntElementFunction(EmptyElement, FirstElement);

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        PutPairFirstElementFunction(FirstElement, ParaPair);

        GetEleOrder(ParaPair, 0) &= FirstElement;

        ...
    }

在案例代码中，构造了序偶元素ParaPair和无符号整型元素FirstElement，映射PutPairFirstElement将FirstElement转交到ParaPair的第一元素上。该映射基本等价于使用宏GetEleOder和转交运算&=。不同点在于GetEleOrder(Ele, 0) &= Ele可以用于代码编写中，但不能用于在虚拟机中解释。虚拟机中解释需封装成映射，即PutPairFirstElement。