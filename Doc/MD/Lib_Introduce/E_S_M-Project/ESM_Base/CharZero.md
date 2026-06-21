# CharZero
***
映射CharZero接受空元素集合（NullElementSet）为定义域，字符集合（CharSet）为值域，定义如下：

    Map CharZero(&NullElementSet, &CharSet, CharZeroFunction);

字符归零映射（CharZero）将值域字符元素的字符值归零。

    {
        Element CharElement;
        NewCharElementFunction(EmptyElement, CharElement);

        CharZeroFunction(EmptyElement, CharElement);

        ...
    }

在案例代码中，构造并使用字符元素CharElement。在使用NewCharElement映射构造后，使用CharZero映射可显式将其值归零。