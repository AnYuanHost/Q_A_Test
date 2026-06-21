# GetEESEnvironment

***

映射GetEESEnvironment接受总元素环境检索器集合（ElementEnvironmentSearcher）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map GetEESEnvironment(&ElementEnvironmentSearcher, &NullElementSet, GetEESEnvironmentFunction);

获取总元素环境检索器元素环境映射（GetEESEnvironment）从定义域总元素环境检索器元素的指定位置获取元素环境，将其置于值域空元素上。

如果总元素环境检索器的指定位置为空，无法获得元素环境，则提前结束或抛出异常。

因为将元素环境取出时对元素环境的映射集合进行操作的可能性很低，默认该行为会直接释放元素环境的映射集合。

关于如何使用该映射完成获取，跳转至[EES_Base案例](EES_Base_Case.md)。
