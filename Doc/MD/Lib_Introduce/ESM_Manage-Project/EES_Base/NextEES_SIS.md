# NextEES_SIS

***

映射NextEES_SIS接受总元素环境检索器集合（ElementEnvironmentSearcher）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map NextEES_SIS(&ElementEnvironmentSearcher, &NullElementSet, NextEES_SISFunction);

超索引检索器下一超索引映射（NextEES_SIS）从与总元素环境检索器绑定的超索引检索器中获取下一个可被分配的超索引信息，将其拷贝到值域空元素上。

准确来说，其内部通过等价的无符号整型完成转换操作来获取超索引信息。但因为值域被分配到的是独立的超索引信息，故使用“拷贝”一词。

关于如何使用该映射完成超索引检索器下一超索引信息获取，跳转至[EES_Base案例](EES_Base_Case.md)。
