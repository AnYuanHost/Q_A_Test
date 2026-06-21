# LoginElementEnvironmentSearcher

***

映射LoginElementEnvironmentSearcher接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map LoginElementEnvironmentSearcher(&OrderedPairSet, &ElementEnvironmentSearcher, LoginElmeentEnvironmentSearcherFunction);

总元素环境检索器注册映射（LoginElmeentEnvironmentSearcher）分析定义域序偶元素，其格式为：<SuperIndexSet, UniversalSet>，信息为<子元素环境检索器索引，子元素环境检索器信息>。按照该注册信息在值域总元素环境检索器中完成注册。

元素的信息由子元素环境检索器索引以及其对应的信息共同锚定，如果已经注册完成，则抛出重复注册异常。

关于如何使用该映射完成注册，跳转至[EES_Base案例](EES_Base_Case.md)。
