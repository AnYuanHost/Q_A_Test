# FstreamConstructSolutionNodeState

***

映射FstreamConstructSolutionNodeState接受文件集合（FstreamSet）为定义域，问答流图节点集合（QuestionNodeSet）为值域，定义为：

    Map FstreamConstructSolutionNodeState(&FstreamSet, &QuestionNodeSet, FstreamConstructSolutionNodeStateFunction);

文件构造解决方案节点状态映射（FstreamConstructSolutionNodeState）在定义域文件元素中读取节点状态信息，并赋值到值域问答节点元素的对应位置。

关于如何完成解决方案节点状态构造，参考[Solution_Language案例](Solution_Language_Case.md)
