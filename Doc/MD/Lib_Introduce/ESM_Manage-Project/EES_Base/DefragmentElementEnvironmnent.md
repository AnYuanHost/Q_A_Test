# DefragmentElementEnvironmentSearcher

***

映射DefragmentElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，接受总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map DefragmentElementEnvironmentSearcher(&NullElementSet, &ElementEnvironmentSearcher, DefragmentElementEnviornmentSearcherFunction);

总元素环境检索器碎片整理映射（DefragmentElementEnvironmentSearcher）在总元素环境检索器元素上执行碎片整理操作。

该映射会在所有子元素环境检索器、超索引检索器层以及元素环境层进行碎片整理，该整理需要保证数据的有序性，一般调用时按照先排序再碎片整理的方式进行。

关于如何使用该映射完成元素环境检索器碎片整理，跳转至[EES_Base案例](EES_Base_Case.md)。
