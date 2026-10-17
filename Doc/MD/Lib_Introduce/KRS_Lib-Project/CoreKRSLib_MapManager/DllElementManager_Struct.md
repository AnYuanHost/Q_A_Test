# DllElementManager_Struct

***

命名空间DllElementManager_Struct定义了动态库元素管理器结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| DEM_SuperIndex | 0 | 超索引位置 |
| DEM_Order | 1 | 序位置 |
| DEM_Dll | 2 | 动态库元素位置 |
| DEM_Parameter | 3 | 参数位置 |
| DEM_End | 0 | 参数末端标记，隶属参数位置的参数结构 |
| DEM_OrderSize | 2 | 序结构尺寸 |
| DEM_Information | 0 | 序结构：信息 |
| DEM_Element | 1 | 序结构：元素 |

动态库元素管理器元素共 4 个位置（超索引、序、动态库元素、参数）。序位置是一个 DEM_OrderSize=2 的结构，包含信息与元素两个子位置；参数位置是一个以 DEM_End 结尾的参数结构。通过宏 GetEleOrder(元素, 序号) 读取各位置，嵌套结构逐层访问，如 GetEleOrder(GetEleOrder(元素, DllElementManager_Struct::DEM_Order), DllElementManager_Struct::DEM_Element)。

***

## 案例：

```C++
Element ManagerEntry;

unsigned int Index = GetUIntElement(
    GetEleOrder(ManagerEntry, DllElementManager_Struct::DEM_SuperIndex));
```

案例中从管理器条目 ManagerEntry 出发读取超索引位置（DEM_SuperIndex），由 GetUIntElement 取出登记的超索引编号。序位置（DEM_Order）的两个子位置分别以 DEM_Information 与 DEM_Element 访问，参数位置（DEM_Parameter）以 DEM_End 判定参数末端。关于动态库元素管理器的完整案例，跳转至[核心KRS库映射管理器案例](CoreKRSLib_MapManager_Case.md)。
