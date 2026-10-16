# LazyExpandQuestionFlowMap

***

映射LazyExpandQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map LazyExpandQuestionFlowMap(&NullElementSet, &QuestionFlowMap, LazyExpandQuestionFlowMapFunction);

问答流图懒增长映射（LazyExpandQuestionFlowMap）在值域问答流图元素上记录置懒槽位的增长。

