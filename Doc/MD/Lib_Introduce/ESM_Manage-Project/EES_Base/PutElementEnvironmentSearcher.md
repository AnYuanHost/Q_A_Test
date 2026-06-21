# PutElementEnvironmentSearcher

***

映射PutElementEnvironmentSearcher接受元素序列集合（ElementOrderSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，其定义如下：

    Map PutElementEnvironmentSearcher(&ElementOrderSet, &ElementEnvironmentSearcher, PutElementEnvironmentSearcherFunction);

总元素环境检索器存放映射（PutElementEnvironmentSearcher）分析定义域元素序列元素，其格式为：<SuperIndexSet, UniversalSet, UniversalSet>，其信息为：<子元素环境检索器索引, 子元素环境检索器信息, 待操作元素>。按照索引和检索信息在总元素环境检索器中完成检索，将待操作元素转交传递到总元素环境检索器对应位置上。

如果锚定信息没有检索到对应的元素，则提前结束并抛出异常。

关于如何使用该映射完成元素环境检索器存放元素，跳转至[EES_Base案例](EES_Base_Case.md)。
