# NewLexOrderEESDefaultParameter

***

映射NewLexOrderEESDefaultParameter接受空元素集合（NullElementSet）为定义域和值域，定义如下：

    Map NewLexOrderEESDefaultParameter(&NullElementSet, &NullElementSet, NewLexOrderEESDefaultParameterFunction);

新建字典序子元素环境检索器默认参数映射（NewLexOrderEESDefaultParameter）在值域空元素上创建一组信息，记录一份默认的字典序子元素环境检索器参数。

在本模块中，尝试将默认的新建操作转化为前置的参数生成，和后置通用的参数构造。所以在原本的默认构造方法中分离出单独的默认参数生成映射。

关于如何完成字典序子元素环境检索器默认参数生成，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
