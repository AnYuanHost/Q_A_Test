# SuperIndexSearcher

***

集合SuperIndexSearcher为所有超索引检索器元素的集合，定义如下：

```C++
Set SuperIndexSearcher(EmptyElement, SuperIndexSearcherTest);
```

超索引检索器（SuperIndexSearcher）由所有超索引检索器元素组成，用于超索引检索器相关操作。

超索引检索器负责将子检索器中查询到的超索引元素统一映射到无符号整型元素，无符号整型元素用于指示元素在符号表中的具体地址。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
