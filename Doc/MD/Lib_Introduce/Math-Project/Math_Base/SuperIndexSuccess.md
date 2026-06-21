# SuperIndexSuccess
***
映射SuperIndexSuccess接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map SuperIndexSuccess(&SuperIndexSet, &NullElementSet, SuperIndexSuccessFunction)

超索引后继映射（SuperIndexSuccess）计算定义域超索引元素的后继元素，将其置于值域空元素上。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element SuperIndex1;
        GetUIntElement(UIntElement) = 3;
        UIntToSuperIndexFunction(UIntElement, SueprIndex1);

        Element SuperIndex2;
        SuperIndexSuccessFunction(SuperIndex1, SuperIndex2);

        SuperIndexToUIntFunction(SuperIndex2, UIntElement);

        ...
    }

在案例代码中，构造并使用超索引元素SuperIndex1，SueprIndex2。通过无符号整型元素UIntElement构造SuperIndex1后，通过映射SuperIndexSuccess构造其后继超索引元素到超索引元素SuperIndex2。通过映射SuperIndexToUInt可以看到此时，SuperIndex2对应的无符号整型值为4。