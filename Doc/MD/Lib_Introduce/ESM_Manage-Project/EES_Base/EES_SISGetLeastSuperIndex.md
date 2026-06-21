# EES_SISGetLeastSuperIndex

***

映射EES_SISGetLeastSuperIndex接受总元素环境检索器集合（ElementEnvironmentSearcher）为定义域，空元素集合（NullElementSet）为值域，定义如下：

    Map EES_SISGetLeastSuperIndex(&ElementEnvironmentSearcher, &NullElementSet, EES_SISGetLeastSuperIndexFunction);

超索引检索器获取最小超索引映射（EES_SISGetLeastSuperIndex）分析定义域总元素环境检索器绑定的超索引检索器，计算其碎片整理后可允许的最小最大超索引，将其存放到值域空元素上。

最小最大超索引指将所有置懒的信息清除后，整个超索引检索器管理下的超索引信息填补空缺并减小，减小后最大的超索引信息。

关于如何使用该映射完成超索引检索器获取最小超索引信息，跳转至[EES_Base案例](EES_Base_Case.md)。
