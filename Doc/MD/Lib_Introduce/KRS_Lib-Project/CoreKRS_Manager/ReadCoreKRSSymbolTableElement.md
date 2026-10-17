# ReadCoreKRSSymbolTableElement

***

映射ReadCoreKRSSymbolTableElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadCoreKRSSymbolTableElement(&OrderedPairSet, &NullElementSet, ReadCoreKRSSymbolTableElementFunction);
```

核心KRS符号表元素读取映射（ReadCoreKRSSymbolTableElement）分析定义域序偶元素，其结构为：`<下标, 符号表>`，按第一位置的下标定位第二位置符号表中的符号项，把该符号项**解析地址位**（[ST_Address](CoreKRSSymbolTable_Struct.md)）的引用传递（Range |= 槽位）到值域元素上。该地址位即由来源动态链接库解析出的符号元素地址。

下标越界（下标不小于末尾标志 ST_End）时抛出异常（throw Element，下标越界）；符号尚未解析（地址位为空）时抛出异常（throw Element，未解析）——须先[解析](ResolveCoreKRSSymbolTable.md)再由本映射读取。三态语义：值域元素是地址槽位的借用引用而非副本，使用完毕须以 ZeroElementFunction 解除引用，不得对值域元素单独调用 ReleaseElementFunction；引用随符号表释放而失效。注：真源实现读取的是地址位（ST_Address），符号名位（ST_Name）没有对应的读取映射。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …设置来源库、登记符号并 ResolveCoreKRSSymbolTableFunction 解析

Element Index;
NewUIntElementFunction(EmptyElement, Index);
GetUIntElement(Index) = 0;

Element ReadPair;
NewOrderedPairFunction(EmptyElement, ReadPair);
GetEleOrder(ReadPair, 0) |= Index;
GetEleOrder(ReadPair, 1) |= Table;

Element ElementRef;
ReadCoreKRSSymbolTableElementFunction(ReadPair, ElementRef);
// ElementRef 借用该符号项解析地址的引用（已解析元素地址）

ZeroElementFunction(EmptyElement, ElementRef);   // 解除引用
ZeroElementFunction(EmptyElement, ReadPair);
ReleaseElementFunction(EmptyElement, Index);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以序偶 ReadPair 承载 `<下标, 符号表>`，调用 ReadCoreKRSSymbolTableElementFunction 把该符号项解析地址的引用交给 ElementRef。该引用指向符号表内部槽位，解除引用与释放必须成对：先用 ZeroElementFunction 解除 ElementRef，再以 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 释放符号表；不得对 ElementRef 单独调用 ReleaseElementFunction。若项尚未解析，读取会抛出异常，应先用 [ResolveCoreKRSSymbolTable](ResolveCoreKRSSymbolTable.md) 完成解析。
