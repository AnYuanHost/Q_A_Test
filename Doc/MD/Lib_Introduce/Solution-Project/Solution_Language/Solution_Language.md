# Solution_Language

***

***

## 解决方案语言文件基础指令一:

| 指令 | 说明 |
| --- | --- |
| [FstreamSolutionLanguageTest](FstreamSolutionLanguageTest.md) | 映射FstreamSolutionLanguageTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [FstreamSolutionLanguageJumpSpace](FstreamSolutionLanguageJumpSpace.md) | 映射FstreamSolutionLanguageJumpSpace接受空元素集合（NullElementSet）为定义域，文件集合（FstreamSet）为值域 |
| [FstreamSolutionLanguageEOFTest](FstreamSolutionLanguageEOFTest.md) | 映射FstreamSolutionLanguageEOFTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [FstreamSolutionLanguageMapTest](FstreamSolutionLanguageMapTest.md) | 映射FstreamSolutionLanguageMapTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [FstreamSolutionLanguageMapEndTest](FstreamSolutionLanguageMapEndTest.md) | 映射FstreamSolutionLanguageMapEndTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 解决方案语言文件基础指令二（并行检测）：

| 指令 | 说明 |
| --- | --- |
| [Serial_Paralllel_State](Serial_Parallel_State.md) | 命名空间Serial_Parallel_State |
| [FstreamSolutionLanguageSerialParallelTest](FstreamSolutionLanguageSerialParallelTest.md) | 映射FstreamSolutionLanguageSerialParallelTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [FstreamSolutionLanguageRecursionInformationTest](FstreamSolutionLanguageRecursionInformationTest.md) | 映射FstreamSolutionLanguageRecursionInformationTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 解决方案语言文件基础指令三（节点状态）：

| 指令 | 说明 |
| --- | --- |
| [Node_State_Stream](Node_State_Stream.md) | 命名空间Node_State_Stream |
| [FstreamSolutionLanguageNodeStateTest](FstreamSolutionLangaugeNodeStateTest.md) | 映射FstreamSolutionLanguageNodeStateTest接受文件集合（FstreamSet）为定义域，布尔类型结合（BoolSet）为值域，定义为; |

***

## 解决方案语言文件基础指令四：

| 指令 | 说明 |
| --- | --- |
| [FstreamSolutionLanguageSerialTest](FstreamSolutionLanguageSerialTest.md) | 映射FstreamSolutionLanguageSerialTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [FstreamSolutionLanguageParallelTest](FstreamSolutionLanguageParallelTest.md) | 映射FstreamSolutionLanguageParallelTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [FstreamSolutionLanguageParallelEndTest](FstreamSolutionLanguageParallelEndTest.md) | 映射FstreamSolutionLanguageParallelEndTest接受文件集合（FstreamSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

## 解决方案节点序列结构与定义：

| 指令 | 说明 |
| --- | --- |
| [SolutionLanguageNodeOrder_Struct](SolutionLanguageNodeOrder_Struct.md) | 命名空间SolutionLanguageNodeOrder_Struct |
| [SolutionLanguageNodeOrder](SolutionLangaugeNodeOrder.md) | 集合SolutionLanguageNodeOrder为所有解决方案语言节点序列的集合 |

***

## 解决方案节点序列基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewSolutionLanguageNodeOrder](NewSolutionLanguageNodeOrder.md) | 映射NewSolutionLanguageNodeOrder接受空元素集合（NullElementSet）为定义域和值域 |
| [LoginSolutionLanguageNodeOrder](LoginSolutionLanguageNodeOrder.md) | 映射LoginSolutionLanguageNodeOrder接受解决方案语言节点序列集合（SolutionLanguageNodeOrder）为定义域，无符号整型结合（UIntSet）为值域 |
| [ReadSolutionLanguageNodeOrder](ReadSolutionLanguageNodeOrder.md) | 映射ReadSolutionLanguageNodeOrder接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ReleaseSolutionLanguageNodeOrder](ReleaseSolutionLanguageNodeOrder.md) | 映射ReleaseSolutionLanguageNodeOrder接受空元素集合（NullElementSet）为定义域，解决方案节点序列集合（SolutionLanguageNodeOrder）为值域 |

  
***

## 解决方案语言参数字典结构与定义：

| 指令 | 说明 |
| --- | --- |
| [SolutionLanguageParameterDictionaries_Struct](SolutionLanguageParameterDictionaries_Struct.md) | 命名空间SolutionLanguageParameterDictionaries_Struct |
| [SolutionLanguageParameterDictionaries](SolutionLanguageParameterDictionaries.md) | 集合SolutionLanguageParameterDictionaries为解决方案语言参数字典的集合 |

***

## 解决方案语言参数字典基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewSolutionLanguageParameterDictionaries](NewSolutionLanguageParameterDictionaries.md) | 映射NewSolutionLanguageParameterDictionaries接受空元素集合（NullElementSet）为定义域和值域 |
| [LoginSolutionLanguageParameterDictionaries](LoginSolutionLanguageParameterDictionaries.md) | 映射LoginSolutionLanguageParameterDictionaries接受流元素集合（StreamSet）为定义域，解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为值域 |
| [SelectSolutionLanguageParameterDictionaries](SelectSolutionLanguageParameterDictionaries.md) | 映射SelectSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [ReadBaseInformationSolutionLanguageParameterDictionaries](ReadBaseInformationSolutionLanguageParameterDictionaries.md) | 映射ReadBaseInformationSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetBaseInformationSolutionLanguageParameterDictionaries](GetBaseInformationSolutionLanguageParameterDictionaries.md) | 映射GetBaseInformationSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutBaseInformationSolutionLanguageParameterDictionaries](PutBaseInformationSolutionLanguageParameterDictionaries.md) | 映射PutBaseInformationSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为值域 |
| [GetStateSolutionLanguageParameterDictionaries](GetStateSolutionLanguageParameterDictionaries.md) | 映射GetStateSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [PutStateSolutionLanguageParameterDictionaries](PutStateSolutionLanguageParameterDictionaries.md) | 映射PutStateSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为值域 |
| [ReadContextSolutionLanguageParameterDictionaries](ReadContextSolutionLanguageParameterDictionaries.md) | 映射ReadContextSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetContextSolutionLanguageParameterDictionaries](GetContextSolutionLanguageParameterDictionaries.md) | 映射GetContextSolutionLanguageParameterDictionaries接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutContextSolutionLanguageParameterDictionaries](PutContextSolutionLanguageParameterDictionaries.md) | 映射PutContextSolutionLanguageParameterDictinaries接受元素序偶集合（OrderedPairSet）为定义域，解决方案语言参数集合（SolutionLanguageParameterDictionaries）为值域 |
| [ReadSolutionLanguageParameterDictionariesInformation](ReadSolutionLanguageParameterDictionariesInformation.md) | 映射ReadSolutionLanguageParameterDictionariesInformation接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetSolutionLanguageParameterDictionariesInformation](GetSolutionLangaugeParameterDictionariesInformation.md) | 映射GetSolutionLanguageParameterDictionariesInformation接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutSolutionLanguageParameterDictionariesInformation](PutSolutionLanguageParameterDictionariesInformation.md) | 映射PutSolutionLanguageParameterDictionariesInformation接受元素序偶集合（OrderedPairSet）为定义域，解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为值域 |
| [SortSolutionLanguageParameterDictionaries](SortSolutionLanguageParameterDictionaries.md) | 映射SortSolutionLanguageParameterDictionaries接受空元素集合（NullElementSet）为定义域，解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为值域 |
| [InformationConstructSolutionLanguageParameterDictionaries](InformationConstructSolutionLanguageParameterDictionaries.md) | 映射InformationConstructSolutionLanguageParameterDictionaries接受流元素集合（StreamSet）为定义域，解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为值域 |
| [CopySolutionLanguageParameterDictionaries](CopySolutionLanguageParameterDictionaries.md) | 映射CopySolutionLanguageParameterDictionaries接受解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为定义域和值域 |
| [ReleaseSolutionLanguageParameterDictionaries](ReleaseSolutionLanguageParameterDictionaries.md) | 映射ReleaseSolutionLanguageParameterDictionaries接受空元素集合（NullElementSet）为定义域，解决方案语言参数字典集合（SolutionLanguageParameterDcitionaries）为值域 |

***

## 解决方案语言解释管理结构与定义：

| 指令 | 说明 |
| --- | --- |
| [SolutionLanguageExplainManager_Struct](SolutionLanguageExplainManager_Struct.md) | 命名空间SolutionLanguageExplainManager_Struct |
| [SolutionLanguageExplainManagerSet](SolutionLanguageExplainManagerSet.md) | 集合SolutionLanguageExplainManagerSet为解决方案语言描述管理的集合 |

***

## 解决方案语言解释管理基础指令一：

| 指令 | 说明 |
| --- | --- |
| [NewSolutionLanguageExplainManager](NewSolutionLanguageExplainManager.md) | 映射NewSolutionLanguageExplainManager接受空元素集合（NullElementSet）为定义域和值域 |
| [FstreamConstructSolutionMap](FstreamConstructSolutionMap.md) | 映射FstreamConstructSolutionMap接受元素序偶集合（OrderedPairSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为值域 |
| [FstreamConstructSolutionRecursionInformation](FstreamConstructSolutionRecursionInformation.md) | 映射FstreamConstructSolutionRecursionInformation接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域 |
| [FstreamConstructSolutionNodeState](FstreamConstructSolutionNodeState.md) | 映射FstreamConstructSolutionNodeState接受文件集合（FstreamSet）为定义域，问答流图节点集合（QuestionNodeSet）为值域 |
| [FstreamConstructSolutionSerial](FstreamConstructSolutionSerial.md) | 映射FstreamConstructSolutionSerial接受元素序列集合（ElementOrderSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManager）为值域 |
| [FstreamConstructSolutionParallel](FstreamConstructSolutionParallel.md) | 映射FstreamConstructSolutionParallel接受元素序列集合（ElementOrderSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为值域 |
| [FstreamConstructSolutionLanguageExplainManagerMap](FstreamConstructSolutionLanguagerExplainManagerMap.md) | 映射FstreamConstructSolutionLanguageExplainManagerMap接受文件集合（FstreamSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为值域 |
| [ReleaseSolutionLangaugeExplainManager](ReleaseSolutionLanguageExplainManager.md) | 映射ReleaseSolutionLanguageExplainManager接受空元素集合（NullElementSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet） |

  
***

## 域信息相关信息：

| 指令 | 说明 |
| --- | --- |
| [DomainInformationTypeName](DomainInformationTypeName.md) | 命名空间DomainInformationTypeName |
| [DomainInformationLoginoutTypeName](DomainInformationLoginoutTypeName.md) | 命名空间DomainInformationLoginoutTypeName |

***

## 解决方案语言解释管理基础指令二：

| 指令 | 说明 |
| --- | --- |
| [FstreamConstructSolutionInformation](FstreamConstructSolutionInformation.md) | 映射FstreamConstructSolutionInformation接受文件集合（FstreamSet）为定义域，解决方案语言表达管理集合（SolutionLanguageExplainManagerSet）为值域 |
| [RecursionTransformSolutionParameterInformation](RecursionTransformSolutionParameterInformation.md) | 映射RecursionTransformSolutionParameterInformation接受解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为定义域，元素序列集合（ElementOrderSet）为值域 |
| [TransformSolutionParameterInformation](TransformSolutionParameterInformation.md) | 映射TransformSolutionParameterInformation接受空元素集合（NullElementSet）为定义域，解决方案语言表达管理集合（SolutionLanguageExplainManagerSet）为值域 |
| [SolutionLanguageNodeOrderMapInformationToData](SolutionLanguageNodeOrderMapInformationToData.md) | 映射SolutionLanguageNodeOrderMapInformationToData接受解决方案语言节点序列集合（SolutionLanguageNodeOrder）为定义域，空元素集合（NullElementSet）为值域 |
| [DataConstructSolutionNodeOrderMapInformation](DataConstructSolutionNodeOrderMapInformation.md) | 映射DataConstructSolutionNodeOrderMapInformation接受流集合（StreamSet）为定义域，解决方案语言节点序列集合（SolutionLanguageNodeOrder）为值域 |
| [SolutionLanguageNodeOrderInsideLinkToData](SolutionLanguageNodeOrderInsideLinkToData.md) | 映射SolutionLanguageNodeOrderInsideLinkToData接受解决方案语言节点序列集合（SolutionLangaugeNodeOrder）为定义域，空元素集合（NullElementSet）为值域 |
| [DataConstructSolutionLanguageNodeOrderInsideLink](DataConstructSolutionLanguageNodeOrderInsideLink.md) | 映射DataConstructSolutionLanguageNodeOrderInsideLink接受流集合（StreamSet）为定义域，解决方案语言节点序列集合（SolutionLanguageNodeOrder）为值域 |
| [SolutionLanguageNodeOrderStateToData](SolutionLanguageNodeOrderStateToData.md) | 映射SolutionLanguageNodeOrderStateToData接受解决方案语言节点序列集合（SolutionLanguageNodeOrderState）为定义域，空元素集合（NullElementSet）为值域 |
| [DataConstructSolutionLanguageNodeOrderState](DataConstructSolutionLanguageNodeOrderState.md) | 映射DataConstructSolutionLanguageNodeOrderState接受流集合（StreamSet）为定义域，解决方案语言节点序列集合（SolutionLanguageNodeOrder）为值域 |
| [RecursionSolutionLanguageNodeOrderParameterDataLengthCalculate](RecursionSolutionLanguageNodeOrderParameterDataLengthCalculate.md) | 映射RecursionSolutionLanguageNodeOrderParameterDataLengthCalculate接受元素序列集合（ElementOrderSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [RecursionSolutionLanguageNodeOrderParameterToData](RecursionSolutionLanguageNodeOrderParameterToData.md) | 映射RecursionSolutionLanguageNodeOrderParameterToData接受元素序偶集合（OrderedPairSet）为定义域，流集合（StreamSet）为值域 |
| [RecursionDataConstructSolutionLanguageNodeOrderParameter](RecursionDataConstructSolutionLanguageNodeOrderParameter.md) | 映射RecursionDataConstructSolutionLanguageNodeOrderParameter接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SolutionLanguageNodeOrderDomainParameterToData](SolutionLanguageNodeOrderDomainParameterToData.md) | 映射SolutionLangaugeNodeOrderDomainParameterToData接受解决方案语言节点序列集合（SolutionLanguageNodeOrder）为定义域，空元素集合（NullElementSet）为值域 |
| [DataConstructSolutionLanguageNodeOrderDomainParameter](DataConstructSolutionLanguageNodeOrderDomainParameter.md) | 映射DataConstructSolutionLanguageNodeOrderDomainParameter接受流集合（StreamSet）为定义域，解决方案语言节点序列集合（SolutionLanguageNodeOrder）为值域 |
| [SolutionLanguageParameterDictionariesToData](SolutionLanguageParameterDictionariesToData.md) | 映射SolutionLanguageParameterDictionariesToData接受解决方案语言参数字典集合（SolutionLanguageParameterDictionaries）为定义域，空元素集合（NullElementSet）为值域 |
| [SolutionLanguageExplainManagerConstructContextDictionaries](SolutionLanguageExplainManagerConstructContextDictionaries.md) | 映射SolutionLanguageExplainManagerConstructContextDictionaries接受空元素集合（NullElementSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为值域 |
| [SolutionLanguageContextDictionariesToData](SolutionLanguageContextDictionariesToData.md) | 映射SolutionLanguageContextDictionariesToData接受解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为定义域，空元素集合（NullElementSet）为值域 |
| [SolutionLanguageExplainManagerConstructLoginOutDictionaries](SolutionLanguageExplainManagerConstructLoginOutDictionaries.md) | 映射SolutionLanguageExplainManagerConstructLoginOutDictionaries接受空元素集合（NullElementSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManagerSet）为值域 |
| [IntentionalityObjectConstructSolutionLanguageExplainManager](IntentionalityObjectConstructSolutionLanguageExplainManager.md) | 映射IntentionalityObjectConstructSolutionLanguageExplainManager接受意向性集合（IntentionalityObjectSet）为定义域，解决方案语言表达管理集合（SolutionLanguageExplainManagerSet） |

***

## 解决方案语言语境字典结构与定义：

| 指令 | 说明 |
| --- | --- |
| [ContextInformationTypeName](ContextInformationTypeName.md) | 命名空间ContextInfomrationTypeName |
| [SolutionLanguageContextDictionaries_Struct](SolutionLanguageContextDictionaries_Struct.md) | 命名空间SolutionLanguageContextDictionaries_Struct |
| [SolutionLanguageContextDictionaries](SolutionLanguageContextDictionaries.md) | 集合SolutionLanguageContextDictionaries为解决方案语言语境字典的集合 |

***

## 解决方案语言语境字典基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewSolutionLanguageContextDictionaries](NewSolutionLanguageContextDictionaries.md) | 映射NewSolutionLanguageContextDictionaries接受空元素集合（NullElementSet）为定义域和值域 |
| [SelectSolutionLanguageContextDictionaries](SelectSolutionLanguageContextDictionaries.md) | 映射SelectSolutionLanguageContextDictionaries接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [LoginSolutionLanguageContextDictionaries](LoginSolutionLanguageContextDictionaries.md) | 映射LoginSolutionLanguageContextDictionaries接受流集合（StreamSet）为定义域，解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为值域 |
| [LogoutSolutionLanguageContextDictionaries](LogoutSolutionLanguageContextDictionaries.md) | 映射LogoutSolutionLanguageContextDictionaries接受流集合（StreamSet）为定义域，解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为值域 |
| [SortSolutionLanguageContextDictionaries](SortSolutionLanguageContextDictionaries.md) | 映射SortSolutionLanguageContextDictionaries接受空元素集合（NullElementSet）为定义域，解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为值域 |
| [FstreamReadSolutionLanguageContextDictionaries](FstreamReadSolutionLanguageContextDictionaries.md) | 映射FstreamReadSolutionLanguageContextDictionaries接受文件集合（FstreamSet）为定义域，解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为值域 |
| [DataConstructSolutionLanguageContextDictionaries](DataConstructSolutionLanguageContextDictionaries.md) | 映射DataConstructSolutionLanguageContextDictionaries接受流集合（StreamSet）为定义域，解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为值域 |
| [CopySolutionLanguageContextDictionaries](CopySolutionLanguageContextDictionaries.md) | 映射CopySolutionLanguageContextDictionaries接受解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为定义域和值域 |
| [ReleaseSolutionLanguageContextDictionaries](ReleaseSolutionLanguageContextDictionaries.md) | 映射ReleaseSolutionLanguageContextDictionaries接受空元素集合（NullElementSet）为定义域，解决方案语言语境字典集合（SolutionLanguageContextDictionaries）为值域 |

  
***

## 注册注销信息字典结构与定义：

| 指令 | 说明 |
| --- | --- |
| [LoginOutInformationDictionaries_Struct](LoginOutInformationDictionaries_Struct.md) | 命名空间LoginOutInformationDictionaries_Struct |
| [LoginOutInformationDictionaries](LoginOutInformationDictionaries.md) | 集合LoginOutInformationDictionaries为所有注册销信息字典的集合 |

***

## 注册注销信息字典基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewLoginOutInformationDictionaries](NewLoginOutInformationDictionaries.md) | 映射NewLoginOutInformationDictionaries接受空元素集合（NullElementSet）为定义域和值域 |
| [ReleaseLoginOutInformationDictionaries](ReleaseLoginOutInformationDictionaries.md) | 映射ReleaseLoginOutInformationDictionaries接受空元素集合（NullElementSet）为定义域，注册销信息字典集合（LoginOutInformationDictionaries）为值域 |
| [DataConstructLoginOutInformationDictionaries](DataConstructLoginOutInformationDictionaries.md) | 映射DataConstructLoginOutInformationDictionaries接受流集合（StreamSet）为定义域，注册销信息字典集合（LoginOutInformationDictionaries）为值域 |
| [CopyLoginOutInformationDictionries](CopyLoginOutInformationDictionaries.md) | 映射CopyLoginOutInformationDictionaries接受注册销信息字典集合（LoginOutInformationDictionaries）为定义域和值域 |
| [LoginOutInformationDictionariesToData](LoginOutInformationDictionariesToData.md) | 映射LoginOutInformationDictionariesToData接受注册销字典集合（LoginOutInfortmaionDictionaries）为定义域，空元素集合（NullElementSet）为值域 |
