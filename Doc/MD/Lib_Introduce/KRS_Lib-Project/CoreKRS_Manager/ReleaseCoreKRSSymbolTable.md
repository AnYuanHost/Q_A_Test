# ReleaseCoreKRSSymbolTable

***

映射ReleaseCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map ReleaseCoreKRSSymbolTable(&NullElementSet, &CoreKRSSymbolTable, ReleaseCoreKRSSymbolTableFunction);
```

核心KRS符号表释放映射（ReleaseCoreKRSSymbolTable）释放值域的符号表元素：先按末尾标志 ST_End 逐项释放各符号项的四位槽位（含符号名 ST_Name），再逐页释放分页符号阵列的页表、释放分页符号阵列本身，随后释放参数结构的四个参数元素与参数结构（[ST_Parameter](CoreKRSSymbolTable_Struct.md)），再释放来源动态链接库槽位（ST_Dll），最后释放符号表元素本身；释放后该元素不再属于核心KRS符号表集合。

定义域为空元素集合，仅表示本映射不携带输入信息。判定失败（值域元素不是合法符号表）时返回 false。本映射与[新建](NewCoreKRSSymbolTable.md)、[构造](ConstructCoreKRSSymbolTable.md)成对：构造一次释放一次。释放会一并处理来源库槽位所持元素，故不必再单独释放 ST_Dll 处的内容；但来源库本身由 WinDllSet（文档未生成） 一侧管理，仍应在其一侧成对释放。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …设置来源库、登记符号、解析、使用

ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
// 逐项释放符号名等四位、释放分页阵列各页与参数、释放来源库槽位，最后释放符号表本身
```

案例解释：以空元素为定义域、符号表 Table 为值域调用 ReleaseCoreKRSSymbolTableFunction，映射按项、按页、按位置层层释放符号表内部资源，Table 随即不再属于核心KRS符号表集合。释放后不得再对其进行登记、检索或读取。释放前若曾用读类映射取得过借用引用（如来源库、地址位、状态位），应先以 ZeroElementFunction 解除，再调用本映射。
