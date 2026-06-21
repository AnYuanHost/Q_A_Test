# FstreamSolutionLanguageNodeStateTest

***

映射FstreamSolutionLanguageNodeStateTest接受文件集合（FstreamSet）为定义域，布尔类型结合（BoolSet）为值域，定义为;

    Map FstreamSolutionLanguageNodeStateTest(&FstreamSet, &BoolSet, FstreamSolutionLanguageNodeStateTestFunction);

解决方案语言文件节点状态检测映射（FstreamSolutionLanguageNodeStateTest）在定义域文件元素上进行节点状态信息的检测，检测下文是否符合节点状态信息，并将检测结果赋值给值域布尔元素。

关于如何完成解决方案文件语言节点状态检测，参考[Solution_Language案例](Solution_Language_Case.md)
