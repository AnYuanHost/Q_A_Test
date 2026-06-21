# LogoutEES_SIS

***

映射LogoutEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（NullElementSet）为值域，定义如下：

    Map LogoutEES_SIS(OrderedPairSet, &NullElementSet, LogoutEES_SISFunction);

超索引检索器注销映射（LogoutEES_SIS）分析定义域元素序偶元素，其格式为：<SuperIndexSet, ElementEnvironmentSearcher>，其信息为：<超索引信息，总元素环境检索器>。在与总元素环境检索器绑定的超索引检索器中完成超索引信息的注销，并返回其映射信息对应的元素环境检索信息，该信息赋值到值域无符号整型元素上。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

关于如何使用该映射完成超索引检索器注销，跳转至[EES_Base案例](EES_Base_Case.md)。
