# FirstPendingQuestionFlowMap

***

映射FirstPendingQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map FirstPendingQuestionFlowMap(&QuestionFlowMap, &UIntSet, FirstPendingQuestionFlowMapFunction);

问答流图等待序列首地址映射（FirstPendingQuestionFlowMap）从定义域问答流图元素中获取等待序列的首地址信息，将其赋值到值域无符号整型元素上。

关于如何完成问答流图等待序列首地址获取，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
