# NewZeroPollingDrivenZero

***

映射NewZeroPollingDrivenZero接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewZeroPollingDrivenZero(&NullElementSet, &NullElementSet, NewZeroPollingDrivenZeroFunction);
```

新建零轮询驱动零映射（NewZeroPollingDrivenZero）在值域空元素上构造零轮询驱动零元素，其结构与轮询驱动零（PollingDrivenZero）一致，按`PollingDrivenZero_Struct::PDZ_OrderNumber = 9`的九位置元素序列组织，构造完成时各位置处于清零状态，可直接作为轮询驱动零的零状态起点使用。

构造与释放成对：本映射构造的元素由ReleasePollingDrivenZero（文档未生成）释放，需要复位内容时用PollingDrivenZeroZeroMap（文档未生成）清零。

***

## 案例：

```C++
Element PDZ;
NewZeroPollingDrivenZeroFunction(EmptyElement, PDZ);

// 判定其是否属于轮询驱动零集合，随后开始设置与驱动
PollingDrivenZeroTest(PDZ, PollingDrivenZero);

ReleasePollingDrivenZeroFunction(EmptyElement, PDZ);
```

案例中以零状态构造轮询驱动零元素，经成员判定后使用，最后以释放收场，构造与释放成对。与轮询驱动零模块的NewPollingDrivenZero（文档未生成）的区别在于初始内容：本映射构造结果为清零状态。
