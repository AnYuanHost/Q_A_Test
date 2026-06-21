# FstreamConstructSolutionParallel

***

映射FstreamConstructSolutionParallel接受元素序列集合（ElementOrderSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为值域，定义为：

    Map FstreamConstructSolutionParallel(&ElementOrderSet, &SolutionLanguageExplainManagerSet, FstreamConstructSolutionParallelFunction);

文件构造解决方案并行结构映射（FstreamConstructSolutionParallel）分析定义域元素序列集合，其结构为：<FstreamSet, BoolSet, ElementOrderSet, UIntSet>，其信息为：<文件元素，第一二图调控信息，图前置节点信息，地址用无符号整型元素>。与串行构造不同的是，并行构造仅仅负责调控信息并派生下一级的串并行映射，其并不负责具体的节点构造。其需要操作文件元素，调整图前置节点信息，除此之外并不使用其他参数，其余参数仅仅是流过。

关于如何完成解决方案并行构造，参考[Solution_Language案例](Solution_Language_Case.md)
