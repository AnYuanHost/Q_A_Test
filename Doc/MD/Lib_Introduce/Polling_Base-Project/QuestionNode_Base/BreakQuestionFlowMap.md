# BreakQuestionFlowMap

***

映射BreakQuestionFlowMap接受无符号整型集合（UIntSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map BreakQuestionFlowMap(&UIntSet, &QuestionFlowMap, BreakQuestionFlowMapFunction);

问答流图破坏节点映射（BreakQuestionFlowMap）按照定义域地址信息，在值域问答流图元素中释放指定位置的节点。

关于如何完成问答流图节点破坏，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
