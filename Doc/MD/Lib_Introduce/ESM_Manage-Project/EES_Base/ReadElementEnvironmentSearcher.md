# ReadElementEnvironmentSearcher

***

映射ReadElementEnvironmentSearcher接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map ReadElementEnvironmentSearcher(&ElementOrderSet, &NullElementSet, ReadElementEnvironmentSearcherFunction);

总元素环境检索器读取映射（ReadElementEnvironemntSearcher）分析定义域元素序列元素，其格式为：<SuperIndexSet, UniversalSet, ElementEnvironmentSearcher>，其信息为：<子元素环境检索器索引，子元素环境检索器信息，总元素环境检索器>。按照索引和检索信息在总元素环境检索器中完成检索，将对应元素读取引用到值域空元素中。

如果锚定信息没有检索到对应的元素，则提前结束并抛出异常。

关于如何使用该映射完成元素环境检索器读取元素，跳转至[EES_Base案例](EES_Base_Case.md)。
