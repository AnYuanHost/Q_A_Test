# CharNext
***
映射CharNext接受字符元素集合（CharSet）为定义域和值域，定义如下：

    Map CharNext(&NullElementSet, &NullElementSet, CharNextFunction);

字符后继映射（CharNext）计算定义域字符元素字符值的后继，将其赋值到值域字符元素。

    {
        Element CharElement1;
        NewCharElementFunction(EmptyElement, CharElement1);

        Element CharElement2;
        NewCharElementFunction(EmptyElement, CharElement2);

        GetCharElement(CharUIntElement1) = 'A';

        CharNextFunction(CharUIntElement1, CharUIntElement2);

        ...
    }

在案例代码中，构造并使用字符元素CharElement1和CharElement2。CharElement1字符值赋值为'A'后，使用CharNext映射计算后继值到CharElement2，此时，CharElement2的字符值为'B'。