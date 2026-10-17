# SetKRSPollingDrivenZeroPrivateMapSearcher

***

映射SetKRSPollingDrivenZeroPrivateMapSearcher接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域，定义为：

```C++
Map SetKRSPollingDrivenZeroPrivateMapSearcher(&ElementOrderSet, &KRSPollingDrivenZero, SetKRSPollingDrivenZeroPrivateMapSearcherFunction);
```

知识库零轮询机私有映射集合设置映射（SetKRSPollingDrivenZeroPrivateMapSearcher）将定义域元素序列（私有映射检索序列）设置到值域知识库零轮询机元素的私有映射集合位置`KRSPollingDrivenZero_Struct::KRSPDZ_PMapSet`上，该位置记录知识库零轮询机所使用的私有映射。私有映射序列的检索入口为`KRSPDZ_PMapSet_Map`下的`KRSPDZ_PMapSet_Select`，轮询机在此按检索信息在私有映射集合中完成检索。

命名说明：同目录另有 [SetKRSPollingDrivenPrivateMapSearcher](SetKRSPollingDrivenPrivateMapSearcher.md)（脱漏 `Zero`）以历史文件名与一级标题承载同一条目，[索引](KRS_PollingDrivenZero.md) 亦以本符号链接至该文件；源头头文件 `KRS_PollingDrivenZero.h` 中的符号为 `SetKRSPollingDrivenZeroPrivateMapSearcher`，本篇按源头符号独立成篇，两篇并存。本映射与[SetKRSPollingDrivenZeroUniversalMapSearcher](SetKRSPollingDrivenZeroUniversalMapSearcher.md)成对：一条通用映射序列、一条私有映射序列，二者格式一致。

***

## 案例：

```C++
Element KRS;
NewKRSPollingDrivenZeroFunction(EmptyElement, KRS);

Element Length;
NewUIntElementFunction(EmptyElement, Length);
GetUIntElement(Length) = 2;

Element PMapSetOrder;
UIntNewElementOrderFunction(Length, PMapSetOrder);

// 在 PMapSetOrder 各位置放入私有映射

SetKRSPollingDrivenZeroPrivateMapSearcherFunction(PMapSetOrder, KRS);

// 知识库零轮询机经 KRSPDZ_PMapSet_Map 下的 KRSPDZ_PMapSet_Select 检索私有映射

ReleaseElementFunction(EmptyElement, PMapSetOrder);
ReleaseElementFunction(EmptyElement, Length);
ReleaseKRSPollingDrivenZeroFunction(EmptyElement, KRS);
```

案例中先新建知识库零轮询机，再构造私有映射序列并整条设置到私有映射集合位置，随后知识库零轮询机按`KRSPDZ_PMapSet_Select`在该序列上完成检索。收尾按顺序释放序列、长度元素与知识库零轮询机，构造与释放成对：序列不随设置转移所有权，由创建者释放，整机由[ReleaseKRSPollingDrivenZero](ReleaseKRSPollingDrivenZero.md)释放，两处不重复释放。
