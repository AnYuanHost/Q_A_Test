# SelectSolutionLanguageParameterDictionaries

***

映射SelectSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map SelectSolutionLanguageParameterDictionaries(&OrderedPairSet, &UIntSet, SelectSolutionLanguageParameterDictionariesFunction);

解决方案语言参数字典检索映射（SelectSolutionLanguageParameterDictionaries）分析定义域元素序偶元素，其结构为：<StreamSet, SolutionLanguageParameterDictionaries>，其信息为：<待检索流信息，解决方案语言参数字典元素>。按照待检索流信息，在解决方案语言参数字典中完成相关检索，将检索结果赋值给值域无符号整型元素。

关于如何完成解决方案文件语言参数字典检索，参考[Solution_Language案例](Solution_Language_Case.md)
