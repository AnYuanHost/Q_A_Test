# SuperIndexPrecursor
***
映射SuperIndexPrecursor接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map SuperIndexPrecursor(&SuperIndexSet, &NullElementSet, SuperIndexPrecursorFunction)

超索引前驱映射（SuperIndexPrecursor）计算定义域超索引元素的前驱元素，将其置于值域空元素上。
但注意，因为超索引在定义上没有最大值，所以0超索引不能执行超索引前驱映射，这会导致异常。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element SuperIndex1;
        GetUIntElement(UIntElement) = 3;
        UIntToSuperIndexFunction(UIntElement, SueprIndex1);

        Element SuperIndex2;
        SuperIndexPrecursorFunction(SuperIndex1, SuperIndex2);

        SuperIndexToUIntFunction(SuperIndex2, UIntElement);

        ...
    }

在案例代码中，构造并使用超索引元素SuperIndex1，SueprIndex2。通过无符号整型元素UIntElement构造SuperIndex1后，通过映射SuperIndexPrecursor构造其前驱超索引元素到超索引元素SuperIndex2。通过映射SuperIndexToUInt可以看到此时，SuperIndex2对应的无符号整型值为2。