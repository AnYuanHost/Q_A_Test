# _8BitSet

***

集合_8BitSet为所有8比特元素的集合，定义如下：

    Set _8BitSet(EmptyElement, _8BitSetTest);

8比特元素集合（_8BitSet）由所有8比特元素组成，用于8比特元素的相关操作。其元素可以被宏Get8BitElement解析。

    {
        Element _8BitElement;
        New8BitElementFunction(EmptyElement, _8BitElement);

        if(_8BitSetTest(_8BitElement, _8BitSet)){
            Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_CoreKRS;
        }
    }

在案例代码中，构造并使用布尔类型元素BoolElement。在通过8比特类型集合测试后，调用宏对BoolElement进行赋值。赋值使用系统用代码来完成赋值。
