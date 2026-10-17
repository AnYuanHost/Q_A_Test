# ReleaseCoreKRSManager

***

映射ReleaseCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map ReleaseCoreKRSManager(&NullElementSet, &CoreKRSManager, ReleaseCoreKRSManagerFunction);
```

释放核心KRS管理器映射（ReleaseCoreKRSManager）释放值域管理器的全部资源。执行前先以判定函数 CoreKRSManagerTest 校验值域确为管理器元素，非管理器元素直接返回、不做释放。

释放分四段：先在末尾标志（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRSM_End）范围内逐项释放——每项的超索引（CoreKRSM_SuperIndex）、动态库（CoreKRSM_Dll）与通用映射序（CoreKRSM_UMapOrder）三个子位置各以 ReleaseElementFunction 释放；再逐页释放分页登记表各页与登记表本体（CoreKRSM_Order）；随后释放参数位置的五个参数位（CoreKRSM_End、CoreKRSM_PageSize、CoreKRSM_ExpandSize、CoreKRSM_RetainSize、CoreKRSM_EmptyNumber）与参数本体（CoreKRSM_Parameter）；最后释放管理器元素本身，使值域元素脱离核心KRS管理器集合。

本映射与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对：构造在值域元素上进行，释放同样在值域元素上进行。释放前应已完成 [LogoutCoreKRSManager](LogoutCoreKRSManager.md)（注销已登记项）并解除经 [ReadCoreKRSManagerDll](ReadCoreKRSManagerDll.md)/[ReadCoreKRSManagerUMap](ReadCoreKRSManagerUMap.md) 读出的引用（以 ZeroElementFunction）。释放后元素不再属于核心KRS管理器集合，若再对其施加管理器映射的操作属于未定义使用。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 登录若干超索引，并装配动态库与通用映射序

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
// ManagerElement 已脱离 CoreKRSManager，可被复用

NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域为空元素，值域为待释放的管理器ManagerElement。释放逐项、逐页、逐参数回收资源，释放后元素不再属于集合；构造与释放成对，跳过释放直接令元素析构会造成资源泄漏。完整调度见[核心KRS管理器集合](CoreKRSManager.md)。
