# Intentionality_MapManager

***

该源文件为庞杂系统提供映射表单与动态库元素的管理结构：意向性映射管理器负责静态库映射表单的排序与结构信息（含类型名称标注），动态库元素管理器负责登记来自DLL的元素并按超索引完成定位与读取。

***

## 意向性映射管理器组：

| 指令 | 说明 |
| --- | --- |
| [IntentionalityMapManager_Struct](IntentionalityMapManager_Struct.md) | 命名空间IntentionalityMapManager_Struct定义了意向性映射管理器结构位置常量（constexpr unsigned int），其成员如下 |
| [IntentionalityMapManager_TypeName](IntentionalityMapManager_TypeName.md) | 命名空间IntentionalityMapManager_TypeName定义了意向性映射管理器类型名称常量，提供元素（Element）、集合（Set）、映射（Map）三种结构的类型名称字符串与类型编号 |
| [IntentionalityMapManager](IntentionalityMapManager.md) | 集合IntentionalityMapManager为所有意向性映射管理器的集合 |
| [NewIntentionalityMapManager](NewIntentionalityMapManager.md) | 映射NewIntentionalityMapManager接受空元素集合（NullElementSet）为定义域和值域 |
| [SortIntentionalityMapManager](SortIntentionalityMapManager.md) | 映射SortIntentionalityMapManager接受空元素集合（NullElementSet）为定义域，意向性映射管理器集合（IntentionalityMapManager）为值域 |
| [FstreamStructIntentionalityMapManager](FstreamStructIntentionalityMapManager.md) | 映射FstreamStructIntentionalityMapManager接受意向性映射管理器集合（IntentionalityMapManager）为定义域，文件集合（FstreamSet）为值域 |
| [ReleaseIntentionalityMapManager](ReleaseIntentionalityMapManager.md) | 映射ReleaseIntentionalityMapManager接受空元素集合（NullElementSet）为定义域，意向性映射管理器集合（IntentionalityMapManager）为值域 |

***

## 动态库元素管理器组：

| 指令 | 说明 |
| --- | --- |
| [DllElementManager_Struct](DllElementManager_Struct.md) | 命名空间DllElementManager_Struct定义了动态库元素管理器结构位置常量（constexpr unsigned int），其成员如下 |
| [DllElementManager](DllElementManager.md) | 集合DllElementManager为所有动态库元素管理器的集合 |
| [NewDllElementManager](NewDllElementManager.md) | 映射NewDllElementManager接受空元素集合（NullElementSet）为定义域和值域 |
| [SetDllElementManagerSuperIndex](SetDllElementManagerSuperIndex.md) | 映射SetDllElementManagerSuperIndex接受元素序偶集合（OrderedPairSet）为定义域，其结构为：<超索引集合, 动态库元素管理器集合>，其信息为：<超索引，管理器>；空元素集合（NullElementSet）为值域 |
| [ReadDllElementManagerSuperIndex](ReadDllElementManagerSuperIndex.md) | 映射ReadDllElementManagerSuperIndex接受动态库元素管理器集合（DllElementManager）为定义域，超索引集合（SuperIndexSet）为值域 |
| [SetDllElementManagerDll](SetDllElementManagerDll.md) | 映射SetDllElementManagerDll接受元素序偶集合（OrderedPairSet）为定义域，其结构为：<全集, 动态库元素管理器集合>，其信息为：<Windows动态库元素，管理器>；空元素集合（NullElementSet）为值域 |
| [GetDllElementManagerDll](GetDllElementManagerDll.md) | 映射GetDllElementManagerDll接受动态库元素管理器集合（DllElementManager）为定义域，空元素集合（NullElementSet）为值域 |
| [SelectDllElementManager](SelectDllElementManager.md) | 映射SelectDllElementManager接受超索引集合（SuperIndexSet）为定义域，动态库元素管理器集合（DllElementManager）为值域 |
| [ReadDllElementManagerElement](ReadDllElementManagerElement.md) | 映射ReadDllElementManagerElement接受动态库元素管理器集合（DllElementManager）为定义域，空元素集合（NullElementSet）为值域 |
| [ReleaseDllElementManager](ReleaseDllElementManager.md) | 映射ReleaseDllElementManager接受空元素集合（NullElementSet）为定义域，动态库元素管理器集合（DllElementManager）为值域 |

***

## 案例：

| 指令 | 说明 |
| --- | --- |
| [意向性映射管理器案例](Intentionality_MapManager_Case.md) | 本案例覆盖意向性映射管理器组与动态库元素管理器组的完整操作链：构造、超索引与动态库元素设置、按超索引检索、结构信息写入文件与释放。两个管理器组版式一致——新建映射在值域空元素上构造条目，设置映射以元素序偶集合为定义域写入指定位置，释放映射以空元素集合为定义域、管理器集合为值域，构造与释放成对、引用与清零成对。涉及的结构位置常量见[IntentionalityMapManager_Struct](IntentionalityMapManager_Struct.md)、[IntentionalityMapManager_TypeName](IntentionalityMapManager_TypeName.md)与[DllElementManager_Struct](DllElementManager_Struct.md)。 |

***

在使用意向性映射管理模块时，可以使用源文件"All_Intentionality.h"直接引入所有源文件，也可以单独引入"Intentionality_MapManager.h"使用。Windows环境下与DLL协同时，配合Intentionality_WinMapManager（文档未生成）模块使用。
