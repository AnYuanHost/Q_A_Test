# ExpandQuestionFlowMap

***

映射ExpandQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map ExpandQuestionFlowMap(&QuestionFlowMap, &UIntSet, ExpandQuestionFlowMapFunction);

问答流图扩容映射（ExpandQuestionFlowMap）在定义域问答流图元素中申请新的槽位，并将申请到的地址结果置于值域无符号整型元素上。

该扩容映射只负责扩充容量，不进行任何节点相关的操作。

关于如何完成问答流图扩展，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
