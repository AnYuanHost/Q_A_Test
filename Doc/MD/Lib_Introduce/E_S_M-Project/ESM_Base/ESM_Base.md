# ESM_Base

***

该源文件提供服务于底层结构体(E_S_M)的一系列操作方式，基本保证非直接操作数据的方法都涵盖在该工具包中。

***

## 无符号整型阈值宏：

| 指令 | 说明 |
| --- | --- |
| [UINT_Max](UINT_MAX.md) | 宏UINT_MAX |

***

## 解析用宏：

| 指令 | 说明 |
| --- | --- |
| [GetEleOrder](GetEleOrder.md) | 宏GetElement |

***

## 空元素静态元素：

| 指令 | 说明 |
| --- | --- |
| [EmptyElement](EmptyElement.md) | 元素EmptyElement为空元素，其成员Size和KeySpace值默认为0，即 |

***

## Set-Map封装：

| 指令 | 说明 |
| --- | --- |
| [GetSetElement](GetSetElement.md) | 宏GetSetElement |
| [SetSet](SetSet.md) | 集合SetSet为所有集合类型元素的集合，其一般判断标准判断元素大小是否等于sizeof(Set) |
| [GetMapElement](GetMapElement.md) | 宏GetMapElement |
| [MapSet](MapSet.md) | 集合MapSet为所有映射类型元素的集合，其一般判断标准判断元素大小是否等于sizeof(Map) |

***

## 集合论基本集合：

| 指令 | 说明 |
| --- | --- |
| [UniversalSet](UniversalSet.md) | 集合UniversalSet为所有元素的集合 |
| [NullSet](NullSet.md) | 集合NullSet为空集 |
| [NullElementSet](NullElementSet.md) | 集合NullElementSet仅被元素EmptyElement属于 |

***

## 元素序偶定义与指令：

| 指令 | 说明 |
| --- | --- |
| [OrderedPairSet](OrderedPairSet.md) | 集合OrderedPairSet被所有序偶元素属于 |
| [NewOrderedPair](NewOrderedPair.md) | 映射NewOrderedPairSet接收空元素集合作为定义域值域 |
| [PutPairFirstElement](PutPairFirstElement.md) | 映射PutPairFirstElement接受定义域为全集，值域为序偶集合 |
| [PutPairSecoundElement](PutPairSecoundElement.md) | 映射PutPairSecoundElement接受定义域为全集，值域为序偶集合 |
| [GetPairFirstElement](GetPairFirstElement.md) | 映射GetPairFirstElement接受定义域为序偶集合，值域为空元素集合 |
| [GetPairSecoundElement](GetPairSecoundElement.md) | 映射GetPairSecoundElement接受定义域为序偶集合，值域为空元素集合 |

***

## 无符号整型封装与指令：

| 指令 | 说明 |
| --- | --- |
| [GetUIntElement](GetUIntElement.md) | 宏GetUIntElement |
| [UIntSet](UIntSet.md) | 集合UIntSet为所有无符号整型元素集合，其一般判定元素大小是否等于sizeof(unsigned int) |
| [NewUIntElement](NewUIntElement.md) | 映射NewUIntElement接受空元素集合（NullElementSet）为定义域和值域 |
| [UIntSuccess](UIntSuccess.md) | 映射UIntSuccessor接受无符号整型集合作为定义域和值域 |

***

## 元素操作指令补充：

| 指令 | 说明 |
| --- | --- |
| [ResizeElement](ResizeElement.md) | 映射ResizeElement接受无符号整型（UIntSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ReleaseElement](ReleaseElement.md) | 映射ReleaseElement接受空元素集合（NullElementSet）为定义域，全集（UniversalSet）为值域 |
| [ZeroElement](ZeroElement.md) | 映射ZeroElement接受空元素集合（NullElementSet）为定义域，全集（UniversalSet）为值域 |
| [CopyElement](CopyElement.md) | 映射CopyElement接受全集（UniversalSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SwapElement](SwapElement.md) | 映射SwapElement接受全集（UniversalSet）为定义域和值域 |
| [QuoteElement](QuoteElement.md) | 映射QuoteElement接受全集（UniversalSet）为定义域，空元素集合（NullElementSet）为值域 |
| [CareElement](CareElement.md) | 映射CareElement接受全集（UniversalSet）为定义域，空元素集合（NullElementSet）为值域 |

***

## 可执行映射定义与指令：

| 指令 | 说明 |
| --- | --- |
| [ActiveMapSet](ActiveMapSet.md) | 集合ActiveMapSet是可执行映射元素的集合 |
| [ActiveMapExecute](ActiveMapExecute.md) | 映射ActiveMapExecute接受空元素集合（）为定义域，可执行映射集合（）为值域 |
| [NewActiveMap](NewActiveMap.md) | 映射NewActiveMap接受空元素集合（NullElementSet）为定义域和值域 |

***

## 字符型封装与指令：

| 指令 | 说明 |
| --- | --- |
| [GetCharElement](GetCharElement.md) | 宏GetCharElement |
| [CharSet](CharSet.md) | 集合CharSet为所有字符类型元素的集合 |
| [NewCharElement](NewCharElement.md) | 映射NewCharElement接受定空元素集合（）为定义域和值域 |
| [CharZero](CharZero.md) | 映射CharZero接受空元素集合（NullElementSet）为定义域，字符集合（CharSet）为值域 |
| [CharNext](CharNext.md) | 映射CharNext接受字符元素集合（CharSet）为定义域和值域 |

***

## 元素序列定义与指令：

| 指令 | 说明 |
| --- | --- |
| [GetEleOrderSize](GetEleOrderSize.md) | 宏GetEleOrderSize |
| [ElementOrderSet](ElementOrderSet.md) | 集合ElementOrderSet为元素序列元素的集合 |
| [ElementOrderation](ElementOrderation.md) | 映射ElementOrderation接受空元素集合（NullElementSet）为定义域，全集（UniversalSet）为值域 |
| [ElementOrderMerge](ElementOrderMerge.md) | 映射ElementOrderMerge接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |

***

## 元素序列拓展指令：

| 指令 | 说明 |
| --- | --- |
| [UIntNewElementOrder](UIntNewElementOrder.md) | 映射UIntNewElementOrder接受无符号整型集合（）作为定义域，空元素集合（）作为值域 |
| [UIntGetElementOrder](UIntGetElementOrder.md) | 映射UIntGetElementOrder接受元素序偶（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域元素 |
| [UIntGetQuoteElementOrder](UIntGetQuoteElementOrder.md) | 映射UIntGetQuoteElementOrder接受元素序偶（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域元素 |
| [UIntPutElementOrder](UIntPutElementOrder.md) | 映射UIntPutElementOrder接受元素序偶（OrderedPairSet）为定义域，元素序列素集合（ElementOrderSet）为值域元素 |

***

## 布尔类型封装与指令：

| 指令 | 说明 |
| --- | --- |
| [GetBoolElement](GetBoolElement.md) | 宏GetBoolElement |
| [BoolSet](BoolSet.md) | 集合BoolSet为所有布尔类型元素的集合 |
| [NewBoolElement](NewBoolElement.md) | 映射NewBoolElement接受空元素集合（NullElementSet）为定义域和值域 |

***

## 元素指令补充：

| 指令 | 说明 |
| --- | --- |
| [ElementEqual](ElementEqual.md) | 映射ElementEqual接受元素序偶集合（OrderedPairSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 空映射静态元素：

| 指令 | 说明 |
| --- | --- |
| [EmptyMap](EmptyMap.md) | 映射EmptyMap接受空元素集合（NullElementSet）为定义域和值域 |

***

# E_S_M_Base案例

| 指令 | 说明 |
| --- | --- |
| [元素拓展操作](Element_Advance_Case.md) | 元素除了基本的构造、析构以及赋值操作外，还可以通过ESM_Base文件提供的一些映射方法来完成进阶的操作。这些操作包括：重置空间，释放，归零，交换，以及引用和转交传递映射。在本演示案例中，将会使用这些映射方法，来介绍如何在系统内核中实现元素操作。 |
| [操作元素序偶、序列](ElementOrder_Case.md) | 元素序偶和序列是同时操作多个元素的基础，在使用复杂的映射时，必须对元素进行组合封装，本文将会演示如何在代码中操作并使用元素序偶与元素序列。 |
| [可执行映射的使用](Active_Map_Use_Case.md) | 在内核中，任何一个待执行的映射都会被封装成一个可执行映射元素，并交由执行映射完成执行。而相对的，在代码编写中，任何一个通用的映射接口，都可以使用这一套方法来完成对具体映射方法的解释和执行。在本案例中，将通过构建方法来完成操作。 |

***

## 补充文档：

| 指令 | 说明 |
| --- | --- |
| [CopyOrderedPair](CopyOrderedPair.md) | 映射CopyOrderedPair定义域为元素序偶集合（OrderedPairSet），值域为空元素集合（NullElementSet） |
