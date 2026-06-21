# SelectSolutionDictionariesManager

***

映射SelectSolutionDictionariesManager接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map SelectSolutionDictionariesManager(&OrderedPairSet, &UIntSet, SelectSolutionDictionariesManagerFunction);

解决方案字典管理检索映射（SelectSolutionDictionariesManager）分析定义域元素序偶元素，其结构为：<SuperIndexSet, SolutionDictionariesManager>，其信息为：<待检索超索引信息，解决方案字典管理元素>。按照待检索超索引信息在解决方案字典管理元素中完成检索，并将检索结果赋值给值域无符号整型元素。

关于如何完成解决方案字典管理检索，参考[Solution_Manager案例](Solution_Manager_Case.md)
