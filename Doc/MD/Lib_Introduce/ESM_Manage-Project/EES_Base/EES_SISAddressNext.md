# EES_SISAddressNext

***

映射EES_SISAddressNext接受元素序偶集合（OrderedPairSet）为定义域集合，无符号整型元素集合（NullElementSet）为值域，定义如下：

    Map EES_SISAddressNext(&OrderedPairSet, &UIntSet, EES_SISAddressNextFunction);

超索引检索器下一地址映射（EES_SISAddressNext）分析定义域序偶元素，其格式为：<UIntSet, ElementEnvironmentSet>，其信息为：<超索引检索器地址信息, 总元素环境检索器>。结合与总元素环境检索器绑定的超索引检索器内部信息，计算超索引检索器地址信息的下一地址对应信息，将其值赋给值域无符号整型元素。

对于默认的超索引检索器而言，其地址顺序简单，不需要结合容器可能的信息。但因为总元素环境检索器为了支持更多的超索引检索器类型，统一接口标准进行传参。

关于如何使用该映射完成超索引检索器下一地址计算，跳转至[EES_Base案例](EES_Base_Case.md)。
