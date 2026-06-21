# LogoutSubEESEES

***

映射LogoutSubEESEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，其定义如下：

    Map LogoutSubEESEES(&OrderedPairSet, &NullElementSet, LogoutSubEESEESFunction);

注销子元素环境检索器映射（LogoutSubEESEES）分析定义域序偶元素，格式如下：<SuperIndexSet, ElementEnvironmentSearcher>，含有信息<子元素环境检索器索引, 总元素环境检索器>。在总元素环境检索器中注销索引对应的子元素环境检索器，将容器置于值域空元素上。

如果未能检索到索引对应的子元素环境，则抛出对应异常。

该注销行为仅将容器获取，其对应的超索引索引和映射集合均会被释放掉。

关于如何使用该映射完成子元素环境检索器注销，跳转至[EES_Base案例](EES_Base_Case.md)。
