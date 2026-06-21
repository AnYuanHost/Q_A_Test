# LexOrderEESSort

***

映射LexOrderEESSort接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域，定义如下：

    Map LexOrderEESSort(&NullElementSet, &LexOrderEES, LexOrderEESSortFunction);

字典序子元素环境检索器排序映射（LexOrderEESSort）在值域字典序子元素环境检索器元素上完成排序。

该排序映射会按照指定的字典序升降序，在容器中进行排序。同时，对于已经置懒的空间，则按照其映射的超索引信息的先后顺序进行排序。

关于如何完成字典序子元素环境检索器排序，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。