# ReleaseCoreKRSManager

***

映射ReleaseCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map ReleaseCoreKRSManager(&NullElementSet, &CoreKRSManager, ReleaseCoreKRSManagerFunction);
```

释放核心KRS管理器映射（ReleaseCoreKRSManager）分析值域管理器的分页登记表位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_Order，每项含信息体子位置 CoreKRS_Object 与状态码子位置 CoreKRS_State）与参数位置（CoreKRS_Parameter，以 CoreKRS_End 结尾）。释放分三段：先在末尾标志 CoreKRS_End 范围内逐项释放——非空信息体按 [ReleaseCoreKRSObject](ReleaseCoreKRSObject.md) 体例释放（连同其内部的动态库、符号表、子元素环境检索器等槽位一并释放），状态码经 ReleaseElementFunction 释放；再逐一释放登记表各页与登记表本体；最后释放参数位置的四个参数位与参数本体，并释放管理器本体。

该映射必须与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对使用：构造在值域元素上进行，释放同样在值域元素上进行。释放前应已完成 [LogoutCoreKRSManager](LogoutCoreKRSManager.md)（归还并清空已登录项）并清零经 [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md) 读出的状态引用与经 [SelectCoreKRSManager](SelectCoreKRSManager.md) 得到的下标所对应的使用；释放后元素不再属于核心KRS管理器集合，若再对其施加管理器映射的操作属于未定义使用。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

Element StateElement;
ZeroElementFunction(EmptyElement, StateElement);
// StateElement 为经 ReadObjectStateCoreKRSManager 读出的状态引用，先以 Zero 解除引用

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 逐项释放信息体与状态，再释放分页登记表与参数结构
```

案例解释：先构造管理器，工作中读出的状态引用（引用与 Zero 成对）必须先用 ZeroElementFunction 解除，再释放管理器——若先释放而未清引用，引用即悬垂在状态码子位置上。释放时逐项归还信息体（按 [ReleaseCoreKRSObject](ReleaseCoreKRSObject.md) 体例）与状态码，随后释放分页阵列与参数结构；构造与释放成对，跳过释放直接令元素析构会造成登记表、参数结构与信息体的资源泄漏。完整的构造、登录、序列化与释放流程，见[核心KRS管理器集合](CoreKRSManager.md)。
