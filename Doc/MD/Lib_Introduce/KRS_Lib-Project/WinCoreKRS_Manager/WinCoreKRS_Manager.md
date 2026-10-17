# WinCoreKRS_Manager

***

该源文件是 KRS_Lib 的 Windows 协同模块，在 [CoreKRS_Manager](../CoreKRS_Manager/CoreKRS_Manager.md) 之上为核心KRS对象（[CoreKRSObject](../CoreKRS_Manager/CoreKRSObject.md)）提供动态库的打开、关闭与符号表读取三条映射：核心KRS对象动态库位置（CoreKRSObject_Dll）持有 Windows动态库元素（WinDll），打开按路径加载动态库并把模块句柄装配进该槽位，关闭卸载模块并腾空槽位，符号表读取把按符号清单建成的独立符号表（[CoreKRSSymbolTable](../CoreKRS_Manager/CoreKRSSymbolTable.md)）经解析后挂入对象的符号表槽位（CoreKRSObject_Dictionaries）。动态库的加载、句柄与卸载语义与 CoreKRSLib_WinMapManager（文档未生成） 一致。全部实体位于命名空间 Q_A 下，仅限 Windows 平台。

***

### 动态库装载与卸载：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [核心KRS对象动态库打开映射](OpenCoreKRSObjectDll.md) | 映射 | 加载动态库并把模块句柄装配进对象 |
| [核心KRS对象动态库关闭映射](CloseCoreKRSObjectDll.md) | 映射 | 卸载对象持有的动态库并腾空槽位 |

### 符号表读取：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [读取对象符号表映射](ReadDictionariesCoreKRSObject.md) | 映射 | 按符号清单建表、解析地址并挂入对象 |

***

## 参照

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [KRS_Base-Project](../../KRS_Base-Project/KRS_Base-Project.md) | - | - |
| [新建知识库零轮询机映射](../../KRS_Base-Project/KRS_PollingDrivenZero/NewKRSPollingDrivenZero.md) | 映射 | 在空元素上构造知识库零轮询机元素 |

动态库加载与卸载的语义参照 LoadWinDll（文档未生成） 与 UnloadWinDll（文档未生成）；符号表所属的三元模式见[核心KRS管理器模块](../CoreKRS_Manager/CoreKRS_Manager.md)。

***

本模块语义由头文件声明、结构常量与命名约定推断；`ReadDictionariesCoreKRSObject` 的映射名与本模块的 `Dictionaries` 术语沿用历史命名，语义即"符号表"。
