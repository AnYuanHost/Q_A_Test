# ConstructKRSPollingDirvenZeroThreadMap

***

映射ConstructKRSPollingDirvenZeroThreadMap接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域，定义为：

```C++
Map ConstructKRSPollingDirvenZeroThreadMap(&NullElementSet, &KRSPollingDrivenZero, ConstructKRSPollingDrivenZeroThreadMapFunction);
```

拼写说明：映射对象的源头拼写为`ConstructKRSPollingDirvenZeroThreadMap`，其中`Dirven`是`Driven`的历史错拼，按源头头文件原样保留；其配套真函数在头文件中声明为`ConstructKRSPollingDrivenZeroThreadMapFunction`（拼写正确），映射对象与真函数拼写不一致，同样按源头保留，调用时函数用`…DrivenZeroThreadMapFunction`、映射用`…DirvenZeroThreadMap`。

知识库零轮询机构造线程映射（ConstructKRSPollingDirvenZeroThreadMap）在值域知识库零轮询机元素的映射集合位置`KRSPollingDrivenZero_Struct::KRSPDZ_Map`下构造线程映射组`KRSPDZ_Thread_Map`，按该组三个位置常量`KRSPDZ_Thread_Active`（启动线程）、`KRSPDZ_Thread_Test`（检测线程状态）、`KRSPDZ_Thread_Release`（释放线程）注册对应的线程接口标准映射，供轮询执行时按位置常量取出执行。

本映射只负责建组：外部已准备好的线程接口映射序列经[SetKRSPollingDrivneZeroThreadMap](SetKRSPollingDrivneZeroThreadMap.md)写入同一位置，建组与写入成对，先建组后写入。线程接口映射由Thread_Base模块按统一接口标准注册，注册入口见[LoginThreadMap](../../Thread_Base-Project/Thread_Base/LoginThreadMap.md)。

***

## 案例：

```C++
Element KRS;
NewKRSPollingDrivenZeroFunction(EmptyElement, KRS);

// 构造线程映射组
ConstructKRSPollingDrivenZeroThreadMapFunction(EmptyElement, KRS);

// 三级取位：映射集合位置 → 线程映射组 → 执行位置
Element& ThreadMapGroup = GetEleOrder(
    GetEleOrder(KRS, KRSPollingDrivenZero_Struct::KRSPDZ_Map),
    KRSPollingDrivenZero_Struct::KRSPDZ_Thread_Map);
Map& ActiveMap = GetMapElement(
    GetEleOrder(ThreadMapGroup, KRSPollingDrivenZero_Struct::KRSPDZ_Thread_Active));

// ActiveMap 为执行位置上的映射视图，取视图不改变元素状态、不触发任何释放

ReleaseKRSPollingDrivenZeroFunction(EmptyElement, KRS);
```

案例中先经[NewKRSPollingDrivenZero](NewKRSPollingDrivenZero.md)新建知识库零轮询机元素，再构造其线程映射组，随后按`KRSPDZ_Map` → `KRSPDZ_Thread_Map` → `KRSPDZ_Thread_Active`三级取出执行位置上的映射视图；`GetEleOrder`与`GetMapElement`只做取值，不分配也不释放，收尾整机释放，构造与释放成对。需要整体换入外部准备好的线程接口映射序列时，改用[SetKRSPollingDrivneZeroThreadMap](SetKRSPollingDrivneZeroThreadMap.md)。
