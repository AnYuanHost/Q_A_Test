# FstreamConstructSolutionMap

***

映射FstreamConstructSolutionMap接受元素序偶集合（OrderedPairSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为值域，定义为：

    Map FstreamConstructSolutionMap(&OrderedPairSet, &SolutionLanguageExplainManagerSet, FstreamConstructSoluitionMapFunction);

文件构造解决方案流图映射（FstreamConstructSolutionMap）分析定义域元素序偶元素，其结构为：<FstreamSet, BoolSet>，其信息为：<文件元素，第一二图调控信息>。第一二图调控信息调控本次构建对象是替换前流图还是替换后流图。文件元素提供相关信息，在值域解决方案语言描述管理元素的指定位置上构造问答流图。

关于如何完成解决方案文件语言描述管理流图构造，参考[Solution_Language案例](Solution_Language_Case.md)
