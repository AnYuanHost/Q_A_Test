# GetPairSecoundElement
***
映射GetPairSecoundElement接受定义域为序偶集合，值域为空元素集合，定义如下：

    Map GetPairSecoundElement(&OrderedPairSet, &NullElementSet, GetPairSecoundElementFunction);

取序偶第二元素映射（GetPairSecoundElement）将定义域序偶第二元素转交传递到值域空元素上。该方法主要用于在虚拟机中执行序偶相关操作。

    {
        Element SecoundElement;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);
        NewUIntElementFunction(EmptyElement, GetEleOrder(ParaPair, 1));

        GetPairSecoundElementFunction(ParaPair, SecoundElement);

        SecoundElement &= GetEleOrder(ParaPair, 1);

        ...
    }

在案例代码中，构造了序偶元素ParaPair和无符号整型元素SecoundElement，映射GetPairSecoundElement将ParaPair的第二元素转交到SecoundElement上。该映射基本等价于使用宏GetEleOder和转交运算&=。不同点在于Ele &= GetEleOrder(Ele, 1)可以用于代码编写中，但不能用于在虚拟机中解释。虚拟机中解释需封装成映射，即GetPairSecoundElement。