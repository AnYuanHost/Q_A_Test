# SelectSolutionLanguageContextDictionaries

***

映射SelectSolutionLanguageContextDictionaries接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map SelectSolutionLanguageContextDictionaries(&OrderedPairSet, &UIntSet, SelectSolutionLanguageContextDictionariesFunction);

解决方案语言语境字典检索映射（SelectSolutionLanguageContextDictionaries）分析定义域元素序偶元素，其结构为：<StreamSet, SolutionLanguageContextDictionaries>，其信息为：<待检索流元素，解决方案语言语境字典元素>。在解决方案语言语境字典元素上检索带检索流元素，并将检索结果赋值给值域无符号整型元素。

关于如何完成解决方案文件语境字典检索，参考[Solution_Language案例](Solution_Language_Case.md)
