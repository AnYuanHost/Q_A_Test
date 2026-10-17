# LogoutCoreKRSManager

***

映射LogoutCoreKRSManager接受超索引集合（SuperIndexSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map LogoutCoreKRSManager(&SuperIndexSet, &CoreKRSManager, LogoutCoreKRSManagerFunction);
```

核心KRS管理器注销映射（LogoutCoreKRSManager）以定义域元素携带的超索引为检索信息，在值域管理器中按超索引匹配对应登记项（[SelectCoreKRSManager](SelectCoreKRSManager.md)），命中后释放该项的三个子位置——超索引（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_SuperIndex）、动态库（CoreKRSM_Dll）与通用映射序（CoreKRSM_UMapOrder），各以 ReleaseElementFunction 释放，登记项随之成为空位，并递增空位计数（CoreKRSM_EmptyNumber）。若管理器中不存在该超索引，抛异常（未登记）。

注销只腾空登记项，**不缩减末尾标志**（CoreKRSM_End 仍计原登记数），空位交由 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) 归拢。本映射与 [LoginCoreKRSManager](LoginCoreKRSManager.md) 成对。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

Element SuperIndexElement;
// SuperIndexElement 为已登记的超索引

LoginCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
LogoutCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
// 该项留下空位，末尾标志不变，空位计数加一

DefragmentCoreKRSManagerFunction(EmptyElement, ManagerElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域为待注销的超索引SuperIndexElement，值域为管理器ManagerElement。注销把该项的超索引、动态库与通用映射序三子位置一并释放，留下一个空位，由 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) 归拢并回收页表。注销与登记成对；未登记的超索引会使本映射抛异常。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
