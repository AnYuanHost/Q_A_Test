# LogoutEES_SIS

***

映射LogoutEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（NullElementSet）为值域，定义如下：

```C++
Map LogoutEES_SIS(OrderedPairSet, &NullElementSet, LogoutEES_SISFunction);
```

超索引检索器注销映射（LogoutEES_SIS）分析定义域元素序偶元素，其格式为：<SuperIndexSet, ElementEnvironmentSearcher>，其信息为：<超索引信息，总元素环境检索器>。在与总元素环境检索器绑定的超索引检索器中完成超索引信息的注销，并返回其映射信息对应的元素环境检索信息，该信息赋值到值域无符号整型元素上。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
