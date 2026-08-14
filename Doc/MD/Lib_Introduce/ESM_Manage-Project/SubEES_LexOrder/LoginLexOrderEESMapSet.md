# LoginLexOrderEESMapSet

***

映射LoginLexOrderEESMapSet接受空元素集合（NullElementSet）为定义域和值域，其定义为：

```C++
Map LoginLexOrderEESMapSet(&NullElementSet, &NullElementSet, LoginLexOrderEESMapSet);
```

字典序子元素环境检索器注册指令集映射（LoginLexOrderEESMapSet）在值域空元素上构造一个元素序列作为指令包，并完成相关赋值。

关于如何完成字典序子元素环境检索器指令集注册，跳转至[字典序子检索器测试案例](../EES_Manage_Case/LexOrder_Sub_EES_Test_Case.md)，或者跳转至[总元素环境检索器基础案例](../EES_Manage_Case/EES_Base_Case.md)。具体实现参考[子检索器接口标准](../Sub_EES_Interface/Sub_EES_Interface.md)。
