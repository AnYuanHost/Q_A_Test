# GetQuestionNodeDomain

***

映射GetQuestionNodeDomain接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域，定义为:

    Map GetQuestionNodeDomain(&QuestionNodeSet, &NullElementSet, GetQuestionNodeDomainFunction);

问答节点获取定义域信息映射（GetQuestionNodeDomain）从定义域问答节点元素中获取其问题的定义域信息树，将其转交传递到值域空元素上。

关于如何完成问答节点定义域信息获取，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
