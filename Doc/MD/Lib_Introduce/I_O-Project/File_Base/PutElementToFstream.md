# PutElementToFstream
***
映射PutElementToFstream接受全集（UniversalSet）为定义域，文件集合（FstreamSet）为值域，定义如下：

    Map PutElementToFstream(&UniversalSet, &FstreamSet, PutElementToFstreamFunction);

置元素于文件映射（PutElementToFstream）将定义域全集元素按照相关结构拷贝写入到值域文件中。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        // Initialize Fstream Element

        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        GetUIntElement(UIntElement) = 1;

        PutElementToFstreamFunction(UIntElement, FstreamElement);

        CloseFstreamFunction(EmptyElement, FstreamElement);
        ReleaseFstreamFunction(EmptyElement, FstreamElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。构造无符号元素UIntElement，并通过映射PutElementToFstream将其值写入文件元素FstreamElement中。