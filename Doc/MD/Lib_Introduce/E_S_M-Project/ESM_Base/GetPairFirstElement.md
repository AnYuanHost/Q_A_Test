# GetPairFirstElement
***
映射GetPairFirstElement接受定义域为序偶集合，值域为空元素集合，定义如下：

    Map GetPairFirstElement(&OrderedPairSet, &NullElementSet, GetPairFirstElementFunction);

取序偶第一元素映射（GetPairFirstElement）将定义域序偶第一元素转交传递到值域空元素上。该方法主要用于在虚拟机中执行序偶相关操作。

    {
        Element FirstElement;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);
        NewUIntElementFunction(EmptyElement, GetEleOrder(ParaPair, 0));

        GetPairFirstElementFunction(ParaPair, FirstElement);

        FirstElement &= GetEleOrder(ParaPair, 0);

        ...
    }

在案例代码中，构造了序偶元素ParaPair和无符号整型元素FirstElement，映射GetPairFirstElement将ParaPair的第一元素转交到FirstElement上。该映射基本等价于使用宏GetEleOder和转交运算&=。不同点在于Ele &= GetEleOrder(Ele, 0)可以用于代码编写中，但不能用于在虚拟机中解释。虚拟机中解释需封装成映射，即GetPairFirstElement。