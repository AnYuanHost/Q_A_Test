# PutEESEnvironment

***

映射PutEESEnvironment接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map PutEESEnvironment(&OrderedPairSet, &ElementEnvironmentSearcher, PutEESEnvironmentFunction);

存总元素环境检索器元素环境映射（PutEESEnvironment）分析定义域元素序偶元素，其格式为<ElementEnvironment, ElementOrderSet>，其信息为<元素环境容器, 元素环境映射集合>，将定义域信息转交传递到值域对应位置。

该存放行为会在已有元素环境占用的时候不进行转交行为，提前返回或抛出异常。

因为是转交传递行为，在智能体运行过程中，一定程度上表示对元素环境的操作转交给总元素环境检索器完成，而不是由智能体负责。在一些需要获取元素的环境的情况，应该在操作该映射前提前创建引用。

关于如何使用该映射完成设置，跳转至[EES_Base案例](EES_Base_Case.md)。
