# QuestionNodeDestructMapPollingDriven

***

映射QuestionNodeDestructMapPollingDriven接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域，定义为：

    Map QuestionNodeDestructMapPollingDriven(&NullElementSet, &PollingDrivenSet, QuestionNodeDestructMapPollingDrivenFunction);

问答节点析构轮询机映射映射（QuestionNodeDestructMapPollingDriven）在值域轮询机元素中，按照与其绑定的问答节点信息析构映射元素。

关于如何完成轮询机映射析构，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
