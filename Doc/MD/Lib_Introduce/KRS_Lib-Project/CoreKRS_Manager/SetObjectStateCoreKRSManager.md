# SetObjectStateCoreKRSManager

***

映射SetObjectStateCoreKRSManager接受元素序偶集合（OrderedPairSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map SetObjectStateCoreKRSManager(&OrderedPairSet, &CoreKRSManager, SetObjectStateCoreKRSManagerFunction);
```

核心KRS管理器项状态设置映射（SetObjectStateCoreKRSManager）分析定义域序偶元素，其结构为：<项下标, 状态码>，其信息为：<目标登记项的项下标，待写入的状态码>。把序偶第二位置无符号整型元素上的状态码写入序偶第一位置下标所指登记项的状态码子位置，即 [CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_State。状态码取值由命名空间 CoreKRSObject_StateCode 规定：CoreKRSObject_Usable=0（可用）、CoreKRSObject_Unusable=1（不可用）。

写入只改变状态码子位置的内容，不改变登记项中的信息体本身，也不转移状态码元素的所有权。信息体登录时状态自动进入可用态，本映射用于显式改写状态（例如把某项标记为不可用以便暂停调度）。若项下标越界（不小于末尾标志 CoreKRS_End），则抛出异常（throw Element）。配对读取映射为 [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md)。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 信息体已由 LoginCoreKRSManager 登录到该管理器，项下标已知

Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);
GetUIntElement(IndexElement) = 0;

Element StateElement;
NewUIntElementFunction(EmptyElement, StateElement);
GetUIntElement(StateElement) = CoreKRSObject_Unusable;

Element StatePair;
NewOrderedPairFunction(EmptyElement, StatePair);
GetEleOrder(StatePair, 0) |= IndexElement;
GetEleOrder(StatePair, 1) |= StateElement;

SetObjectStateCoreKRSManagerFunction(StatePair, ManagerElement);
// 项下标 0 的状态码子位置写入不可用状态码

ZeroElementFunction(EmptyElement, StatePair);
ReleaseElementFunction(EmptyElement, StateElement);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：序偶第一位置是目标项下标、第二位置是状态码，调用映射后状态码写入管理器该登记项的 CoreKRS_State。写入不改变信息体、也不取得状态码元素的所有权：下标元素与状态码元素由本方释放，序偶以 ZeroElementFunction 清零（引用与 Zero 成对），管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放。下标越界会抛出异常；读回状态见 [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md)。
