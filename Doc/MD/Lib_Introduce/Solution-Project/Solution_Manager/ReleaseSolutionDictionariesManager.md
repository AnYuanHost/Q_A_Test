# ReleaseSolutionDictionariesManager

***

映射ReleaseSolutionDictionariesManager接受空元素集合（NullElementSet）为定义域，解决方案字典管理集合（SolutionDictionariesManager）为值域，定义为：

    Map ReleaseSolutionDictionariesManager(&NullElementSet, &SolutionDictionariesManager, ReleaseSolutionDictionariesManagerFunction);

解决方案字典管理释放映射（ReleaseSolutionDictionariesManager）分析并释放值域解决方案字典管理元素。

关于如何完成解决方案字典管理释放，参考[Solution_Manager案例](Solution_Manager_Case.md)
