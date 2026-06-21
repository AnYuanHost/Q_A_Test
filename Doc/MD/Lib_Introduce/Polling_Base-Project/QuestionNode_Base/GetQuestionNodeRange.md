# GetQuestionNodeRange

***

映射GetQuestionNodeRange接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetQuestionNodeRange(&QuestionNodeSet, &NullElementSet, GetQuestionNodeRangeFunction);

问答节点获取值域映射（GetQuestionNodeRange）从定义域问答节点元素中获取值域信息树，并将其转交传递到值域空元素上。

关于如何完成问答节点值域信息获取，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
