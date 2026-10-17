# ConstructCoreKRSSymbolTable

***

映射ConstructCoreKRSSymbolTable接受元素序集合（ElementOrderSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map ConstructCoreKRSSymbolTable(&ElementOrderSet, &CoreKRSSymbolTable, ConstructCoreKRSSymbolTableFunction);
```

核心KRS符号表构造映射（ConstructCoreKRSSymbolTable）以定义域的**符号清单元素序**为依据，一次性把清单批量登记为符号项：清单按 `[符号名, 类型码]` 交替排布（第 0 位符号名、第 1 位类型码、第 2 位符号名、第 3 位类型码……），映射先[新建](NewCoreKRSSymbolTable.md)一张符号表到值域，再逐个取相邻两位构成 `<符号名, 类型码>` 序偶，调用[登录](LoginCoreKRSSymbolTable.md)登记。登记后的各项地址留空、解析状态为 ST_Unresolved，需另设来源库再[解析](ResolveCoreKRSSymbolTable.md)。元素序长度不足最后一位的类型码时，末尾不成对的符号名被忽略。

定义域是元素序集合（ElementOrderSet），不是 [CoreKRSObject](CoreKRSObject.md)：这里只提供"要登记哪些符号"的清单，不带超索引、动态库等信息体字段。类型码取自 [CoreKRSLibMapManager_TypeName](../CoreKRSLib_MapManager/CoreKRSLibMapManager_TypeName.md)。本映射内含新建语义，故与[释放](ReleaseCoreKRSSymbolTable.md)成对：构造一次释放一次。

***

## 案例：

```C++
// 符号清单：交替 [符号名, 类型码]
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

// 新建符号表并批量登记
Element Table;
ConstructCoreKRSSymbolTableFunction(Manifest, Table);

// 设置来源库后解析地址
Element WinDllElement;
NewWinDllFunction(EmptyElement, WinDllElement);
// LoadWinDll 把模块句柄写入 WinDllElement
SetCoreKRSSymbolTableDllFunction(WinDllElement, Table);
ResolveCoreKRSSymbolTableFunction(Table, EmptyElement);

// 读取解析状态
Element Index;
NewUIntElementFunction(EmptyElement, Index);
GetUIntElement(Index) = 0;
Element IndexPair;
NewOrderedPairFunction(EmptyElement, IndexPair);
GetEleOrder(IndexPair, 0) |= Index;
GetEleOrder(IndexPair, 1) |= Table;
Element StateRef;
ReadCoreKRSSymbolTableStateFunction(IndexPair, StateRef);
// StateRef 借用状态位引用

ZeroElementFunction(EmptyElement, StateRef);
ZeroElementFunction(EmptyElement, IndexPair);
ReleaseElementFunction(EmptyElement, Index);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
ReleaseWinDllFunction(EmptyElement, WinDllElement);
ZeroElementFunction(EmptyElement, Manifest);
ReleaseElementFunction(EmptyElement, ManifestSize);
ReleaseElementFunction(EmptyElement, Category);
ReleaseElementFunction(EmptyElement, SymbolName);
```

案例解释：清单 Manifest 按 `[符号名, 类型码]` 交替组织，ConstructCoreKRSSymbolTableFunction 据其新建并批量登记符号表 Table，各项状态为 ST_Unresolved；随后设置来源库、解析、读取状态。读类映射以引用传递交出状态位引用，使用完毕用 ZeroElementFunction 解除，不得单独释放；清单与临时元素各自成对释放；符号表由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。符号清单到解析读取的完整链路见[核心KRS符号表案例](CoreKRSSymbolTable_Case.md)。
