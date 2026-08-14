# SelectSuperIndexSubEES

***

映射SelectSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map SelectSuperIndexSubEES(&OrderedPairSet, &UIntSet, SelectSuperIndexSubEESFunction);
```

超索引子元素环境检索器检索映射（SelectSuperIndexSubEES）分析定义域序偶元素，其格式为：<SuperIndexSet, SueprIdnexSubEES>，其信息为：<待检索超索引信息，超索引子元素环境检索器>。按照待检索超索引信息在超索引子元素环境检索器中完成检索，将检索到的地址信息赋值到值域无符号整型元素上。

如果未检索到对应信息，则赋值为UINT_MAX。

关于如何使用超索引子元素环境检索器检索映射，跳转至[超索引子检索器测试案例](../EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
