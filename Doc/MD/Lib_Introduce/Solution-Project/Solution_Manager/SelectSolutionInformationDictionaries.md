# SelectSolutionInformationDictionaries

***

映射SelectSolutionInformationDictionaries接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map SelectSolutionInformationDictionaries(&OrderedPairSet, &UIntSet, SelectSolutionInformationDictionariesFunction);

解决方案信息字典检索映射（SelectSolutionInformationDictionaries）分析定义域元素序偶元素，其结构为：<SuperIndexSet, SolutionInformationDictionaries>，其信息为：<待检索超索引信息，解决方案信息字典元素>。按照待检索信息在解决方案信息字典元素上进行检索，并将检索结果赋值给值域无符号整型元素。

关于如何完成解决方案信息字典检索，参考[Solution_Manager案例](Solution_Manager_Case.md)
