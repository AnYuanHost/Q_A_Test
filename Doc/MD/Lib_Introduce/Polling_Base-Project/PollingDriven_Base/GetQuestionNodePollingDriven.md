# GetQuestionNodePollingDriven

***

映射GetQuestionNodePollingDriven接受轮询机集合（PollingDrivenSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetQuestionNodePollingDriven(&PollingDrivenSet, &NullElementSet, GetQuestionNodePollingDrivenFunction);

轮询机问答节点获取映射（GetQuestionNodePollingDriven）从定义域轮询机元素中获取问答节点元素，并转交传递到值域空元素上。

该映射一般用于最后主动回收问答节点的引用元素。

关于如何完成轮询机问答节点获取，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
