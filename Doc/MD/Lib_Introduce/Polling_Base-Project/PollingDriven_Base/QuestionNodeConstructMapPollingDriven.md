# QuestionNodeConstructMapPollingDriven

***

映射QuestionNodeConstructMapPollingDriven接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域，定义为：

    Map QuestionNodeConstructMapPollingDriven(&NullElementSet, &PollingDrivenSet, QuestionNodeConstructMapPollingDrivenFunction);

问答节点构造轮询机映射映射（QuestionNodeConstructMapPollingDriven）在值域轮询机元素上，按照与其绑定的问答节点等信息构造可执行映射。

关于如何完成轮询机映射构造，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
