# ResolveCoreKRSSymbolTable

***

映射ResolveCoreKRSSymbolTable接受核心KRS符号表集合（CoreKRSSymbolTable）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ResolveCoreKRSSymbolTable(&CoreKRSSymbolTable, &NullElementSet, ResolveCoreKRSSymbolTableFunction);
```

核心KRS符号表解析映射（ResolveCoreKRSSymbolTable）对定义域符号表逐项解析符号地址：以 `<符号名, 类型码, 来源动态链接库>` 三元序构成参序，调用 GetElementFromWinDll（文档未生成） 从来源库获取导出元素，把解析到的地址回填到该项的解析地址位（[ST_Address](CoreKRSSymbolTable_Struct.md)），并把解析状态位（ST_State）置为 ST_Resolved；取元素抛异常时把状态置为 ST_Failed。解析遍历表内全部非空符号项（不区分此前状态，已解析项会被重新解析），跳过空位。

前置条件：符号表的来源动态链接库位置（[ST_Dll](CoreKRSSymbolTable_Struct.md)）必须已由[来源库设置](SetCoreKRSSymbolTableDll.md)写入，未设置时抛出异常（throw Element，未设置来源库）。定义域为符号表本身，值域为空元素集合，仅作映射出口。解析所得地址为运行期数据：地址位是借用/持有到表内的引用，随来源库卸载而失效。解析完成后即可用[元素读取](ReadCoreKRSSymbolTableElement.md)读取地址、用[状态读取](ReadCoreKRSSymbolTableState.md)读回状态。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);

Element WinDllElement;
NewWinDllFunction(EmptyElement, WinDllElement);
// LoadWinDll 把模块句柄写入 WinDllElement
SetCoreKRSSymbolTableDllFunction(WinDllElement, Table);

// …经 LoginCoreKRSSymbolTableFunction 登记若干符号

ResolveCoreKRSSymbolTableFunction(Table, EmptyElement);
// 逐项解析：成功的项地址回填、状态 ST_Resolved；失败的项状态 ST_Failed

ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
ReleaseWinDllFunction(EmptyElement, WinDllElement);
```

案例解释：以符号表 Table 为定义域、空元素为值域调用 ResolveCoreKRSSymbolTableFunction，映射遍历各符号项，用来源库把符号名解析为地址并写回地址位，同时更新解析状态。若未先设置来源库则抛出异常；解析失败（来源库中无该符号）时该项状态为 ST_Failed，地址位留空，读取地址会再抛异常。符号表与来源库分别由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 与 ReleaseWinDll（文档未生成） 成对释放。
