# LogoutCoreKRSSymbolTable

***

映射LogoutCoreKRSSymbolTable接受全元素集合（UniversalSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map LogoutCoreKRSSymbolTable(&UniversalSet, &CoreKRSSymbolTable, LogoutCoreKRSSymbolTableFunction);
```

核心KRS符号表登出映射（LogoutCoreKRSSymbolTable）以定义域的**符号名**为注销依据：先按符号名在值域符号表中检索（内部检索逻辑同[SelectCoreKRSSymbolTable](SelectCoreKRSSymbolTable.md)），未命中（表中无该符号名）则抛出异常（throw Element，未登记）；命中则释放该符号项的四位槽位（符号名 ST_Name、类型码 ST_Category、解析地址 ST_Address、解析状态 ST_State），使该位置成为空位。

登出只置空槽位，不递减末尾标志 ST_End；空位由整理映射（[DefragmentCoreKRSSymbolTable](DefragmentCoreKRSSymbolTable.md)）归拢回收，或由排序映射（[SortCoreKRSSymbolTable](SortCoreKRSSymbolTable.md)）沉向前端。登出与[登录](LoginCoreKRSSymbolTable.md)成对：登录一项对应登出一项。定义域使用全元素集合，凡可作符号名的元素（如字符串元素）均可作为定义域。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …经 LoginCoreKRSSymbolTableFunction 登记若干符号

Element SymbolName;
NewStringFunction(EmptyElement, SymbolName);
// 写入待注销的符号名

LogoutCoreKRSSymbolTableFunction(SymbolName, Table);
// 该符号项四位槽位置空，末尾标志不递减

DefragmentCoreKRSSymbolTableFunction(EmptyElement, Table);   // 归拢空位、收缩末尾

ReleaseElementFunction(EmptyElement, SymbolName);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以符号名元素 SymbolName 为定义域、符号表 Table 为值域调用 LogoutCoreKRSSymbolTableFunction，命中的符号项被逐位释放，表中留下空位而末尾标志不变。注销未登记的符号名会抛出异常。空位由 [DefragmentCoreKRSSymbolTable](DefragmentCoreKRSSymbolTable.md) 压缩归拢。符号表使用完毕由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。
