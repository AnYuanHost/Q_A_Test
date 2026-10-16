# SortCoreKRSSymbolTable

***

映射SortCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map SortCoreKRSSymbolTable(&NullElementSet, &CoreKRSSymbolTable, SortCoreKRSSymbolTableFunction);
```

核心KRS符号表排序映射（SortCoreKRSSymbolTable）对值域符号表的分页符号阵列做冒泡排序：以符号名位（[ST_Name](CoreKRSSymbolTable_Struct.md)）是否为空判定空位，**空位视为最小沉向前端**，实有项按符号名升序排列在后段；每次比较交换整个符号项的四位。末尾标志 ST_End 不变。

定义域为空元素集合，仅表示本映射不携带输入信息。排序使表内实有项的下标与符号名的升序一致，是[检索](SelectCoreKRSSymbolTable.md)下标确定性的依据；[登录](LoginCoreKRSSymbolTable.md)在登记一项后即内部调用本排序，故通常无需手动调用。表为空（End 为 0 或阵列页数为 0）时直接返回。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …登记若干符号（或登出留下空位）

SortCoreKRSSymbolTableFunction(EmptyElement, Table);
// 空位沉向前端，实有项按符号名升序排列

ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以空元素为定义域、符号表 Table 为值域调用 SortCoreKRSSymbolTableFunction，分页符号阵列被就地排序：空位聚到前端，实有符号项按符号名升序紧随其后。排序不改变末尾标志，只调整项的位置与次序。符号表使用完毕由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。
