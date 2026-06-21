# SwapElement
***
映射SwapElement接受全集（UniversalSet）为定义域和值域，定义如下：

    Map SwapElement(&UniversalSet, &UniversalSet, SwapElementFunction);

交换元素映射（SwapElement）将定义域和值域全集元素进行交换。如果值域元素是空元素，其等价于|=引用传递。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element BoolElement;
        NewBoolElementFunction(EmptyElement, BoolElement);

        SwapElementFunction(UIntElement, BoolElement);

        ...
    }

在案例代码中，构造并使用无符号整型元素UIntElement, 布尔类型元素BoolElement，但使用SwapElement映射交换后，此时UIntElement属于布尔类型集合，BoolElement属于无符号整型集合。