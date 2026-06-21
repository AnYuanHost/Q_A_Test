# ReleaseElementEnvironmentSearcher

***

映射ReleaseElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironemntSearcher）为值域，定义如下：

    Map ReleaseElementEnvironmentSearcher(&NullElementSet, &ElementEnvironmentSearcher, RelaseElementEnvironmentSearcherFunction);

释放总元素环境检索器映射（ReleaseElementEnvironmentSearcher）将值域总元素环境检索器解析并释放。

因为该释放映射针对于构建时结构设计，对于内部部分成员无法直接释放，需要通过代码或智能体解释的方式完成释放。

关于如何使用该映射完成元素环境检索器释放，跳转至[EES_Base案例](EES_Base_Case.md)。
