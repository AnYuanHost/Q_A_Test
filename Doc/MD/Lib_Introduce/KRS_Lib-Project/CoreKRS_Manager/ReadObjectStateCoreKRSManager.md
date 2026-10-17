# ReadObjectStateCoreKRSManager

***

映射ReadObjectStateCoreKRSManager接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map ReadObjectStateCoreKRSManager(&OrderedPairSet, &UIntSet, ReadObjectStateCoreKRSManagerFunction);
```

核心KRS管理器项状态读取映射（ReadObjectStateCoreKRSManager）分析定义域序偶元素，其结构为：<项下标, 核心KRS管理器>，其信息为：<目标登记项的项下标，目标管理器>。按序偶第一位置的下标定位序偶第二位置管理器的登记项，以“Range |= 槽位”把该项的状态码子位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_State）引用传递到值域无符号整型元素上。值域元素是槽位的借用引用而非副本，取值经宏 GetUIntElement 读出，与命名空间 CoreKRSObject_StateCode 的常量比对：CoreKRSObject_Usable=0（可用）、CoreKRSObject_Unusable=1（不可用）。

引用语义的三条纪律：读出后使用完毕须以 ZeroElementFunction 解除引用，不得单独 ReleaseElementFunction 该输出元素；引用随管理器失效，管理器一经 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 释放或状态槽位经 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 释放，此前取得的引用即悬垂，必须先清零再释放；下标越界（不小于末尾标志 CoreKRS_End）时抛出异常（throw Element）。配对写入映射为 [SetObjectStateCoreKRSManager](SetObjectStateCoreKRSManager.md)。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 信息体已由 LoginCoreKRSManager 登录到该管理器，项下标已知

Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);
GetUIntElement(IndexElement) = 0;

Element ReadPair;
NewOrderedPairFunction(EmptyElement, ReadPair);
GetEleOrder(ReadPair, 0) |= IndexElement;
GetEleOrder(ReadPair, 1) |= ManagerElement;

Element StateElement;
NewUIntElementFunction(EmptyElement, StateElement);
ReadObjectStateCoreKRSManagerFunction(ReadPair, StateElement);
// StateElement 引用该项的状态码子位置（CoreKRS_State）

if (GetUIntElement(StateElement) == CoreKRSObject_Usable)
{
	// 该项处于可用态
}

ZeroElementFunction(EmptyElement, StateElement);
ZeroElementFunction(EmptyElement, ReadPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：序偶用 NewOrderedPairFunction 构造、用毕 ZeroElementFunction 清零；值域元素 StateElement 是管理器状态槽位的借用引用，读值后必须以 ZeroElementFunction 解除引用（引用与 Zero 成对），不得单独释放；若 ManagerElement 随后被释放而未清零该引用，即构成悬垂引用——先清引用再释放，是引用随管理器失效的必然要求。下标越界会抛出异常；写入状态见 [SetObjectStateCoreKRSManager](SetObjectStateCoreKRSManager.md)，完整链路见[核心KRS管理器集合](CoreKRSManager.md)。
