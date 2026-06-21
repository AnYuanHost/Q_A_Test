# QuestionNodeDestructMapDomainPollingDriven

***

映射QuestionNodeDestructMapDomainPollingDriven接受元素序偶集合（OrderedPairSet）为定义域，元素序列集合（ElementOrderSet）为值域，定义为：

    Map QuestionNodeDestructMapDomainPollingDriven(&OrderedPairSet, &ElementOrderSet, QuestionNodeDestructMapDomainPollingDrivenFunction);

问答节点析构轮询机可执行映射域映射（QuestionNodeDestructMapDomainPollingDriven）分析定义域元素序偶元素，其结构为：<ElementOrderSet, PollingDrivenSet>，其信息为：<待解释信息，轮询机元素>。待解释域信息树根节点用来指定待解释信息的范围，轮询机元素提供解释所需的环境信息，将值域元素序列树进行分析并析构。

关于如何完成轮询机映射域析构，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
