# FirstEmptySuperIndexSubEES

***

映射FirstEmptySuperIndexSubEES接受超索引子元素环境检索器集合（SuperIndexSubEES）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map FirstEmptySuperIndexSubEES(&SuperIndexSubEES, &UIntSet, FirstEmptySuperIndexSubEESFunction);
```

超索引子元素环境检索器首个置空地址映射（FirstEmptySuperIndexSubEES）从定义域超索引子元素环境检索器中获取第一个被置懒的槽位的地址信息，并将其无符号整型值拷贝到值域无符号整型元素上。

关于如何完成超索引子元素环境检索器首个置懒元素地址获取，跳转至[超索引子检索器测试案例](../EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
