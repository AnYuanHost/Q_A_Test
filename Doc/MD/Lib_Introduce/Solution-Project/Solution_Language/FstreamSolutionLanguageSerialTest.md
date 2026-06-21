# FstreamSolutionLanguageSerialTest

***

映射FstreamSolutionLanguageSerialTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map FstreamSolutionLanguageSerialTest(&FstreamSet, &BoolSet, FstreamSolutionLanguageSerialTestFunction);

解决方案语言文件串行检测映射（FstreamSolutionLanguageSerialTest）在定义域文件元素上进行问答流图串行检测，检测下文是否符合问答流图的串行结构，并将检测结果赋值给值域布尔元素。

关于如何完成解决方案文件语言串行检测，参考[Solution_Language案例](Solution_Language_Case.md)
