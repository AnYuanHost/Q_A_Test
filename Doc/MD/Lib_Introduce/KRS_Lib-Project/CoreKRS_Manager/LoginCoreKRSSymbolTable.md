# LoginCoreKRSSymbolTable

***

映射LoginCoreKRSSymbolTable接受元素序偶集合（OrderedPairSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map LoginCoreKRSSymbolTable(&OrderedPairSet, &CoreKRSSymbolTable, LoginCoreKRSSymbolTableFunction);
```

核心KRS符号表登录映射（LoginCoreKRSSymbolTable）分析定义域序偶元素，其结构为：`<符号名, 类型码>`，把该符号项登记到值域符号表上。执行过程为：先按符号名在表中检索（内部检索逻辑同[SelectCoreKRSSymbolTable](SelectCoreKRSSymbolTable.md)），若同名符号已登记则抛出异常（throw Element，重复登记）；否则判断分页符号阵列是否需扩容——当页数等于 End / PageSize 且 End % PageSize == 0 时，按扩容量（[ST_ExpandSize](CoreKRSSymbolTable_Struct.md)）增页；随后深拷贝符号名写入 ST_Name、写入类型码 ST_Category、把解析状态 ST_State 置为 ST_Unresolved，解析地址 ST_Address 留空，末尾标志 ST_End 增一。

类型码取自 [CoreKRSLibMapManager_TypeName](../CoreKRSLib_MapManager/CoreKRSLibMapManager_TypeName.md)：Element_Type=0、Set_Type=1、Map_Type=2。登记后符号表随即调用排序（[SortCoreKRSSymbolTable](SortCoreKRSSymbolTable.md)），故表内实有项始终按符号名升序、空位沉向前端，检索所得下标依此确定。登录与[登出](LogoutCoreKRSSymbolTable.md)成对：登录一项对应登出一项。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);

Element SymbolName;
NewStringFunction(EmptyElement, SymbolName);
// 写入待登记符号名

Element Category;
NewUIntElementFunction(EmptyElement, Category);
GetUIntElement(Category) = CoreKRSLibMapManager_TypeName::Map_Type;

Element LoginPair;
NewOrderedPairFunction(EmptyElement, LoginPair);
GetEleOrder(LoginPair, 0) |= SymbolName;
GetEleOrder(LoginPair, 1) |= Category;

LoginCoreKRSSymbolTableFunction(LoginPair, Table);
// 符号项登记：地址留空、状态 ST_Unresolved、末尾标志增一

ZeroElementFunction(EmptyElement, LoginPair);   // 序偶使用完毕清零
ReleaseElementFunction(EmptyElement, Category);
ReleaseElementFunction(EmptyElement, SymbolName);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以 NewOrderedPairFunction 构造的序偶 LoginPair 承载 `<符号名, 类型码>`，以符号表 Table 为值域调用 LoginCoreKRSSymbolTableFunction 完成登记；符号名被深拷贝进入表内，来源序偶随即用 ZeroElementFunction 清零。重复登记同名符号会抛出异常，且不改变表内容。符号表使用完毕由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。
