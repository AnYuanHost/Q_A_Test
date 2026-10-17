# LoginCoreKRSManager

***

映射LoginCoreKRSManager接受超索引集合（SuperIndexSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map LoginCoreKRSManager(&SuperIndexSet, &CoreKRSManager, LoginCoreKRSManagerFunction);
```

核心KRS管理器登记映射（LoginCoreKRSManager）把定义域元素携带的超索引**深拷贝**登记到值域管理器末尾登记项的超索引位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_SuperIndex），并递增末尾标志（CoreKRSM_End）。该项的动态库位置（CoreKRSM_Dll）与通用映射序位置（CoreKRSM_UMapOrder）留空，随后由 [PutCoreKRSManagerDll](PutCoreKRSManagerDll.md) 与 [PutCoreKRSManagerUMap](PutCoreKRSManagerUMap.md) 装配。

登记前置检查：以超索引为检索信息在管理器中匹配（[SelectCoreKRSManager](SelectCoreKRSManager.md)），若已存在同一超索引则抛异常（重复登记）。登记表容量不足（`GetEleOrderSize(登记表) == 末尾 / 页容量` 且 `末尾 % 页容量 == 0`）时，按扩容量（CoreKRSM_ExpandSize）新建页表、把既有页表逐页转交搬入并补齐空项，再接纳新登记。登记完成后自动调用 [SortCoreKRSManager](SortCoreKRSManager.md) 维持排序。

登记项的定位由两级下标给出：页号 `末尾 / 页容量`、页内偏移 `(末尾 % 页容量) * CoreKRSM_OrderSize + CoreKRSM_SuperIndex`。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

Element SuperIndexElement;
// SuperIndexElement 为待登记的超索引

LoginCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
// ManagerElement 末尾新增一项，登记该超索引；动态库与通用映射序暂空

LogoutCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
// 该项成为空位，末尾标志不变

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域为待登记的超索引SuperIndexElement，值域为管理器ManagerElement。登记把超索引深拷贝进末尾登记项，登记键即超索引，动态库与通用映射序另经 Put 装配。登记与注销成对（[LoginCoreKRSManager](LoginCoreKRSManager.md) 对 [LogoutCoreKRSManager](LogoutCoreKRSManager.md)）；登记重复超索引会抛异常，登记后如需收缩空位，须经 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md)。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
