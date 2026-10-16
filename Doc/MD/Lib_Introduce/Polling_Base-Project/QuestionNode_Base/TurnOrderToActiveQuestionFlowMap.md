# TurnOrderToActiveQuestionFlowMap

***

映射TurnOrderToActiveQuestionFlowMap接受无符号整型集合（UIntSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map TurnOrderToActiveQuestionFlowMap(&UIntSet, &QuestionFlowMap, TurnOrderToActiveQuestionFlowMapFunction);

元素流图状态转移到执行映射（TurnOrderToActiveQuestionFlowMap）在值域问答流图元素中将定义域地址信息代表的节点的状态转移到可执行状态。

