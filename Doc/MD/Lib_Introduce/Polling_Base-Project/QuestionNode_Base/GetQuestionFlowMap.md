# GetQuestionFlowMap

***

映射GetQuestionFlowMap接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetQuestionFlowMap(&OrderedPairSet, &NullElementSet, GetQuestionFlowMapFunction);

元素流图获取元素映射（GetQuestionFlowMap）分析定义域元素序偶元素，其结构为：<UIntSet, QuestionFlowMap>，其信息为：<地址信息，问答流图元素>。按照地址信息从问答流图元素中获取对应的问答节点元素，将其转交传递到值域空元素上。

关于如何完成问答流图节点获取，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
