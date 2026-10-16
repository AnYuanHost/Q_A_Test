# DefragmentCoreKRSManager

***

映射DefragmentCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map DefragmentCoreKRSManager(&NullElementSet, &CoreKRSManager, DefragmentCoreKRSManagerFunction);
```

核心KRS管理器碎片整理映射（DefragmentCoreKRSManager）在值域管理器的分页登记表上压缩注销留下的空位，并按保留容量回收多余页表。整理分两步：先以书写位 midJ 从首项起扫描，把非空登记项前移（以 SwapElementFunction 成对搬移信息体子位置 CoreKRS_Object 与状态码子位置 CoreKRS_State），腾空的尾部项逐一释放——非空信息体经 [ReleaseCoreKRSObject](ReleaseCoreKRSObject.md) 释放，状态码经 ReleaseElementFunction 释放；再把末尾标志 CoreKRS_End 置为压缩后的实有项数 midJ。随后回收页表：目标页数为 midJ / PageSize + RetainSize（保留容量取 [CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_RetainSize），若当前页数大于目标页数，则把前目标页数转交进新页表、逐一释放多余页，再以新页表替换登记表本体（CoreKRS_Order）。

与 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 不同，本映射会收缩末尾标志 CoreKRS_End，并使项下标重排；整理需在 [SortCoreKRSManager](SortCoreKRSManager.md) 之后调用，顺序为先排序、再整理。末尾标志为 0 或登记表页数为 0 时直接返回。整理只改变登记表布局与页表规模，不改变信息体内容。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 已登录若干信息体，并经 LogoutCoreKRSManager 注销了其中一些（留下空位）

SortCoreKRSManagerFunction(EmptyElement, ManagerElement);
DefragmentCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 空位压缩、CoreKRS_End 收缩为实有项数，多余页表按 CoreKRS_RetainSize 回收

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：在注销留下空位后，按“先排序、再碎片整理”的固定次序调用两个映射：排序使实有项紧凑有序，整理随后收缩 CoreKRS_End 并回收多余页表。整理会释放尾部空项与多余页，此前按旧项下标取得的引用或检索结果随之失效，应先清零再整理；被释放信息体的持有权随空位一并归还，无需另行释放。管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对释放，完整链路见[核心KRS管理器集合](CoreKRSManager.md)。
