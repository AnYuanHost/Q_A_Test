# FstreamSolutionLanguageSerialParallelTest

***

映射FstreamSolutionLanguageSerialParallelTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map FstreamSolutionLanguageSerialParallelTest(&FstreamSet, &BoolSet, FstreamSolutionLanguageSerialParallelTestFunction);

解决方案语言文件串并行检测映射（FstreamSolutionLanguageSerialParallelTest）在定义域文件元素上进行串并行检测，检测此时应该进行哪种检测，并将检测结果赋值给值域布尔元素上。

关于如何完成解决方案文件语言串并行检测，参考[Solution_Language案例](Solution_Language_Case.md)
