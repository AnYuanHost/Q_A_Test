# LoginSolutionDictionariesManager

***

映射LoginSolutionDictionariesManager接受超索引集合（SuperIndexSet）为定义域，解决方案字典管理集合（SolutionDictionariesManager）为值域，定义为：

    Map LoginSolutionDictionariesManager(&SuperIndexSet, &SolutionDictionariesManager, LoginSolutionDictionariesManagerFunction);

解决方案字典管理注册映射（LoginSolutionDictionariesManager）将定义域超索引元素注册到值域解决方案字典管理元素上。

关于如何完成解决方案字典管理注册，参考[Solution_Manager案例](Solution_Manager_Case.md)
