# ReleaseSolutionInformationDictionaries

***

映射ReleaseSolutionInformationDictionaries接受空元素集合（NullElementSet）为定义域，解决方案信息字典集合（SolutionInformationDictionaries）为值域，定义为：

    Map ReleaseSolutionInformationDictionaries(&NullElementSet, &SolutionInformationDictionaries, ReleaseInformationDictionariesFunction);

释放解决方案信息字典映射（ReleaseSolutionInformationDictionaries）分析并释放值域解决方案信息字典元素。

关于如何完成解决方案信息字典释放，参考[Solution_Manager案例](Solution_Manager_Case.md)
