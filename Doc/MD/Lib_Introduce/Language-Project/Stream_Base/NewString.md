# NewString
***
映射NewString接受空元素集合（NullElementSet）为定义域和值域，定义如下：

    Map NewString(&NullElementSet, &NullElementSet, NewStringFunction);

新建字符串元素映射（NewString）将在值域空元素上构造一个封装std::string的字符串类型元素。

    {
        Element StringElement;
        NewStringFunction(EmptyElement, StringElement);

        ...

        ReleaseStringFunction(EmptyElement, StringElement);
    }


在案例代码中，构造并使用字符串类型元素StringElement。映射NewString完成元素的构造。