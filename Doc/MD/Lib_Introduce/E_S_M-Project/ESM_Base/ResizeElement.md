# ResizeElement
***
映射ResizeElement接受无符号整型（UIntSet）为定义域，空元素集合（NullElementSet）为值域，其定义如下：

    Map ResizeElement(&UIntSet, &NullElementSet, ResizeElementFunction);

重分配元素映射（ResizeElement）按照定义域无符号整型元素指明的大小，在值域空元素上分配对应大小的空间。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);
        
        Element TestElement;

        GetUIntElement(UIntElement) = 4;

        ResizeElementFunction(UIntElement, TestElement);

        ...
    }

在案例代码中，构建并使用无符号整型元素UIntElement，其赋值为4后，调用重分配元素映射重新分配测试元素TestElement的内存空间。分配后，TestElement的成员变量中，Size为4，KeySpace则指向一个4字节的内存空间。