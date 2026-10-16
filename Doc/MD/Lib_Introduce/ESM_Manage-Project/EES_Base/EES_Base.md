# EES_Base

***

该源文件作为整个元素环境管理的主文件，负责定义总元素环境检索器的结构和方法。同时，也会针对元素环境、子元素环境检索器实例等提供接口标准。接口标准有专用的文档，本文档不再赘述。

***

## 总元素环境检索器结构与定义：

| 指令 | 说明 |
| --- | --- |
| [EES_Base_Struct](EES_Base_Struct.md) | 命名空间EES_Base_Struct |
| [ElementEnvironmentSearcher](ElementEnvironmentSearcher.md) | 集合ElementEnvironmentSearcher为所有总元素环境检索器的集合 |
| [NewElementEnvironmentSearcher](NewElementEnvironmentSearcher.md) | 映射NewElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域和值域 |

***

## 超索引检索器基础结构与指令：

| 指令 | 说明 |
| --- | --- |
| [SuperIndexSearcher](SuperIndexSearcher.md) | 集合SuperIndexSearcher为所有超索引检索器元素的集合 |
| [NewEES_SISParameter](NewEES_SISParameter.md) | 映射NewEES_SISParameter接受空元素集合（NullElementSet）为定义域和值域 |
| [NewEES_SISOrder](NewEES_SISOrder.md) | 映射NewEES_SISOrder接受空元素集合（NullElementSet）为定义域和值域 |
| [NewEES_SISMap](NewEES_SISMap.md) | 映射NewEES_SISMap接受空元素集合（NullElementSet）为定义域和值域 |

***

## 元素环境操作指令：

| 指令 | 说明 |
| --- | --- |
| [PutEESEnvironment](PutEESEnvironment.md) | 映射PutEESEnvironment接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [GetEESEnvironment](GetEESEnvironment.md) | 映射GetEESEnvironment接受总元素环境检索器集合（ElementEnvironmentSearcher）为定义域，空元素集合（NullElementSet）为值域 |

***

## 子元素环境检索器管理操作指令：

| 指令 | 说明 |
| --- | --- |
| [LoginSubEESEES](LoginSubEESEES.md) | 映射LoginSubEESEES接受元素序列（ElementOrderSet）为定义域，总元素环境检索器（ElementEnvironmentSearcher）为值域 |
| [LogoutSubEESEES](LogoutSubEESEES.md) | 映射LogoutSubEESEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |

***

## 总元素环境检索器操作元素映射：

| 指令 | 说明 |
| --- | --- |
| [LoginElementEnvironmentSearcher](LoginElementEnvironmentSearcher.md) | 映射LoginElementEnvironmentSearcher接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [LogoutElementEnvironmentSearcher](LogoutElementEnvironmentSearcher.md) | 映射LogoutElementEnvironmentSearcher接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [ReadElementEnvironmentSearcher](ReadElementEnvironmentSearcher.md) | 映射ReadElementEnvironmentSearcher接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetElementEnvironmentSearcher](GetElementEnvironmentSearcher.md) | 映射GetElementEnvironmentSearcher接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutElementEnvironmentSearcher](PutElementEnvironmentSearcher.md) | 映射PutElementEnvironmentSearcher接受元素序列集合（ElementOrderSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [OccupyElementEnvironmentSearcher](OccupyElementEnvironmentSearcher.md) | 映射OccupyElementEnvironmentSearcher接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [RelieveOccupyElementEnvironmentSearcher](RelieveOccupyElementEnvironmentSearcher.md) | 映射RelieveOccupyElementEnvironmentSearcher接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |

***

## 总元素环境检索器基础指令：

| 指令 | 说明 |
| --- | --- |
| [SortElementEnvironmentSearcher](SortElementEnvironmentSearcher.md) | 映射SortElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher） |
| [DefragmentElementEnvironmentSearcher](DefragmentElementEnvironmnent.md) | 映射DefragmentElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，接受总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [RetainElementEnvironmentSearcher](RetainElementEnvironmentSearcher.md) | 映射RetainElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [ReleaseElementEnvironmentSearcher](ReleaseElementEnvironmentSearcher.md) | 映射ReleaseElementEnvironmentSearcher接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironemntSearcher）为值域 |

***

## 超索引检索器相关指令：

| 指令 | 说明 |
| --- | --- |
| [SelectEES_SIS](SelectEES_SIS.md) | 映射SelectEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（NullElementSet）为值域 |
| [NextEES_SIS](NextEES_SIS.md) | 映射NextEES_SIS接受总元素环境检索器集合（ElementEnvironmentSearcher）为定义域，空元素集合（NullElementSet）为值域 |
| [LoginEES_SIS](LoginEES_SIS.md) | 映射LoginEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [LogoutEES_SIS](LogoutEES_SIS.md) | 映射LogoutEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（NullElementSet）为值域 |
| [SortEES_SIS](SortEES_SIS.md) | 映射SortEES_SIS接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [DefragmentEES_SIS](DefragmentEES_SIS.md) | 映射DefragmentEES_SIS接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [GetSuperIndexEES_SIS](GetSuperIndexEES_SIS.md) | 映射GetSuperIndexEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetUIntEES_SIS](GetUIntEES_SIS.md) | 映射GetUIntEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ReadUIntEES_SIS](ReadUIntEES_SIS.md) | 映射ReadUIntEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutSuperIndexEES_SIS](PutSuperIndexEES_SIS.md) | 映射PutSuperIndexEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [PutUIntEES_SIS](PutUIntEES_SIS.md) | 映射PutUIntEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [EES_SISGetLeastSuperIndex](EES_SISGetLeastSuperIndex.md) | 映射EES_SISGetLeastSuperIndex接受总元素环境检索器集合（ElementEnvironmentSearcher）为定义域，空元素集合（NullElementSet）为值域 |
| [EES_SISRetain](EES_SISRetain.md) | 映射EES_SISRetain接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |
| [EES_SISAddressNext](EES_SISAddressNext.md) | 映射EES_SISAddressNext接受元素序偶集合（OrderedPairSet）为定义域集合，无符号整型元素集合（NullElementSet）为值域 |
| [ReleaseEES_SIS](ReleaseEES_SIS.md) | 映射ReleaseEES_SIS接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域 |

***

## 补充文档：

| 指令 | 说明 |
| --- | --- |
| [EES_Base_Case](EES_Base_Case.md) | - |
| [EES_SISFEAddress](EES_SISFEAddress.md) | 映射EES_SISFEAddress |
| [ElementOccupy_Code](ElementOccupy_Code.md) | 命名空间ElementOccupy_Code |
