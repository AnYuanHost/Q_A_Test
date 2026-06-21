# StringSet
***
集合StringSet为字符串类型元素的集合，定义如下：

    Set StringSet(EmptyElement, StringSetTest);

字符串类型元素集合（StringSet）由所有字符串类型元素组成，用于对字符串类型元素的相关操作。

    {
        Element StringElement;
        NewStringElementFunction(EmptyElement, StringElement);

        if(StringSetTest(StringElement, StringSet)){
            GetStringElement(StringElement).ctr();
        }

        ReleaseStringFunction(EmptyElement, StringElement);
    }

在案例代码中，构造并使用字符串类型元素StringElement。通过构造函数构造后，检测其是否属于字符串类型集合（StringSet），通过后调用GetStringElement宏和相关成员方法。最后通过释放映射释放。