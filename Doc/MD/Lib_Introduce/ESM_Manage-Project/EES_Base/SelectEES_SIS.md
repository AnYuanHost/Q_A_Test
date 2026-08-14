# SelectEES_SIS

映射SelectEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（NullElementSet）为值域，定义如下：

```C++
Map SelectEES_SIS(&OrderedPairSet, &NullElementSet, SelectEES_SISFunction);
```

超索引检索器检索映射（SelectEES_SIS）分析定义域元素序偶元素，其格式为：<SuperIndexSet, ElementEnvironmentSearcher>，其信息为：<超索引检索信息总元素环境检索器>。按照检索信息在与总元素环境检索器绑定的超索引检索器上搜索，搜索到的地址结果赋值给值域无符号整型元素。

如果没有搜索到对应地址，则赋值值域元素为UINT_MAX。这种不第一时间抛出异常的处理方式可能会需要调整，在一些使用场景下，也会测试地址是否为UINT_MAX以决定抛出异常。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
