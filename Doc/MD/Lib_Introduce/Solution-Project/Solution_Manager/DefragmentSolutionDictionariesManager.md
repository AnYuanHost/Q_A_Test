# DefragmentSolutionDictionariesManager

***

映射DefragmentSolutionDictionariesManager接受空元素集合（NullElementSet）为定义域，解决方案字典管理集合（SolutionDictionariesManager）为值域，定义为：

    Map DefragmentSolutionDictionariesManager(&NullElementSet, &SolutionDictionariesManager, DefragmentSolutionDictionariesManagerFunction);

解决方案字典管理碎片清理映射（DefragmentSolutionDictionariesManager）在值域解决方案字典管理元素上进行碎片整理。

关于如何完成解决方案字典管理碎片整理，参考[Solution_Manager案例](Solution_Manager_Case.md)
