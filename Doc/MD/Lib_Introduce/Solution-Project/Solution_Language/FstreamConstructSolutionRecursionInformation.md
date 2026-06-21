# FstreamConstructSolutionRecursionInformation

***

映射FstreamConstructSolutionRecursionInformation接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map FstreamConstructSolutionRecursionInformation(&ElementOrderSet, &NullElementSet, FstreamConstructSolutionRecursionInformationFunction);

文件构造解决方案递归信息映射（FstreamConstructSolutionRecursionInformation）分析定义域元素序列元素，其结构为：<FstreamSet, BoolSet, SolutionLanguageParameterDictionaries>，其信息为：<文件元素，第一二图调控信息，第一二图解决方案语言参数字典>。其中，文件元素提供基本信息来构造信息数据并置于值域空元素上。同时，这些信息也会在第一二图解决方案语言参数字典中进行注册。

关于如何完成解决方案文件语言描述管理构造递归信息，参考[Solution_Language案例](Solution_Language_Case.md)
