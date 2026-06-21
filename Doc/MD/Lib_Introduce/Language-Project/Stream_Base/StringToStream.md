# StringToStream
***
映射StringToStream接受字符串类型集合（StringSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map StringToStream(&StringSet, &NullElementSet, StringToStreamFunction);

字符串转流映射（）使用定义域字符串类型元素的字符串信息，在值域空元素上构造对应的流元素。

    {
        Element StringElement;
        NewStringElementFunction(EmptyElement, StringElement);

        // Initialize String Element

        Element StreamElement;
        
        StringToStreamFunction(StringElement, StreamElement);

        std::cout << StreamElement.KeySpace;

        ReleaseStringElementFunction(EmptyElement, StringElement);
    }

在案例代码中，构造并使用字符串类型元素StringElement。在对StrngElement的值初始化后，通过映射StringToStream完成对流元素StreamElement的构建。随后将StreamElement输出。最终，释放StringElement。