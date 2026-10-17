# ReadCoreKRSSymbolTableState

***

映射ReadCoreKRSSymbolTableState接受元素序偶集合（OrderedPairSet）为定义域，无符号整数集合（UIntSet）为值域，定义为：

```C++
Map ReadCoreKRSSymbolTableState(&OrderedPairSet, &UIntSet, ReadCoreKRSSymbolTableStateFunction);
```

核心KRS符号表解析状态读取映射（ReadCoreKRSSymbolTableState）分析定义域序偶元素，其结构为：`<下标, 符号表>`，按第一位置的下标定位第二位置符号表中的符号项，把该符号项**解析状态位**（[ST_State](CoreKRSSymbolTable_Struct.md)）的引用传递（Range |= 槽位）到值域元素上。状态码取 [CoreKRSSymbolTable_StateCode](CoreKRSSymbolTable_Struct.md)：ST_Unresolved=0（未解析）、ST_Resolved=1（已解析）、ST_Failed=2（解析失败）。

下标越界（下标不小于末尾标志 ST_End）时抛出异常（throw Element，下标越界）。三态语义：值域元素是状态槽位的借用引用而非副本，使用完毕须以 ZeroElementFunction 解除引用，不得对值域元素单独调用 ReleaseElementFunction；引用随符号表释放而失效。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …设置来源库、登记符号并 ResolveCoreKRSSymbolTableFunction 解析

Element Index;
NewUIntElementFunction(EmptyElement, Index);
GetUIntElement(Index) = 0;

Element IndexPair;
NewOrderedPairFunction(EmptyElement, IndexPair);
GetEleOrder(IndexPair, 0) |= Index;
GetEleOrder(IndexPair, 1) |= Table;

Element StateRef;
ReadCoreKRSSymbolTableStateFunction(IndexPair, StateRef);
// StateRef 借用解析状态位引用：ST_Resolved 表示解析成功

ZeroElementFunction(EmptyElement, StateRef);   // 解除引用
ZeroElementFunction(EmptyElement, IndexPair);
ReleaseElementFunction(EmptyElement, Index);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以序偶 IndexPair 承载 `<下标, 符号表>`，调用 ReadCoreKRSSymbolTableStateFunction 把下标对应符号项解析状态位的引用交给 StateRef，可读出该项是否已解析或解析失败。该引用指向符号表内部槽位，解除引用与释放必须成对：先用 ZeroElementFunction 解除 StateRef，再以 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 释放符号表；不得对 StateRef 单独调用 ReleaseElementFunction。
