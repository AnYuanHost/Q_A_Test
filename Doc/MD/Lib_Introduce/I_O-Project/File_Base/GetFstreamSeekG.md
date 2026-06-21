# GetFstreamSeekG
***
映射GetFstreamSeekG接受为文件类型集合（FstreamSet）定义域，无符号整型集合（UIntSet）为值域，定义如下：

    Map GetFstreamSeekG(&FstreamSet, &UIntSet, GetFstreamSeekGFunction);

获取文件读偏移映射（GetFstreamSeekG）用于获取文件读时的偏移值，从定义域文件元素中获取后，将对应值置于置于无符号整型元素中。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        // Initialize Fstream Element

        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        GetFstreamSeekGFunction(FstreamElement, UIntElement);

        CloseFstreamFunction(EmptyElement, FstreamElement);
        ReleaseFstreamFunction(EmptyElement, FstreamElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。初始化需要完成地址的生成和文件的打开，并调整写时的偏移值。随后，通过应色号GetFstreamSeekG完成获取。