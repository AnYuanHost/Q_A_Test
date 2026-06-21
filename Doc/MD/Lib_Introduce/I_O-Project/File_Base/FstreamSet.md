# FstreamSet
***
集合FstreamSet为所有文件类型元素的集合，定义如下：

    Set FstreamSet(EmptyElement, FstreamSetTest);

文件类型元素集合（FstreamSet）由所有文件类型元素组成，文件类型元素封装标准库std::fstream类。该集合用于和文件相关的操作。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        if(FstreamSetTest(FstreamElement, FstreamSet)){
            ...
        }

        ReleaseFstreamFunction(EmptyElement, FstreamElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。经过映射NewFstream构造后，可以通过集合FstreamSet的判断，继续之后的操作。使用释放映射ReleaseFstream释放。