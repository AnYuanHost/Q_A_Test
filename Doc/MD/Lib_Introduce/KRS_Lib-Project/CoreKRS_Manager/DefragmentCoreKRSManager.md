# DefragmentCoreKRSManager

***

映射DefragmentCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map DefragmentCoreKRSManager(&NullElementSet, &CoreKRSManager, DefragmentCoreKRSManagerFunction);
```

核心KRS管理器压缩映射（DefragmentCoreKRSManager）把值域管理器登记表中的实有登记项**前移**、空位（注销留下的空登记项）沉向末端并逐位释放，然后把末尾标志（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_End）改写为压缩后的实有项数，并把空位计数（CoreKRSM_EmptyNumber）清零。压缩以书写位从首项起扫描，把非空项的三个子位置（超索引 CoreKRSM_SuperIndex、动态库 CoreKRSM_Dll、通用映射序 CoreKRSM_UMapOrder）经 SwapElementFunction 一并对调前移，腾空的尾部项逐一释放。

压缩后按保留容量（CoreKRSM_RetainSize）回收多余页表：目标页数取 `实有项数 / 页容量 + 保留容量`，若当前页数大于目标页数，则把前目标页数页逐页转交进新页表、逐一释放多余页，再以新页表替换登记表本体（CoreKRSM_Order）。

与 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 不同，本映射会收缩末尾标志 CoreKRSM_End，并使项下标重排；整理需在 [SortCoreKRSManager](SortCoreKRSManager.md) 之后调用，顺序为先排序、再整理。末尾标志为 0 或登记表页数为 0 时直接返回。整理只改变登记表布局与页表规模，不改变登记项内容；若不归拢空位，检索仍可跳过空位命中，但页表与下标会长期稀疏。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

// 登录若干超索引后注销其中部分，留下空位

DefragmentCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 实有登记项前移，空位释放，末尾标志改写为实有项数，页表按保留容量回收

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域为空元素（以 EmptyElement 充当），值域为待压缩的管理器ManagerElement。压缩把非空登记项依次前移，尾部腾空位置逐一释放，并回收多余页表；此后登记仍按末尾标志追加。压缩不改变登记内容，只归拢空位。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
