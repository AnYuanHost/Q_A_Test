# TurnOrderToActiveQuestionFlowMap

***

映射TurnOrderToActiveQuestionFlowMap接受无符号整型集合（UIntSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map TurnOrderToActiveQuestionFlowMap(&UIntSet, &QuestionFlowMap, TurnOrderToActiveQuestionFlowMapFunction);

元素流图状态转移到执行映射（TurnOrderToActiveQuestionFlowMap）在值域问答流图元素中将定义域地址信息代表的节点的状态转移到可执行状态。

关于如何完成问答流图节点状态转移，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
