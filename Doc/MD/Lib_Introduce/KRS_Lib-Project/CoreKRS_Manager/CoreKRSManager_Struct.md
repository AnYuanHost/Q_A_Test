# CoreKRSManager_Struct

***

命名空间CoreKRSManager_Struct定义了核心KRS管理器结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| CoreKRS_Order | 0 | 分页登记表位置（顶层） |
| CoreKRS_Parameter | 1 | 参数位置（顶层） |
| CoreKRS_SlotNumber | 2 | 顶层位置数量 |
| CoreKRS_Object | 0 | 分页登记表项内：知识库信息体（CoreKRSObject） |
| CoreKRS_State | 1 | 分页登记表项内：状态码 |
| CoreKRS_OrderSize | 2 | 分页登记表每项的位置数量 |
| CoreKRS_PageSize | 0 | 参数：页容量（每页项数，默认 16） |
| CoreKRS_End | 1 | 参数：末尾标志（已登记信息体数，默认 0） |
| CoreKRS_ExpandSize | 2 | 参数：扩容量（增页页数，默认 2） |
| CoreKRS_RetainSize | 3 | 参数：保留容量（最少保留页数，默认 3） |

核心KRS管理器元素共 CoreKRS_SlotNumber=2 个顶层位置：分页登记表位置（CoreKRS_Order=0）与参数位置（CoreKRS_Parameter=1）。分页登记表按页排布登记项，每项 CoreKRS_OrderSize=2 个位置：知识库信息体（CoreKRS_Object=0）与状态码（CoreKRS_State=1）。参数位置是一个以 CoreKRS_End 结尾的 4 位结构，依次为 CoreKRS_PageSize、CoreKRS_End、CoreKRS_ExpandSize、CoreKRS_RetainSize，新建管理器的默认值依次为 16 / 0 / 2 / 3。

CoreKRS_OrderSize 与 CoreKRS_SlotNumber 的取值同为 2，语义并不相同：CoreKRS_SlotNumber 描述管理器的顶层位置数量（分页登记表与参数两位），CoreKRS_OrderSize 描述分页登记表中每个登记项的位置数量（知识库信息体与状态码两位），二者不可互相替代。

通过宏 GetEleOrder(元素, 序号) 读取各位置，嵌套结构逐层访问。取第 Index 个登记项的信息体子位置：

```C++
unsigned int PageSize = GetUIntElement(GetEleOrder(
    GetEleOrder(Manager, CoreKRSManager_Struct::CoreKRS_Parameter), CoreKRSManager_Struct::CoreKRS_PageSize));

Element& Object = GetEleOrder(
    GetEleOrder(GetEleOrder(Manager, CoreKRSManager_Struct::CoreKRS_Order), Index / PageSize),
    (Index % PageSize) * CoreKRSManager_Struct::CoreKRS_OrderSize + CoreKRSManager_Struct::CoreKRS_Object);
```

读取参数位置的末尾标志：

```C++
unsigned int End = GetUIntElement(
    GetEleOrder(GetEleOrder(Manager, CoreKRSManager_Struct::CoreKRS_Parameter), CoreKRSManager_Struct::CoreKRS_End));
```

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

Element ParameterElement = GetEleOrder(ManagerElement, CoreKRSManager_Struct::CoreKRS_Parameter);

unsigned int PageSize = GetUIntElement(
    GetEleOrder(ParameterElement, CoreKRSManager_Struct::CoreKRS_PageSize));
unsigned int End = GetUIntElement(
    GetEleOrder(ParameterElement, CoreKRSManager_Struct::CoreKRS_End));
// PageSize = 16、End = 0：新建管理器的默认参数

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：新建管理器后，经 GetEleOrder(ManagerElement, CoreKRS_Parameter) 进入参数位置，再逐位取出 CoreKRS_PageSize 与 CoreKRS_End，新管理器的默认值为 16 与 0；登记项的信息体与状态码位分别以 CoreKRS_Object 与 CoreKRS_State 访问。管理器由 [NewCoreKRSManager](NewCoreKRSManager.md) 构造、由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放，完整结构与语义见[核心KRS管理器集合](CoreKRSManager.md)。
