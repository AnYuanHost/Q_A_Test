# LogoutSuperIndexSubEES

***

映射LogoutSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map LogoutSuperIndexSubEES(&OrderedPairSet, &NullElementSet, LogoutSuperIndexSubEESFunction);
```

超索引子元素环境检索器注销映射（LogoutSuperIndexSubEES）分析定义域元素序偶元素，其结构为：<SuperIndexSet, SuperIndexSubEES>，其信息为：<待注销超索引信息，超索引子元素环境检索器>。该映射在超索引子元素环境检索器中检索并注销。注销会抛出对应的超索引信息，以方便下一层使用。

注销行为会在检索失败等情况下出现错误，并抛出异常。

关于如何完成超索引子元素环境检索器注销，跳转至[超索引子检索器测试案例](../EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
