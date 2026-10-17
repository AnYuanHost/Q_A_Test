# 核心KRS库映射管理器案例

***

本案例覆盖核心KRS库映射管理器组与动态库元素管理器组的完整操作链：构造、超索引与动态库元素设置、按超索引检索、结构信息写入文件与释放。两个管理器组版式一致——新建映射在值域空元素上构造条目，设置映射以元素序偶集合为定义域写入指定位置，释放映射以空元素集合为定义域、管理器集合为值域，构造与释放成对、引用与清零成对。涉及的结构位置常量见[CoreKRSLibMapManager_Struct](CoreKRSLibMapManager_Struct.md)、[CoreKRSLibMapManager_TypeName](CoreKRSLibMapManager_TypeName.md)与[DllElementManager_Struct](DllElementManager_Struct.md)。

## 映射管理器构造与释放

核心KRS库映射管理器条目由[NewCoreKRSLibMapManager](NewCoreKRSLibMapManager.md)在值域空元素上构造，用毕由[ReleaseCoreKRSLibMapManager](ReleaseCoreKRSLibMapManager.md)释放其序结构与参数结构。

```C++
Element ManagerElement;

NewCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);

// 在 ManagerElement 上登记映射表单，填写序位置与参数位置

ReleaseCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);
```

注意事项：若跳过释放直接令元素析构，将造成管理器内部资源泄漏。释放之后 ManagerElement 不再属于核心KRS库映射管理器集合（[CoreKRSLibMapManager](CoreKRSLibMapManager.md)），若再接受核心KRS库映射管理器映射的操作属于未定义使用。

## 排序与结构写入

登记完成后，先经[SortCoreKRSLibMapManager](SortCoreKRSLibMapManager.md)对映射表单执行排序，再经[FstreamStructCoreKRSLibMapManager](FstreamStructCoreKRSLibMapManager.md)把结构信息（含[类型名称标注](CoreKRSLibMapManager_TypeName.md)）序列化写入文件元素。序结构的元素类别子位置（IMM_ElementCategory）写入类型编号，信息子位置（IMM_Information）承载对应的类型名称信息。

```C++
Element ManagerElement;
NewCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);

// 在 ManagerElement 上登记映射表单

Element SortedManager;
ZeroElementFunction(EmptyElement, SortedManager);
SortCoreKRSLibMapManagerFunction(ManagerElement, SortedManager);
// SortedManager 转交承载排序后的管理器条目

unsigned int TypeNumber = GetUIntElement(
    GetEleOrder(GetEleOrder(SortedManager, CoreKRSLibMapManager_Struct::IMM_Order),
                CoreKRSLibMapManager_Struct::IMM_ElementCategory));
// TypeNumber 为该条目登记的结构类别编号（CoreKRSLibMapManager_TypeName 常量）

Element FileStream;
ZeroElementFunction(EmptyElement, FileStream);
// FileStream 为已构造的文件元素（文件集合 FstreamSet 成员）

FstreamStructCoreKRSLibMapManagerFunction(SortedManager, FileStream);
// 管理器的结构信息（含类型名称标注）序列化写入 FileStream

ZeroElementFunction(EmptyElement, FileStream);
ZeroElementFunction(EmptyElement, SortedManager);
ReleaseCoreKRSLibMapManagerFunction(EmptyElement, ManagerElement);
```

注意事项：SortedManager 与 FileStream 均以转交/引用语义参与映射，使用完毕必须 ZeroElementFunction 清零。清零不等于释放——SortedManager 经 GetEleOrder 访问的序结构隶属于管理器条目，ManagerElement 仍必须经 ReleaseCoreKRSLibMapManager 成对释放；写入顺序上先排序、后写入，结构写入读取的是排序后的表单顺序。

## 动态库元素管理器构造与设置

[NewDllElementManager](NewDllElementManager.md)在值域空元素上构造动态库元素管理器条目。超索引经[SetDllElementManagerSuperIndex](SetDllElementManagerSuperIndex.md)写入超索引位置（DEM_SuperIndex），Windows动态库元素经[SetDllElementManagerDll](SetDllElementManagerDll.md)写入动态库元素位置（DEM_Dll）。两个设置映射的定义域均为元素序偶集合（OrderedPairSet）。

```C++
Element ManagerEntry;
NewDllElementManagerFunction(EmptyElement, ManagerEntry);

Element SuperIndexPair;
NewOrderedPairFunction(EmptyElement, SuperIndexPair);
// SuperIndexPair 登记序偶 <超索引，管理器>：第一元素为超索引，第二元素为管理器条目
Element SuperIndexElement = GetPairFirstElement(SuperIndexPair);

SetDllElementManagerSuperIndexFunction(SuperIndexPair, EmptyElement);
// 管理器条目的超索引位置写入该超索引

Element DllPair;
NewOrderedPairFunction(EmptyElement, DllPair);
// DllPair 登记序偶 <Windows动态库元素，管理器>：第一元素为 Windows动态库元素，第二元素为管理器条目
Element DllElement = GetPairFirstElement(DllPair);
Element ManagerCopy = GetPairSecoundElement(DllPair);

SetDllElementManagerDllFunction(DllPair, EmptyElement);
// 管理器条目的动态库元素位置写入该 Windows动态库元素

ZeroElementFunction(EmptyElement, DllPair);
ZeroElementFunction(EmptyElement, SuperIndexPair);
ReleaseDllElementManagerFunction(EmptyElement, ManagerEntry);
```

注意事项：序偶的第一、第二元素顺序必须与定义域结构一致——超索引在前、管理器在后；Windows动态库元素在前、管理器在后。可用 GetPairFirstElement(Pair) 与 GetPairSecoundElement(Pair)（Secound 是库的历史拼写）校验登记内容。清零序偶 Pair 只复位序偶本身，不释放其引用的管理器条目与动态库元素；序偶必须先于管理器条目清零，否则管理器释放后序偶构成悬垂引用。

## 检索与读取

[SelectDllElementManager](SelectDllElementManager.md)按超索引检索管理器条目并转交到值域；[ReadDllElementManagerSuperIndex](ReadDllElementManagerSuperIndex.md)与[ReadDllElementManagerElement](ReadDllElementManagerElement.md)分别以引用读出超索引与 DLL 导出元素；[GetDllElementManagerDll](GetDllElementManagerDll.md)把管理器持有的 Windows动态库元素转交赋值到值域空元素上。

```C++
Element SuperIndexElement;
// SuperIndexElement 为已登记的超索引

Element ManagerEntry;
ZeroElementFunction(EmptyElement, ManagerEntry);

SelectDllElementManagerFunction(SuperIndexElement, ManagerEntry);
// ManagerEntry 转交承载按超索引检索到的管理器条目

unsigned int Index = GetUIntElement(
    GetEleOrder(ManagerEntry, DllElementManager_Struct::DEM_SuperIndex));
// Index 为该条目登记的超索引编号

Element ReadSuperIndex;
ZeroElementFunction(EmptyElement, ReadSuperIndex);
ReadDllElementManagerSuperIndexFunction(ManagerEntry, ReadSuperIndex);
// ReadSuperIndex 引用管理器登记的超索引

Element ExportElement;
ZeroElementFunction(EmptyElement, ExportElement);
ReadDllElementManagerElementFunction(ManagerEntry, ExportElement);
// ExportElement 引用序结构元素子位置（DEM_Element）上的 DLL 导出元素

Element TransferredDll;
ZeroElementFunction(EmptyElement, TransferredDll);
GetDllElementManagerDllFunction(ManagerEntry, TransferredDll);
// TransferredDll 转交取得管理器持有的 Windows动态库元素

ZeroElementFunction(EmptyElement, TransferredDll);
ZeroElementFunction(EmptyElement, ExportElement);
ZeroElementFunction(EmptyElement, ReadSuperIndex);
ReleaseDllElementManagerFunction(EmptyElement, ManagerEntry);
```

注意事项：转交语义（Select、Get）意味着值域元素取得持有权，引用语义（Read）意味着值域元素悬挂在管理器条目内部，两者用毕都必须 ZeroElementFunction 清零，但含义不同——清零转交元素复位其持有的内容，清零引用元素解除悬挂。释放顺序必须是先清零全部引用元素、再释放管理器条目；对已被释放的登记结构再次执行检索属于未定义使用。

## 内存与引用纪律

- 构造成对：NewCoreKRSLibMapManager 与 ReleaseCoreKRSLibMapManager 成对，NewDllElementManager 与 ReleaseDllElementManager 成对；跳过释放直接析构元素将泄漏内部资源。
- 引用成对：凡经 Read 类映射以引用传递读出的元素（ReadSuperIndex、ExportElement），使用完毕必须 ZeroElementFunction 清零；未清零即释放被引用的管理器条目，构成悬垂引用。
- 转交唯一：Select 类与 Get 类映射执行转交赋值，同一持有内容不可被两处同时持有；转交后原位置不再持有，重复转交不产生同一持有者。
- 清零不释放：ZeroElementFunction 将内容清零复位，不析构结构本身，也不释放其内部登记的条目；管理器条目始终由对应的 Release 映射释放。
- 顺序纪律：先排序、后结构写入；先清零引用元素、后释放管理器条目；先清零序偶、后释放序偶所引用的管理器条目。
- 符号纪律：序偶第二元素的读取使用历史拼写 GetPairSecoundElement；结构位置一律以命名空间常量（如 CoreKRSLibMapManager_Struct::IMM_Order、DllElementManager_Struct::DEM_Dll）引用，不写裸数字。
