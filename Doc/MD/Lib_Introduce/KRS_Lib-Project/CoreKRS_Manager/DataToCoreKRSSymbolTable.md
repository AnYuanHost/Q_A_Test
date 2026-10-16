# DataToCoreKRSSymbolTable

***

映射DataToCoreKRSSymbolTable接受流集合（StreamSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map DataToCoreKRSSymbolTable(&StreamSet, &CoreKRSSymbolTable, DataToCoreKRSSymbolTableFunction);
```

核心KRS符号表反序列化映射（DataToCoreKRSSymbolTable）以定义域的数据流为依据，把内容重建到值域符号表上。流由[序列化](CoreKRSSymbolTableToData.md)产生，结构为：头部四个无符号整数 `[项数, 页容量, 扩容量, 保留容量]`，其后逐项 `[符号名, 类型码, 状态码]`。重建过程为：先按流的头部设置参数位置（页容量、末尾标志、扩容量、保留容量），按 `项数 / 页容量 + 扩容量` 分配分页符号阵列的页，再逐项读回符号名、类型码与状态码。

**解析地址位（ST_Address）不在流中，重建后各符号项的地址位为空**，无法直接[读取地址](ReadCoreKRSSymbolTableElement.md)；来源动态链接库位置（ST_Dll）也不在流中，需另行[设置来源库](SetCoreKRSSymbolTableDll.md)并[解析](ResolveCoreKRSSymbolTable.md)才能得到地址。符号名、类型码与状态码由流原样恢复。

***

## 案例：

```C++
Element Stream;
// 由 CoreKRSSymbolTableToDataFunction 得到

Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
DataToCoreKRSSymbolTableFunction(Stream, Table);
// Table 由流重建：符号名、类型码与状态码恢复，地址位为空

Element WinDllElement;
NewWinDllFunction(EmptyElement, WinDllElement);
// LoadWinDll 把模块句柄写入 WinDllElement
SetCoreKRSSymbolTableDllFunction(WinDllElement, Table);
ResolveCoreKRSSymbolTableFunction(Table, EmptyElement);   // 重新解析地址

ReleaseElementFunction(EmptyElement, Stream);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
ReleaseWinDllFunction(EmptyElement, WinDllElement);
```

案例解释：值域符号表 Table 应先由 [NewCoreKRSSymbolTable](NewCoreKRSSymbolTable.md) 构造，再以数据流 Stream 为定义域调用 DataToCoreKRSSymbolTableFunction 重建内容。重建后符号名、类型码与状态码与源表一致，但解析地址与来源库未随流恢复，须设置来源库后再次[解析](ResolveCoreKRSSymbolTable.md)方可读取地址。流与符号表分别成对释放。
