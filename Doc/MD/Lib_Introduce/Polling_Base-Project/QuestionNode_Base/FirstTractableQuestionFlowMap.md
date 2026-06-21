# FirstTractableQuestionFlowMap

***

映射FirstTractableQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map FirstTractableQuestionFlowMap(&QuestionFlowMap, &UIntSet, FirstTractableQuestionFlowMapFunction);

问答流图可执行序列首地址映射（FirstTractableQuestionFlowMap）从定义域问答流图元素中获取可执行序列的第一个插槽的地址信息，将其赋值给值域无符号整型元素。

关于如何完成问答流图可执行序列首地址获取，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
