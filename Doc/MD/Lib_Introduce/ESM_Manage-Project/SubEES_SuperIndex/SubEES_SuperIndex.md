# SubEES_SuperIndex

***

超索引子元素环境检索器是子元素环境检索器的一种，其负责管理超索引信息到中间层超索引信息的映射关系。超索引子元素环境检索器不允许重复的映射关系，其按照超索引大小顺序排序，属于变长容器。

***

## 超索引子元素环境检索器结构与定义：

| 指令 | 说明 |
| --- | --- |
| [SuperIndexSubEES_Struct](SuperIndexSubEES_Struct.md) | 命名空间SuperIndexSubEES_Struct |
| [SuperIndexSubEES](SuperIndexSubEES.md) | 集合SuperIndexSubEES为所有超索引子元素环境检索器的集合 |

***

## 超索引子元素环境检索器基础指令一：

| 指令 | 说明 |
| --- | --- |
| [SelectSuperIndexSubEES](SelectSuperIndexSubEES.md) | 映射SelectSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [SortSuperIndexSubEES](SortSuperIndexSubEES.md) | 映射SortSuperIndexSubEES接受空元素集合（NullElementSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域 |
| [NewSuperIndexSubEESDefaultParameter](NewSuperIndexSubEESDefaultParameter.md) | 映射NewSuperIndexSubEESDefaultParameter接受空元素集合（NullElementSet）为定义域和值域 |
| [NewSuperIndexSubEES](NewSuperIndexSubEES.md) | 映射NewSuperIndexSubEES接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域 |

***

## 超索引子元素环境检索器数据操作指令：

| 指令 | 说明 |
| --- | --- |
| [GetInformationSuperIndexSubEES](GetInformationSuperIndexSubEES.md) | 映射GetInformationSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetSuperIndexSuperIndexSubEES](GetSuperIndexSuperIndexSubEES.md) | 映射GetSuperIndexSuperIndexEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutInformationSuperIndexSubEES](PutInformationSuperIndexSubEES.md) | 映射PutInformationSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，超索引子元素环境检索器（SuperIndexSubEES）为值域 |
| [PutSuperIndexSuperIndexSubEES](PutSuperIndexSuperIndexSubEES.md) | 映射PutSuperIndexSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域 |
| [ReadInformationSuperIndexSubEES](ReadInformationSuperIndexSubEES.md) | 映射ReadInformationSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ReadSuperIndexSuperIndexSubEES](ReadSuperIndexSuperIndexSubEES.md) | 映射ReadSuperIndexSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetOccupySuperIndexSubEES](GetOccupySuperIndexSubEES.md) | 映射GetOccupySuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [SetOccuptSuperIndexSubEES](SetOccupySuperIndexSubEES.md) | 映射SetOccupSuperIndexEES接受元素序偶集合（OrderedPairSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域 |

***

## 超索引子元素环境检索器基础指令二：

| 指令 | 说明 |
| --- | --- |
| [LoginSuperIndexSubEES](LoginSuperIndexSubEES.md) | 映射LoginSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域 |
| [LogoutSuperIndexSubEES](LogoutSuperIndexSubEES.md) | 映射LogoutSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [DefragmentSuperIndexSubEES](DefragmentSuperIndexSubEES.md) | 映射DefragmentSuperIndexSubEES接受空元素集合（NullElementSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域 |
| [RetainSuperIndexSubEES](RetainSuperIndexSubEES.md) | 映射RetainSuperIndexSubEES接受空元素集合（NullElementSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域 |

***

## 超索引子元素环境检索器地址操作指令：

| 指令 | 说明 |
| --- | --- |
| [FirstEmptySuperIndexSubEES](FirstEmptySuperIndexSubEES.md) | 映射FirstEmptySuperIndexSubEES接受超索引子元素环境检索器集合（SuperIndexSubEES）为定义域，无符号整型集合（UIntSet）为值域 |
| [NextAddressSuperIndexSubEES](NextAddressSuperIndexSubEES.md) | 映射NextAddressSuperIndexSubEES接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |

  
***

## 超索引子元素环境检索器基础指令三：

| 指令 | 说明 |
| --- | --- |
| [ReleaseSuperIndexSubEES](ReleaseSuperIndexSubEES.md) | 映射ReleaseSuperIndexSubEES接受空元素集合（NullElementSet）为定义域，超索引子元素环境检索器集合（SuperIndexSubEES）为值域 |

***

## 超索引子元素环境检索器越界测试指令：

| 指令 | 说明 |
| --- | --- |
| [SuperIndexSubEESOutTest](SuperIndexSubEESOutTest.md) | 映射SuperIndexSubEESOutTest接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 超索引子元素环境检索器指令集注册指令：

| 指令 | 说明 |
| --- | --- |
| [LoginSuperIndexSubEESMapSet](LoginSuperIndexSubEESMapSet.md) | 映射LoginSuperIndexSubEESMapSet接受空元素集合（NullElementSet）为定义域和值域 |
