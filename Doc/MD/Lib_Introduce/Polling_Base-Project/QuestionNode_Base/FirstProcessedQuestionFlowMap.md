# FirstProcessedQuestionFlowMap

***

映射FirstProcessedQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map FirstProcessedQuestionFlowMap(&QuestionFlowMap, &UIntSet, FirstProcessedQuestionFlowMapFunction);

问答流图已完成序列首地址映射（FirstProcessedQuestionFlowMap）从定义域问答流图元素中获取已完成序列的第一个插槽的地址信息，并将其赋值给值域无符号整型元素。

关于如何完成问答流图已完成序列首地址的获取，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
