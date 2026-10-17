# CoreKRSSymbolTable

***

集合CoreKRSSymbolTable为所有核心KRS符号表的集合，定义为：

```C++
Set CoreKRSSymbolTable(EmptyElement, CoreKRSSymbolTableTest);
```

核心KRS符号表集合（CoreKRSSymbolTable）由单独维护的符号表元素组成：每张符号表对应一组 `{符号名, 类型码, 解析地址, 解析状态}` 符号项，逐项登记知识库所需的元素、集合与映射，并由来源动态链接库把符号名解析为地址后回填到地址位。成员判定由判定函数 CoreKRSSymbolTableTest 完成。符号表元素共 3 个顶层位置（[CoreKRSSymbolTable_Struct](CoreKRSSymbolTable_Struct.md)），通过宏 GetEleOrder(元素, 序号) 读取：

| 位置 | 常量 | 含义 |
| --- | --- | --- |
| 0 | ST_Order | 分页符号阵列位置 |
| 1 | ST_Parameter | 参数位置 |
| 2 | ST_Dll | 来源动态链接库位置 |

每个符号项占 4 个位置：

| 项内位置 | 常量 | 含义 |
| --- | --- | --- |
| 0 | ST_Name | 符号名 |
| 1 | ST_Category | 类型码 |
| 2 | ST_Address | 解析地址 |
| 3 | ST_State | 解析状态 |

参数位置是以 ST_End 结尾的参数结构，含页容量（ST_PageSize）、末尾标志（ST_End）、扩容量（ST_ExpandSize）、保留容量（ST_RetainSize），默认 16 / 0 / 2 / 3；分页符号阵列按页容量分页，登记前按 End / PageSize 判扩容、按 ExpandSize 增页，登出只置空槽位而 End 不减，整理时压缩空位并按 RetainSize 回收页表。

符号表可设置其"发生"的动态链接库：[来源库设置映射](SetCoreKRSSymbolTableDll.md)（SetCoreKRSSymbolTableDll）把来源动态链接库写入 ST_Dll，读取用[来源库读取映射](GetCoreKRSSymbolTableDll.md)（GetCoreKRSSymbolTableDll）。设置来源库之后，由[解析映射](ResolveCoreKRSSymbolTable.md)（ResolveCoreKRSSymbolTable）逐项调用 GetElementFromWinDll（文档未生成），以 `<符号名, 类型码, 来源库>` 把符号名解析为地址并写回 ST_Address，同时记录解析状态。类型码取自 [CoreKRSLibMapManager_TypeName](../CoreKRSLib_MapManager/CoreKRSLibMapManager_TypeName.md)：Element_Type=0、Set_Type=1、Map_Type=2。

符号表的登记用[登录映射](LoginCoreKRSSymbolTable.md)（LoginCoreKRSSymbolTable）逐项添加、用[批量构造映射](ConstructCoreKRSSymbolTable.md)（ConstructCoreKRSSymbolTable）由符号清单一次登记；注销用[登出映射](LogoutCoreKRSSymbolTable.md)（LogoutCoreKRSSymbolTable）；检索用[检索映射](SelectCoreKRSSymbolTable.md)（SelectCoreKRSSymbolTable）；读取符号名对应的解析地址、类型码、解析状态分别用[元素读取映射](ReadCoreKRSSymbolTableElement.md)、[类型码读取映射](ReadCoreKRSSymbolTableCategory.md)、[状态读取映射](ReadCoreKRSSymbolTableState.md)。符号表随信息体持有（见 [CoreKRSObject](CoreKRSObject.md) 的 CoreKRSObject_Dictionaries 位置，历史命名）。

***

## 案例：

```C++
// 1. 新建符号表
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);

// 2. 设置来源动态链接库
Element WinDllElement;
NewWinDllFunction(EmptyElement, WinDllElement);
// LoadWinDll 把模块句柄写入 WinDllElement
SetCoreKRSSymbolTableDllFunction(WinDllElement, Table);

// 3. 构造符号清单（交替 [符号名, 类型码]），批量登记
Element ManifestSize;
NewUIntElementFunction(EmptyElement, ManifestSize);
GetUIntElement(ManifestSize) = 2;
Element Manifest;
UIntNewElementOrderFunction(ManifestSize, Manifest);
Element SymbolName;
NewStringFunction(EmptyElement, SymbolName);
Element Category;
NewUIntElementFunction(EmptyElement, Category);
GetUIntElement(Category) = CoreKRSLibMapManager_TypeName::Map_Type;
GetEleOrder(Manifest, 0) |= SymbolName;
GetEleOrder(Manifest, 1) |= Category;
ConstructCoreKRSSymbolTableFunction(Manifest, Table);

// 4. 解析：按来源库把符号名解析为地址
ResolveCoreKRSSymbolTableFunction(Table, EmptyElement);

// 5. 读取解析状态
Element Index;
NewUIntElementFunction(EmptyElement, Index);
GetUIntElement(Index) = 0;
Element IndexPair;
NewOrderedPairFunction(EmptyElement, IndexPair);
GetEleOrder(IndexPair, 0) |= Index;
GetEleOrder(IndexPair, 1) |= Table;
Element StateRef;
ReadCoreKRSSymbolTableStateFunction(IndexPair, StateRef);
// StateRef 借用状态位引用：ST_Resolved 表示解析成功

ZeroElementFunction(EmptyElement, StateRef);
ZeroElementFunction(EmptyElement, IndexPair);
ReleaseElementFunction(EmptyElement, Index);
ZeroElementFunction(EmptyElement, Manifest);
ReleaseElementFunction(EmptyElement, ManifestSize);
ReleaseElementFunction(EmptyElement, Category);
ReleaseElementFunction(EmptyElement, SymbolName);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
ReleaseWinDllFunction(EmptyElement, WinDllElement);
```

案例解释：链路先由 NewCoreKRSSymbolTableFunction 构造符号表，再由 SetCoreKRSSymbolTableDllFunction 设置其来源动态链接库，继而用清单批量登记符号项，由 ResolveCoreKRSSymbolTableFunction 逐项解析地址，最后由 ReadCoreKRSSymbolTableStateFunction 读出解析状态。读类映射以引用传递（Range |= 槽位）把状态位的借用引用交给值域元素，使用完毕必须 ZeroElementFunction 解除引用，不得单独 ReleaseElementFunction 该值域元素；清单与临时元素则各自成对释放。符号表随构造方持有，最后与 ReleaseCoreKRSSymbolTableFunction 成对释放。完整链路见[核心KRS符号表案例](CoreKRSSymbolTable_Case.md)。
