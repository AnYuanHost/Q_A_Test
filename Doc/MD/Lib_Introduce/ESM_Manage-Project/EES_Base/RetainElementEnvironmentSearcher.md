# RetainElementEnvironmentSearcher

***

映射RetainElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map RetainElementEnvironmentSearcher(&NullElementSet, &ElementEnvironmentSearcher, RetainElementEnvironemntSearcher);

总元素环境检索器缩容映射（RetainElementEnvironmentSearcher）在值域总元素环境检索器元素上完成缩容操作。

因为运行逻辑问题，缩容映射只能在碎片整理后进行，必须先调用碎片整理映射。

关于如何使用该映射完成元素环境检索器缩容，跳转至[EES_Base案例](EES_Base_Case.md)。
