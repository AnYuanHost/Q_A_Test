# Get8BitElement

***

宏Get8BitElement定义如下：

    #define Get8BitElement(Ele) (*((unsigned char*)((Ele).KeySpace)))

获取8Bit元素宏（Get8BitElement）解析8Bit元素，将其解析为无符号字符类型进行操作。

一般情况下，虽然其被解析为无符号字符类型，但一般仅看作0~255的整型类型进行操作。

    {
        Element _8BitElement;
        New8BitElementFunction(EmptyElement, _8BitElement);

        Get8BitElement(_8BitElement) = 1;

        ...
    }

在案例代码中，构造并使用8Bit元素_8BitElement。通过Get8BitElement宏解析后，进行赋值。
