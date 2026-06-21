# RecursionSolutionLanguageNodeOrderParameterToData

***

映射RecursionSolutionLanguageNodeOrderParameterToData接受元素序偶集合（OrderedPairSet）为定义域，流集合（StreamSet）为值域，定义为：

    Map RecursionSolutionLanguageNodeOrderParameterToData(&OrderedPairSet, &StreamSet, RecursionSolutionLanguageNodeOrderParameterToDataFunction);

解决方案语言节点序列参数递归转化为数据映射（RecursionSolutionLanguageNodeOrderParameterToData）分析定义域元素序偶元素，其结构为：<ElementOrderSet, UIntSet>，其信息为：<问答节点参数信息序列，流元素操作偏移量>。按照流元素操作偏移量在值域流元素上进行赋值，将问答节点参数信息序列分析的结果赋值到对应位置。

关于如何完成解决方案语言节点序列参数信息的数据递归转化，参考[Solution_Language案例](Solution_Language_Case.md)
