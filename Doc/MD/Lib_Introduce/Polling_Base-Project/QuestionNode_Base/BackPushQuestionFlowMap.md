# BackPushQuestionFlowMap

***

映射BackPushQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map BackPushQuestionFlowMap(&NullElementSet, &QuestionFlowMap, BackPushQuestionFlowMapFunction);

问答流图后推映射（BackPushQuestionFlowMap）在值域问答流图元素上进行后推操作，将所有可进入下一状态的节点进行状态转移。

