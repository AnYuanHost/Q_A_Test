# DefragmentLexOrderEES

***

映射DefragmentLexOrderEES接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域，定义为：

    Map DefragmentLexOrderEES(&NullElementSet, &LexOrderEES, DefragmentLexOrderEESFunction);

字典序子元素环境检索器碎片整理映射（DefragmentLexOrderEES）在值域字典序子元素环境检索器元素上进行碎片整理操作。

碎片整理映射是排序的变种，其只将置懒的槽位全部移动到容器末尾。

关于如何完成字典序子元素环境检索器碎片整理，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
