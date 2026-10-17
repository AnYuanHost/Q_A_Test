# ReadCoreKRSSymbolTableCategory

***

映射ReadCoreKRSSymbolTableCategory接受元素序偶集合（OrderedPairSet）为定义域，无符号整数集合（UIntSet）为值域，定义为：

```C++
Map ReadCoreKRSSymbolTableCategory(&OrderedPairSet, &UIntSet, ReadCoreKRSSymbolTableCategoryFunction);
```

核心KRS符号表类型码读取映射（ReadCoreKRSSymbolTableCategory）分析定义域序偶元素，其结构为：`<下标, 符号表>`，按第一位置的下标定位第二位置符号表中的符号项，把该符号项**类型码位**（[ST_Category](CoreKRSSymbolTable_Struct.md)）的引用传递（Range |= 槽位）到值域元素上。类型码取自 [CoreKRSLibMapManager_TypeName](../CoreKRSLib_MapManager/CoreKRSLibMapManager_TypeName.md)：Element_Type=0、Set_Type=1、Map_Type=2。

下标越界（下标不小于末尾标志 ST_End）时抛出异常（throw Element，下标越界）。三态语义：值域元素是类型码槽位的借用引用而非副本，使用完毕须以 ZeroElementFunction 解除引用，不得对值域元素单独调用 ReleaseElementFunction；引用随符号表释放而失效。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …登记若干符号

Element Index;
NewUIntElementFunction(EmptyElement, Index);
GetUIntElement(Index) = 0;

Element IndexPair;
NewOrderedPairFunction(EmptyElement, IndexPair);
GetEleOrder(IndexPair, 0) |= Index;
GetEleOrder(IndexPair, 1) |= Table;

Element CategoryRef;
ReadCoreKRSSymbolTableCategoryFunction(IndexPair, CategoryRef);
// CategoryRef 借用类型码位引用

if (GetUIntElement(CategoryRef) == CoreKRSLibMapManager_TypeName::Map_Type) {
    // 该项登记的是映射类别
}

ZeroElementFunction(EmptyElement, CategoryRef);   // 解除引用
ZeroElementFunction(EmptyElement, IndexPair);
ReleaseElementFunction(EmptyElement, Index);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以序偶 IndexPair 承载 `<下标, 符号表>`，调用 ReadCoreKRSSymbolTableCategoryFunction 把下标对应符号项类型码位的引用交给 CategoryRef，可直接读取比对类别。该引用指向符号表内部槽位，解除引用与释放必须成对：先用 ZeroElementFunction 解除 CategoryRef，再以 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 释放符号表；不得对 CategoryRef 单独调用 ReleaseElementFunction。
