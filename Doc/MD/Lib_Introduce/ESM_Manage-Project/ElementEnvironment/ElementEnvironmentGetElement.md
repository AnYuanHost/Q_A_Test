# ElementEnvironmentGetElement

***

映射ElementEnvironmentHGetElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map ElementEnvironmentGetElement(&OrderedPairSet, &NullElementSet, ElementEnvironmentGetElementFunction);

元素环境获取元素映射（ElementEnvironmentGetElement）分析定义域元素序偶元素，其格式为：<UIntSet, ElementEnvironemntSet>，其信息为：<元素环境地址信息，元素环境>。按照地址信息，在元素环境对应地址上，完成对元素的获取并将结果转交传递到值域空元素上。

关于元素环境如何完成元素获取，跳转至[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
