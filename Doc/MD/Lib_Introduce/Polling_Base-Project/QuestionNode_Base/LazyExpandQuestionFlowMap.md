# LazyExpandQuestionFlowMap

***

映射LazyExpandQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map LazyExpandQuestionFlowMap(&NullElementSet, &QuestionFlowMap, LazyExpandQuestionFlowMapFunction);

问答流图懒增长映射（LazyExpandQuestionFlowMap）在值域问答流图元素上记录置懒槽位的增长。

关于如何完成问答流图懒增长，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
