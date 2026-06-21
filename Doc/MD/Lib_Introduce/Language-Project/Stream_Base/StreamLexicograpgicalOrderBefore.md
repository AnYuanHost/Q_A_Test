# StreamLexicograpgicalOrderBefore
***
映射StreamLexicograpicalOrderBefore接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，其定义如下：

    Map StreamLexicograpicalOrderBefore(&OrderedPairSet, &BoolSet, StreamLexicograpicalOrderBeforeFunction);

流字典序前驱判断映射（StreamLexicograpgicalOrderBefore）分析定义域序偶元素，其结构为<StreamSet, StreamSet>。该映射会判断流元素1按照字典序是否在元素2前面，判断结果置于值域布尔元素上，满足前驱则为true。

    {
        Element StringElement;
        NewStringElementFunction(EmptyElement, StringElement);

        Element StreamElement1;
        std::cin >> GetStringElement(StringElement);
        StringToStreamFunction(StringElement, StreamElement1);

        Element StreamElement2;
        std::cin >> GetStringElement(StringElement);
        StringToStreamFunction(StringElement, StreamElement2);

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element BoolElement;
        NewBoolElementFunction(EmptyElement, BoolElement);

        GetEleOrder(ParaPair, 0) |= StreamElement1;
        GetEleOrder(ParaPair, 1) |= StreamElement2;
        StreamLexicograpgicalOrderBeforeFunction(ParaPair, BoolElement);

        ReleaseStringFunction(EmptyElement, StringElement);
    }

在案例代码中，通过中间字符串类型元素StringElement构造并使用流元素StreamElement1，StreamElement2。通过标准库方法std::cin键入字符串信息并通过转换映射完成构造。经过序偶元素ParaPair打包后，映射StreamLexicograpicalOrderBefore完成判断，结果置于值域布尔元素BoolElement。