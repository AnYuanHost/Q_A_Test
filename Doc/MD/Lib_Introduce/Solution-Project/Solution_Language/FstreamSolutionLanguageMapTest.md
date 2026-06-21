# FstreamSolutionLanguageMapTest

***

映射FstreamSolutionLanguageMapTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map FstreamSolutionLanguageMapTest(&FstreamSet, &BoolSet, FstreamSolutionLanguageMapTestFunction);

解决方案语言文件图检测映射（FstreamSolutionLanguageMapTest）在定义域文件元素上进行图检测，检测是否符合解决方案语言中图结构的格式，并将判断结果赋值给值域布尔元素。

关于如何完成解决方案文件语言图检测，参考[Solution_Language案例](Solution_Language_Case.md)
