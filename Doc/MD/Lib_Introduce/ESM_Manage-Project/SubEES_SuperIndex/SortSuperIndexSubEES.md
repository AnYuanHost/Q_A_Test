# SortSuperIndexSubEES

***

映射SortSuperIndexSubEES接受空元素集合（NullElementSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域，定义为：

    Map SortSuperIndexSubEES(&NullElementSet, &SuperIndexSubEES, SortSuperIndexSubEESFunction);

超索引子元素环境检索器排序映射（SortSuperIndexSubEES）在值域超索引子元素环境检索器上完成排序。

该排序会按照指定的超索引先后顺序，在容器中进行排序。同时，对于已经置懒的空间，则按照其映射的超索引信息的先后顺序进行排序。

关于如何使用超索引子元素环境检索器排序映射，跳转至[SubEES_SuperIndex案例](SubEES_SuperIndex_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
