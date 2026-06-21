# LogoutElementEnvironmentSearcher

***

映射LogoutElementEnvironmentSearcher接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map LogoutElementEnvironmentSearcher(&OrderedPairSet, &ElementEnvironmentSearcher, LogoutElementEnvironmentSearcherFunction);

总元素环境检索器注销映射（LogoutElementEnvironmentSearcher）分析定义域序偶元素，其格式为：<SuperIndexSet, UniversalSet>，含有信息为：<子元素环境检索器索引，子元素环境检索器信息>。按照该信息在值域总元素环境检索器中完成检索并注销。

如果按照锚定的信息不能完成查询，或者不存在对应的子元素环境检索器，或者不存在对应的信息指向的元素，则提前终止并抛出异常。

关于如何使用该映射完成总元素环境检索器注销，跳转至[EES_Base案例](EES_Base_Case.md)。
