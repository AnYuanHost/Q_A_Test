# ReleaseString
***
映射ReleaseString接受空元素集合（NullElementSet）为定义域，字符串类型集合（StringSet）为值域，其定义如下：

    Map ReleaseString(&NullElementSet, &StringSet, ReleaseStringFunction);

释放字符串类型元素映射（ReleaseString）将值域字符串类型元素释放。

    {
        Element StringElement;
        NewStringElementFunction(EmptyElement, StringElement);

        ...

        ReleaseStringFunction(EmptyElement, StringElement);
    }

在案例代码中，构造并使用字符串类型元素StringElement。构造StringElement并使用后，通过释放映射ReleaseString完成释放。