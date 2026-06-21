# NewCharElement
***
映射NewCharElement接受定空元素集合（）为定义域和值域，定义如下：

    Map NewCharElement(&NullElementSet, &NullElementSet, NewCharElementFunction);

新建字符元素映射（NewCharElement）在值域空元素上建立一个字符类型元素，并将其字符值设为0。

    {
        Element CharElement;
        NewCharElementFunction(EmptyElement, CharElement);
        
        if(CharSetTest(CharElement, CharSet)){
            ...
        }

        ...
    }

在案例代码中，构建并使用字符元素CharElement。使用NewCharElement构造后可以通过字符集合的判断函数CharSetTest。