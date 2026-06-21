# NewFstream
***
映射NewFstream接受空元素集合（NullElementSet）为定义域和值域，定义如下：

    Map NewFstream(&NullElementSet, &NullElementSet, NewFstreamFunction);

新建文件映射（NewFstream）在值域空元素上构造一个文件类型元素。
需注意，构造后不能使用通用的释放映射，必须使用对应的释放映射。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        ReleaseFstreamFunction(EmptyElement, FstreamElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。使用映射NewFstream完成构造后，使用映射ReleaseFstream完成释放。