# StreamToString
***
映射StreamToString接受流集合（StreamSet）为定义域，字符串类型元素集合（StringSet）为值域，其定义如下：

    Map StreamToString(&StreamSet, &StringSet, StreamToStringFunction);

流转字符串映射（StreamToString）将定义域流元素表示的字符信息转换到值域字符串元素中。该转换过程会自动尝试释放值域字符串原有的信息。

    {
        Element StreamElement;

        // Initialize Stream Element

        Element StringElement;
        NewStringElementFunction(EmptyElement, StringElement);

        StreamToStringFunction(StreamElement, StringElement);

        std::cout << GetStringElement(StringElement);

        ReleaseStringFunction(EmptyElement, StringElement);
    }

在案例代码中，构造并使用流元素StreamElement。经过初始化后，使用其信息初始化字符串信息到字符串类型元素StringElement。完成StringElement的赋值后，通过解析宏GetString完成解析并输出。