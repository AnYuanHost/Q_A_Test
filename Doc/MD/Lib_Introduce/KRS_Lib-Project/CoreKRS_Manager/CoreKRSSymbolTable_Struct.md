# CoreKRSSymbolTable_Struct

***

命名空间CoreKRSSymbolTable_Struct定义核心KRS符号表结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ST_Order | 0 | 分页符号阵列位置 |
| ST_Parameter | 1 | 参数位置 |
| ST_PageSize | 0 | 页容量（每页项数），隶属参数位置的参数结构 |
| ST_End | 1 | 末尾标志（已登记符号项数），隶属参数位置的参数结构 |
| ST_ExpandSize | 2 | 扩容量（增页页数），隶属参数位置的参数结构 |
| ST_RetainSize | 3 | 保留容量（最少保留页数），隶属参数位置的参数结构 |
| ST_Dll | 2 | 来源动态链接库位置 |
| ST_SlotNumber | 3 | 顶层位置数量 |
| ST_OrderSize | 4 | 每项位置数量 |
| ST_Name | 0 | 项内：符号名 |
| ST_Category | 1 | 项内：类型码 |
| ST_Address | 2 | 项内：解析地址 |
| ST_State | 3 | 项内：解析状态 |

核心KRS符号表元素共 3 个顶层位置（ST_SlotNumber=3）：分页符号阵列（ST_Order=0）、参数（ST_Parameter=1）、来源动态链接库（ST_Dll=2）。分页符号阵列是以页为单位的元素序，每页容纳 ST_PageSize 个符号项，每个符号项占 ST_OrderSize=4 个位置：符号名（ST_Name=0）、类型码（ST_Category=1）、解析地址（ST_Address=2）、解析状态（ST_State=3）。参数位置是一个 4 位结构：页容量（ST_PageSize）、末尾标志（ST_End）、扩容量（ST_ExpandSize）、保留容量（ST_RetainSize），新建时默认取值 16 / 0 / 2 / 3。类型码取自意向性映射管理器类型名称（[CoreKRSLibMapManager_TypeName](../CoreKRSLib_MapManager/CoreKRSLibMapManager_TypeName.md)）：Element_Type=0（元素）、Set_Type=1（集合）、Map_Type=2（映射）。

***

## 状态码 CoreKRSSymbolTable_StateCode

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ST_Unresolved | 0 | 未解析 |
| ST_Resolved | 1 | 已解析 |
| ST_Failed | 2 | 解析失败 |

符号项经[登录](LoginCoreKRSSymbolTable.md)登记时解析状态置为 ST_Unresolved；[解析映射](ResolveCoreKRSSymbolTable.md)按符号名寻址成功时置 ST_Resolved、失败时置 ST_Failed；[状态写入映射](SetCoreKRSSymbolTableState.md)可显式改写该状态。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);

// 顶层位置数量（ST_SlotNumber）
unsigned int SlotNumber = GetEleOrderSize(Table);

// 分页符号阵列
Element& Order = GetEleOrder(Table, CoreKRSSymbolTable_Struct::ST_Order);

// 参数：页容量、末尾标志、扩容量、保留容量
unsigned int PageSize = GetUIntElement(
    GetEleOrder(GetEleOrder(Table, CoreKRSSymbolTable_Struct::ST_Parameter),
                CoreKRSSymbolTable_Struct::ST_PageSize));
unsigned int End = GetUIntElement(
    GetEleOrder(GetEleOrder(Table, CoreKRSSymbolTable_Struct::ST_Parameter),
                CoreKRSSymbolTable_Struct::ST_End));

// 第 0 页第 0 项的四位：符号名、类型码、解析地址、解析状态
Element& FirstPage = GetEleOrder(Order, 0);
unsigned int NameSlot = (0 % PageSize) * CoreKRSSymbolTable_Struct::ST_OrderSize
                      + CoreKRSSymbolTable_Struct::ST_Name;
Element& SymbolName = GetEleOrder(FirstPage, NameSlot);

ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：核心KRS符号表元素的结构逐层访问由宏 GetEleOrder(元素, 序号) 完成，嵌套结构逐层展开，如 GetEleOrder(GetEleOrder(Table, ST_Parameter), ST_End)。分页符号阵列按"页号 × 页容量"分页，第 Index 项落在第 Index / PageSize 页、页内第 (Index % PageSize) * ST_OrderSize 个位置，故第 Index 项的第 Slot 位可通过 GetEleOrder(GetEleOrder(Order, Index / PageSize), (Index % PageSize) * ST_OrderSize + Slot) 访问。符号项的登记、解析与状态读取的完整流程，跳转至[核心KRS符号表案例](CoreKRSSymbolTable_Case.md)。
