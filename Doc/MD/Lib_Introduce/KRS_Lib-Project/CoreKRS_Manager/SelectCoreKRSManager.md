# SelectCoreKRSManager

***

映射SelectCoreKRSManager接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map SelectCoreKRSManager(&OrderedPairSet, &UIntSet, SelectCoreKRSManagerFunction);
```

核心KRS管理器检索映射（SelectCoreKRSManager）分析定义域序偶元素，其结构为：<超索引, 核心KRS管理器>，其信息为：<待检索的超索引，目标管理器>。以序偶第一位置的超索引为检索信息，在序偶第二位置管理器的分页登记表中逐项比较已登记信息体的超索引位置（[CoreKRSObject_Struct](CoreKRSObject_Struct.md) 的 CoreKRSObject_SuperIndex，空位跳过），命中即把该项的项下标写入值域无符号整型元素；未命中则写入 UINT_MAX。检索范围由参数的末尾标志（CoreKRS_End）限定，因此执行前必须先经 [LoginCoreKRSManager](LoginCoreKRSManager.md) 完成信息体登录。

本映射的值域是项下标（UIntSet），不是信息体或管理器本身——命中后还须以该下标配合 [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md) 读取状态，或经 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 按超索引直接注销。下标随布局变动而失效：[SortCoreKRSManager](SortCoreKRSManager.md) 与 [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) 都会改变项下标，检索结果须及时使用。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 已在管理器上登录若干知识库信息体

Element SuperIndexElement;
// SuperIndexElement 为待检索的超索引（SuperIndexSet 元素）

Element SelectPair;
NewOrderedPairFunction(EmptyElement, SelectPair);
GetEleOrder(SelectPair, 0) |= SuperIndexElement;
GetEleOrder(SelectPair, 1) |= ManagerElement;

Element IndexElement;
NewUIntElementFunction(EmptyElement, IndexElement);
SelectCoreKRSManagerFunction(SelectPair, IndexElement);
// IndexElement 得到匹配项的项下标；未命中时写入 UINT_MAX

if (GetUIntElement(IndexElement) == UINT_MAX)
{
	// 该超索引未在管理器中登记
}

ZeroElementFunction(EmptyElement, SelectPair);
ReleaseElementFunction(EmptyElement, IndexElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：序偶的第一位置是待检索的超索引、第二位置是目标管理器，调用映射后值域元素取得命中项的项下标，未命中时为 UINT_MAX。序偶用 NewOrderedPairFunction 构造、用毕 ZeroElementFunction 清零（引用与 Zero 成对）；下标元素由本方释放，管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对释放。按下标读状态见 [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md)，完整链路见[核心KRS管理器集合](CoreKRSManager.md)。
