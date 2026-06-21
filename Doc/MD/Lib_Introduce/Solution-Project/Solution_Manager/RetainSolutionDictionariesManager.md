# RetainSolutionDictionariesManager

***

映射RetainSolutionDictionariesManager接受空元素集合（NullElementSet）为定义域，解决方案字典管理集合（SolutionDictionariesManager）为值域，定义为：

    Map RetainSolutionDictionariesManager(&NullElementSet, &SolutionDictionariesManager, RetainSolutionDictionariesManagerFunction);

解决方案字典管理缩容映射（RetainSolutionDictionariesManager）在值域解决方案字典管理元素上进行缩容。

关于如何完成解决方案字典管理缩容，参考[Solution_Manager案例](Solution_Manager_Case.md)
