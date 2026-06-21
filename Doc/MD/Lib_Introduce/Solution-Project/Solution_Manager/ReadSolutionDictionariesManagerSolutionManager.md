# ReadSolutionDictionariesManagerSolutionManager

***

映射ReadSolutionDictionariesManagerSolutionManager接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map ReadSolutionDictionariesManagerSolutionManager(&OrderedPairSet, &NullElementSet, ReadSolutionDictionariesManagerSolutionManagerFunction);

解决方案字典管理解决读取解决方案管理映射（ReadSolutionDictionariesManagerSolutionManager）分析定义域元素序偶元素，其结构为：<UIntSet, SolutionDictionariesManager>，其信息为：<地址信息，解决方案字典管理元素>。按照地址信息从解决方案字典管理元素中获取对应解决方案管理元素，将其引用传递到值域空元素上。

关于如何完成解决方案字典管理元素读取，参考[Solution_Manager案例](Solution_Manager_Case.md)
