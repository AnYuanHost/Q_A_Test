# SetKRSPollingDrivneZeroThreadMap

***

映射SetKRSPollingDrivneZeroThreadMap接受元素序列集合（ElementOrderSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域，定义为：

```C++
Map SetKRSPollingDrivneZeroThreadMap(&ElementOrderSet, &KRSPollingDrivenZero, SetKRSPollingDrivenZeroThreadMapFunction);
```

拼写说明：映射对象的源头拼写为`SetKRSPollingDrivneZeroThreadMap`，其中`Drivne`是`Driven`的历史错拼，按源头头文件原样保留；其配套真函数在头文件中声明为`SetKRSPollingDrivenZeroThreadMapFunction`（拼写正确），映射对象与真函数拼写不一致，同样按源头保留，调用时函数用`…DrivenZeroThreadMapFunction`、映射用`…DrivneZeroThreadMap`。

知识库零轮询机线程映射设置映射（SetKRSPollingDrivneZeroThreadMap）将定义域元素序列（线程接口映射序列）设置到值域知识库零轮询机元素映射集合位置`KRSPollingDrivenZero_Struct::KRSPDZ_Map`下的线程映射组`KRSPDZ_Thread_Map`上。序列内元素与组内三个位置常量`KRSPDZ_Thread_Active`（启动线程）、`KRSPDZ_Thread_Test`（检测线程状态）、`KRSPDZ_Thread_Release`（释放线程）一一对应，轮询执行按位置常量取出。

本映射与[ConstructKRSPollingDirvenZeroThreadMap](ConstructKRSPollingDirvenZeroThreadMap.md)成对：先建组、再写入序列，组未构造时该位置没有可写入的结构。线程接口映射序列由Thread_Base模块按统一接口标准注册产生，注册入口见[LoginThreadMap](../../Thread_Base-Project/Thread_Base/LoginThreadMap.md)，其产出的三映射序列正对应该组三个位置。设置只把序列写入指定位置，不接管序列本身的生命周期，序列仍归创建者所有，用毕由创建者释放。

***

## 案例：

```C++
Element KRS;
NewKRSPollingDrivenZeroFunction(EmptyElement, KRS);

ConstructKRSPollingDrivenZeroThreadMapFunction(EmptyElement, KRS);

Element Length;
NewUIntElementFunction(EmptyElement, Length);
GetUIntElement(Length) = 3;   // KRSPDZ_Thread_Active、KRSPDZ_Thread_Test、KRSPDZ_Thread_Release

Element ThreadMapOrder;
UIntNewElementOrderFunction(Length, ThreadMapOrder);

// 在 ThreadMapOrder 三个位置放入线程接口标准映射（执行、检测、释放）

SetKRSPollingDrivenZeroThreadMapFunction(ThreadMapOrder, KRS);

// 知识库零轮询机按 KRSPDZ_Thread_Map 下的位置常量取出线程接口映射执行

ReleaseElementFunction(EmptyElement, ThreadMapOrder);
ReleaseElementFunction(EmptyElement, Length);
ReleaseKRSPollingDrivenZeroFunction(EmptyElement, KRS);
```

案例中先新建知识库零轮询机并构造线程映射组，再按三个位置常量准备长度为3的元素序列并整组写入；序列长度`3`由`KRSPDZ_Thread_Active`至`KRSPDZ_Thread_Release`三个位置常量确定。收尾按顺序释放序列、长度元素与知识库零轮询机，构造与释放成对：序列与整机分别归创建者释放，设置本身不转移所有权，因此不重复释放。线程接口映射的标准注册与联合用法见[Thread_Base联合案例](../../Thread_Base-Project/Thread_Base/Thread_Base_Case.md)。
