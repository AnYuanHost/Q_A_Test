# SortEES_SIS

***

映射SortEES_SIS接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map SortEES_SIS(&NullElementSet, &ElementEnvironmentSearcher, SortEES_SISFunction);

超索引检索器排序映射（SortEES_SIS）在值域总元素环境检索器上完成与其绑定的超索引检索器的排序工作。

该排序工作会将超索引检索信息和其映射的无符号整型信息均完成排序。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

关于如何使用该映射完成超索引检索器排序，跳转至[EES_Base案例](EES_Base_Case.md)。
