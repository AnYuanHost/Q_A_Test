# GetQuestionNodePost

***

映射GetQuestionNodePost接受问答机集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetQuestionNodePost(&QuestionNodeSet, &NullElementSet, GetQuestionNodePostFunction);

问答节点获取后置问答序列映射（GetQuestionNodePost）从定义域问答节点元素中获取后置问答节点信息序列，将其转交传递到值域空元素上。

关于如何完成问答节点后置节点，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
