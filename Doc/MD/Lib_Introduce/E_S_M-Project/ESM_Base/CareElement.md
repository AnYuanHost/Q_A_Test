# CareElement
***
映射CareElement接受全集（UniversalSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map CareElement(&UniversalSet, &NullElementSet, CareElementFunction);

转交元素映射（CareElement）封装了元素的转交传递运算符，将定义域全集元素转交传递到值域空元素上。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element TestElement;
        
        CareElementFunction(UIntElement, TestElement);

        TestElement &= UIntElement;

        ...
    }

在案例代码中，构建并使用无符号整型元素UIntElement。映射CareElement将元素UIntElement转交到值域TestElement上，其等价于使用&=重载符号。
不同点在于在代码编写中，可以使用&=符号进行转交，但在虚拟机解释时，智能使用CareElement函数来完成操作。