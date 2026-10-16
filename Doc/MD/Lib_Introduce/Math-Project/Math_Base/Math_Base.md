# Math_Base

***

该源文件提供服务于内核的基本数学方法工具包，主要包括无符号整型指令以及超索引指令。

***

## 无符号整型计算指令：

| 指令 | 说明 |
| --- | --- |
| [UIntAdd](UIntAdd.md) | 映射UIntAdd接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（UIntSet）为值域 |
| [UIntSub](UIntSub.md) | 映射UIntSub接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（UIntSet）为值域 |
| [UIntMul](UIntMul.md) | 映射UIntMul接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（UIntSet）为值域 |
| [UIntDiv](UIntDiv.md) | 映射UIntDiv接受元素序偶集合（OrderedPairSet）为定义域，无符号整型元素集合（UIntSet）为值域 |
| [UIntZero](UIntZero.md) | 映射UIntZero接受空元素集合（NullElementSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [UIntLess](UIntLess.md) | 映射UIntLess接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [UIntLE](UIntLE.md) | 映射UIntLE接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [UIntGreater](UIntGreater.md) | 映射UIntGreater接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [UIntGE](UIntGE.md) | 映射UIntGE接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 超索引定义与指令：

| 指令 | 说明 |
| --- | --- |
| [SuperIndexSet](SuperIndexSet.md) | 集合SuperIndexSet为超索引元素的集合 |
| [SuperIndexLess](SuperIndexLess.md) | 映射SuperIndexLess接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [SuperIndexLE](SuperIndexLE.md) | 映射SuperIndexLE接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [SuperIndexGreater](SuperIndexGreater.md) | 映射SuperIndexGreater接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [SuperIndexGE](SuperIndexGE.md) | 映射SuperIndexGE接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 超索引-无符号整型转化指令：

| 指令 | 说明 |
| --- | --- |
| [SuperIndexToUInt](SuperIndexToUInt.md) | 映射SuperIndexToUInt接受超索引集合（）为定义域，无符号整型集合（）为值域 |
| [UIntToSuperIndex](UIntToSuperIndex.md) | 映射UIntToSuperIndex接受无符号整型集合（）为定义域，空元素集合（）为值域 |

***

## 超索引拓展指令：

| 指令 | 说明 |
| --- | --- |
| [SuperIndexSuccess](SuperIndexSuccess.md) | 映射SuperIndexSuccess接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SuperIndexPrecursor](SuperIndexPrecursor.md) | 映射SuperIndexPrecursor接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域 |
