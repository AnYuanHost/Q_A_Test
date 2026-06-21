# EmptyElement
***
元素EmptyElement为空元素，其成员Size和KeySpace值默认为0，即：

    Element EmptyElement(0, nullptr);

空元素EmptyElement主要用于填充映射，这些映射往往只操作定义域或者值域元素。

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);
    }

在上节代码中，构造无符号整型元素只需要操作值域元素，所以其定义域元素需要由空元素（EmptyElement）占位。