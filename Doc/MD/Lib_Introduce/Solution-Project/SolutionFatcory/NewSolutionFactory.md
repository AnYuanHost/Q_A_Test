# NewSolutionFactory

***

映射NewSolutionFactory接受空元素集合（NullElementSet）为定义域和值域，定义为：

    Map NewSolutionFactory(&NullElementSet, &NullElementSet, NewSolutionFactoryFunction);

新建解决方案工厂映射（NewSolutionFactory）在值域空元素上默认构造解决方案工厂元素。

关于如何完成解决方案工厂构造，参考[SolutionFactory案例](SolutionFactory_Case.md)
