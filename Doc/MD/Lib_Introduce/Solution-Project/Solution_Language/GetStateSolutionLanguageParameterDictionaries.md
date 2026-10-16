# GetStateSolutionLanguageParameterDictionaries

***

映射GetStateSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map GetStateSolutionLanguageParameterDictionaries(&OrderedPairSet, &UIntSet, GetStateSolutionLanguageParameterDictionariesFunction);

解决方案语言参数字典获取状态映射（GetStateSolutionLanguageParameterDictionaries）分析定义域元素序偶信息，其结构为：<UIntSet, SolutionLanguageParameterDictionaries>，其信息为：<地址信息，解决方案语言参数字典>。按照地址，从解决方案语言参数字典元素中获取对应的状态信息，将其赋值给值域无符号整型元素。

