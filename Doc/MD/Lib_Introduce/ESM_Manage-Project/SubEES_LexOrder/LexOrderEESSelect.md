# LexOrderEESSelect

***

映射LexOrderEESSelect接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义如下：

    Map LexOrderEESSelect(&OrderedPairSet, &UIntSet, LexOrderSelectFunction);

字典序子元素环境检索器检索映射（LexOrderEESSelect）分析定义域序偶元素，其格式为：<StreamSet, LexOrderSearcher>，其信息为：<待检索流信息，字典序子元素环境检索器>。按照流信息，在字典序子元素环境检索器中完成检索，将检索到的地址信息存储到值域无符号整型元素上。

如果未能检索到对应信息，则赋值UINT_MAX

关于如何使用字典序子元素环境检索器检索映射，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
