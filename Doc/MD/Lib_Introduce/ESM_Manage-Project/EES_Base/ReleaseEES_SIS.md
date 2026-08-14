# ReleaseEES_SIS

***

映射ReleaseEES_SIS接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

```C++
Map ReleaseEES_SIS(&NullElementSet, &ElementEnvironemntSearcher, ReleaseEES_SISFunction);
```

释放超索引检索器映射（ReleaseEES_SIS）将与值域总元素环境检索器绑定的超索引检索器容器释放。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
