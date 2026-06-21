# BoolSet

***
集合BoolSet为所有布尔类型元素的集合，定义如下：

    Set BoolSet(EmptyElement, BoolSetTest);

布尔类型集合（BoolSet）由所有布尔类型元素组成，用于布尔类型的相关操作。其元素可由宏GetBoolElement进行解析。

    {
        Element BoolElement;
        NewBoolElementFunction(EmptyElement, BoolElement);

        if(BoolSetTest(BoolElement, BoolSet)){
            GetBoolElement(BoolElement) = false;
        }
    }

在案例代码中，构造并使用布尔类型元素BoolElement。在通过布尔类型集合测试后，调用宏对BoolElement进行赋值。
