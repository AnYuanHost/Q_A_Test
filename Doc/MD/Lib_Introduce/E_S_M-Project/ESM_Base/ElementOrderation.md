# ElementOrderation
***
映射ElementOrderation接受空元素集合（NullElementSet）为定义域，全集（UniversalSet）为值域，定义如下：

    Map ElementOrderation(&NullElementSet, &UniversalSet, ElementOrderedtionFunction);
    
元素序列化映射（ElementOrderation）将值域全集元素封装到一元序列中。
这种封装操作一般用于序列化后增加调用层数，可以让原本不能引用的元素在后续操作中被引用，但需要注意解析的层数随之中增加后代码逻辑随之改变。
另一个主要用法是用于异常信息的打包处理，封装成元素序列后可以按照序列格式进行相关操作，便于组装异常信息日志。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        ElementOrderationFunction(EmptyElement, UIntElement);

        ReleaseElementFunction(EmptyElement, GetEleOrder(UIntElement, 0));

        ...
    }

在案例代码中，构造无符号整型元素UIntElement后将其序列化。序列化之后无符号整型元素已经不能通过代码块结束时自动析构来释放，必须使用释放映射指明并释放。