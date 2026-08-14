# NewEES_SISMap

***

映射NewEES_SISMap接受空元素集合（NullElementSet）为定义域和值域，定义如下：

```C++
Map NewEES_SISMap(&NullElementSet, &NullElementSet, NewEES_SISMapFunction);
```

新建超索引检索器映射映射（NewEES_SISMap）在值域空元素上构建超索引检索器运行所需指令。

该部分指令格式遵守总元素环境检索器对超索引的要求。

在默认的构造流程中，该映射直接被新建总元素环境检索器映射调用，不需要在智能体中再进行解释执行。对于拓展启动流程，则应该注意如何进行构造和使用。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
