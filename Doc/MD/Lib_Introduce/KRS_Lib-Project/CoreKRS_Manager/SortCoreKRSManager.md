# SortCoreKRSManager

***

映射SortCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map SortCoreKRSManager(&NullElementSet, &CoreKRSManager, SortCoreKRSManagerFunction);
```

核心KRS管理器排序映射（SortCoreKRSManager）在值域管理器的分页登记表上、于末尾标志（CoreKRS_End）限定的范围内执行冒泡排序：空位视为最小，沉向前端；实有信息体按超索引升序排在后段，超索引的先后经 SuperIndexLessFunction 比较各登记项信息体的超索引位置（[CoreKRSObject_Struct](CoreKRSObject_Struct.md) 的 CoreKRSObject_SuperIndex）判定。排序以 SwapElementFunction 成对交换信息体子位置（CoreKRS_Object）与状态码子位置（CoreKRS_State），状态随信息体一同移动，故项下标与状态的对应关系始终一致。

排序不增删登记项，末尾标志 CoreKRS_End 不变；空元素集合作为定义域，输入为空。末尾标志为 0 或登记表页数为 0 时直接返回。[LoginCoreKRSManager](LoginCoreKRSManager.md) 每次追加登记项后自动调用本映射，使实有项按下标紧凑且按超索引升序排列，[SelectCoreKRSManager](SelectCoreKRSManager.md) 的线性检索据此在 End 范围内稳定命中。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 已登录若干信息体（超索引乱序）

SortCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 空位沉向前端，实有项按超索引升序排在后段

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：排序就地改变登记表布局，不增删登记项，CoreKRS_End 保持不变；交换时信息体与状态码成对移动，项下标与状态的对应关系不受破坏。排序只读取超索引，不改变信息体与其独立维护的符号表；管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对释放（构造与释放成对）。排序后回收空位见 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)，完整链路见[核心KRS管理器集合](CoreKRSManager.md)。
