# LogoutSolutionInformationDictionaries

***

映射LogoutSolutionInformationDictionaries接受超索引集合（SuperIndexSet）为定义域，解决方案信息字典集合（SolutionInformationDictionaries）为值域，定义为：

    Map LogoutSolutionInformationDictionaries(&SuperIndexSet, &SolutionInformationDictionaries, LogoutSolutionInformationDictionariesFunction);

解决方案信息字典注销映射（LogoutSolutionInformationDictionaries）按照定义域超索引元素，在值域解决方案信息字典元素上完成注销。

关于如何完成解决方案信息字典注销，参考[Solution_Manager案例](Solution_Manager_Case.md)
