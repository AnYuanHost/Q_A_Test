# SetSolutionFactoryMatchMap

***

映射SetSolutionFactoryMatchMap接受引用问答流图集合（QuoteQuestionFlowMap）为定义域，解决方案工厂集合（SolutionFactory）为值域，定义为：

    Map SetSolutionFactoryMatchMap(&QuoteQuestionFlowMap, &SolutionFactory, SetSolutionFactoryMatchMapFunction);

解决方案工厂设置匹配图映射（SetSolutionFactoryMatchMap）将定义域引用问答流图元素设置到值域解决方案工厂元素的指定位置。

关于如何完成解决方案工厂匹配图设置，参考[SolutionFactory案例](SolutionFactory_Case.md)
