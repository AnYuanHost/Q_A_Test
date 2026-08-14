# SortEES_SIS

***

映射SortEES_SIS接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

```C++
Map SortEES_SIS(&NullElementSet, &ElementEnvironmentSearcher, SortEES_SISFunction);
```

超索引检索器排序映射（SortEES_SIS）在值域总元素环境检索器上完成与其绑定的超索引检索器的排序工作。

该排序工作会将超索引检索信息和其映射的无符号整型信息均完成排序。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
