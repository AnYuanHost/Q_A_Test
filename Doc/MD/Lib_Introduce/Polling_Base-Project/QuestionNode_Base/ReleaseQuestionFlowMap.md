# ReleaseQuestionFlowMap

***

映射ReleaseQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map ReleaseQuestionFlowMap(&NullElementSet, &QuestionFlowMap, ReleaseQuestionFlowMapFunction);

释放问答流图映射（ReleaseQuestionFlowMap）分析并释放值域问答流图元素。

关于如何完成问答流图释放，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
