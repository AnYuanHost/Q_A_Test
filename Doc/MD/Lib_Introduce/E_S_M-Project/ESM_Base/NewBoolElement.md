# NewBoolElement
***
映射NewBoolElement接受空元素集合（NullElementSet）为定义域和值域，定义如下：

    Map NewBoolElement(&NullElementSet, &NullElementSet, NewBoolElementFunction);

新建布尔类型元素映射（NewBoolElement）在值域空元素上构造一个布尔类型元素，并初始化其值为False。

    {
        Element BoolElement;
        NewBoolElementFunction(EmptyElement, BoolElement);

        GetBoolElement(BoolElement) = true;

        ...
    }

在案例代码中，构造并使用布尔类型元素BoolElement。使用宏GetBoolElement完成了对BoolElement的赋值。