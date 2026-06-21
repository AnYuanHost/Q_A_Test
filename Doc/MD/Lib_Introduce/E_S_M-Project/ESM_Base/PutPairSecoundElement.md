# PutPairSecoundElement
***
映射PutPairSecoundElement接受定义域为全集，值域为序偶集合，定义如下：

    Map PutPairSecoundElement(&UniversalSet, &OrderedPairSet, PutPairSecoundElementFunction);

存序偶第二元素映射（PutPairSecoundElement）将定义域元素转交传递到值域序偶元素的第二元素上。该方法主要用于在虚拟机中执行序偶相关操作。

    {
        Element SecoundElement;
        NewUIntElementFunction(EmptyElement, SecoundElement);

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        PutPairSecoundElementFunction(SecoundElement, ParaPair);

        GetEleOrder(ParaPair, 1) &= SecoundElement;

        ...
    }

在案例代码中，构造了序偶元素ParaPair和无符号整型元素SecoundElement，映射PutPairSecoundElement将SecoundElement转交到ParaPair的第二元素上。该映射基本等价于使用宏GetEleOder和转交运算&=。不同点在于GetEleOrder(Ele, 1) &= Ele可以用于代码编写中，但不能用于在虚拟机中解释。虚拟机中解释需封装成映射，即PutPairSecoundElement。