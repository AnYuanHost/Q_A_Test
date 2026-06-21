# ElementEnvironmentRetain

***

映射ElementEnvironmentRetain接受无符号整型集合（UIntSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域，其定义如下：

    Map ElementEnvironemntRetain(&UIntSet, &ElementEnvironmentSet, ElementEnvironmentRetainFunction);

元素环境缩容映射（ElementEnvironmentRetain）根据定义域无符号整型信息确定如何在值域元素环境元素上执行缩容操作。定义域无符号整型信息指明应该保留的元素数量。

因为其元素存储关系受总元素环境检索器调配，故该映射只在总元素环境检索器缩容时进行处理。

关于元素环境如何完成缩容，跳转至[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
