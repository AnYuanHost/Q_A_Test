# ReleaseSolutionInformationManager

***

映射ReleaseSolutionInformationManager接受空元素集合（NullElementSet）为定义域，解决方案信息管理集合（SolutionInformationManager）为值域，定义为：

    Map ReleaseSolutionInformationManager(&NullElementSet, &SolutionInformationManager, ReleaseSolutionInformationManagerFunction);

释放解决方案信息管理映射（ReleaseSolutionInformationManager）分析并释放值域解决方案信息管理元素。

关于如何完成解决方案信息管理释放，参考[Solution_Manager案例](Solution_Manager_Case.md)
