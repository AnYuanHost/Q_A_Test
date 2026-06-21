# NewElementEnvironmentSearcher

***

映射NewElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域和值域，定义如下：

    Map NewElementEnvironmentSearcher(&NullElementSet, &NullElementSet, NewElementEnvironmentSearcherFunction);

新建总元素环境检索器映射（NewElementEnvironmentSearcher）在值域元素上构造总元素环境检索器元素。

一般构造中，超索引检索器会配套完成构建，其容器元素、参数信息、指令信息均会在该映射中完成构建。但在拓展的情况中，可以使用更加复杂的构建流程以支持更自由的结构构造和信息初始化。

关于如何构造总元素环境检索器，跳转至[EES_Base案例](EES_Base_Case.md)。
