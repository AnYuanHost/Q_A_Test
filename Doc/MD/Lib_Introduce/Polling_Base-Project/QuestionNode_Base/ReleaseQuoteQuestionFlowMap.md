# ReleaseQuoteQuestionFlowMap

***

映射ReleaseQuoteQuestionFlowMap接受空元素集合（NullElementSet）为定义域，引用问答流图集合（QuoteQuestionFlowMap）为值域，定义为：

    Map ReleaseQuoteQuestionFlowMap(&NullElementSet, &QuoteQuestionFlowMap, ReleaseQuoteQuestionFlowMapFunction);

释放引用问答流图元素映射（ReleaseQuoteQuestionFlowMap）分析并释放值域引用问答流图元素。

关于如何完成引用问答流图元素释放，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
