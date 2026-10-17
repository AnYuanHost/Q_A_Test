# CoreKRS_Manager

***

该源文件是 KRS_Lib 的核心 KRS 管理模块。KRS 是庞杂系统的知识检索调度层，本模块提供四类基础结构：超索引字典把超索引登记成分页表；核心KRS信息体（CoreKRSObject）把超索引、动态链接库、符号表、子元素环境检索器与登录/登出超索引绑定为一个调度单元；核心KRS符号表（CoreKRSSymbolTable）单独维护一组符号（符号名、类型码、解析地址、解析状态），并可由信息体的动态链接库解析地址；核心KRS信息管理器（CoreKRSManager）以分页登记表登记 {超索引, 动态库, 通用映射序}，负责登记键的登录/登出调度、按超索引检索与登记项槽位读写。全部实体位于命名空间 Q_A 下，成员判定分别由判定函数 CoreKRSDictionariesTest、CoreKRSObjectTest、CoreKRSSymbolTableTest 与 CoreKRSManagerTest 完成。

注：信息体的符号表槽位与符号表读取映射沿用历史命名 `Dictionaries`，语义即"符号表"，按原文保留。

***

### 结构与集合：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引字典结构](CoreKRSDictionaries_Struct.md) | 命名空间 | 超索引字典的结构位置常量 |
| [超索引字典](CoreKRSDictionaries.md) | 集合 | 超索引字典元素集合 |
| [核心KRS对象结构](CoreKRSObject_Struct.md) | 命名空间 | 核心KRS对象的结构位置常量 |
| [核心KRS对象集合](CoreKRSObject.md) | 集合 | 核心KRS对象元素集合 |
| [核心KRS符号表结构](CoreKRSSymbolTable_Struct.md) | 命名空间 | 核心KRS符号表的结构位置常量 |
| [核心KRS符号表集合](CoreKRSSymbolTable.md) | 集合 | 核心KRS符号表元素集合 |
| [核心KRS管理器结构](CoreKRSManager_Struct.md) | 命名空间 | 核心KRS管理器的结构位置常量 |
| [核心KRS信息管理器集合](CoreKRSManager.md) | 集合 | 核心KRS信息管理器元素集合 |

### 超索引字典：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建超索引字典映射](NewCoreKRSDictionaries.md) | 映射 | 新建超索引字典 |
| [超索引字典登记映射](LoginCoreKRSDictionaries.md) | 映射 | 登记超索引到字典并按超索引维持排序 |
| [超索引字典注销映射](LogoutCoreKRSDictionaries.md) | 映射 | 按超索引注销字典中的登记项 |
| [超索引字典排序映射](SortCoreKRSDictionaries.md) | 映射 | 对字典登记项按超索引排序 |
| [超索引字典压缩映射](DefragmentCoreKRSDictionaries.md) | 映射 | 压缩字典登记表空位并回收多余页 |
| [超索引字典转数据映射](CoreKRSDictionariesToData.md) | 映射 | 把超索引字典序列化为字节流 |
| [数据转超索引字典映射](DataToCoreKRSDictionaries.md) | 映射 | 从字节流回填超索引字典 |
| [释放超索引字典映射](ReleaseCoreDictionaries.md) | 映射 | 释放超索引字典的全部资源 |

### 知识库信息体：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建核心KRS对象映射](NewCoreKRSObject.md) | 映射 | 新建核心KRS对象 |
| [核心KRS对象超索引设置映射](SetCoreKRSObjectSuperIndex.md) | 映射 | 设置对象的超索引槽位 |
| [核心KRS对象动态库设置映射](SetCoreKRSObjectDll.md) | 映射 | 设置对象的动态库槽位 |
| [核心KRS对象动态库读取映射](GetCoreKRSObjectDll.md) | 映射 | 读取对象的动态库槽位 |
| [核心KRS对象符号表设置映射](SetCoreKRSObjectDictionaries.md) | 映射 | 设置对象的符号表槽位 |
| [核心KRS对象符号表读取映射](ReadCoreKRSObjectDictionaries.md) | 映射 | 读取对象的符号表槽位 |
| [核心KRS对象子元素环境检索器设置映射](SetCoreKRSObjectSubEES.md) | 映射 | 设置对象的子元素环境检索器槽位 |
| [核心KRS对象子元素环境检索器读取映射](ReadCoreKRSObjectSubEES.md) | 映射 | 读取对象的子元素环境检索器槽位 |
| [核心KRS对象登录超索引设置映射](SetLoginSuperIndexCoreKRSObject.md) | 映射 | 设置对象的登录超索引 |
| [核心KRS对象登录超索引读取映射](ReadLoginSuperIndexCoreKRSObject.md) | 映射 | 读取对象的登录超索引 |
| [核心KRS对象登出超索引设置映射](SetLogoutSuperIndexCoreKRSObject.md) | 映射 | 设置对象的登出超索引 |
| [核心KRS对象登出超索引读取映射](ReadLogoutSuperIndexCoreKRSObject.md) | 映射 | 读取对象的登出超索引 |
| [释放核心KRS对象映射](ReleaseCoreKRSObject.md) | 映射 | 释放核心KRS对象及其各槽位 |

### 符号表：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建核心KRS符号表映射](NewCoreKRSSymbolTable.md) | 映射 | 新建核心KRS符号表 |
| [核心KRS符号表来源库设置映射](SetCoreKRSSymbolTableDll.md) | 映射 | 设置符号表的来源动态链接库 |
| [核心KRS符号表来源库读取映射](GetCoreKRSSymbolTableDll.md) | 映射 | 读取符号表的来源动态链接库 |
| [核心KRS符号表登录映射](LoginCoreKRSSymbolTable.md) | 映射 | 按符号名与类型码登记符号项 |
| [核心KRS符号表登出映射](LogoutCoreKRSSymbolTable.md) | 映射 | 按符号名注销符号项 |
| [核心KRS符号表检索映射](SelectCoreKRSSymbolTable.md) | 映射 | 按符号名检索符号项下标 |
| [核心KRS符号表元素读取映射](ReadCoreKRSSymbolTableElement.md) | 映射 | 读取符号项的解析地址 |
| [核心KRS符号表类型码读取映射](ReadCoreKRSSymbolTableCategory.md) | 映射 | 读取符号项的类型码 |
| [核心KRS符号表解析状态读取映射](ReadCoreKRSSymbolTableState.md) | 映射 | 读取符号项的解析状态 |
| [核心KRS符号表解析状态写入映射](SetCoreKRSSymbolTableState.md) | 映射 | 写入符号项的解析状态 |
| [核心KRS符号表排序映射](SortCoreKRSSymbolTable.md) | 映射 | 对符号项按符号名排序 |
| [核心KRS符号表碎片整理映射](DefragmentCoreKRSSymbolTable.md) | 映射 | 压缩符号表空位并回收多余页 |
| [核心KRS符号表解析映射](ResolveCoreKRSSymbolTable.md) | 映射 | 由来源库逐项解析符号地址 |
| [核心KRS符号表构造映射](ConstructCoreKRSSymbolTable.md) | 映射 | 由符号清单批量建表并登记符号项 |
| [核心KRS符号表序列化映射](CoreKRSSymbolTableToData.md) | 映射 | 把符号表序列化为数据流 |
| [核心KRS符号表反序列化映射](DataToCoreKRSSymbolTable.md) | 映射 | 从数据流重建符号表 |
| [核心KRS符号表释放映射](ReleaseCoreKRSSymbolTable.md) | 映射 | 释放符号表及其各项资源 |

### 信息管理器调度：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建核心KRS管理器映射](NewCoreKRSManager.md) | 映射 | 新建核心KRS管理器 |
| [字典构造核心KRS管理器映射](DictionariesConstructCoreKRSManager.md) | 映射 | 以超索引字典为蓝本构造管理器登记骨架 |
| [核心KRS管理器登记映射](LoginCoreKRSManager.md) | 映射 | 按超索引登记管理器登记项 |
| [核心KRS管理器注销映射](LogoutCoreKRSManager.md) | 映射 | 按超索引注销管理器登记项 |
| [核心KRS管理器检索映射](SelectCoreKRSManager.md) | 映射 | 按超索引检索登记项下标 |
| [核心KRS管理器排序映射](SortCoreKRSManager.md) | 映射 | 对登记项按超索引排序 |
| [核心KRS管理器压缩映射](DefragmentCoreKRSManager.md) | 映射 | 压缩登记表空位并清零空位计数 |
| [读取核心KRS管理器动态库映射](ReadCoreKRSManagerDll.md) | 映射 | 读取登记项动态库位置的引用 |
| [取出核心KRS管理器动态库映射](GetCoreKRSManagerDll.md) | 映射 | 取出登记项的动态库位置 |
| [装入核心KRS管理器动态库映射](PutCoreKRSManagerDll.md) | 映射 | 向登记项装入动态库 |
| [读取核心KRS管理器通用映射序映射](ReadCoreKRSManagerUMap.md) | 映射 | 读取登记项通用映射序位置的引用 |
| [取出核心KRS管理器通用映射序映射](GetCoreKRSManagerUMap.md) | 映射 | 取出登记项的通用映射序位置 |
| [装入核心KRS管理器通用映射序映射](PutCoreKRSManagerUMap.md) | 映射 | 向登记项装入通用映射序 |
| [释放核心KRS管理器映射](ReleaseCoreKRSManager.md) | 映射 | 释放核心KRS管理器及其资源 |

### 案例：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [CoreKRSSymbolTable_Case](CoreKRSSymbolTable_Case.md) | - | 本案例串联 KRS_Lib 知识库落地的完整链路：装载知识库动态链接库 → 按符号清单建独立符号表并解析地址 → 把符号表挂入核心KRS信息体 → 以信息体超索引为键登记核心KRS信息管理器 → 按超索引检索与读写登记项槽位 → 注销与释放。涉及的实体见[核心KRS管理器模块](CoreKRS_Manager.md)、[核心KRS符号表](CoreKRSSymbolTable.md)、[核心KRS对象集合](CoreKRSObject.md)与[核心KRS信息管理器集合](CoreKRSManager.md)。 |

***

## 参照

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [KRS_Base-Project](../../KRS_Base-Project/KRS_Base-Project.md) | - | - |
| [新建知识库零轮询机映射](../../KRS_Base-Project/KRS_PollingDrivenZero/NewKRSPollingDrivenZero.md) | 映射 | 在空元素上构造知识库零轮询机元素 |

符号表所效法的三元模式参照 [DllElementManager](../CoreKRSLib_MapManager/DllElementManager.md)（同为"超索引 + 动态库元素 + 参数"的登记结构）；动态库的解析原语参照 GetElementFromWinDll（文档未生成）。Windows 环境下的装载与读取见[核心KRS对象动态库模块](../WinCoreKRS_Manager/WinCoreKRS_Manager.md)。

***

本模块语义由头文件声明、结构常量与命名约定推断；分页家族（超索引字典、符号表、信息管理器）共用分页运行参数（页容量、末尾标志、扩容量、保留容量），默认值 16 / 0 / 2 / 3；信息管理器（[CoreKRSManager_Struct](CoreKRSManager_Struct.md)）另设空位计数（CoreKRSM_EmptyNumber）并调整了参数次序。
