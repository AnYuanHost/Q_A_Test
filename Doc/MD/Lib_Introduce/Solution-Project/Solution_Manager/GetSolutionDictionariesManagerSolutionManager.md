# GetSolutionDictionariesManagerSolutionManager

***

映射GetSolutionDictionariesManagerSolutionManager接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetSolutionDictionariesManagerSolutionManager(&OrderedPairSet, &NullElementSet, GetSolutionDictionariesManagerSolutionManagerFunction);

解决方案字典管理获取解决方案管理映射（GetSolutionDictionariesManagerSolutionManager）分析定义域元素序偶元素，其结构为：<UIntSet, SolutionDictionariesManager>，其信息为：<地址信息，解决方案字典管理元素>。按照地址信息从解决方案字典管理元素中获取对应的解决方案管理元素，将其转交传递到值域空元素上。

关于如何完成解决方案字典管理解决方案管理获取，参考[Solution_Manager案例](Solution_Manager_Case.md)
