# UINT_MAX
***
宏UINT_MAX定义为：

    #define UINT_MAX 0xffffffff

宏UINT_MAX（常量）用于为unsigned int 类型最大值判断相关操作提供信息，常用于越界等异常处理。例如：

    {
        Element UIntElement;
        NewUIntElementFunction(EmptyElement, UIntElement);

        ...

        if(GetUIntElement(UIntElement) == UINT_MAX){
            Element ExcElement;
            throw ExcElement;
        }
    }

在案例代码中，判断无符号整型元素UIntElement值是否为最大值，如果为最大值则抛出异常。