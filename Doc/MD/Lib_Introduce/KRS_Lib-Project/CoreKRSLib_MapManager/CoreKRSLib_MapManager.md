# CoreKRSLib_MapManager

***

该源文件为庞杂系统提供映射表单与动态库元素的管理结构：核心KRS库映射管理器负责静态库映射表单的排序与结构信息（含类型名称标注），动态库元素管理器负责登记来自DLL的元素并按超索引完成定位与读取。

***

## 核心KRS库映射管理器组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [核心KRS库映射管理器结构](CoreKRSLibMapManager_Struct.md) | 命名空间 | 核心KRS库映射管理器的结构位置常量 |
| [核心KRS库映射管理器类型名称](CoreKRSLibMapManager_TypeName.md) | 命名空间 | 元素、集合、映射三种结构的类型名称与类型编号常量 |
| [核心KRS库映射管理器集合](CoreKRSLibMapManager.md) | 集合 | 核心KRS库映射管理器元素集合 |
| [核心KRS库映射管理器新建映射](NewCoreKRSLibMapManager.md) | 映射 | 新建空的映射管理器条目 |
| [核心KRS库映射管理器排序映射](SortCoreKRSLibMapManager.md) | 映射 | 对映射表单排序并转交赋值到值域 |
| [核心KRS库映射管理器结构写入映射](FstreamStructCoreKRSLibMapManager.md) | 映射 | 把管理器结构信息与类型名称写入文件 |
| [核心KRS库映射管理器释放映射](ReleaseCoreKRSLibMapManager.md) | 映射 | 释放映射管理器条目并复位 |

***

## 动态库元素管理器组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [动态库元素管理器结构](DllElementManager_Struct.md) | 命名空间 | 动态库元素管理器的结构位置常量 |
| [动态库元素管理器集合](DllElementManager.md) | 集合 | 动态库元素管理器元素集合 |
| [动态库元素管理器新建映射](NewDllElementManager.md) | 映射 | 新建空的动态库元素管理器条目 |
| [动态库元素管理器超索引设置映射](SetDllElementManagerSuperIndex.md) | 映射 | 写入管理器条目的超索引 |
| [动态库元素管理器超索引读取映射](ReadDllElementManagerSuperIndex.md) | 映射 | 读取管理器条目的超索引 |
| [动态库元素管理器动态库设置映射](SetDllElementManagerDll.md) | 映射 | 写入管理器条目的动态库元素 |
| [动态库元素管理器动态库获取映射](GetDllElementManagerDll.md) | 映射 | 取出管理器持有的动态库元素 |
| [动态库元素管理器检索映射](SelectDllElementManager.md) | 映射 | 按超索引检索并转交管理器条目 |
| [动态库元素管理器元素读取映射](ReadDllElementManagerElement.md) | 映射 | 读取管理器条目中的DLL导出元素 |
| [动态库元素管理器释放映射](ReleaseDllElementManager.md) | 映射 | 释放动态库元素管理器条目并复位 |

***

## 案例：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [核心KRS库映射管理器案例](CoreKRSLib_MapManager_Case.md) | - | 本案例覆盖核心KRS库映射管理器组与动态库元素管理器组的完整操作链：构造、超索引与动态库元素设置、按超索引检索、结构信息写入文件与释放。两个管理器组版式一致——新建映射在值域空元素上构造条目，设置映射以元素序偶集合为定义域写入指定位置，释放映射以空元素集合为定义域、管理器集合为值域，构造与释放成对、引用与清零成对。涉及的结构位置常量见[CoreKRSLibMapManager_Struct](CoreKRSLibMapManager_Struct.md)、[CoreKRSLibMapManager_TypeName](CoreKRSLibMapManager_TypeName.md)与[DllElementManager_Struct](DllElementManager_Struct.md)。 |

***

在使用核心KRS库映射管理模块时，可以使用源文件"All_KRS_Lib.h"直接引入所有源文件，也可以单独引入"CoreKRSLib_MapManager.h"使用。Windows环境下与DLL协同时，配合CoreKRSLib_WinMapManager（文档未生成）模块使用。
