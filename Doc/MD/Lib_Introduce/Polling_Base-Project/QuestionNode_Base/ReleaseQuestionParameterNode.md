# ReleaseQuestionParameterNode

***

映射ReleaseQuestionParameterNode接受空元素集合（NullElementSet）为定义域，问答节点参数节点集合（QuestionParameterNode）为值域，定义为：

    Map ReleaseQuestionParameterNode(&NullElementSet, &QuestionParameterNode, ReleaseQuestionParameterNodeFunction);

释放问答节点参数节点映射（ReleaseQuestionParameterNode）分析并释放值域问答节点参数节点元素。

该映射会逐层展开问答节点参数并完成释放。

关于如何释放问答节点参数节点，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
