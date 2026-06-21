# SortElementEnvironmentSearcher

***

映射SortElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher），定义如下：

    Map SortElementEnvironemntSearcher(&NullElementSet, &ElementEnvironemntSearcher, SortElementEnvironmentSearcher);

总元素环境检索器排序映射（SortElementEnvironmentSearcher）将值域总元素环境检索器元素完成排序工作。

该排序工作会在子元素环境检索器层、超索引检索器层完成排序，但不会修改元素环境层。

关于如何使用该映射完成元素环境检索器排序，跳转至[EES_Base案例](EES_Base_Case.md)。
