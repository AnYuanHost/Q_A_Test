# GetBoolElement
***
宏GetBoolElement定义如下：

    #define GetBoolElement(Ele) (*(bool*)Ele.KeySpace)

获取布尔元素宏（GetBoolElement）用于将布尔类型元素解析成布尔类型。

    {
        Element BoolElement;
        NewBoolElementFunction(EmptyElement, BoolElement);

        GetBoolElement(BoolElement) = false;

        ...
    }

在案例代码中，构造并使用布尔类型元素BoolElement。使用宏GetBoolElement完成了对BoolElement的赋值。