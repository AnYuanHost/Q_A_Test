# CoreKRSSymbolTableToData

***

映射CoreKRSSymbolTableToData接受核心KRS符号表集合（CoreKRSSymbolTable）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map CoreKRSSymbolTableToData(&CoreKRSSymbolTable, &NullElementSet, CoreKRSSymbolTableToDataFunction);
```

核心KRS符号表序列化映射（CoreKRSSymbolTableToData）把定义域符号表序列化为一段数据，写入值域空元素（其承载流字节）。数据流结构为：头部四个无符号整数 `[项数, 页容量, 扩容量, 保留容量]`，其后逐项写入 `[符号名, 类型码, 状态码]`（符号名按自身长度写入，类型码与状态码为无符号整数）；空位（符号名位为空的项）跳过，项数为实有符号项数。

**解析地址位（ST_Address）与来源动态链接库（ST_Dll）为运行期数据，不序列化**：地址指向来源库内部元素、随库卸载失效，来源库本身也由 WinDllSet（文档未生成） 一侧持有所有权，均不宜落入数据流。符号名、类型码、状态码则完整保留，可经[反序列化](DataToCoreKRSSymbolTable.md)重建。

***

## 案例：

```C++
Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
// …设置来源库、登记符号（地址与来源库属运行期数据）

Element Stream;
CoreKRSSymbolTableToDataFunction(Table, Stream);
// Stream 承载序列化数据：[项数, 页容量, 扩容量, 保留容量] + 逐项 [符号名, 类型码, 状态码]

ReleaseElementFunction(EmptyElement, Stream);
ReleaseCoreKRSSymbolTableFunction(EmptyElement, Table);
```

案例解释：以符号表 Table 为定义域、空元素 Stream 为值域调用 CoreKRSSymbolTableToDataFunction，符号表被写成一段自描述数据流。流中只保留符号名、类型码与状态码，解析地址与来源动态链接库不入流。Stream 由调用方持有，使用完毕以 ReleaseElementFunction 释放；符号表由 [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) 成对释放。由流重建符号表见 [DataToCoreKRSSymbolTable](DataToCoreKRSSymbolTable.md)。
