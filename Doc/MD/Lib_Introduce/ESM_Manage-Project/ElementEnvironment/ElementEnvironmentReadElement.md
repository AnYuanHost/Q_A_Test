# ElementEnvironmentReadElement

***

映射ElementEnvironmentReadElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map ElementEnvironmentReadElement(&OrderedPairSet, &NullElementSet, ElementEnvironmentReadElementFunction);

元素环境读取元素映射（ElementEnvironmentReadElement）分析定义域元素序偶元素，其格式为：<UIntSet, ElementEnvironemntSet>，其信息为：<元素环境地址信息，元素环境>。按照地址信息，在元素环境对应地址上，完成对元素的读取并将结果引用传递到值域空元素上。

关于元素环境如何完成元素读取，跳转至[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
