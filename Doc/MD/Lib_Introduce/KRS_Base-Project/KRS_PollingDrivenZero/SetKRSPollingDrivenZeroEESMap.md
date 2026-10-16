# SetKRSPollingDrivenZeroEESMap

***

映射SetKRSPollingDrivenZeroEESMap接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域，定义为：

```C++
Map SetKRSPollingDrivenZeroEESMap(&ElementOrderSet, &KRSPollingDrivenZero, SetKRSPollingDrivenZeroEESMapFunction);
```

知识库零轮询机元素环境检索器映射设置映射（SetKRSPollingDrivenZeroEESMap）将定义域元素序列（元素环境检索器操作映射序列）设置到值域知识库零轮询机元素映射集合位置`KRSPollingDrivenZero_Struct::KRSPDZ_Map`下的元素环境检索器映射组`KRSPDZ_EES_Map`上。序列内元素与组内七个位置常量`KRSPDZ_EES_Get`、`KRSPDZ_EES_Read`、`KRSPDZ_EES_Put`、`KRSPDZ_EES_Occupy`、`KRSPDZ_EES_RelieveOccupy`、`KRSPDZ_EES_Login`、`KRSPDZ_EES_Logout`一一对应，轮询执行按位置常量取出。

本映射与[ConstructKRSPollingDrivenZeroEESMap](ConstructKRSPollingDrivenZeroEESMap.md)成对：先建组、再写入序列，组未构造时该位置没有可写入的结构。设置只把序列写入指定位置，不接管序列本身的生命周期，序列仍归创建者所有，用毕由创建者释放。

***

## 案例：

```C++
Element KRS;
NewKRSPollingDrivenZeroFunction(EmptyElement, KRS);

ConstructKRSPollingDrivenZeroEESMapFunction(EmptyElement, KRS);

Element Length;
NewUIntElementFunction(EmptyElement, Length);
GetUIntElement(Length) = 7;   // KRSPDZ_EES_Get … KRSPDZ_EES_Logout 共七个位置

Element EESMapOrder;
UIntNewElementOrderFunction(Length, EESMapOrder);

// 在 EESMapOrder 各位置放入元素环境检索器操作映射

SetKRSPollingDrivenZeroEESMapFunction(EESMapOrder, KRS);

// 知识库零轮询机按 KRSPDZ_EES_Map 下的位置常量取出操作映射执行

ReleaseElementFunction(EmptyElement, EESMapOrder);
ReleaseElementFunction(EmptyElement, Length);
ReleaseKRSPollingDrivenZeroFunction(EmptyElement, KRS);
```

案例中先新建知识库零轮询机并构造元素环境检索器映射组，再按七个位置常量准备长度为7的元素序列并整组写入；序列长度`7`由`KRSPDZ_EES_Get`至`KRSPDZ_EES_Logout`七个位置常量确定。收尾按顺序释放序列、长度元素与知识库零轮询机，构造与释放成对：序列与整机分别归创建者释放，设置本身不转移所有权，因此不重复释放。
