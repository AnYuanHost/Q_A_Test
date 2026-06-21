# CopyElement
***
映射CopyElement接受全集（UniversalSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map CopyElement(&UniversalSet, &NullElementSet, CopyElementFunction);

拷贝元素映射（CopyElement）将定义域全集元素拷贝到值域空元素上。拷贝是通用的内存拷贝，只拷贝内存空间的数据。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        Element TestElement;

        CopyElementFunction(UIntElemnet, TestElement);

        ...
    }

在案例代码中，构造并使用无符号整型元素UIntElement，因为无符号整型属于简单结构，其可以通过拷贝元素映射拷贝到新元素TestElement上，此时，环境中存在两个无符号整型元素。如果拷贝元素映射拷贝的值域元素并不是代码中的变量，则应该使用对应的Release方法进行释放。