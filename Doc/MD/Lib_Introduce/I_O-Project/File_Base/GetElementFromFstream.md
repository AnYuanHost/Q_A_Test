# GetElementFromFstream
***
映射GetElementFromFstream接受文件集合（FstreamSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map GetElementFromFstream(&FstreamSet, &NullElementSet, GetElementFromFstreamFunction);

从文件获取元素映射（GetElementFromFstream）按照格式从定义域文件元素中获取一个元素信息，按照信息在值域空元素上完成构造。
这种构造不会影响文件原有的信息。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        // Initialize Fstream Element

        Element StreamElement;

        GetElementFromFstreamFunction(FstreamElement, StreamElement);

        CloseFstreamFunction(EmptyElement, FstreamElement);
        ReleaseFstreamFunction(EmptyElmeent, FstreamElement);
    }

 在案例代码中，构造并使用文件元素FstreamElement。预期承载数据的流元素StreamElement，作为值域元素受映射GetElementFromFstream调用。