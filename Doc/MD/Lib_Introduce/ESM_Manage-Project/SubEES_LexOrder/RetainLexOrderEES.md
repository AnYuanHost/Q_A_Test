# RetainLexOrderEES

***

映射RetainLexOrderEES接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域，定义为：

    Map RetainLexOrderEES(&NullElementSet, &LexOrderEES, RetainLexOrderEESFunction);

字典序子元素环境检索器缩容映射（RetainLexOrderEES）将值域字典序子元素环境检索器的容器进行缩容处理，将所有置懒的空间去除。

缩容映射必须跟在碎片整理后面，这是元素环境检索器的指导手册要求完成的，缩容映射只需要将末尾的空余空间去除即可。

关于如何完成字典序子元素环境检索器缩容，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
