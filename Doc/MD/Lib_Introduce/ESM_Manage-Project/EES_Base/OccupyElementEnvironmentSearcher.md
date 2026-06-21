# OccupyElementEnvironmentSearcher

***

映射OccupyElementEnvironmentSearcher接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map OccupyElementEnvironmentSearcher(&OrderedPairSet, &ElementEnvironmentSearcher, OccupyElementEnvironmentSearcherFunction);

总元素环境检索器占用（OccupyElementEnvironmentSearcher）分析定义域元素序偶元素，其格式为：<SuperIndexSet, UniversalSet>，其信息为：<子元素环境检索器索引, 子元素环境检索器信息>。按照索引和检索信息在总元素环境检索器中完成检索，将对应元素设置为占用状态。

如果锚定信息没有检索到对应的元素，则提前结束并抛出异常。

关于如何使用该映射完成元素环境检索器元素占用，跳转至[EES_Base案例](EES_Base_Case.md)。
