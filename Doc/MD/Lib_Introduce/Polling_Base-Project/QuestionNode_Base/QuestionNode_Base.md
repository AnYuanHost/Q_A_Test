# QuestionNode_Base

***

***

## 问答节点结构与定义：

| 指令 | 说明 |
| --- | --- |
| [QuestionNode_Struct](QuestionNode_Struct.md) | 命名空间QuestionNode_Struct |
| [QuestionNode_StateCode](QuestionNode_StateCode.md) | 命名空间QuestionNode_StateCode |
| [QuestionParameterNode](QuestionParameterNode.md) | 集合QuestionParameterNode为所有问答节点参数节点的集合 |
| [ReleaseQuestionParameterNode](ReleaseQuestionParameterNode.md) | 映射ReleaseQuestionParameterNode接受空元素集合（NullElementSet）为定义域，问答节点参数节点集合（QuestionParameterNode）为值域 |
| [QuestionNodeSet](QuestionNodeSet.md) | 集合QuestionNodeSet为所有问答节点的集合 |

***

## 问答节点基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewQuestionNode](NewQuestionNode.md) | 映射NewQuestionNode接受空元素集合（NullElementSet）为定义域和值域 |
| [SetQuestionNodeSueprIndex](SetQuestionNodeSuperIndex.md) | 映射SetQuestionNodeSuperIndex接受超索引集合（SuperIndexSet）为定义域，问答流图节点集合（QuestionNodeSet）为值域 |
| [SetQuestionNodeAntecedent](SetQuestionNodeAntecedent.md) | 映射SetQuestionNodeAntecedent接受元素序列集合（ElementOrderSet）为定义域，问答节点集合（QuestionNodeSet）为值域 |
| [GetQuestionNodeAntecedent](GetQuestionNodeAntecedent.md) | 映射GetQuestionNodeAntecednet接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SetQuestionNodePost](SetQuestionNodePost.md) | 映射SetQuestionNodePost接受元素序列集合（ElementOrderSet）为定义域，问答节点集合（QuestionNodeSet）为值域 |
| [GetQuestionNodePost](GetQuestionNodePost.md) | 映射GetQuestionNodePost接受问答机集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域 |
| SetQuestionNodeMapInformation（文档未生成） | - |
| [GetQuestionNodeDomain](GetQuestionNodeDomain.md) | 映射GetQuestionNodeDomain接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SetQuestionNodeDomain](SetQuestionNodeDomain.md) | 映射SetQuestionNodeDomain接受问答节点参数节点集合（QuestionParameterNode）为定义域，问答节点集合（QuestionNodeSet）为值域 |
| [GetQuestionNodeRange](GetQuestionNodeRange.md) | 映射GetQuestionNodeRange接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SetQuestionNodeRange](SetQuestionNodeRange.md) | 映射SetQuestionNodeRange接受问答节点参数节点集合（QuestionParameterNode）为定义域，空元素集合（NullElementSet）为值域 |
| [ReleaseQuestionNode](ReleaseQuestionNode.md) | 映射ReleaseQuestionNode接受空元素集合（NullElementSet）为定义域，问答节点集合（QuestionNodeSet）为值域 |
| [RecursionCopyQuestionNodeTree](RecursionCopyQuestionNodeTree.md) | 映射RecursionCopyQuestionNodeTree接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域 |
| [CopyQuestionNode](CopyQuestionNode.md) | 映射CopyQuestionNode接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域 |

***

## 问答流图结构与定义：

| 指令 | 说明 |
| --- | --- |
| [QuestionFlowMap_Struct](QuestionFlowMap_Struct.md) | 命名空间QuestionFlowMap_Struct |
| [QuestionFlowMap_ReplacePackage](QuestionFlowMap_ReplacePackage.md) | 命名空间QuestionFlowMap_ReplacePackage |
| [QuestionFlowMapReplacePackage](QuestionFlowMapReplacePackage.md) | 集合QuestionFlowMapReplacePackage为所有问答流图替换包的集合 |

***

## 问答流图基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewQuestionFlowMap](NewQuestionFlowMap.md) | 映射NewQuestionFlowMap接受空元素集合（NullElementSet）为定义域和值域 |
| [ExpandQuestionFlowMap](ExpandQuestionFlowMap.md) | 映射ExpandQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域 |
| [DefragmentQuestionFlowMap](DefrafmentQuestionFlowMap.md) | 映射DefragmentQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域 |
| [GetQuestionFlowMap](GetQuestionFlowMap.md) | 映射GetQuestionFlowMap接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutQuestionFlowMap](PutQuestionFlowMap.md) | 映射PutQuestionFlowMap接受元素序偶集合（OrderedPairSet）为定义域，问答流图集合（QuestionFlowMap）为值域 |
| [ReadQuestionFlowMap](ReadQuestionFlowMap.md) | 映射ReadQuestionFlowMap接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullELementSet）为值域 |
| [BreakQuestionFlowMap](BreakQuestionFlowMap.md) | 映射BreakQuestionFlowMap接受无符号整型集合（UIntSet）为定义域，问答流图集合（QuestionFlowMap）为值域 |
| [TurnOrderToActiveQuestionFlowMpa](TurnOrderToActiveQuestionFlowMap.md) | 映射TurnOrderToActiveQuestionFlowMap接受无符号整型集合（UIntSet）为定义域，问答流图集合（QuestionFlowMap）为值域 |
| [FirstTractableQuestionFlowMap](FirstTractableQuestionFlowMap.md) | 映射FirstTractableQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域 |
| [FirstPendingQuestionFlowMap](FirstPendingQuestionFlowMap.md) | 映射FirstPendingQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域 |
| [FirstProcessedQuestionFlowMap](FirstProcessedQuestionFlowMap.md) | 映射FirstProcessedQuestionFlowMap接受问答流图集合（QuestionFlowMap）为定义域，无符号整型集合（UIntSet）为值域 |
| [NextQuestionFlowMapAddress](NextQuestionFlowMapAddress.md) | 映射NextQuestionFlowMapAddress接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [BackPushQuestionFlowMap](BackPushQuestionFlowMap.md) | 映射BackPushQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域 |
| [LazyExpandQuestionFlowMap](LazyExpandQuestionFlowMap.md) | 映射LazyExpandQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域 |
| [ReplaceQuestionFlowMap](ReplaceQuestionFlowMap.md) | 映射ReplaceQuestionFlowMap接受问答流图替换包集合（QuestionFlowMapReplacePackage）为定义域，问答流图集合（QuestionFlowMap）为值域 |
| [ReleaseQuestionFlowMap](ReleaseQuestionFlowMap.md) | 映射ReleaseQuestionFlowMap接受空元素集合（NullElementSet）为定义域，问答流图集合（QuestionFlowMap）为值域 |

***

## 引用问答流图结构与定义：

| 指令 | 说明 |
| --- | --- |
| [QuoteQuestionFlowMap](QuoteQuestionFlowMap.md) | 集合QuoteQuestionFlowMap为所有引用问答流图的集合 |

***

## 引用问答流图基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewQuoteQuestionFlowMap](NewQuoteQuestionFlowMap.md) | 映射NewQuoteQuestionFlowMap接受空元素集合（NullElementSet）为定义域和值域 |
| [ReleaseQuoteQuestionFlowMap](ReleaseQuoteQuestionFlowMap.md) | 映射ReleaseQuoteQuestionFlowMap接受空元素集合（NullElementSet）为定义域，引用问答流图集合（QuoteQuestionFlowMap）为值域 |

***
