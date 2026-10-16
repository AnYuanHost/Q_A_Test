# File_Base

***

该源文件提供文件相关的基础操作，主要建立在对std::fstream基础操作的封装之上。

***

## Fstream封装

| 指令 | 说明 |
| --- | --- |
| [GetFstreamElement](GetFstreamElement.md) | 宏GetFstreamElement |
| [FstreamSet](FstreamSet.md) | 集合FstreamSet为所有文件类型元素的集合 |

***

## 文件元素基础操作1

| 指令 | 说明 |
| --- | --- |
| [NewFstream](NewFstream.md) | 映射NewFstream接受空元素集合（NullElementSet）为定义域和值域 |
| [OpenFstream](OpenFstream.md) | 映射OpenFstream接受流集合（StreamSet）为定义域，文件类型集合（FstreamSet）为值域 |
| [OpenFstreamByPara](OpenFstreamByPara.md) | 映射OpenFstreamByPara接受元素序偶集合（OrderedPairSet）为定义域，文件元素集合（FstreamSet）为值域 |
| [CloseFstream](CloseFstream.md) | 映射CloseFstream接受空元素集合（NullElementSet）为定义域，文件元素集合（FstreamSet）为值域 |

***

## 文件元素指针操作

| 指令 | 说明 |
| --- | --- |
| [SetFstreamSeekP](SetFstreamSeekP.md) | 映射SetFstreamSeekP接受无符号整型集合（UIntSet）为定义域，文件类型集合（FstreamSet）为值域 |
| [GetFstreamTellP](GetFstreamTellP.md) | 映射GetFstreamTellP接受为文件类型集合（FstreamSet）定义域，无符号整型集合（UIntSet）为值域 |
| [SetFstreamSeekG](SetFstreamSeekG.md) | 映射SetFstreamSeekG接受无符号整型集合（UIntSet）为定义域，文件类型集合（FstreamSet）为值域 |
| [GetFstreamSeekG](GetFstreamTellG.md) | 映射GetFstreamTellG接受为文件类型集合（FstreamSet）定义域，无符号整型集合（UIntSet）为值域 |

***

## 元素在文件中的操作

| 指令 | 说明 |
| --- | --- |
| [GetElementFromFstream](GetElementFromFstream.md) | 映射GetElementFromFstream接受文件集合（FstreamSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutElementToFstream](PutElementToFstream.md) | 映射PutElementToFstream接受全集（UniversalSet）为定义域，文件集合（FstreamSet）为值域 |

***

## 文件元素基础操作2

| 指令 | 说明 |
| --- | --- |
| [ClearFstream](ClearFstream.md) | 映射ClearFstream接受空元素集合（NullElementSet）为定义域，流元素集合（StreamSet）为值域 |
| [ReleaseFstream](ReleaseFstream.md) | 映射ReleaseFstream接受空元素集合（NullElementSet）为定义域，文件集合（FstreamSet）为值域 |

***

## 补充文档：

| 指令 | 说明 |
| --- | --- |
| [GetStreamFromFstream](GetStreamFromFstream.md) | - |
