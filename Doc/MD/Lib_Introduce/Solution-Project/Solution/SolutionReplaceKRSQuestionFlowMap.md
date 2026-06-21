# SolutionReplaceKRSQuestionFLowMap

***

映射SolutionReplaceKRSQuestionFlowMap接受解决方案集合（SolutionSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域，定义为：

    Map SolutionReplaceKRSQuestionFlowMap(&SolutionSet, &KRSPollingDrivenZero, SolutionReplaceKRSQuestionFlowMapFunction);

解决方案替换知识库问答流图映射（SolutionReplaceKRSQuestionFlowMap）在值域知识库零轮询机中，根据定义域解决方案提供的信息完成外循环问答流图的子图替换工作。

关于如何完成知识库问答流图的解决方案替换，参考[Solution案例](Solution_Case.md)
