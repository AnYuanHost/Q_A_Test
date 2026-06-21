# ReleaseSolutionFactory

***

映射ReleaseSolutionFactory接受空元素集合（NullElementSet）为定义域，解决方案工厂集合（SolutionFactory）为值域，定义为：

    Map ReleaseSolutionFactory(&NullElementSet, &SolutionFactory, ReleaseSolutionFactoryFunction);

释放解决方案工厂映射（ReleaseSolutionFactory）分析并释放值域解决方案工厂元素。

关于如何完成解决方案工厂释放，参考[SolutionFactory案例](SolutionFactory_Case.md)
