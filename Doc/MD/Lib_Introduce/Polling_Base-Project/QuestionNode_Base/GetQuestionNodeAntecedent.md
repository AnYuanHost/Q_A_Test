# GetQuestionNodeAntecedent

***

映射GetQuestionNodeAntecednet接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetQuestionNodeAntecedent(&QuestionNodeSet, &NullElementSet, GetQuestionNodeAntecedentFunction);

问答节点获取前置序列映射（GetQuestionNodeAntecedent）从定义域问答节点元素中获取前置问答节点信息序列，将其转交到值域空元素上。

关于如何完成问答节点前置问答节点信息序列获取，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
