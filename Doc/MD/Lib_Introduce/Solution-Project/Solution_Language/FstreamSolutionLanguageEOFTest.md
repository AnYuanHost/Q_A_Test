# FstreamSolutionLanguageEOFTest

***

映射FstreamSolutionLanguageEOFTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map FstreamSolutionLanguagEOFTest(&FstreamSet, &BoolSet, FstreamSolutionLanguageEOFTestFunction);

解决方案语言文件末尾检测映射（FstreamSolutionLanguageEOFTest）在定义域文件元素上进行分析，判断是否到达文件末尾，并将判断结果赋值给值域布尔元素上。

关于如何完成解决方案文件语言末尾检测，参考[Solution_Language案例](Solution_Language_Case.md)
