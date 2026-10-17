# SetCoreKRSSymbolTableState

***

映射SetCoreKRSSymbolTableState接受元素序偶集合（OrderedPairSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map SetCoreKRSSymbolTableState(&OrderedPairSet, &CoreKRSSymbolTable, SetCoreKRSSymbolTableStateFunction);
```

核心KRS符号表解析状态写入映射（SetCoreKRSSymbolTableState）分析定义域序偶元素，其结构为：`<下标, 状态码>`，按下标定位符号表中的符号项，把状态码写入该项的解析状态位（[ST_State](CoreKRSSymbolTable_Struct.md)）。状态码取 [CoreKRSSymbolTable_StateCode](CoreKRSSymbolTable_Struct.md)：ST_Unresolved=0、ST_Resolved=1、ST_Failed=2。

下标越界（下标不小于末尾标志 ST_End）时抛出异常（throw Element，下标越界）。本映射与[状态读取](ReadCoreKRSSymbolTableState.md)配对：写入一项对应读出一次；符号表由[解析](ResolveCoreKRSSymbolTable.md)自动置状态，本映射用于显式改写。

真源实现同样以值域元素为符号表（`Element& Table = Range;`），按下标定位后写入状态位；写入前先以末尾标志判定下标越界。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …登记若干符号

Element Index;
NewUIntElementFunction(EmptyElement, Index);
GetUIntElement(Index) = 0;

Element StateElement;
NewUIntElementFunction(EmptyElement, StateElement);
GetUIntElement(StateElement) = ST_Failed;

Element StatePair;
NewOrderedPairFunction(EmptyElement, StatePair);
GetEleOrder(StatePair, 0) |= Index;
GetEleOrder(StatePair, 1) |= StateElement;

SetCoreKRSSymbolTableStateFunction(StatePair, Table);
// 下标 0 的符号项解析状态置为 ST_Failed

ZeroElementFunction(EmptyElement, StatePair);
ReleaseElementFunction(EmptyElement, StateElement);
ReleaseElementFunction(EmptyElement, Index);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以 NewOrderedPairFunction 构造的序偶 StatePair 承载 `<下标, 状态码>`，以符号表 Table 为值域调用 SetCoreKRSSymbolTableStateFunction，把指定符号项的解析状态改写为给定状态码。下标越界时抛出异常。序偶使用完毕用 ZeroElementFunction 清零，状态码与下标元素用 ReleaseElementFunction 释放，符号表由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。
