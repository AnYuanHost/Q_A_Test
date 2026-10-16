# Solution

***

***

## 解决方案结构与定义：

| 指令 | 说明 |
| --- | --- |
| [Solution_Struct](Solution_Struct.md) | 命名空间Solution_Struct定义 |
| [SolutionStateCode](SolutionStateCode.md) | 命名空间SolutionStateCode |
| [SolutionSet](SolutionSet.md) | 集合SolutionSet为所有解决方案的集合 |

***

## 解决方案基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewSolution](NewSolution.md) | 映射NewSolution接受空元素集合（NullElementSet）为定义域和值域 |
| [ReleaseSolution](ReleaseSolution.md) | 映射ReleaseSolution接受空元素集合（NullElementSet）为定义域，解决方案集合（SolutionSet）为值域 |
| [SolutionReplaceKRSQuestionFLowMap](SolutionReplaceKRSQuestionFlowMap.md) | 映射SolutionReplaceKRSQuestionFlowMap接受解决方案集合（SolutionSet）为定义域，知识库零轮询机集合（KRSPollingDrivenZero）为值域 |

***

## 知识库解决方案管理结构与定义：

| 指令 | 说明 |
| --- | --- |
| [KRSSolutionManager_Struct](KRSSolutionManager_Struct.md) | 命名空间KRSSolutionManager_Struct |
| [KRSSolutionManager](KRSSolutionManager.md) | ; |

***

## 知识库解决方案管理基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewKRSSolutionManager](NewKRSSolutionManager.md) | 映射NewKRSSolutionManager接受空元素集合（NullElementSet）为定义域和值域 |
| [ReadKRSSolutionManager](ReadKRSSolutionManager.md) | 映射ReadKRSSolutionManager接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [LoginKRSSolutionManager](LoginKRSSolutionManager.md) | 映射LoginKRSSolutionManager接受解决方案集合（SolutionSet）为定义域，知识库解决方案管理集合（KRSSolutionManager） |
| [LogoutKRSSolutionManager](LogoutKRSSolutionManager.md) | 映射LogoutKRSSolutionManager接受无符号整型集合（UIntSet）为定义域，知识库解决方案管理集合（KRSSolutionManager）为值域 |
| [DefragmentKRSSolutionManager](DefragmentKRSSolutionManager.md) | 映射DefragmentKRSSolutionManager接受空元素集合（NullElementSet）为定义域，知识库解决方案管理集合（KRSSolutionManager）为值域 |
| [ReleaseKRSSolutionManager](ReleaseKRSSolutionManager.md) | 映射ReleaseKRSSolutionManager接受空元素集合（NullElementSet）为定义域，知识库解决方案管理集合（KRSSolutionManager）为值域 |
