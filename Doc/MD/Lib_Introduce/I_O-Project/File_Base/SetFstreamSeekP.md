# SetFstreamSeekP
***
映射SetFstreamSeekP接受无符号整型集合（UIntSet）为定义域，文件类型集合（FstreamSet）为值域，定义如下：

    Map SetFstreamSeekP(&UIntSet, &FstreamSet, SetFstreamSeekPFunction);

设置文件写偏移映射（SetFstreamSeekP）用于设置标准库std::fstream::seekp方法的值，其接受定义域无符号整型元素值，在值域文件元素上完成设置。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        // Initialize Fstream Element

        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        GetUIntElement(UIntElement) = 5;

        SetFstreamSeekPFunction(UIntElement, FstreamElement);

        CloseFstreamFunction(EmptyElement, FstreamElement);
        ReleaseFstreamFunction(EmptyElement, FstreamElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。初始化需要完成地址的生成和文件的打开。随后，通过无符号整型UIntElement和映射SetFstreamSeekP将文件元素FstreamElement写入的偏移设置为5。