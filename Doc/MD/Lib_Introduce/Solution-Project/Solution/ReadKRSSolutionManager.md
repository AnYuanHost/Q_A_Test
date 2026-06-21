# ReadKRSSolutionManager

***

映射ReadKRSSolutionManager接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map ReadKRSSolutionManager(&OrderedPairSet, &NullElementSet, ReadKRSSolutionManaerFunction);

知识库解决方案管理读取映射（ReadKRSSolutionManager）分析定义域元素序偶元素，其结构为：<UIntSet, KRSSolutionManager>，其信息为：<地址信息，知识库解决方案管理元素>。按照地址信息从 知识库解决方案管理元素中获取对应的解决方案元素，将其引用传递到值域空元素上。

关于如何完成知识库解决方案读取，参考[Solution案例](Solution_Case.md)
