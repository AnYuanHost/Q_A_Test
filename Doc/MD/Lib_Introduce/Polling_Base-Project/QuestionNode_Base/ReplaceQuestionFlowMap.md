# ReplaceQuestionFlowMap

***

映射ReplaceQuestionFlowMap接受问答流图替换包集合（QuestionFlowMapReplacePackage）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map ReplaceQuestionFlowMap(&QuestionFlowReplacePackage, &QuestionFlowMap, ReplaceQuestionFlowMapFunction);

问答流图替换映射（ReplaceQuestionFlowMap）分析定义域问答流图替换包元素，根据其中信息在值域问答流图元素中完成替换。

关于如何完成问答流图替换，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
