# ReleaseCoreKRSObject

***

映射ReleaseCoreKRSObject接受空元素集合（NullElementSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域，定义为：

```C++
Map ReleaseCoreKRSObject(&NullElementSet, &CoreKRSObject, ReleaseCoreKRSObjectFunction);
```

释放核心KRS对象映射（ReleaseCoreKRSObject）释放值域对象并使其复位：先以判定函数 CoreKRSObjectTest 核对值域元素确为核心KRS对象，若不是则返回假、不作处理；随后若符号表槽位（CoreKRSObject_Dictionaries，下标 2）非空，则按**符号表体例**以[ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md)释放该槽位；再逐位遍历全部位置（0 至 CoreKRSObject_OrderSize-1）以 ReleaseElementFunction 释放各槽位元素；最后释放对象本体。

槽位释放纪律：符号表槽位承载独立符号表，按符号表体例整体释放；动态库槽位（CoreKRSObject_Dll，下标 1）只释放元素本身，不 `FreeLibrary`——模块的卸载由[CloseCoreKRSObjectDll](../WinCoreKRS_Manager/CloseCoreKRSObjectDll.md)负责，故释放对象前应先关闭动态库；其余槽位逐位释放元素。本映射必须与[NewCoreKRSObject](NewCoreKRSObject.md)成对使用：构造在值域元素上进行，释放同样在值域元素上进行。释放对象前，须先清零经[ReadCoreKRSObjectSubEES](ReadCoreKRSObjectSubEES.md)、[GetCoreKRSObjectDll](GetCoreKRSObjectDll.md)与[ReadLoginSuperIndexCoreKRSObject](ReadLoginSuperIndexCoreKRSObject.md)、[ReadLogoutSuperIndexCoreKRSObject](ReadLogoutSuperIndexCoreKRSObject.md)取得的全部借用引用，并按[LogoutCoreKRSManager](LogoutCoreKRSManager.md)把对象从管理器登出。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 70;

Element SuperIndex;
UIntToSuperIndexFunction(UIntElement, SuperIndex);

SetCoreKRSObjectSuperIndexFunction(SuperIndex, Object);
// 拷贝装配：超索引复制进槽位，SuperIndex 仍可用

Element Table;
NewCoreKRSSymbolTableFunction(EmptyElement, Table);
SetCoreKRSObjectDictionariesFunction(Table, Object);
// 转交装配：Table 被置空，此后不得再清零/释放 Table

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
// 符号表槽位按符号表体例释放，其余槽位逐位释放元素，最后释放对象本体

ReleaseElementFunction(EmptyElement, SuperIndex);
ReleaseElementFunction(EmptyElement, UIntElement);
```

案例解释：先构造对象，经[SetCoreKRSObjectSuperIndex](SetCoreKRSObjectSuperIndex.md)以拷贝装配写入超索引，经[SetCoreKRSObjectDictionaries](SetCoreKRSObjectDictionaries.md)以转交装配写入符号表，随后调用ReleaseCoreKRSObjectFunction释放对象。释放时符号表槽位按符号表体例整体释放，动态库槽位只释放元素本身、不卸载模块，其余槽位逐位释放元素，最后释放对象本体；释放后对象不再属于[CoreKRSObject](CoreKRSObject.md)。构造与释放成对、转交与清零成对：来源符号表Table已被置空，此处不再清零或释放。对象若已登录管理器须先经[LogoutCoreKRSManager](LogoutCoreKRSManager.md)登出；动态库槽位若已打开模块，须先经[CloseCoreKRSObjectDll](../WinCoreKRS_Manager/CloseCoreKRSObjectDll.md)卸载。对象状态不属本体，记在管理器项的 CoreKRS_State 位置，取值见[CoreKRSObject_Struct](CoreKRSObject_Struct.md)的状态码。
