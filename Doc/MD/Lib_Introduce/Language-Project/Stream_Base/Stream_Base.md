# Stream_Base

***

该源文件提供流元素的基本定义和相关操作。

***

## Stream元素定义

| 指令 | 说明 |
| --- | --- |
| [StreamSet](StreamSet.md) | 集合StreamSet为所有流元素的集合 |

***

## String类型封装

| 指令 | 说明 |
| --- | --- |
| [GetStringElement](GetStringElement.md) | 宏GetStringElement |
| [StringSet](StringSet.md) | 集合StringSet为字符串类型元素的集合 |
| [NewString](NewString.md) | 映射NewString接受空元素集合（NullElementSet）为定义域和值域 |
| [ReleaseString](ReleaseString.md) | 映射ReleaseString接受空元素集合（NullElementSet）为定义域，字符串类型集合（StringSet）为值域 |

***

## 转化操作

| 指令 | 说明 |
| --- | --- |
| [StreamToString](StreamToString.md) | 映射StreamToString接受流集合（StreamSet）为定义域，字符串类型元素集合（StringSet）为值域 |
| [StringToStream](StringToStream.md) | 映射StringToStream接受字符串类型集合（StringSet）为定义域，空元素集合（NullElementSet）为值域 |

***

## 流元素字典序比较

| 指令 | 说明 |
| --- | --- |
| [StreamLexicographicalOrderBefore](StreamLexicograpgicalOrderBefore.md) | 映射StreamLexicograpicalOrderBefore接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 流元素的元素操作

| 指令 | 说明 |
| --- | --- |
| [StreanReadElement](StreamReadElement.md) | 映射StreamReadElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [StreamGetElement](StreamGetElement.md) | 映射StreamGetElement接受元素序偶集合（&OrderedPairSet）为定义域，空元素集合（&NullElementSet）为值域 |
| [StreamPutElement](StreamPutElement.md) | 映射StreamPutElement接受元素序偶集合（&OrderedPairSet）为定义域，流集合（&StreamSet）为值域 |
