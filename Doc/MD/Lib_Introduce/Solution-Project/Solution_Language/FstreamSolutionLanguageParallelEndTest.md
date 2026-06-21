# FstreamSolutionLanguageParallelEndTest

***

映射FstreamSolutionLanguageParallelEndTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map FstreamSolutionLanguageParallelEndTest(&FstreamSet, &BoolSet, FstreamSolutionLanguageParallelEndTestFunction);

解决方案语言文件并行末尾测试映射（FstreamSolutionLanguageParallelEndTest）在定义域文件元素上进行并行末尾检测，检测下文是否符合问答流图并行结构末尾，并将检测结果赋值给值域布尔元素。

关于如何完成解决方案文件语言并行末尾检测，参考[Solution_Language案例](Solution_Language_Case.md)
