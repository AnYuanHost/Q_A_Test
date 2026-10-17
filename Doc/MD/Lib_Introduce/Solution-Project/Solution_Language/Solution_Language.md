# Solution_Language

***

***

## 解决方案语言文件基础指令一:

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [解决方案文件语言检测映射](FstreamSolutionLanguageTest.md) | 映射 | 检测文件中的解决方案语言是否符合标准 |
| [解决方案语言文件跳过空白符映射](FstreamSolutionLanguageJumpSpace.md) | 映射 | 在文件元素上跳过被标记的空白符 |
| [解决方案语言文件末尾检测映射](FstreamSolutionLanguageEOFTest.md) | 映射 | 判断文件是否读到末尾 |
| [解决方案语言文件图检测映射](FstreamSolutionLanguageMapTest.md) | 映射 | 检测文件中的图结构是否符合解决方案语言格式 |
| [解决方案语言文件图末尾检测映射](FstreamSolutionLanguageMapEndTest.md) | 映射 | 检测是否到达图结构的末尾 |

***

## 解决方案语言文件基础指令二（并行检测）：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [串并行状态命名空间](Serial_Parallel_State.md) | 命名空间 | 定义解决方案语言判断图检测中的串并行检测 |
| [解决方案语言文件串并行检测映射](FstreamSolutionLanguageSerialParallelTest.md) | 映射 | 检测当前应进行串行还是并行检测 |
| [解决方案语言文件迭代信息检测映射](FstreamSolutionLanguageRecursionInformationTest.md) | 映射 | 检测下文是否符合节点域信息 |

***

## 解决方案语言文件基础指令三（节点状态）：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [节点状态流信息](Node_State_Stream.md) | 命名空间 | 提供节点各状态在文件等流中的字符描述 |
| [解决方案语言文件节点状态检测映射](FstreamSolutionLangaugeNodeStateTest.md) | 映射 | 检测下文是否符合节点状态信息 |

***

## 解决方案语言文件基础指令四：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [解决方案语言文件串行检测映射](FstreamSolutionLanguageSerialTest.md) | 映射 | 检测下文是否符合问答流图的串行结构 |
| [解决方案语言文件并行检测映射](FstreamSolutionLanguageParallelTest.md) | 映射 | 检测下文是否符合问答流图的并行结构 |
| [解决方案语言文件并行末尾测试映射](FstreamSolutionLanguageParallelEndTest.md) | 映射 | 检测下文是否到达问答流图并行结构的末尾 |

***

## 解决方案节点序列结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [解决方案语言节点序列结构](SolutionLanguageNodeOrder_Struct.md) | 命名空间 | 定义解决方案语言节点序列元素的树结构解析与操作 |
| [解决方案语言节点序列集合](SolutionLangaugeNodeOrder.md) | 集合 | 解决方案语言节点序列元素的集合 |

***

## 解决方案节点序列基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建解决方案语言节点序列映射](NewSolutionLanguageNodeOrder.md) | 映射 | 新建解决方案语言节点序列 |
| [解决方案语言节点序列注册映射](LoginSolutionLanguageNodeOrder.md) | 映射 | 注册解决方案语言节点序列并返回地址信息 |
| [解决方案语言节点序列读取映射](ReadSolutionLanguageNodeOrder.md) | 映射 | 按地址读取解决方案语言节点序列中的节点信息 |
| [释放解决方案语言节点序列映射](ReleaseSolutionLanguageNodeOrder.md) | 映射 | 释放解决方案语言节点序列 |

  
***

## 解决方案语言参数字典结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [解决方案语言参数字典结构](SolutionLanguageParameterDictionaries_Struct.md) | 命名空间 | 定义解决方案语言参数字典元素的树结构解析与操作 |
| [解决方案语言参数字典集合](SolutionLanguageParameterDictionaries.md) | 集合 | 解决方案语言参数字典元素的集合 |

***

## 解决方案语言参数字典基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建解决方案语言参数字典映射](NewSolutionLanguageParameterDictionaries.md) | 映射 | 新建解决方案语言参数字典 |
| [解决方案语言参数字典注册映射](LoginSolutionLanguageParameterDictionaries.md) | 映射 | 注册流元素以构建解决方案语言参数字典 |
| [解决方案语言参数字典检索映射](SelectSolutionLanguageParameterDictionaries.md) | 映射 | 按流信息检索参数字典并返回结果 |
| [解决方案语言参数字典读取基础信息映射](ReadBaseInformationSolutionLanguageParameterDictionaries.md) | 映射 | 按地址读取参数字典的基础信息 |
| [解决方案语言参数字典获取基础信息映射](GetBaseInformationSolutionLanguageParameterDictionaries.md) | 映射 | 按地址获取参数字典的基础信息 |
| [解决方案语言参数字典存入基本信息映射](PutBaseInformationSolutionLanguageParameterDictionaries.md) | 映射 | 按地址写入参数字典的基础信息 |
| [解决方案语言参数字典获取状态映射](GetStateSolutionLanguageParameterDictionaries.md) | 映射 | 按地址获取参数字典的状态信息 |
| [解决方案语言参数字典存入状态映射](PutStateSolutionLanguageParameterDictionaries.md) | 映射 | 按地址写入参数字典的状态信息 |
| [解决方案语言参数字典读取语境信息映射](ReadContextSolutionLanguageParameterDictionaries.md) | 映射 | 按地址读取参数字典的语境信息 |
| [解决方案语言参数字典获取语境信息映射](GetContextSolutionLanguageParameterDictionaries.md) | 映射 | 按地址获取参数字典的语境信息 |
| [解决方案语言字典存入语境映射](PutContextSolutionLanguageParameterDictionaries.md) | 映射 | 按地址写入参数字典的语境信息 |
| [解决方案语言参数字典信息读取映射](ReadSolutionLanguageParameterDictionariesInformation.md) | 映射 | 按地址读取参数字典的信息 |
| [解决方案语言参数字典获取信息映射](GetSolutionLangaugeParameterDictionariesInformation.md) | 映射 | 按地址获取参数字典的信息 |
| [解决方案语言参数字典存入信息映射](PutSolutionLanguageParameterDictionariesInformation.md) | 映射 | 按地址写入参数字典的信息 |
| [解决方案语言参数字典排序映射](SortSolutionLanguageParameterDictionaries.md) | 映射 | 对解决方案语言参数字典排序 |
| [信息构造解决方案原因呢参数字典映射](InformationConstructSolutionLanguageParameterDictionaries.md) | 映射 | 由流信息构造解决方案语言参数字典 |
| [拷贝解决方案语言参数字典映射](CopySolutionLanguageParameterDictionaries.md) | 映射 | 拷贝解决方案语言参数字典 |
| [释放解决方案语言参数字典映射](ReleaseSolutionLanguageParameterDictionaries.md) | 映射 | 释放解决方案语言参数字典 |

***

## 解决方案语言解释管理结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [解决方案语言描述管理结构](SolutionLanguageExplainManager_Struct.md) | 命名空间 | 定义解决方案语言描述管理元素的树结构解析与操作 |
| [解决方案描述管理集合](SolutionLanguageExplainManagerSet.md) | 集合 | 解决方案语言描述管理元素的集合 |

***

## 解决方案语言解释管理基础指令一：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建解决方案语言描述管理映射](NewSolutionLanguageExplainManager.md) | 映射 | 新建解决方案语言描述管理 |
| [文件构造解决方案流图映射](FstreamConstructSolutionMap.md) | 映射 | 由文件构造问答流图 |
| [文件构造解决方案递归信息映射](FstreamConstructSolutionRecursionInformation.md) | 映射 | 由文件构造递归信息并注册到参数字典 |
| [文件构造解决方案节点状态映射](FstreamConstructSolutionNodeState.md) | 映射 | 由文件读取节点状态信息并写入问答节点 |
| [文件构造解决方案串行结构映射](FstreamConstructSolutionSerial.md) | 映射 | 由文件构造问答流图的串行结构 |
| [文件构造解决方案并行结构映射](FstreamConstructSolutionParallel.md) | 映射 | 调控并派发问答流图并行结构的构造 |
| [文件构造解决方案语言描述管理图映射](FstreamConstructSolutionLanguagerExplainManagerMap.md) | 映射 | 由文件构造替换前后的问答流图信息 |
| [释放解决方案语言描述管理映射](ReleaseSolutionLanguageExplainManager.md) | 映射 | 释放解决方案语言描述管理 |

  
***

## 域信息相关信息：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [域信息类型名称](DomainInformationTypeName.md) | 命名空间 | 提供域信息类型在文件等流中的字符描述 |
| [域信息注册销类型名称](DomainInformationLoginoutTypeName.md) | 命名空间 | 提供域信息注册销类型在文件等流中的字符描述 |

***

## 解决方案语言解释管理基础指令二：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [文件构造解决方案信息映射](FstreamConstructSolutionInformation.md) | 映射 | 由文件构造解决方案的参数信息 |
| [递归替换解决方案语言描述管理参数信息映射](RecursionTransformSolutionParameterInformation.md) | 映射 | 递归将参数字符信息转换为最终信息 |
| [替换解决方案语言描述管理参数信息映射](TransformSolutionParameterInformation.md) | 映射 | 完成节点信息从参数名到实际名称的替换 |
| [解决方案语言节点序列映射_数据转换映射](SolutionLanguageNodeOrderMapInformationToData.md) | 映射 | 将节点的映射信息转换为数据流 |
| [数据构造解决方案语言节点序列映射信息映射](DataConstructSolutionNodeOrderMapInformation.md) | 映射 | 由数据流构造节点映射信息 |
| [解决方案语言节点序列内连接_数据转换映射](SolutionLanguageNodeOrderInsideLinkToData.md) | 映射 | 将节点间内连接信息转换为数据流 |
| [数据构造解决方案节点序列内连接映射](DataConstructSolutionLanguageNodeOrderInsideLink.md) | 映射 | 由数据流构造节点内连接信息 |
| [解决方案语言节点序列状态_数据转换映射](SolutionLanguageNodeOrderStateToData.md) | 映射 | 将节点状态信息转换为数据流 |
| [数据构造解决方案语言节点序列状态映射](DataConstructSolutionLanguageNodeOrderState.md) | 映射 | 由数据流构造节点状态信息 |
| [解决方案语言节点序列递归计算参数数据长度映射](RecursionSolutionLanguageNodeOrderParameterDataLengthCalculate.md) | 映射 | 计算节点参数转化为流后的长度 |
| [解决方案语言节点序列参数递归转化为数据映射](RecursionSolutionLanguageNodeOrderParameterToData.md) | 映射 | 递归将节点参数信息写入数据流 |
| [数据递归构造解决方案语言节点序列参数映射](RecursionDataConstructSolutionLanguageNodeOrderParameter.md) | 映射 | 递归由数据流构造节点参数信息 |
| [解决方案语言节点序列域信息的数据转化映射](SolutionLanguageNodeOrderDomainParameterToData.md) | 映射 | 将节点序列的域参数信息转换为数据流 |
| [数据构造解决方案语言节点序列域参数映射](DataConstructSolutionLanguageNodeOrderDomainParameter.md) | 映射 | 由数据流构造节点序列的域参数信息 |
| [解决方案语言参数字典数据转换映射](SolutionLanguageParameterDictionariesToData.md) | 映射 | 将参数字典信息转换为数据流 |
| [解决方案语言管理构造语境字典映射](SolutionLanguageExplainManagerConstructContextDictionaries.md) | 映射 | 依据参数字典构造语境字典 |
| [解决方案语言语境字典数据转化映射](SolutionLanguageContextDictionariesToData.md) | 映射 | 将语境字典信息转换为数据流 |
| [解决方案语言表达管理构造注册销字典映射](SolutionLanguageExplainManagerConstructLoginOutDictionaries.md) | 映射 | 依据参数信息构造注册销字典 |
| [意向性对象构造解决方案语言表达管理映射](IntentionalityObjectConstructSolutionLanguageExplainManager.md) | 映射 | 由意向性对象构造解决方案语言描述管理 |

***

## 解决方案语言语境字典结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [语境信息类型名称命名空间](ContextInformationTypeName.md) | 命名空间 | 提供与参数信息类型相同的相关信息 |
| [解决方案语言语境字典结构](SolutionLanguageContextDictionaries_Struct.md) | 命名空间 | 定义解决方案语言语境字典元素的树结构解析与操作 |
| [解决方案语言语境字典集合](SolutionLanguageContextDictionaries.md) | 集合 | 解决方案语言语境字典元素的集合 |

***

## 解决方案语言语境字典基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建解决方案语言语境字典映射](NewSolutionLanguageContextDictionaries.md) | 映射 | 新建解决方案语言语境字典 |
| [解决方案语言语境字典检索映射](SelectSolutionLanguageContextDictionaries.md) | 映射 | 按流元素检索语境字典并返回结果 |
| [解决方案语言语境字典注册映射](LoginSolutionLanguageContextDictionaries.md) | 映射 | 将流元素的待注册信息注册到语境字典 |
| [解决方案语言语境字典注销映射](LogoutSolutionLanguageContextDictionaries.md) | 映射 | 注销语境字典中的流元素待注销信息 |
| [解决方案语言语境字典排序映射](SortSolutionLanguageContextDictionaries.md) | 映射 | 对解决方案语言语境字典排序 |
| [文件读取解决方案语言语境字典映射](FstreamReadSolutionLanguageContextDictionaries.md) | 映射 | 从文件读取并构造解决方案语言语境字典 |
| [数据构造解决方案语言语境字典映射](DataConstructSolutionLanguageContextDictionaries.md) | 映射 | 由数据流构造解决方案语言语境字典 |
| [拷贝解决方案语言语境字典映射](CopySolutionLanguageContextDictionaries.md) | 映射 | 拷贝解决方案语言语境字典 |
| [释放解决方案语言语境字典映射](ReleaseSolutionLanguageContextDictionaries.md) | 映射 | 释放解决方案语言语境字典 |

  
***

## 注册注销信息字典结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [注册销信息字典结构](LoginOutInformationDictionaries_Struct.md) | 命名空间 | 定义注册销信息字典元素的树结构解析与操作 |
| [注册销信息字典集合](LoginOutInformationDictionaries.md) | 集合 | 注册销信息字典元素的集合 |

***

## 注册注销信息字典基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建注册销信息字典映射](NewLoginOutInformationDictionaries.md) | 映射 | 新建注册销信息字典 |
| [释放注册销信息字典映射](ReleaseLoginOutInformationDictionaries.md) | 映射 | 释放注册销信息字典 |
| [数据构造注册销信息字典映射](DataConstructLoginOutInformationDictionaries.md) | 映射 | 由数据流构造注册销信息字典 |
| [拷贝注册销信息字典映射](CopyLoginOutInformationDictionaries.md) | 映射 | 拷贝注册销信息字典 |
| [注册销字典数据转化映射](LoginOutInformationDictionariesToData.md) | 映射 | 将注册销字典信息转换为流信息 |
