# LoginSuperIndexSubEES

***

映射LoginSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域，定义为：

```C++
Map LoginSuperIndexSubEES(&OrderedPairSet, &SuperIndexSubEES, LoginSuperIndexSubEESFunction);
```

超索引子元素环境检索器注册映射（LoginSuperIndexSubEES）分析定义域元素序偶元素，其结构为：<SueprIndexSet, SuperIndexSet>，其信息为：<待注册超索引信息，映射超索引信息>。该映射按照注册超索引信息，在值域超索引子元素环境检索器上完成注册。该注册行为会在末尾插入并排序。

在完成注册后，原本的超索引检索器可能无序，需要在函数结尾处调用一次排序映射。

注册行为会在悟空先插槽、检测到已注册等情况下出现错误，并抛出异常。

关于如何完成超索引子元素环境检索器注册，跳转至[超索引子检索器测试案例](../EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
