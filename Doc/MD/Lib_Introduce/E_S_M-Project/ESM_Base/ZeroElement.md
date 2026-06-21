# ZeroElement
***
映射ZeroElement接受空元素集合（NullElementSet）为定义域，全集（UniversalSet）为值域，定义如下：

    Map ZeroElement(&NullElementSet, &UnivesalSet, ZeroElementFunction);

归零元素映射（ZeroElement）将值域元素直接归零。（元素归零后和EmptyElement相同）

    {
        Element UIntElement1;
        NewUIntElementFunction(EmptyElement, UIntElement1);

        Element UIntElement2;

        UIntElement2 |= UIntElement1;

        ZeroElementFunction(EmptyElement, UIntElement2);

        ...
    }

在案例代码中，构造并使用无符号整型元素UIntElement1，因为元素UIntElement2随后引用了UIntElement1，所以其可以操作UIntElement1的值，但最后需要通过归零元素映射来解除引用，避免后续的释放错误。