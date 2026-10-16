# DefragmentCoreKRSSymbolTable

***

映射DefragmentCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map DefragmentCoreKRSSymbolTable(&NullElementSet, &CoreKRSSymbolTable, DefragmentCoreKRSSymbolTableFunction);
```

核心KRS符号表碎片整理映射（DefragmentCoreKRSSymbolTable）压缩值域符号表的空位并回收页表：先遍历末尾标志 ST_End 之前的项，把非空符号项依次前移到书写位（每次整项搬移四位），再把尾部腾空的位置逐一释放，末尾标志收缩为实有项数；随后按保留容量（[ST_RetainSize](CoreKRSSymbolTable_Struct.md)）回收多余页——目标页数为 `实有项数 / 页容量 + 保留容量`，超出部分整页释放并从分页符号阵列中移除。

定义域为空元素集合，仅表示本映射不携带输入信息。整理与[登出](LogoutCoreKRSSymbolTable.md)配合使用：登出只置空槽位、End 不减，整理后空位归拢、页表回收、下标重新连续。表为空（End 为 0 或阵列页数为 0）时直接返回。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …登记若干符号，再经 LogoutCoreKRSSymbolTableFunction 注销部分，留下空位

DefragmentCoreKRSSymbolTableFunction(EmptyElement, Table);
// 空位压缩、末尾收缩为实有项数、按 RetainSize 回收多余页表

ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以空元素为定义域、符号表 Table 为值域调用 DefragmentCoreKRSSymbolTableFunction，表中空位被压向前端后释放，实有符号项紧凑排列，末尾标志递减为实有项数，多余页按保留容量回收。整理后检索下标随之改变，应按整理后的顺序重新检索。符号表使用完毕由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。
