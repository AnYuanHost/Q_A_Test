# ReadSuperIndexSuperIndexSubEES

***

映射ReadSuperIndexSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadSuperIndexSuperIdnexSubEES(&OrderedPairSet, &NullElementSet, ReadSuperIndexSuperIndexSubEESFunction);
```

超索引子元素环境检索器超索引读取映射（ReadSuperIndexSuperIndexSubEES）分析定义域序偶元素，其格式为：<UIntSet, SuperIndexSubEES>，其信息为：<地址信息，超索引子元素环境检索器>。按照地址信息从超索引子元素环境检索器中获取对应地址的检索超索引信息，并将其引用传递到值域空元素上。

该获取映射的目的在于仅读取信息，故使用引用传递。该方法不会破坏原有的映射关系，但存在数据被篡改的风险。

如果地址信息超出超索引子元素环境检索器容器范围，则抛出异常。

关于如何完成超索引子元素环境检索器超索引读取，跳转至[超索引子检索器测试案例](../EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
