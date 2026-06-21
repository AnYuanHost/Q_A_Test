# UIntZero
***
映射UIntZero接受空元素集合（NullElementSet）为定义域，无符号整型集合（UIntSet）为值域，定义如下：

    Map UIntZero(&NullElementSet, &UIntSet, UIntZeroFunction);

无符号整型归零映射（UIntZero）将值域无符号整型元素的值设为零。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        GetUIntElement(UIntElement) = 3;

        UIntZeroFunction(EmptyElement, UIntElement);

        ...
    }

在案例代码中，构建并使用无符号整型元素UIntElement。通过宏GetUIntElement完成初始赋值并使用后，需要将其值归零，此时使用UIntZero映射完成归零。和GetUIntElement宏方法不同，该方法可以在虚拟机中进行解释。