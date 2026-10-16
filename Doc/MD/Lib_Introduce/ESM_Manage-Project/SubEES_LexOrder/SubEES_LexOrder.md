# SubEES_LexOrder

***

字典序子元素环境检索器是子元素环境检索器的一种，其负责管理流检索信息到中间层超索引信息的映射关系。字典序子元素环境检索器不允许重复的映射关系，按照字典序进行排序，属于变长容器。

***

## 字典序子元素环境检索器相关指令：

***

### 字典序子元素环境检索器结构与定义：

| 指令 | 说明 |
| --- | --- |
| [SubEES_LexOrder](SubEES_LexOrder_Namespace.md) | 命名空间SubEES_LexOrder |
| [LesOrderEES](LexOrderEES.md) | 集合LexOrderEES为所有字典序子元素检索器的集合 |

***

### 字典序子元素环境检索器基本指令一：

| 指令 | 说明 |
| --- | --- |
| [LexOrderEESSelect](LexOrderEESSelect.md) | 映射LexOrderEESSelect接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [LexOrderEESSort](LexOrderEESSort.md) | 映射LexOrderEESSort接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域 |
| [NewLexOrderEESDefeultParameter](NewLexOrderEESDefaultParameter.md) | 映射NewLexOrderEESDefaultParameter接受空元素集合（NullElementSet）为定义域和值域 |
| [NewLexOrderEES](NewLexOrderEES.md) | 映射NewLexOrderEES接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域 |

***

### 字典序子元素环境检索器数据操作指令：

| 指令 | 说明 |
| --- | --- |
| [GetInformationLexOrderEES](GetInformationLexOrderEES.md) | 映射GetInformationLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetSuperIndexLexOrderEES](GetSuperIndexLexOrderEES.md) | 映射GetSuperIndexLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutInformationLexOrderEES](PutInformationLexOrderEES.md) | 映射PutInformationLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域 |
| [PutSuperIndexLexOrderEES](PutSuperIndexLexOrderEES.md) | 映射PutSuperIndexLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域 |
| [ReadInformationLexOrderEES](ReadInformationLexOrderEES.md) | 映射ReadInformationLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ReadSuperIndexLexOrderEES](ReadSuperIndexLexOrderEES.md) | 映射ReadSuperIndexLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetOccupyLexOrderEES](GetOccupyLexOrderEES.md) | 映射GetOccupyLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [SetOccupyLexOrderEES](SetOccupyLexOrderEES.md) | 映射SetOccupyLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域 |

***

### 字典序子元素环境检索器基本指令二：

| 指令 | 说明 |
| --- | --- |
| [LoginLexOrderEES](LoginLexOrderEES.md) | 映射LoginLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，字典序子元素检索器集合（LexOrderEES）为值域 |
| [LogoutLexOrderEES](LogoutLexOrderEES.md) | 映射LogoutLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [DefragmentLexOrderEES](DefragmentLexOrderEES.md) | 映射DefragmentLexOrderEES接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域 |
| [RetainLexOrderEES](RetainLexOrderEES.md) | 映射RetainLexOrderEES接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域 |

***

### 字典序子元素环境检索器地址操作指令：

| 指令 | 说明 |
| --- | --- |
| [FirstEmptyLexOrderEES](FirstEmptyLexOrderEES.md) | 映射FirstEmptyLexOrderEES接受字典序子元素环境检索器集合（LexOrderEES）为定义域，无符号整型集合（UIntSet）为值域 |
| [NextAddressLexOrderEES](NextAddressLexOrderEES.md) | 映射NextAddressLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |

***

### 字典序子元素环境检索器基本指令三：

| 指令 | 说明 |
| --- | --- |
| [ReleaseLexOrderEES](ReleaseLexOrderEES.md) | 映射ReleaseLexOrderEES接受空元素集合（NullElementSet）为定义域，字典序子元素环境检索器集合（LexOrderEES）为值域 |

***

### 字典序子元素环境检索器越界测试指令：

| 指令 | 说明 |
| --- | --- |
| [LexOrderEESOutTest](LexOrderEESOutTest.md) | 映射LexOrderEESOutTest接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

### 字典序子元素环境检索器指令集注册指令：

| 指令 | 说明 |
| --- | --- |
| [LoginLexOrderEESMapSet](LoginLexOrderEESMapSet.md) | 映射LoginLexOrderEESMapSet接受空元素集合（NullElementSet）为定义域和值域 |
