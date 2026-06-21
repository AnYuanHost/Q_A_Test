# ReadSolutionLanguageNodeOrder

***

映射ReadSolutionLanguageNodeOrder接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map ReadSolutionLanguageNodeOrder(&OrderedPairSet, &NullElementSet, ReadSolutionLanguageNodeOrderFunction);

解决方案语言节点序列读取映射（ReadSolutionLanguageNodeOrder）分析定义域元素序偶元素，其结构为：<UIntSet, SolutionLanguageNodeOrder>，其信息为：<地址信息，解决方案节点序列元素>。按照地址信息从解决方案节点序列元素中读取对应的节点信息，将其引用传递到值域空元素上。

关于如何完成解决方案语言节点序列读取，参考[Solution_Language案例](Solution_Language_Case.md)
