# FstreamSolutionLanguageParallelTest

***

映射FstreamSolutionLanguageParallelTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map FstreamSolutionLanguageParallelTest(&FstreamSet, &BoolSet, FstreamSolutionLanguageParallelTestFunction);

解决方案语言文件并行检测映射（FstreamSolutionLanguageParallelTest）在定义域文件元素上进行问答流图并行检测，检测下文是否符合问答流图的串行结构，并将检测结果赋值给值域布尔元素。

关于如何完成解决方案文件语言并行检测，参考[Solution_Language案例](Solution_Language_Case.md)
