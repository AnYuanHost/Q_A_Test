# ConstructKRSPollingDrivenZeroEESMap

***

映射ConstructKRSPollingDrivenZeroEESMap接受空元素集合（NullElementSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域，定义为：

```C++
Map ConstructKRSPollingDrivenZeroEESMap(&NullElementSet, &KRSPollingDrivenZero, ConstructKRSPollingDrivenZeroEESMapFunction);
```

知识库零轮询机构造元素环境检索器映射（ConstructKRSPollingDrivenZeroEESMap）在值域知识库零轮询机元素的映射集合位置`KRSPollingDrivenZero_Struct::KRSPDZ_Map`下构造元素环境检索器映射组`KRSPDZ_EES_Map`，按该组七个位置常量`KRSPDZ_EES_Get`（获取）、`KRSPDZ_EES_Read`（读取）、`KRSPDZ_EES_Put`（存入）、`KRSPDZ_EES_Occupy`（占用）、`KRSPDZ_EES_RelieveOccupy`（解除占用）、`KRSPDZ_EES_Login`（登录）、`KRSPDZ_EES_Logout`（登出）注册对应的元素环境检索器操作映射，供轮询执行时按位置常量取出执行。

本映射只负责建组：外部已准备好的元素环境检索器操作映射序列经[SetKRSPollingDrivenZeroEESMap](SetKRSPollingDrivenZeroEESMap.md)写入同一位置，建组与写入成对，先建组后写入。结构位置常量以源头头文件`Lib.h.cpp/KRS_Base/h.cpp/KRS_PollingDrivenZero.h`为准（[KRSPollingDrivenZero_Struct](KRSPollingDrivenZero_Struct.md)所载为旧版编号，本篇不改写）。

***

## 案例：

```C++
Element KRS;
NewKRSPollingDrivenZeroFunction(EmptyElement, KRS);

// 构造元素环境检索器映射组
ConstructKRSPollingDrivenZeroEESMapFunction(EmptyElement, KRS);

// 三级取位：映射集合位置 → 元素环境检索器映射组 → 登录位置
Element& EESMapGroup = GetEleOrder(
    GetEleOrder(KRS, KRSPollingDrivenZero_Struct::KRSPDZ_Map),
    KRSPollingDrivenZero_Struct::KRSPDZ_EES_Map);
Map& LoginMap = GetMapElement(
    GetEleOrder(EESMapGroup, KRSPollingDrivenZero_Struct::KRSPDZ_EES_Login));

// LoginMap 为登录位置上的映射视图，取视图不改变元素状态、不触发任何释放

ReleaseKRSPollingDrivenZeroFunction(EmptyElement, KRS);
```

案例中先经[NewKRSPollingDrivenZero](NewKRSPollingDrivenZero.md)新建知识库零轮询机元素，再构造其元素环境检索器映射组，随后按`KRSPDZ_Map` → `KRSPDZ_EES_Map` → `KRSPDZ_EES_Login`三级取出登录位置上的映射视图；`GetEleOrder`与`GetMapElement`只做取值，不分配也不释放，收尾整机释放，构造与释放成对。需要整体换入外部准备好的操作映射序列时，改用[SetKRSPollingDrivenZeroEESMap](SetKRSPollingDrivenZeroEESMap.md)。
