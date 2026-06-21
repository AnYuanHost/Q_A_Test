# GetStringElement
***
宏GetStringElement定义如下：

    #define GetStringElement(Ele) (*(std::string*)(Ele).KeySpace)

获取字符串元素宏（GetStringElement）用于将标准字符串类型元素解析为字符串并使用。

    {
        Element StringElement;
        NewStringFunction(EmptyElement, StringElement);

        GetStringElement(StringElement).ctr();

        ReleaseStringFucntion(EmptyElement, StringElement);
    }

在案例代码中，构造并使用字符串元素StringtElement。使用宏GetStringElement完成解析后，调用std::string的成员方法。因为StringElement结构不能使用泛化的释放映射释放，需要使用映射ReleaseStringFunction完成释放任务。