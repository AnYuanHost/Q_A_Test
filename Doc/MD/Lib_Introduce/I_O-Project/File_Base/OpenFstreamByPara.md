# OpenFstreamByPara
***
映射OpenFstreamByPara接受元素序偶集合（OrderedPairSet）为定义域，文件元素集合（FstreamSet）为值域，定义如下：

    Map OpenFstreamByPara(&OrderedPairSet, &FstreamSet, OpenFstreamByParaFunction);

有参打开文件映射（OpenFstreamByPara）分析定义域序偶元素，其格式为<StreamSet, UIntSet>，涵盖信息：<文件地址，打开文件参数>。该映射会在值域文件元素上操作，按照参数信息打开文件。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        Element UIntElement;
        NewuIntElementFunction(EmptyElement, UIntELement);
        GetUIntElement(UIntElement) = std::ios::read;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element StreamElement;

        Element StringElement;
        NewStringFunction(EmptyElement, StringElement);

        std::cin >> GetStringElement(StringElement);

        StringToStreamFunction(StringElement, StreamElement);

        GetEleOrder(ParaPair, 0) |= StreamElement;
        GetEleOrder(ParaPair, 1) |= UIntElement;
        OpenFstreamByParaFunction(ParaPair, FstreamElement);

        CloseFstreamFunction(EmptyElement, FstreamElement);
        ReleaseFstreamFunction(EmptyElement, FstreamElement);

        ReleaseStringFunction(EmptyElement, StringElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。与映射OpenFstream不同，OpenFstreamByPara需要传入更多的参数，其需要ParaPair多完成一次打包。