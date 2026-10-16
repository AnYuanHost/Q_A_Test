# ReadDictionariesCoreKRSObject

***

映射ReadDictionariesCoreKRSObject接受元素序集合（ElementOrderSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map ReadDictionariesCoreKRSObject(&ElementOrderSet, &CoreKRSObject, ReadDictionariesCoreKRSObjectFunction);
```

读取对象符号表映射（ReadDictionariesCoreKRSObject）以定义域符号清单（元素序，交替 `[符号名, 类型码]`）为依据，为值域对象建立并挂入一张独立符号表，把清单中的符号**解析为地址**回填进符号表各项。

执行分四步：① 由[构造符号表](../CoreKRS_Manager/ConstructCoreKRSSymbolTable.md)按符号清单建表并逐项登记（各项地址留空、状态置未解析）；② 以对象动态库槽位（[CoreKRSObject_Dll](../CoreKRS_Manager/CoreKRSObject_Struct.md)）中已装载的模块句柄，经[设置符号表来源库](../CoreKRS_Manager/SetCoreKRSSymbolTableDll.md)设定符号表的"发生"动态链接库；③ 由[解析符号表](../CoreKRS_Manager/ResolveCoreKRSSymbolTable.md)逐项解析，成功项地址回填、状态置已解析；④ 由[设置对象符号表](../CoreKRS_Manager/SetCoreKRSObjectDictionaries.md)把整张符号表**转交装配**进对象的符号表槽位（[CoreKRSObject_Dictionaries](../CoreKRS_Manager/CoreKRSObject_Struct.md)）。

映射名沿用历史命名（`Dictionaries`，语义即符号表槽位），按原文保留；前置条件是对象已由[OpenCoreKRSObjectDll](OpenCoreKRSObjectDll.md)装载动态库，否则符号表无来源库、解析将抛异常。

***

## 案例：

```C++
Element SymbolList;
// SymbolList 为元素序，交替存放 [符号名, 类型码]

Element ObjectElement;
NewCoreKRSObjectFunction(EmptyElement, ObjectElement);
OpenCoreKRSObjectDllFunction(DllPath, ObjectElement);

ReadDictionariesCoreKRSObjectFunction(SymbolList, ObjectElement);
// ObjectElement 的符号表槽位现持有已解析的符号表

CloseCoreKRSObjectDllFunction(EmptyElement, ObjectElement);
ReleaseCoreKRSObjectFunction(EmptyElement, ObjectElement);
```

案例解释：以符号清单SymbolList为定义域、对象ObjectElement为值域，ReadDictionariesCoreKRSObjectFunction建表、设来源库、逐项解析并转交挂入对象。转交装配意味着符号表持有权归对象，尔后由[释放核心KRS对象](../CoreKRS_Manager/ReleaseCoreKRSObject.md)按符号表体例一并释放。符号名、类型码与解析状态的含义，见[核心KRS符号表](../CoreKRS_Manager/CoreKRSSymbolTable.md)；完整流程见[符号表案例](../CoreKRS_Manager/CoreKRSSymbolTable_Case.md)。
