* UIntSuccess

映射UIntSuccess接受无符号整型集合作为定义域和值域，定义如下：

    Map UIntSuccess(&UIntSet, &UIntSet, UIntSuccessFunction);

无符号整型后继映射计算定义域无符号整型元素的后继值，将该值赋值到值域无符号整型元素上。

    {
        Element UIntElement1;
        NewUIntElementFunction(EmptyElement, UIntElement1);
        Element UIntElement2;
        NewUIntElementFunction(EmptyElement, UIntElement2);

        GetUIntElement(UIntElement1) = 1；

        UIntSuccessFunction(UIntElement1, UIntElement2);

        ...

    }

在案例代码中，构建并使用无符号整型元素UIntElement1、UIntElement2。第一步将Element1赋值为1，调用无符号后继映射计算其后继值到UIntElement2。此时，UIntElement2的值为1的后继值2。
