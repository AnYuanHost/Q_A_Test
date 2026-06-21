# UIntSet
***
集合UIntSet为所有无符号整型元素集合，其一般判定元素大小是否等于sizeof(unsigned int)，其定义如下：

    Set UIntSet(EmptyElement, UIntSetTest);

无符号整型集合（UIntSet）由所有封装无符号整型的元素组成，为框架提供基本的整数的操作能力。在框架中，大量的操作依赖于基本的整型变量，例如下标索引、数量等。
无符号整型元素可以通过宏GetUIntElement解析为无符号整型。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        if(UIntSetTest(UIntElement, UIntSet)){
            GetUIntElement(UIntElement) = 1;
            GetUIntElement(UIntElement) ++;
            GetUIntElement(UIntElement) += 1;
        }

        ...
    }

在案例代码中，无符号整型元素通过构造并判断后，借助宏GetUIntElement完成赋值、递增和加赋值。