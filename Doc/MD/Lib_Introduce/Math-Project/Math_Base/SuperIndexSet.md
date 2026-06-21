# SuperIndexSet
***
集合SuperIndexSet为超索引元素的集合，定义如下：

    #define SuperIndexSet UniversalSet

    #define SuperIndexSetTest

超索引集合（SuperIndexSet）由所有超索引元素组成，用于处理超索引相关操作。超索引元素在数据类型上定义涵盖所有可能的元素，其集合等价于全集。超索引元素主要用于记录索引信息，因为其可以无限拓展，可以用于知识库的存储。

    {
        Element SuperIndex;

        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        GetUIntElement(UIntElement) = 2;
        UIntToSuperIndexFunction(UIntElement, SuperIndex);

        ...
    }

在案例代码中，构造并使用无符号整型元素UIntElement。对UIntElement赋值后，通过映射UIntToSuperIndex构造超索引映射（SuperIndex）。