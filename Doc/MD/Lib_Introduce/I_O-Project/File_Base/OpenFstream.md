# OpenFstream
***
映射OpenFstream接受流集合（StreamSet）为定义域，文件类型集合（FstreamSet）为值域，定义如下：

    Map OpenFstream(&StreamSet, &FstreamSSet, OpenFstreamFunction);

打开文件映射（OpenFstream）按照定义域流元素地址，以默认参数打开值域文件元素。

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

在案例代码中，构造并使用文件元素FstreamElement。地址生成使用字符串元素StringElement键入，转化为打开映射所需的流元素StreamElement，以供打开文件映射OpenFstream使用。打开后关闭CloseFstream、释放ReleaseFstream。最后释放字符串元素StringElement。