# ReleaseLexOrderEES

***

映射ReleaseLexOrderEES接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域，定义为：

```C++
Map ReleaseLexOrderEES(&NullElementSet, &LexOrderEES, ReleaseLexOrderEESFunction);
```

字典序子元素环境检索器释放映射（ReleaseLexOrderEES）分析并释放值域字典序子元素环境检索器元素。

关于如何完成字典序子元素环境检索器释放，跳转至[字典序子检索器测试案例](../EES_Manage_Case/LexOrder_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
