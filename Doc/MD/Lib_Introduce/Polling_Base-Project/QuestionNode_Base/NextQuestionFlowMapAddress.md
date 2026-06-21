# NextQuestionFlowMapAddress

***

映射NextQuestionFlowMapAddress接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map NextQuestionFlowMapAddress(&OrderedPairSet, &NullElementSet, NextQuestionFlowAddressFunction);

问答流图下一地址映射（NextQuestionFlowMapAddress）分析定义域元素序偶元素，其结构为：<UIntSet, QuestionFlowMap>，其信息为：<地址信息，问答流图元素>。在问答流图元素中计算地址信息的下一地址，将其地址信息值赋值到值域无符号整型元素上。

关于如何完成问答流图下一地址计算，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
