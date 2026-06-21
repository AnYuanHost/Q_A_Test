# ElementEqual
***
映射ElementEqual接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域，定义如下：

    Map ElementEqual(&OrderedPairSet, &BoolSet, ElementEqualFunction);

元素相等判断映射（ElementEqual）分析定义域元素序偶元素，格式为<UniversalSet, UniversalSet>。其需要判断第一元素和第二元素是否相等，即元素大小相等，内存空间信息逐字节相等。

    {
        Element UIntElement1;
        NewUIntElementFunction(EmptyElement, UIntElement1);
        GetUIntElement(UIntElement1) = 3;

        Element UIntElement2;
        NewUIntElementFunction(EmptyElement, UIntElement2);
        GetUIntElement(UIntElement2) = 3;

        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        Element BoolElement;
        NewBoolElementFunction(EmptyElement, BoolElement);

        GetEleOrder(ParaPair, 0) |= UIntElement1;
        GetEleOrder(ParaPair, 1) |= UIntElement2;
        ElementEqualFunction(ParaPair, BoolElement);

        ...

    }

在案例代码中，构建并使用无符号整型元素UIntElement1、UIntElement2。随后构建元素序偶元素ParaPair，和布尔类型元素BoolElement，这将用于判断两个无符号整型元素是否相等。打包参数到ParaPair并调用ElementEqual映射后，可以看到BoolElement的值已经变为true。