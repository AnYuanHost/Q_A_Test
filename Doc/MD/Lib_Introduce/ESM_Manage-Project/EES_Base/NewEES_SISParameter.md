# NewEES_SISParameter

***

映射NewEES_SISParameter接受空元素集合（NullElementSet）为定义域和值域，定义如下：

    Map NewEES_SISParameter(&NullElementSet, &NullElementSet, NewEES_SISParameterFunction);

新建超索引检索器参数映射（NewEES_SISParameter）在值域空元素上构建超索引检索器运行所需参数并初始化。

在默认的构造流程中，该映射直接被新建总元素环境检索器映射调用，不需要在智能体中再进行解释执行。对于拓展启动流程，则应该注意如何进行构造和使用。

因为调用关系原因，该映射无案例代码。
