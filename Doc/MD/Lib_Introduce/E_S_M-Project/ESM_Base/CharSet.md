# CharSet
***
集合CharSet为所有字符类型元素的集合，定义如下：

    Set CharSet(EmptyElement, CharSetTest);

字符类型集合（CharSet）由所有字符类型元素组成，用于字符相关操作。其元素可以由宏GetCharElement完成解析。

    {
        Element CharElement;
        NewCharElementFunction(EmptyElement, CharElement);

        if(CharSetTest(CharElement, CharSet)){
            ...
        }

        ...
    }

在案例代码中，构造并使用字符元素CharElement，其可以通过字符类型集合的判断函数CharSetTest。