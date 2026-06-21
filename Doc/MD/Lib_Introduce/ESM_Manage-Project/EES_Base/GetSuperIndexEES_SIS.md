# GetSuperIndexEES_SIS

***

映射GetSuperIndexEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，其定义如下：

    Map GetSuperIndexEES_SIS(&OrderedPairSet, &NullElementSet, GetSuperIndexEES_SISFunction);

超索引检索器获取超索引映射（GetSuperIndexEES_SIS）分析定义域序偶元素，其格式为：<UIntSet, ElementEnvironmentSearcher>，其信息为：<超索引检索器地址信息，总元素环境检索器>。按照超索引检索器地址信息在与总元素环境检索器绑定的超索引检索器对应位置上，完成对超索引信息元素的获取。

该获取行为是转交传递元素实现的获取方式，一旦获取原信息就会被破坏，所以该映射一般只用于内部的信息调整。

因为是使用超索引检索器地址信息，所以需要相关映射维护地址元素和地址信息。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

关于如何使用该映射完成超索引检索器获取超索引信息，跳转至[EES_Base案例](EES_Base_Case.md)。
