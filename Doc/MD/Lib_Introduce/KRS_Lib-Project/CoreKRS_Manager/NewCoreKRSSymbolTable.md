# NewCoreKRSSymbolTable

***

映射NewCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewCoreKRSSymbolTable(&NullElementSet, &NullElementSet, NewCoreKRSSymbolTableFunction);
```

新建核心KRS符号表映射（NewCoreKRSSymbolTable）在值域空元素上构造一张核心KRS符号表（[CoreKRSSymbolTable](CoreKRSSymbolTable.md)）。构造完成后符号表具备 3 个顶层位置（[CoreKRSSymbolTable_Struct](CoreKRSSymbolTable_Struct.md)）：分页符号阵列（ST_Order）、参数（ST_Parameter）、来源动态链接库（ST_Dll）。参数位置就位并取默认值——页容量 16、末尾标志 0、扩容量 2、保留容量 3；分页符号阵列此时尚未分配页，来源动态链接库位置为空。

定义域为空元素集合，仅表示本映射不携带输入信息。值域元素取得符号表后即属于核心KRS符号表集合，可接受[登录](LoginCoreKRSSymbolTable.md)逐项登记或[构造](ConstructCoreKRSSymbolTable.md)批量登记；登记前应先用[来源库设置](SetCoreKRSSymbolTableDll.md)写入来源动态链接库，之后才能[解析](ResolveCoreKRSSymbolTable.md)。

该映射与[ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md)成对：构造一次，使用完毕释放一次；对已构造的符号表重复构造会覆盖原有位置内容并泄漏内部资源。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// Table 现为核心KRS符号表，参数默认 16 / 0 / 2 / 3，来源库与分页阵列尚空

// 设置来源库、登记符号、解析、读取……

ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以空元素为定义域、空元素Table 为值域调用 NewCoreKRSSymbolTableFunction，构造出的符号表由调用方持有，随后即可设置来源库并登记符号项。使用完毕必须由[ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md)成对释放；跳过释放直接令元素析构，会泄漏分页符号阵列、参数结构各元素与来源库槽位。从构造到释放的完整链路见[核心KRS符号表案例](CoreKRSSymbolTable_Case.md)。
