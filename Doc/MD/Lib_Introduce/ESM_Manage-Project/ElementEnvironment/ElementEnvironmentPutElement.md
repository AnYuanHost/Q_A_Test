# ElementEnvironmentPutElement

***

映射ElementEnvironmentPutElement接受元素序偶集合（OrderedPairSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域，定义如下：

    Map ElementEnvironmentPutElement(&OrderedPairSet, &ElementEnvironmentSet, ElementEnvironmentPutElementFunction);

元素环境存放元素映射（ElementEnvironmentPutElement）分析定义域元素序偶元素，其格式为：<UIntSet, UniversalSet>，其信息为：<元素环境地址信息，待操作元素>。按照元素环境地址信息，在值域元素环境元素对应位置上，完成元素的存放。

存放执行转交传递，需要注意外部代码是否及时解除引用或错过引用。

关于元素环境如何完成元素存放，跳转至[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
