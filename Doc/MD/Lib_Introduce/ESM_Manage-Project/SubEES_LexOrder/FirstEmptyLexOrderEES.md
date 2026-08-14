# FirstEmptyLexOrderEES

***

映射FirstEmptyLexOrderEES接受字典序子元素环境检索器集合（LexOrderEES）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map FirstEmptyLexOrderEES(&LexOrderEES, &UIntSet, FirstEmptyLexOrderEESFunction);
```

字典序子元素环境检索器获取首个置懒槽映射（FirstEmptyLexOrderEES）从定义域字典序子元素环境检索器中获取第一个被置懒的槽位的地址信息，并将其无符号整型值拷贝到值域无符号整型元素上。

关于如何完成字典序子元素环境检索器获取第一个置懒地址信息，跳转至[字典序子检索器测试案例](../EES_Manage_Case/LexOrder_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
