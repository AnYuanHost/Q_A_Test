# GetSolutionLanguageExplainManagerDictionaries

***

映射GetSolutionLanguageExplainManagerDictionaries接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetSolutionLanguageExplainManagerDictionaries(&OrderedPairSet, &NullElementSet, GetSolutionLanguageExplainManagerDictionariesFunction);

解决方案语言表达管理字典获取映射（GetSolutionLanguageExplainManagerDictionaries）分析定义域元素序偶元素，其结构为：<UIntSet, SolutionLanguageExplainManagerDictionaries>，其信息为：<地址信息，解决方案语言描述管理字典元素>。按照地址信息在解决方案语言表达管理字典元素中获取对应元素，转交传递到值域空元素上。

关于如何完成解决方案语言描述管理字典获取，参考[Solution_Manager案例](Solution_Manager_Case.md)
