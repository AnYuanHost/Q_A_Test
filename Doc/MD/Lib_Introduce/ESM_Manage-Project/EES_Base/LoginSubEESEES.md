# LoginSubEESEES

***

映射LoginSubEESEES接受元素序列（ElementOrderSet）为定义域，总元素环境检索器（ElementEnvironmentSearcher）为值域，定义如下：

    Map LoginSubEESEES(&ElementOrderSet, &ElementEnvironmentSearcher, LoginSubEESEESFunction);

注册子元素环境检索器映射（LoginSubEESEES）分析定义域元素序偶元素，其是三元序列，格式如下：<SuperIndexSet, UniversalSet, ElementOrderSet>，涵盖信息为：<子元素环境检索器索引（语境索引）, 子元素环境检索器容器, 子元素环境检索器映射集合>。按照信息在值域总元素环境检索器中完成注册行为。

该注册行为只取决于索引是否冲突，其允许某一种子元素环境检索器大量注册，这代表同一个语言的多个语境。如果重复注册，则抛出异常，不进行额外的操作。

注册行为会拷贝索引，转交容器和映射集合，实际操作时需注意代码中参数如何参与操作，避免泄露内存或错误释放。

关于如何使用该映射完成子元素环境检索器注册，跳转至[EES_Base案例](EES_Base_Case.md)。
