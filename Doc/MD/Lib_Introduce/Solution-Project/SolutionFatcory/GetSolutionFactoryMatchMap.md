# GetSolutionFactoryMatchMap

***

映射GetSolutionFactoryMatchMap接受解决方案工厂集合（SolutionFactory）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetSolutionFactoryMatchMap(&SolutionFactory, &NullElementSet, GetSolutionFactoryMatchMapFunction);

解决方案工厂获取匹配图映射（GetSolutionFactoryMatchMap）从定义域解决方案工厂元素中获取匹配图，转交传递到值域空元素上。

关于如何完成解决方案工厂匹配图获取，参考[SolutionFactory案例](SolutionFactory_Case.md)
