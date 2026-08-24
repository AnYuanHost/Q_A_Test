# ReadUIntEES_SIS

***

映射ReadUIntEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

```C++
Map ReadUIntEES_SIS(&OrderedPairSet, &NullElementSet, ReadUIntEES_SISFunction);
```

总元素环境检索器读取无符号整型映射（ReadUIntEES_SIS）分析定义域序偶元素，其格式为：<UIntSet, ElementEnvironemntSearcher>，其信息为：<超索引检索器地址信息, 总元素环境检索器>。按照超索引检索器地址信息，在总元素环境检索器绑定的超索引检索器对应位置上，完成对无符号整型元素的读取。

该无符号整型信息指超索引检索器负责维护的超索引信息-元素环境地址映射关系中的元素环境地址，其可以用于元素环境对应位置元素的操作。

该读取行为是引用传递元素实现的获取方式，获取引用就需要解除引用，防止内存泄漏。

因为是使用超索引检索器地址信息，所以需要相关映射维护地址元素和地址信息。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

因为超索引检索器的行为跟随总元素环境检索器，其相关案例代码参考总元素环境检索器代码，跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)，其独立测试部分可以参考[超索引检索器案例](../EES_Manage_Case/SuperIndex_Searcher_Case.md)。
