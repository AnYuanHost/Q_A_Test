# PutQuestionFlowMap

***

映射PutQuestionFlowMap接受元素序偶集合（OrderedPairSet）为定义域，问答流图集合（QuestionFlowMap）为值域，定义为：

    Map PutQuestionFlowMap(&OrderedPairSet, &QuestionFlowMap, PutQuestionFlowMapFunction);

问答流图存入元素映射（PutQuestionFlowMap）分析定义域元素序偶元素，其结构为：<UIntSet, QuestionNodeSet>，其信息为：<地址信息，待存入问答节点集合>。按照地址信息将待存入问答节点存储到值域问答流图元素的对应位置。

关于如何完成问答流图节点存入，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
