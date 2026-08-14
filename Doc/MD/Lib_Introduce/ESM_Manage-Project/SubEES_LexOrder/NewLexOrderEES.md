# NewLexOrderEES

***

映射NewLexOrderEES接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域，定义如下：

```C++
Map NewLexOrderEES(&ElementOrderSet, &NullElementSet, NewLexOrderEESFunction);
```

新建字典序子元素环境检索器映射（NewLexOrderEES）分析定义域元素序列元素，按照其中存储的参数信息在值域空元素上构造对应的字典序子元素环境检索器。

关于如何完成字典序子元素环境检索器构造，跳转至[字典序子检索器测试案例](../EES_Manage_Case/LexOrder_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
