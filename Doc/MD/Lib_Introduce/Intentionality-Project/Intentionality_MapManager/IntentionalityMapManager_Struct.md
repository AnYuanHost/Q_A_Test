# IntentionalityMapManager_Struct

***

命名空间IntentionalityMapManager_Struct定义了意向性映射管理器结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| IMM_Order | 0 | 序位置 |
| IMM_Parameter | 1 | 参数位置 |
| IMM_End | 0 | 参数末端标记，隶属参数位置的参数结构 |
| IMM_OrderSize | 2 | 序结构尺寸 |
| IMM_Information | 0 | 序结构：信息 |
| IMM_ElementCategory | 1 | 序结构：元素类别 |

意向性映射管理器元素共 2 个位置（序、参数）。序位置是一个 IMM_OrderSize=2 的结构，包含信息与元素类别两个子位置；参数位置是一个以 IMM_End 结尾的参数结构。通过宏 GetEleOrder(元素, 序号) 读取各位置，嵌套结构逐层访问，如 GetEleOrder(GetEleOrder(元素, IntentionalityMapManager_Struct::IMM_Order), IntentionalityMapManager_Struct::IMM_Information)。

***

## 案例：

```C++
Element ManagerElement;

unsigned int TypeNumber = GetUIntElement(
    GetEleOrder(GetEleOrder(ManagerElement, IntentionalityMapManager_Struct::IMM_Order),
                IntentionalityMapManager_Struct::IMM_ElementCategory));
```

案例中从管理器条目 ManagerElement 出发，先读取序位置（IMM_Order），再读取序结构的元素类别子位置（IMM_ElementCategory），最后由 GetUIntElement 取出类型编号。类型编号与[类型名称常量](IntentionalityMapManager_TypeName.md)中的 Element_Type、Set_Type、Map_Type 一一对应。
