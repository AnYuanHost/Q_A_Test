# CoreKRSDictionaries_Struct

***

命名空间CoreKRSDictionaries_Struct定义了超索引字典结构位置常量，定义为：

```C++
namespace CoreKRSDictionaries_Struct {
	unsigned int CoreKRSD_Order			= 0;
	unsigned int CoreKRSD_Parameter		= 1;
		unsigned int CoreKRSD_PageSize		= 0;
		unsigned int CoreKRSD_End			= 1;
		unsigned int CoreKRSD_ExpandSize	= 2;
		unsigned int CoreKRSD_RetainSize	= 3;

	unsigned int CoreKRSD_OrderSize		= 1;
	unsigned int CoreKRSD_SuperIndex		= 0;
}
```

其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| CoreKRSD_Order | 0 | 登记表位置 |
| CoreKRSD_Parameter | 1 | 参数位置 |
| CoreKRSD_PageSize | 0 | 参数位置：页容量 |
| CoreKRSD_End | 1 | 参数位置：末尾标志 |
| CoreKRSD_ExpandSize | 2 | 参数位置：扩容量 |
| CoreKRSD_RetainSize | 3 | 参数位置：保留容量 |
| CoreKRSD_OrderSize | 1 | 每项位置数量 |
| CoreKRSD_SuperIndex | 0 | 登记项位置：超索引 |

超索引字典元素共 2 个位置（登记表、参数）。参数位置是一个 4 位结构，含页容量、末尾标志、扩容量与保留容量；登记表是一个分页阵列，每项 CoreKRSD_OrderSize=1 位，仅存放超索引。通过宏 GetEleOrder(元素, 序号) 读取各位置，嵌套结构逐层访问，如 `GetEleOrder(GetEleOrder(元素, CoreKRSD_Parameter), CoreKRSD_PageSize)` 取出页容量。

本命名空间**沿用历史声明形式**（非 constexpr 的 `unsigned int`，与后续新增的三个结构命名空间使用的 `constexpr unsigned int` 写法不同），按原文保留；语义与遍历方式不受影响。

***

## 案例：

```C++
Element Dictionaries;
// Dictionaries 为已构造的超索引字典

unsigned int PageSize = GetUIntElement(
	GetEleOrder(GetEleOrder(Dictionaries, CoreKRSD_Parameter), CoreKRSD_PageSize));

unsigned int End;
End = GetUIntElement(
	GetEleOrder(GetEleOrder(Dictionaries, CoreKRSD_Parameter), CoreKRSD_End));
```

案例中从超索引字典 Dictionaries 出发先进入参数位置（CoreKRSD_Parameter），再取页容量（CoreKRSD_PageSize）与末尾标志（CoreKRSD_End）。登记表位置（CoreKRSD_Order）内第 i 项的超索引按 `midI / PageSize` 与 `midI % PageSize` 两级下标定位后以 CoreKRSD_SuperIndex 访问。关于超索引字典的完整流程，跳转至[超索引字典集合](CoreKRSDictionaries.md)。
