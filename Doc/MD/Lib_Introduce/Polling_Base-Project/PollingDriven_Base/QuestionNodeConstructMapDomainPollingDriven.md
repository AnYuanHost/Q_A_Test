# QuestionNodeConstructMapDomainPollingDriven

***

映射QuestionNodeConstructMapDomainPollingDriven接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map QuestionNodeConstructMapDomainPollingDriven(&OrderedPairSet, &NullElementSet, QuestionNodeConstructMapDomainPollingDrivenFunction);

问答节点构造轮询机映射域映射（QuestionNodeConstructMapDomainPollingDriven）分析定义域元素序偶元素，其格式为：<QuestionTreeNodeSet, PollingDrivenSet>，其信息为：<待解释域信息树根节点，轮询机元素>。待解释域信息树根节点用来指定待解释信息的范围，轮询机元素提供解释所需的环境信息，并将解释完成后各个被解释元素组成的序列树置于值域空元素上。

关于如何完成轮询机映射域构造，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
