# SelectCoreKRSSymbolTable

***

映射SelectCoreKRSSymbolTable接受元素序偶集合（OrderedPairSet）为定义域，无符号整数集合（UIntSet）为值域，定义为：

```C++
Map SelectCoreKRSSymbolTable(&OrderedPairSet, &UIntSet, SelectCoreKRSSymbolTableFunction);
```

核心KRS符号表检索映射（SelectCoreKRSSymbolTable）分析定义域序偶元素，其结构为：`<符号名, 符号表>`，在第二位置给定的符号表中按第一位置的符号名逐项匹配，命中时把该项的**项下标**（自 0 起、按表内符号名升序排列的顺序号）写入值域元素；未命中时写入 UINT_MAX。

值域元素是无符号整数，按值写入（GetUIntElement），不是槽位引用，故使用完毕以 ReleaseElementFunction 普通释放即可。检索范围为末尾标志 ST_End 之前的项；空位（符号名位为空的项）跳过。符号表登记时已排序（[LoginCoreKRSSymbolTable](LoginCoreKRSSymbolTable.md) 内部调用[排序](SortCoreKRSSymbolTable.md)），所以命中下标即为符号名升序中的位次；[登出](LogoutCoreKRSSymbolTable.md) 后该符号名不再命中。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …经 LoginCoreKRSSymbolTableFunction 登记若干符号

Element Holder;
NewOrderedPairFunction(EmptyElement, Holder);
GetEleOrder(Holder, 0) |= SymbolName;   // 待检索的符号名
GetEleOrder(Holder, 1) |= Table;

Element Index;
NewUIntElementFunction(EmptyElement, Index);
SelectCoreKRSSymbolTableFunction(Holder, Index);
// Index 为命中项的项下标；未命中为 UINT_MAX

ZeroElementFunction(EmptyElement, Holder);
ReleaseElementFunction(EmptyElement, Index);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以序偶 Holder 承载 `<符号名, 符号表>`，调用 SelectCoreKRSSymbolTableFunction 把命中项的项下标写入 Index；未命中时为 UINT_MAX。Index 是普通无符号整数元素，按值承载结果，用后 ReleaseElementFunction 释放；序偶 Holder 使用完毕用 ZeroElementFunction 清零。所得的项下标可直接用于构造 `<下标, 符号表>` 序偶，交给[元素读取](ReadCoreKRSSymbolTableElement.md)、[类型码读取](ReadCoreKRSSymbolTableCategory.md)或[状态读取](ReadCoreKRSSymbolTableState.md)。
