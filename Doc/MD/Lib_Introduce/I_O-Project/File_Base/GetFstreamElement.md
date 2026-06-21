# GetFstreamElement
***
宏GetFstreamElement定义如下：

    #define GetFstreamElement(Ele) (*(std::fstream*)(Ele).KeySpace)

获取文件元素宏（GetFstreamElement）围绕标准库的std::fstream类设计，其可以将封装的Fstream元素解析成std::fstream类。

    {
        Element FstreamElement;
        NewFstreamFunction(EmptyElement, FstreamElement);

        GetFstreamElement(FstreamElement).open(...);

        CloseFstreamFunction(EmpytyElement, FstreamElement);

        ReleaseFstreamFunction(EmptyElement, FstreamElement);
    }

在案例代码中，构造并使用文件元素FstreamElement。使用映射NewFstream完成构建后，调用宏GetFstreamElement完成解析并使用open成员函数。完成操作后使用映射CloseFstream关闭，映射ReleaseFstream释放。