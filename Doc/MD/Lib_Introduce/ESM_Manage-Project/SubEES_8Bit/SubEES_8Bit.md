# SubEES_8Bit

***

8比特子元素环境检索器是子元素环境检索器的一种，其负责管理8比特检索信息到中间层超索引信息的映射关系。8比特子元素环境检索器是定长容器，每个槽位只接受一个固定8比特信息，不执行8比特的排序操作。

***

## 8比特子元素环境检索器相关指令：

***

### 8比特元素解析宏：

| 指令 | 说明 |
| --- | --- |
| [Get8BitElement](Get8BitElement.md) | 宏Get8BitElement |

***

### 8比特子元素环境检索器所用命名空间：

| 指令 | 说明 |
| --- | --- |
| [SubEES_8Bit](SubEES_8Bit_Namespace.md) | 命名空间SubEES_8Bit |
| [SubEES_8Bit_Code](SubEES_8Bit_Code.md) | 命名空间SubEES_8Bit_Code |

***

### 8比特元素结构与定义：

| 指令 | 说明 |
| --- | --- |
| [_8BitSet](_8BitSet.md) | 集合_8BitSet为所有8比特元素的集合 |
| [New8BitElement](New8BitElement.md) | 映射New8BitElement接受空元素集合（NullElementSet）为定义域和值域 |

***

### 8比特子元素环境检索器定义与构造：

| 指令 | 说明 |
| --- | --- |
| [_8BitSearcher](_8BitSearcher.md) | 集合_8BitSearcher为所有8比特子元素检索器的集合 |
| [New8BitSearcher](New8BitSearcher.md) | 映射New8BitSearcher接受空元素集合（NullElementSet）为定义域和值域 |

***

### 8比特子元素环境检索器基本指令一：

| 指令 | 说明 |
| --- | --- |
| [Select8BitSearcher](Select8BitSearcher.md) | 映射Select8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [Sort8BitSearcher](Sort8BitSearcher.md) | 映射Sort8BitSearcher接受空元素集合（NullElementSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域 |
| [Login8BitSearcher](Login8BitSearcher.md) | 映射Login8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域 |
| [Logout8BitSearcher](Logout8BitSearcher.md) | 映射Logout8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |

***

### 8比特子元素环境检索器数据操作指令：

| 指令 | 说明 |
| --- | --- |
| [Get8BitIn8BitSearcher](Get8BitIn8BitSearcher.md) | 映射Get8BitIn8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetSuperIndexIn8BitSearcher](GetSuperIndexIn8BitSearcher.md) | 映射GetSuperIndexIn8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [Put8BitTo8BitSearcher](Put8BitTo8BitSearcher.md) | 映射Put8BitTo8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域 |
| [PutSuperIndexTo8BitSearcher](PutSuperIndexTo8BitSearcher.md) | 映射PutSuperIndexTo8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域 |
| [Read8BitIn8BitSearcher](Read8BitIn8BitSearcher.md) | 映射Read8BitIn8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ReadSuperIndexIn8BitSearcher](ReadSuperIndexIn8BitSearcher.md) | 映射ReadSuperIndexIn8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SetOccupy8BitSearcher](SetOccupe8BitSearcher.md) | 映射SetOccupy8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，接受8比特子元素环境检索器集合（_8BitSearcher）为值域 |
| [GetOccupy8BitSearcher](GetOccupy8BitSearcher.md) | 映射GetOccupy8BitSearcher接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

### 8比特子元素环境检索器地址操作指令：

| 指令 | 说明 |
| --- | --- |
| [First8BitSearcherAddress](First8BitSearcherAddress.md) | 映射First8BitSearcherAddress接受8比特子元素环境检索器集合（_8BitSearcher）为定义域，无符号整型集合（UIntSet）为值域 |
| [FirstEmpty8BitSearcherAddress](FirstEmpty8BitSearcherAddress.md) | 映射FirstEmpty8BitSearcherAddress接受8比特子元素环境检索器集合（_8BitSearcher）为定义域，无符号整型集合（UIntSet）为值域 |
| [Next8BitSearcherAddress](Next8BitSearcherAddress.md) | 映射Next8BitSearcherAddress接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（NullElementSet）为值域 |

***

### 8比特子元素环境检索器基本指令二：

| 指令 | 说明 |
| --- | --- |
| [Retain8BitSearcher](Retain8BitSearcher.md) | 映射Retain8BitSearcher接受无符号整型集合（UIntSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域 |
| [Relasse8BitSearcher](Release8BitSearcher.md) | 映射Release8BitSearcher接受空元素集合（NullElementSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域 |

***

### 8比特子元素环境检索器越界检测指令：

| 指令 | 说明 |
| --- | --- |
| [_8BitSearcherOutTest](_8BitSearcherOutTest.md) | 映射_8BitSearcherOutTest接受元素序偶集合（OrderedPairSet）为定义域，布尔类型元素集合（BoolSet）为值域 |

***

### 8比特子元素环境检索器指令集注册指令：

| 指令 | 说明 |
| --- | --- |
| [LoginMap8BitSearcher](LoginMap8BitSearcher.md) | 映射LoginMap8BitSearcher接受空元素集合（NullElementSet）为定义域和值域 |
