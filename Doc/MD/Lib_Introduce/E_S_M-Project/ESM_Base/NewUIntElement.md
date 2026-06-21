# NewUIntElement
***
映射NewUIntElement接受空元素集合（NullElementSet）为定义域和值域，其定义如下：

    Map NewUIntElement(&NullElementSet, &NullElementSet, NewUIntElementFunction);

新建无符号整型元素映射（NewUIntElement）在值域空元素上构造无符号整型元素，并将其无符号整型值初始化为0.

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        if(UIntSetTest(UIntElement, UIntSet)){
            ...
        }

        ...
    }

在案例代码中，使用新建无符号整型元素映射构造了无符号整型元素UIntElement，构造完成后即可通过无符号整型集合的判断函数。