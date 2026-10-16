# SetCoreKRSSymbolTableDll

***

映射SetCoreKRSSymbolTableDll接受Windows动态库元素集合（WinDllSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域，定义为：

```C++
Map SetCoreKRSSymbolTableDll(&WinDllSet, &CoreKRSSymbolTable, SetCoreKRSSymbolTableDllFunction);
```

核心KRS符号表来源库设置映射（SetCoreKRSSymbolTableDll）把定义域的Windows动态库元素（WinDllSet（文档未生成））写入值域符号表的来源动态链接库位置（[ST_Dll](CoreKRSSymbolTable_Struct.md)），即该符号表"发生"的动态链接库：表内登记的符号名均由这张库解析。写入采用拷贝装配——以 CopyElementFunction 把定义域元素拷入槽位，来源元素保持可用，可在别处继续使用。

空位校验：若来源动态链接库位置已有内容（重复装配），抛出异常（throw Element）。来源库仅记录"从哪里解析"，不转移库的所有权；库的加载与卸载仍由 WinDllSet（文档未生成） 一侧负责。设置一次即可与[来源库读取](GetCoreKRSSymbolTableDll.md)成对读取，符号表构造（[NewCoreKRSSymbolTable](NewCoreKRSSymbolTable.md)）之后、[解析](ResolveCoreKRSSymbolTable.md)之前调用。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);

Element WinDllElement;
NewWinDllFunction(EmptyElement, WinDllElement);
// LoadWinDll 把模块句柄写入 WinDllElement

SetCoreKRSSymbolTableDllFunction(WinDllElement, Table);
// Table 的来源库位置写入 WinDllElement 的拷贝；WinDllElement 仍可用

Element DllRef;
GetCoreKRSSymbolTableDllFunction(Table, DllRef);
// DllRef 借用 Table 的来源库位置引用

ZeroElementFunction(EmptyElement, DllRef);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
ReleaseWinDllFunction(EmptyElement, WinDllElement);
```

案例解释：以已加载的 Windows动态库元素 WinDllElement 为定义域、符号表 Table 为值域调用 SetCoreKRSSymbolTableDllFunction，来源库位置即被写入。写入是拷贝装配，WinDllElement 保持可用，后续仍需与其成对调用 ReleaseWinDll（文档未生成） 释放；符号表一侧则由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。读取产生的 DllRef 是借用引用，须先 ZeroElementFunction 解除再释放符号表。
