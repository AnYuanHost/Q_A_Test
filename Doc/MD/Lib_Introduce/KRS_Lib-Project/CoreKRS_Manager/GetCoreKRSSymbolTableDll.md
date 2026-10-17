# GetCoreKRSSymbolTableDll

***

映射GetCoreKRSSymbolTableDll接受核心KRS符号表集合（CoreKRSSymbolTable）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map GetCoreKRSSymbolTableDll(&CoreKRSSymbolTable, &NullElementSet, GetCoreKRSSymbolTableDllFunction);
```

核心KRS符号表来源库读取映射（GetCoreKRSSymbolTableDll）把定义域符号表的来源动态链接库位置（[ST_Dll](CoreKRSSymbolTable_Struct.md)）以引用传递（Range |= 槽位）到值域元素上，值域元素取得的是该槽位的借用引用，不是副本。

三态语义：值域元素是槽位的借用引用而非独立副本，引用随符号表释放而失效。使用完毕须以 ZeroElementFunction 解除引用，不得对值域元素单独调用 ReleaseElementFunction；若先释放符号表再解除引用，引用即指向已释放的槽位。来源库由[来源库设置](SetCoreKRSSymbolTableDll.md)写入，未设置时槽位为空。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);

Element WinDllElement;
NewWinDllFunction(EmptyElement, WinDllElement);
// LoadWinDll 把模块句柄写入 WinDllElement
SetCoreKRSSymbolTableDllFunction(WinDllElement, Table);

Element DllRef;
GetCoreKRSSymbolTableDllFunction(Table, DllRef);
// DllRef 借用 Table 的来源库位置引用，可直接用于解析

ZeroElementFunction(EmptyElement, DllRef);   // 解除引用

ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
ReleaseWinDllFunction(EmptyElement, WinDllElement);
```

案例解释：以符号表 Table 为定义域、空元素 DllRef 为值域调用 GetCoreKRSSymbolTableDllFunction，DllRef 取得来源库槽位的借用引用。解除引用与释放必须成对：先用 ZeroElementFunction 解除 DllRef，再以 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 释放符号表；顺序颠倒会使 DllRef 悬空。
