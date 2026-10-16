# PollingDriven_Base

***

***

## 轮询机基础库相关指令：

***

### 轮询机结构与定义：

| 指令 | 说明 |
| --- | --- |
| [PollingDriven_Struct](PollingDriven_Struct.md) | 命名空间PollingDriven_Struct |
| [PollingDriven_StateCode](PollingDriven_StateCode.md) | 命名空间PollingDriven_StateCode |
| [PollingDrivenSet](PollingDrivenSet.md) | 集合PollingDrivenSet为所有轮询机的集合 |

***

### 轮询机基础指令一：

| 指令 | 说明 |
| --- | --- |
| [NewPollingDriven](NewPollingDriven.md) | 映射NewPollingDriven接受空元素集合（NullElementSet）为定义域和值域 |
| [SetEESPollingDriven](SetEESPollingDriven.md) | 映射SetEESPollingDriven接受元素环境检索器集合（ElementEnvironmentSearcher）为定义域，轮询机集合（PollingDrivenSet）为值域 |
| [GetEESPollingDriven](GetEESPollingDriven.md) | 映射GetEESPollingDriven接受轮询机集合（PollingDrivenSet）为定义域，空元素集合（NullElementSet）为值域 |
| [SetStatePollingDriven](SetStatePollingDriven.md) | 映射SetStatePollingDriven接受无符号整型集合（UIntSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |
| [GetStatePollingDriven](GetStatePollingDriven.md) | 映射GetStatePollingDriven接受轮询机集合（PollingDrivenSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [SetQuestionNodePollingDriven](SetQuestionNodePollingDriven.md) | 映射SetQuestionNodePollingDriven接受问答节点集合（QuestionNodeSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |
| [GetQuestionNodePollingDriven](GetQuestionNodePollingDriven.md) | 映射GetQuestionNodePollingDriven接受轮询机集合（PollingDrivenSet）为定义域，空元素集合（NullElementSet）为值域 |

***

### 轮询机基础指令二：

| 指令 | 说明 |
| --- | --- |
| [QuestionNodeConstructMapPollingDriven](QuestionNodeConstructMapPollingDriven.md) | 映射QuestionNodeConstructMapPollingDriven接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |
| [QuestionNodeDestructMapPollingDriven](QuestionNodeDestructMapPollingDriven.md) | 映射QuestionNodeDestructMapPollingDriven接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |
| [QuestionNodeConstructMapMapPollingDriven](QuestionNodeConstructMapMapPollingDriven.md) | 映射QuestionNodeConstructMapMapPollingDriven接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |

***

### 轮询机构造域指令：

| 指令 | 说明 |
| --- | --- |
| [RQNCMDPD_Domain](RQNCMDPD_Domain.md) | 命名空间RQNCMDPD_Domain |
| [QuestionNodeConstructMapDomainPollingDriven](QuestionNodeConstructMapDomainPollingDriven.md) | 映射QuestionNodeConstructMapDomainPollingDriven接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [RecursionQuestionNodeConstructMapDomainPollingDriven](RecursionQuestionNodeConstructMapDomainPollingDriven.md) | 映射RecursionQuestionNodeConstructMapDomainPollingDriven接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域 |
| [RQNDCMDPD_Domain](RQNDMDPD_Domain.md) | 命名空间RQNDCMDPD_Domain |
| [QuestionNodeDestructMapDomainPollingDriven](QuestionNodeDestructMapDomainPollingDriven.md) | 映射QuestionNodeDestructMapDomainPollingDriven接受元素序偶集合（OrderedPairSet）为定义域，元素序列集合（ElementOrderSet）为值域 |
| [RecursionQuestionNodeDesturctMapDomainPollingDriven](RecursionQuestionNodeDestructMapDomainPollingDriven.md) | 映射RecursionQuestionNodeDestructMapDomainPollingDriven接受 |

  
***

### 轮询机基础指令三：

| 指令 | 说明 |
| --- | --- |
| [PollingDrivenMain](PollingDrivenMain.md) | 映射PollingDrivenMain接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |
| [PollingDrivenComplate](PollingDrivenComplate.md) | 映射PollingDrivenComplate接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |
| [PollingDrivenComplateTest](PollingDrivenComplateTest.md) | 映射PollingDrivenComplateTest接受轮询机集合（PollingDrivenSet）为定义域，布尔类型集合（BoolSet）为值域 |

***

### 轮询机基础指令四：

| 指令 | 说明 |
| --- | --- |
| [ReleasePollingDriven](ReleasePollingDriven.md) | 映射ReleasePollingDriven接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |

***

## 轮询机管理相关指令：

***

### 轮询机管理结构与定义：

| 指令 | 说明 |
| --- | --- |
| [PollingDrivenManager_Struct](PollingDrivenManager_Struct.md) | 命名空间PollingDrivenManager_Struct |
| [PollingDrivenManager](PollingDrivenManager.md) | 集合PollingDrivenManager为所有轮询机管理者的集合 |

***

### 轮询机管理基本指令：

| 指令 | 说明 |
| --- | --- |
| [NewPollingDrivenManager](NewPollingDrivenManager.md) | 映射NewPollingDrivenManager接受空元素集合（NullElementSet）为定义域和值域 |
| [ReadPollingDrivenManager](ReadPollingDrivenManager.md) | 映射ReadPollingDrivenManager接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [AddPollingDrivenManager](AddPollingDrivenManager.md) | 映射AddPollingDrivenManager接受轮询机集合（PollingDrivenSet）为定义域，轮询机管理集合（PollingDrivenManager）为值域 |
| [RemovePollingDrivenManager](RemovePollingDrivenManager.md) | 映射RemovePollingDrivenManager接受无符号整型集合（UIntSet）为定义域，轮询机管理集合（PollingDrivenManager）为值域 |
| [DefragmentPollingDrivenManager](DefragmentPollingDrivenManager.md) | 映射DefragemntPollingDrivenManager接受空元素集合（NullElementSet）为定义域，轮询机管理集合（PollingDrivenManager）为值域 |
| [ReleasePollingDrivenManager](ReleasePollingDrivenManager.md) | 映射ReleasePollingDrivenManager接受空元素集合（NullElementSet）为定义域，轮询机管理集合（PollingDrivenManager）为值域 |

***

## 补充文档：

| 指令 | 说明 |
| --- | --- |
| [SetPollingDrivenNodeAddress](SetPollingDrivenNodeAddress.md) | 映射SetPollingDrivenNodeAddress接受无符号整型集合（UIntSet）为定义域，轮询机集合（PollingDrivenSet）为值域 |
