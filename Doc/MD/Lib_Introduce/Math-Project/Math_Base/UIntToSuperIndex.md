# UIntToSuperIndex
***
映射UIntToSuperIndex接受无符号整型集合（）为定义域，空元素集合（）为值域，定义如下：

    Map UIntToSuperIndex(&UIntSet, &NullElementSet, UIntToSuperIndexFunction);

无符号整型转超索引映射（UIntToSuperIndex）分析定义域无符号整型值并构造对应的超索引元素，将其置于值域空元素上。
因为暂未提供有效的超索引构造手段，在超索引值较低时，提供无符号整型的转换方法来完成构造。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element SuperIndex;
        GetUIntElement(UIntElement) = 3;
        UIntToSuperIndexFunction(UIntElement, SuperIndex);

        ...
    }

在案例代码中，构造并使用无符号整型元素UIntElement。通过对UIntElement赋值并调用UIntToSuperIndex映射，完成对超索引元素SuperIndex的构造。