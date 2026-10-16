# CoreKRS_Manager

***

该源文件是 KRS_Lib 的核心 KRS 管理模块。KRS 是庞杂系统的知识检索调度层，本模块提供四类基础结构：超索引字典把超索引登记成分页表；核心KRS信息体（CoreKRSObject）把超索引、动态链接库、符号表、子元素环境检索器与登录/登出超索引绑定为一个调度单元；核心KRS符号表（CoreKRSSymbolTable）单独维护一组符号（符号名、类型码、解析地址、解析状态），并可由信息体的动态链接库解析地址；核心KRS信息管理器（CoreKRSManager）负责信息体的登录/登出调度、按超索引检索与状态读写。全部实体位于命名空间 Q_A 下，成员判定分别由判定函数 CoreKRSDictionariesTest、CoreKRSObjectTest、CoreKRSSymbolTableTest 与 CoreKRSManagerTest 完成。

注：信息体的符号表槽位与符号表读取映射沿用历史命名 `Dictionaries`，语义即"符号表"，按原文保留。

***

### 结构与集合：

| 指令 | 说明 |
| --- | --- |
| [CoreKRSDictionaries_Struct](CoreKRSDictionaries_Struct.md) | 命名空间CoreKRSDictionaries_Struct定义了超索引字典结构位置常量 |
| [CoreKRSDictionaries](CoreKRSDictionaries.md) | 集合CoreKRSDictionaries为超索引字典元素的集合 |
| [CoreKRSObject_Struct](CoreKRSObject_Struct.md) | 命名空间CoreKRSObject_Struct定义了核心KRS对象结构位置常量（constexpr unsigned int），其成员如下 |
| [CoreKRSObject](CoreKRSObject.md) | 集合CoreKRSObject为所有核心KRS对象元素的集合 |
| [CoreKRSSymbolTable_Struct](CoreKRSSymbolTable_Struct.md) | 命名空间CoreKRSSymbolTable_Struct定义核心KRS符号表结构位置常量（constexpr unsigned int），其成员如下 |
| [CoreKRSSymbolTable](CoreKRSSymbolTable.md) | 集合CoreKRSSymbolTable为所有核心KRS符号表的集合 |
| [CoreKRSManager_Struct](CoreKRSManager_Struct.md) | 命名空间CoreKRSManager_Struct定义了核心KRS管理器结构位置常量（constexpr unsigned int），其成员如下 |
| [CoreKRSManager](CoreKRSManager.md) | 集合CoreKRSManager为所有核心KRS管理器元素的集合 |

### 超索引字典：

| 指令 | 说明 |
| --- | --- |
| [NewCoreKRSDictionaries](NewCoreKRSDictionaries.md) | 映射NewCoreKRSDictionaries接受空元素集合（NullElementSet）为定义域和值域 |
| [LoginCoreKRSDictionaries](LoginCoreKRSDictionaries.md) | 映射LoginCoreKRSDictionaries接受超索引集合（SuperIndexSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域 |
| [LogoutCoreKRSDictionaries](LogoutCoreKRSDictionaries.md) | 映射LogoutCoreKRSDictionaries接受超索引集合（SuperIndexSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域 |
| [SortCoreKRSDictionaries](SortCoreKRSDictionaries.md) | 映射SortCoreKRSDictionaries接受空元素集合（NullElementSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域 |
| [DefragmentCoreKRSDictionaries](DefragmentCoreKRSDictionaries.md) | 映射DefragmentCoreKRSDictionaries接受空元素集合（NullElementSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域 |
| [CoreKRSDictionariesToData](CoreKRSDictionariesToData.md) | 映射CoreKRSDictionariesToData接受超索引字典集合（CoreKRSDictionaries）为定义域，空元素集合（NullElementSet）为值域 |
| [DataToCoreKRSDictionaries](DataToCoreKRSDictionaries.md) | 映射DataToCoreKRSDictionaries接受流集合（StreamSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域 |
| [ReleaseCoreDictionaries](ReleaseCoreDictionaries.md) | 映射ReleaseCoreDictionaries接受空元素集合（NullElementSet）为定义域，超索引字典集合（CoreKRSDictionaries）为值域 |

### 知识库信息体：

| 指令 | 说明 |
| --- | --- |
| [NewCoreKRSObject](NewCoreKRSObject.md) | 映射NewCoreKRSObject接受空元素集合（NullElementSet）为定义域和值域 |
| [SetCoreKRSObjectSuperIndex](SetCoreKRSObjectSuperIndex.md) | 映射SetCoreKRSObjectSuperIndex接受超索引集合（SuperIndexSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域 |
| [SetCoreKRSObjectDll](SetCoreKRSObjectDll.md) | 映射SetCoreKRSObjectDll接受Windows动态库元素集合（WinDllSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域 |
| [GetCoreKRSObjectDll](GetCoreKRSObjectDll.md) | 映射GetCoreKRSObjectDll接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域 |
| [SetCoreKRSObjectDictionaries](SetCoreKRSObjectDictionaries.md) | 映射SetCoreKRSObjectDictionaries接受符号表集合（CoreKRSSymbolTable）为定义域，核心KRS对象集合（CoreKRSObject）为值域 |
| [ReadCoreKRSObjectDictionaries](ReadCoreKRSObjectDictionaries.md) | 映射ReadCoreKRSObjectDictionaries接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域 |
| [SetCoreKRSObjectSubEES](SetCoreKRSObjectSubEES.md) | 映射SetCoreKRSObjectSubEES接受全集（UniversalSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域 |
| [ReadCoreKRSObjectSubEES](ReadCoreKRSObjectSubEES.md) | 映射ReadCoreKRSObjectSubEES接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域 |
| [SetLoginSuperIndexCoreKRSObject](SetLoginSuperIndexCoreKRSObject.md) | 映射SetLoginSuperIndexCoreKRSObject接受超索引集合（SuperIndexSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域 |
| [ReadLoginSuperIndexCoreKRSObject](ReadLoginSuperIndexCoreKRSObject.md) | 映射ReadLoginSuperIndexCoreKRSObject接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域 |
| [SetLogoutSuperIndexCoreKRSObject](SetLogoutSuperIndexCoreKRSObject.md) | 映射SetLogoutSuperIndexCoreKRSObject接受超索引集合（SuperIndexSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域 |
| [ReadLogoutSuperIndexCoreKRSObject](ReadLogoutSuperIndexCoreKRSObject.md) | 映射ReadLogoutSuperIndexCoreKRSObject接受核心KRS对象集合（CoreKRSObject）为定义域，空元素集合（NullElementSet）为值域 |
| [ReleaseCoreKRSObject](ReleaseCoreKRSObject.md) | 映射ReleaseCoreKRSObject接受空元素集合（NullElementSet）为定义域，核心KRS对象集合（CoreKRSObject）为值域 |

### 符号表：

| 指令 | 说明 |
| --- | --- |
| [NewCoreKRSSymbolTable](NewCoreKRSSymbolTable.md) | 映射NewCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域和值域 |
| [SetCoreKRSSymbolTableDll](SetCoreKRSSymbolTableDll.md) | 映射SetCoreKRSSymbolTableDll接受Windows动态库元素集合（WinDllSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [GetCoreKRSSymbolTableDll](GetCoreKRSSymbolTableDll.md) | 映射GetCoreKRSSymbolTableDll接受核心KRS符号表集合（CoreKRSSymbolTable）为定义域，空元素集合（NullElementSet）为值域 |
| [LoginCoreKRSSymbolTable](LoginCoreKRSSymbolTable.md) | 映射LoginCoreKRSSymbolTable接受元素序偶集合（OrderedPairSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [LogoutCoreKRSSymbolTable](LogoutCoreKRSSymbolTable.md) | 映射LogoutCoreKRSSymbolTable接受全元素集合（UniversalSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [SelectCoreKRSSymbolTable](SelectCoreKRSSymbolTable.md) | 映射SelectCoreKRSSymbolTable接受元素序偶集合（OrderedPairSet）为定义域，无符号整数集合（UIntSet）为值域 |
| [ReadCoreKRSSymbolTableElement](ReadCoreKRSSymbolTableElement.md) | 映射ReadCoreKRSSymbolTableElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ReadCoreKRSSymbolTableCategory](ReadCoreKRSSymbolTableCategory.md) | 映射ReadCoreKRSSymbolTableCategory接受元素序偶集合（OrderedPairSet）为定义域，无符号整数集合（UIntSet）为值域 |
| [ReadCoreKRSSymbolTableState](ReadCoreKRSSymbolTableState.md) | 映射ReadCoreKRSSymbolTableState接受元素序偶集合（OrderedPairSet）为定义域，无符号整数集合（UIntSet）为值域 |
| [SetCoreKRSSymbolTableState](SetCoreKRSSymbolTableState.md) | 映射SetCoreKRSSymbolTableState接受元素序偶集合（OrderedPairSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [SortCoreKRSSymbolTable](SortCoreKRSSymbolTable.md) | 映射SortCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [DefragmentCoreKRSSymbolTable](DefragmentCoreKRSSymbolTable.md) | 映射DefragmentCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [ResolveCoreKRSSymbolTable](ResolveCoreKRSSymbolTable.md) | 映射ResolveCoreKRSSymbolTable接受核心KRS符号表集合（CoreKRSSymbolTable）为定义域，空元素集合（NullElementSet）为值域 |
| [ConstructCoreKRSSymbolTable](ConstructCoreKRSSymbolTable.md) | 映射ConstructCoreKRSSymbolTable接受元素序集合（ElementOrderSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [CoreKRSSymbolTableToData](CoreKRSSymbolTableToData.md) | 映射CoreKRSSymbolTableToData接受核心KRS符号表集合（CoreKRSSymbolTable）为定义域，空元素集合（NullElementSet）为值域 |
| [DataToCoreKRSSymbolTable](DataToCoreKRSSymbolTable.md) | 映射DataToCoreKRSSymbolTable接受流集合（StreamSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |
| [ReleaseCoreKRSSymbolTable](ReleaseCoreKRSSymbolTable.md) | 映射ReleaseCoreKRSSymbolTable接受空元素集合（NullElementSet）为定义域，核心KRS符号表集合（CoreKRSSymbolTable）为值域 |

### 信息管理器调度：

| 指令 | 说明 |
| --- | --- |
| [NewCoreKRSManager](NewCoreKRSManager.md) | 映射NewCoreKRSManager接受空元素集合（NullElementSet）为定义域和值域 |
| [SelectCoreKRSManager](SelectCoreKRSManager.md) | 映射SelectCoreKRSManager接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [LoginCoreKRSManager](LoginCoreKRSManager.md) | 映射LoginCoreKRSManager接受核心KRS对象集合（CoreKRSObject）为定义域，核心KRS管理器集合（CoreKRSManager）为值域 |
| [LogoutCoreKRSManager](LogoutCoreKRSManager.md) | 映射LogoutCoreKRSManager接受超索引集合（SuperIndexSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域 |
| [SetObjectStateCoreKRSManager](SetObjectStateCoreKRSManager.md) | 映射SetObjectStateCoreKRSManager接受元素序偶集合（OrderedPairSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域 |
| [ReadObjectStateCoreKRSManager](ReadObjectStateCoreKRSManager.md) | 映射ReadObjectStateCoreKRSManager接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [SortCoreKRSManager](SortCoreKRSManager.md) | 映射SortCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域 |
| [DefragmentCoreKRSManager](DefragmentCoreKRSManager.md) | 映射DefragmentCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域 |
| [CoreKRSManagerToData](CoreKRSManagerToData.md) | 映射CoreKRSManagerToData接受核心KRS管理器集合（CoreKRSManager）为定义域，空元素集合（NullElementSet）为值域 |
| [DataToCoreKRSManager](DataToCoreKRSManager.md) | 映射DataToCoreKRSManager接受流集合（StreamSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域 |
| [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) | 映射ReleaseCoreKRSManager接受空元素集合（NullElementSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域 |

### 案例：

| 指令 | 说明 |
| --- | --- |
| [CoreKRSSymbolTable_Case](CoreKRSSymbolTable_Case.md) | 本案例串联 KRS_Lib 知识库落地的完整链路：装载知识库动态链接库 → 按符号清单建独立符号表并解析地址 → 把符号表挂入核心KRS信息体 → 登录信息管理器 → 按超索引检索与读写状态 → 登出与释放。涉及的实体见[核心KRS管理器模块](CoreKRS_Manager.md)、[核心KRS符号表](CoreKRSSymbolTable.md)、[核心KRS对象集合](CoreKRSObject.md)与[核心KRS信息管理器集合](CoreKRSManager.md)。 |

***

## 参照

| 指令 | 说明 |
| --- | --- |
| [KRS_Base-Project](../../KRS_Base-Project/KRS_Base-Project.md) | - |
| [NewKRSPollingDrivenZero](../../KRS_Base-Project/KRS_PollingDrivenZero/NewKRSPollingDrivenZero.md) | 映射NewKRSPollingDrivenZero接受空元素集合（NullElementSet）为定义域和值域 |

符号表所效法的三元模式参照 [DllElementManager](../../Intentionality-Project/Intentionality_MapManager/DllElementManager.md)（同为"超索引 + 动态库元素 + 参数"的登记结构）；动态库的解析原语参照 GetElementFromWinDll（文档未生成）。Windows 环境下的装载与读取见[核心KRS对象动态库模块](../WinCoreKRS_Manager/WinCoreKRS_Manager.md)。

***

本模块语义由头文件声明、结构常量与命名约定推断；分页家族（超索引字典、符号表、信息管理器）共用同一参数布局（页容量、末尾标志、扩容量、保留容量），默认值 16 / 0 / 2 / 3。
