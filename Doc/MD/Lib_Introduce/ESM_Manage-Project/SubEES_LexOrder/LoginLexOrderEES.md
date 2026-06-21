# LoginLexOrderEES

***

映射LoginLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，字典序子元素检索器集合（LexOrderEES）为值域，定义为：

    Map LoginLexOrderEES(&OrderedPairSet, &LexOrderEES, LoginLexOrderEESFunction);

字典序子元素环境检索器注册映射（LoginLexOrderEES）分析定义域元素序偶元素，其结构为：<StreamSet, SuperIndexSet>，其信息为：<待注册流信息，超索引信息>。该映射按照待注册流信息，在值域子元素环境检索器上完成注册。该注册行为会在末尾插入并排序。

注册行为会在无空闲插槽、检测到已注册等情况下出现错误，并抛出异常。

关于如何完成字典序子元素环境检索器注册，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
