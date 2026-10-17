# CoreKRSManager_Struct

***

命名空间CoreKRSManager_Struct定义了核心KRS管理器结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| CoreKRSM_Order | 0 | 分页登记表位置（顶层） |
| CoreKRSM_Parameter | 1 | 参数位置（顶层） |
| CoreKRSM_End | 0 | 参数：末尾标志（已登记项数，默认 0） |
| CoreKRSM_PageSize | 1 | 参数：页容量（每页项数，默认 16） |
| CoreKRSM_ExpandSize | 2 | 参数：扩容量（增页页数，默认 2） |
| CoreKRSM_RetainSize | 3 | 参数：保留容量（最少保留页数，默认 3） |
| CoreKRSM_EmptyNumber | 4 | 参数：空位计数（注销留下的空位项数，默认 0） |
| CoreKRSM_OrderSize | 3 | 分页登记表每项的位置数量 |
| CoreKRSM_SuperIndex | 0 | 登记项：超索引（登记键） |
| CoreKRSM_Dll | 1 | 登记项：动态库元素（Windows动态库元素 WinDll） |
| CoreKRSM_UMapOrder | 2 | 登记项：通用映射序 |

核心KRS管理器元素共 2 个顶层位置：分页登记表位置（CoreKRSM_Order=0）与参数位置（CoreKRSM_Parameter=1）。分页登记表按页排布登记项，每项 CoreKRSM_OrderSize=3 个位置，依次为超索引（CoreKRSM_SuperIndex=0）、动态库（CoreKRSM_Dll=1）与通用映射序（CoreKRSM_UMapOrder=2）。参数位置是一个 5 位结构，依次为末尾标志 CoreKRSM_End、页容量 CoreKRSM_PageSize、扩容量 CoreKRSM_ExpandSize、保留容量 CoreKRSM_RetainSize 与空位计数 CoreKRSM_EmptyNumber，新建管理器的默认值依次为 0 / 16 / 2 / 3 / 0。

CoreKRSM_OrderSize=3 与顶层位置数量（恒为 2）语义不同：前者描述分页登记表中每个登记项的位置数量（超索引、动态库、通用映射序三位），后者描述管理器的顶层位置数量（分页登记表与参数两位），二者不可互相替代。

通过宏 GetEleOrder(元素, 序号) 读取各位置，嵌套结构逐层访问。取第 Index 个登记项的超索引子位置：

```C++
unsigned int PageSize = GetUIntElement(GetEleOrder(
    GetEleOrder(Manager, CoreKRSManager_Struct::CoreKRSM_Parameter), CoreKRSManager_Struct::CoreKRSM_PageSize));

Element& SuperIndex = GetEleOrder(
    GetEleOrder(GetEleOrder(Manager, CoreKRSManager_Struct::CoreKRSM_Order), Index / PageSize),
    (Index % PageSize) * CoreKRSManager_Struct::CoreKRSM_OrderSize + CoreKRSManager_Struct::CoreKRSM_SuperIndex);
```

读取参数位置的末尾标志：

```C++
unsigned int End = GetUIntElement(
    GetEleOrder(GetEleOrder(Manager, CoreKRSManager_Struct::CoreKRSM_Parameter), CoreKRSManager_Struct::CoreKRSM_End));
```

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

Element ParameterElement = GetEleOrder(ManagerElement, CoreKRSManager_Struct::CoreKRSM_Parameter);

unsigned int PageSize = GetUIntElement(
    GetEleOrder(ParameterElement, CoreKRSManager_Struct::CoreKRSM_PageSize));
unsigned int End = GetUIntElement(
    GetEleOrder(ParameterElement, CoreKRSManager_Struct::CoreKRSM_End));
// PageSize = 16、End = 0：新建管理器的默认参数

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：新建管理器后，经 GetEleOrder(ManagerElement, CoreKRSM_Parameter) 进入参数位置，再逐位取出 CoreKRSM_PageSize 与 CoreKRSM_End，新管理器的默认值为 16 与 0；登记项的超索引、动态库与通用映射序三位分别以 CoreKRSM_SuperIndex、CoreKRSM_Dll 与 CoreKRSM_UMapOrder 访问。管理器由 [NewCoreKRSManager](NewCoreKRSManager.md) 构造、由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放，完整结构与语义见[核心KRS管理器集合](CoreKRSManager.md)。
