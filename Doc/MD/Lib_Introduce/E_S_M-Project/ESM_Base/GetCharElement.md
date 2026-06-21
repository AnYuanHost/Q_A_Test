# GetCharElement
***
宏GetCharElement定义如下：

    #define GetCharElement(Ele) (*(char*)(Ele).KeySpace)

获取字符元素宏（GetCharElement）负责将字符类型元素解析为字符类型。

    {
        Element CharElement;
        NewCharElementFunction(EmptyElement, CharElement);

        GetCharElement(CharElement) = 'A';

        ...
    }

在案例代码中，构建并使用了字符类型元素CharElement。在赋值时，使用宏GetCharElement将其解析为char字符，从而完成赋值。