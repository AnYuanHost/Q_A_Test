# ElementEnvironmentNextAddress

***

映射ElementEnvironmentNextAddress接受元素环境集合（ElementEnvironmentSet）为定义域，无符号整型集合（&UIntSet）为值域，定义如下：

    Map ElementEnvironmentNextAddress(&ElementEnvironmentSet, &UIntSet, 
    ElementEnvironmentNextAddressFunction);

元素环境下一地址映射（ElementEnvironmentNextAddress）在定义域元素环境元素上完成下一可分配地址的计算，其结果赋值给值域无符号整型元素。

因为元素环境扩容映射会改变下一地址的计算，在总元素环境检索器分配逻辑中，先调取下一地址映射获取地址值，随后再进行扩容映射操作。

关于元素环境如何完成下一地址计算，跳转至[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
