# PutSuperIndexEES_SIS

***

映射PutSuperIndexEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

```C++
Map PutSuperIndexEES_SIS(&OrderedPairSet, &ElementEnvironmentSearcher, PutSuperIndexEES_SISFunction);
```

超索引检索器存超索引映射（PutSuperIndexEES_SIS）分析定义域元素序偶元素，其格式为：<UIntSet, SuperIndexSet>，其信息为：<超索引检索器地址信息, 超索引信息>。按照超索引检索器地址信息，在总元素环境检索器绑定的超索引检索器对应位置上，完成对超索引元素的存放。

该获取行为是转交传递元素实现的存放方式，需要注意后续操作是否及时创建引用或者是否错误释放。

因为是使用超索引检索器地址信息，所以需要相关映射维护地址元素和地址信息。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
