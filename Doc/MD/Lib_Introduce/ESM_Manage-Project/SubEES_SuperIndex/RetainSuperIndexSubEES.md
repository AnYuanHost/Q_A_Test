# RetainSuperIndexSubEES

***

映射RetainSuperIndexSubEES接受空元素集合（NullElementSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域，其定义为：

```C++
Map RetainSuperIndexSubEES(&NullElementSet, &SuperIndexSubEES, RetainSuperIndexSubEESFunction);
```

超索引子元素环境检索器缩容映射（RetainSuperIndexSubEES）将值域超索引子元素环境减速器进行缩容处理，将所有置懒空间去除。

缩容映射必须跟在碎片整理后面，这是元素环境检索器的指导手册要求完成的，缩容映射只需要将末尾的空余空间去除即可。

关于如何完成超索引子元素环境检索器缩容，跳转至[超索引子检索器测试案例](../EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。
