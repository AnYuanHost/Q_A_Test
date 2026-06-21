# CloseFstream
***
映射CloseFstream接受空元素集合（NullElementSet）为定义域，文件元素集合（FstreamSet）为值域，定义如下：

    Map CloseFstream(&NullElementSet, &FstreamSet, CloseFstreamFunction);

关闭文件映射（）在值域文件元素上执行关闭方法。文件正常打开后，均需要通过该映射完成关闭工作。

    {
       Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        Element StreamElement;

        Element StringElement;
        NewStringFunction(EmptyElement, StringElement);

        std::cin >> GetStringElement(StringElement);

        StringToStreamFunction(StringElement, StreamElement);

        OpenFstreamFunction(StreamElement, FstreamElement);

        CloseFstreamFunction(EmptyElement, FstreamElement);
        ReleaseFstreamFunction(EmptyElement, FstreamElement);

        ReleaseStringFunction(EmptyElement, StringElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。对于打开的文件元素FstreamElement，使用关闭映射CloseFstream完成关闭。

