# PutUIntEES_SIS

***

映射PutUIntEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map PutUIntEES_SIS(&OrderedPairSet, &ElementEnvironmentSearcher, PutUIntEES_SISFunction);

超索引检索器存无符号整型映射（PutUIntEES_SIS）分析定义域元素序偶元素，其格式为：<UIntSet, UIntSet>，其信息为：<超索引检索器地址信息, 无符号整型信息>。按照超索引检索器地址信息，在总元素环境检索器绑定的超索引检索器对应位置上，完成对无符号整型元素的存放。

该获取行为是转交传递元素实现的存放方式，需要注意后续操作是否及时创建引用或者是否错误释放。

因为是使用超索引检索器地址信息，所以需要相关映射维护地址元素和地址信息。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

关于如何使用该映射完成超索引检索器存放无符号整型信息，跳转至[EES_Base案例](EES_Base_Case.md)。
