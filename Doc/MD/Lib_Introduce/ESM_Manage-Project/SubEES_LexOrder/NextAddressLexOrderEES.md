# NextAddressLexOrderEES

***

映射NextAddressLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map NextAddressLexOrderEES(&OrderedPairSet, &UIntSet, NextAddressLexOrderEESFunction);

字典序子元素环境检索器下一地址映射（NextAddressLexOrderEES）分析定义域元素序偶元素，其格式为：<UIntSet, LexOrderEES>，其信息为：<地址信息，字典序子元素环境检索器>。该映射计算地址信息在子元素环境检索器中的下一个地址。该映射用于提供一种遍历方法，方便操作所有数据。

关于如何完成字典序子元素环境检索器下一地址的获取，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
