# SuperIndexToUInt
***
映射SuperIndexToUInt接受超索引集合（）为定义域，无符号整型集合（）为值域，定义如下：

    Map SuperIndexToUInt(&SuperIndexSet, &UIntSet, SuperIndexToUIntFunction);

超索引转无符号整型映射（）将定义域超索引元素转换为对应的无符号整型的值，并存储到值域无符号整型元素中。

    {
        Element SuperIndex;

        //Initialize SuperIndex Element

        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        SuperIndexToUIntFunction(SuperIndex, UIntElement);

        ...
    }

在案例代码中，构造并使用超索引元素SuperIndex。在初始化其值后，通过映射SuperIndexToUInt将其转换并存储到无符号整型元素UIntElement中。