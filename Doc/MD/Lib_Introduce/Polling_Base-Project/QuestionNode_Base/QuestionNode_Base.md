# QuestionNode_Base

***

***

## 问答节点结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [问答节点结构](QuestionNode_Struct.md) | 命名空间 | 定义问答节点结构的位置常量 |
| [问答节点状态码命名空间](QuestionNode_StateCode.md) | 命名空间 | 定义问答节点的状态代码常量 |
| [问答节点参数节点集合](QuestionParameterNode.md) | 集合 | 所有问答节点参数节点的集合 |
| [释放问答节点参数节点映射](ReleaseQuestionParameterNode.md) | 映射 | 释放问答节点参数节点 |
| [问答节点集合](QuestionNodeSet.md) | 集合 | 所有问答节点的集合 |

***

## 问答节点基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建问答节点映射](NewQuestionNode.md) | 映射 | 新建问答节点 |
| [问答节点设置超索引映射](SetQuestionNodeSuperIndex.md) | 映射 | 设置问答节点的超索引 |
| [问答节点设置前置问答序列映射](SetQuestionNodeAntecedent.md) | 映射 | 设置问答节点的前置问答序列 |
| [问答节点获取前置序列映射](GetQuestionNodeAntecedent.md) | 映射 | 获取问答节点的前置问答序列 |
| [问答节点设置后置问答节点序列映射](SetQuestionNodePost.md) | 映射 | 设置问答节点的后置问答序列 |
| [问答节点获取后置问答序列映射](GetQuestionNodePost.md) | 映射 | 获取问答节点的后置问答序列 |
| SetQuestionNodeMapInformation（文档未生成） | - | - |
| [问答节点获取定义域信息映射](GetQuestionNodeDomain.md) | 映射 | 获取问答节点的定义域信息 |
| [问答节点设置定义域映射](SetQuestionNodeDomain.md) | 映射 | 设置问答节点的定义域 |
| [问答节点获取值域映射](GetQuestionNodeRange.md) | 映射 | 获取问答节点的值域信息 |
| [问答节点值域设置映射](SetQuestionNodeRange.md) | 映射 | 设置问答节点的值域 |
| [释放问答节点映射](ReleaseQuestionNode.md) | 映射 | 释放问答节点 |
| [迭代拷贝问答节点信息树映射](RecursionCopyQuestionNodeTree.md) | 映射 | 迭代拷贝问答节点信息树 |
| [拷贝问答节点映射](CopyQuestionNode.md) | 映射 | 拷贝问答节点 |

***

## 问答流图结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [问答流图结构](QuestionFlowMap_Struct.md) | 命名空间 | 定义问答流图结构的位置常量 |
| [问答流图替换包](QuestionFlowMap_ReplacePackage.md) | 命名空间 | 定义问答流图替换包的操作位置常量 |
| [问答流图替换包集合](QuestionFlowMapReplacePackage.md) | 集合 | 所有问答流图替换包的集合 |

***

## 问答流图基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建问答流图映射](NewQuestionFlowMap.md) | 映射 | 新建问答流图 |
| [问答流图扩容映射](ExpandQuestionFlowMap.md) | 映射 | 扩充问答流图容量并返回新槽位地址 |
| [问答流图碎片整理映射](DefrafmentQuestionFlowMap.md) | 映射 | 整理问答流图的内存碎片 |
| [元素流图获取元素映射](GetQuestionFlowMap.md) | 映射 | 按地址获取问答流图中的问答节点 |
| [问答流图存入元素映射](PutQuestionFlowMap.md) | 映射 | 按地址将问答节点存入问答流图 |
| [读取问答流图映射](ReadQuestionFlowMap.md) | 映射 | 按地址读取问答流图中的问答节点引用 |
| [问答流图破坏节点映射](BreakQuestionFlowMap.md) | 映射 | 按地址破坏并释放问答流图中的节点 |
| [元素流图状态转移到执行映射](TurnOrderToActiveQuestionFlowMap.md) | 映射 | 将指定节点转移到可执行状态 |
| [问答流图可执行序列首地址映射](FirstTractableQuestionFlowMap.md) | 映射 | 获取可执行序列首地址 |
| [问答流图等待序列首地址映射](FirstPendingQuestionFlowMap.md) | 映射 | 获取等待序列首地址 |
| [问答流图已完成序列首地址映射](FirstProcessedQuestionFlowMap.md) | 映射 | 获取已完成序列首地址 |
| [问答流图下一地址映射](NextQuestionFlowMapAddress.md) | 映射 | 计算指定地址的下一地址 |
| [问答流图后推映射](BackPushQuestionFlowMap.md) | 映射 | 后推可进入下一状态的节点 |
| [问答流图懒增长映射](LazyExpandQuestionFlowMap.md) | 映射 | 按需增长问答流图的懒槽位 |
| [问答流图替换映射](ReplaceQuestionFlowMap.md) | 映射 | 按替换包完成问答流图的替换 |
| [释放问答流图映射](ReleaseQuestionFlowMap.md) | 映射 | 释放问答流图 |

***

## 引用问答流图结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [引用问答流图集合](QuoteQuestionFlowMap.md) | 集合 | 所有引用问答流图的集合 |

***

## 引用问答流图基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建引用问答流图映射](NewQuoteQuestionFlowMap.md) | 映射 | 新建引用问答流图 |
| [释放引用问答流图元素映射](ReleaseQuoteQuestionFlowMap.md) | 映射 | 释放引用问答流图 |

***
