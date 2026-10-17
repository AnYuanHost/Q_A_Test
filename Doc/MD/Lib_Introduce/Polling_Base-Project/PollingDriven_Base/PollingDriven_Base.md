# PollingDriven_Base

***

***

## 轮询机基础库相关指令：

***

### 轮询机结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [轮询机结构](PollingDriven_Struct.md) | 命名空间 | 定义轮询机结构的位置常量 |
| [轮询机状态代码](PollingDriven_StateCode.md) | 命名空间 | 定义轮询机的状态代码常量 |
| [轮询机集合](PollingDrivenSet.md) | 集合 | 所有轮询机的集合 |

***

### 轮询机基础指令一：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [轮询机构造映射](NewPollingDriven.md) | 映射 | 构造默认的轮询机 |
| [轮询机设置元素环境检索器映射](SetEESPollingDriven.md) | 映射 | 设置轮询机的元素环境检索器 |
| [轮询机元素环境检索器获取映射](GetEESPollingDriven.md) | 映射 | 获取轮询机的元素环境检索器 |
| [轮询机状态设置映射](SetStatePollingDriven.md) | 映射 | 设置轮询机的状态 |
| [轮询机状态获取映射](GetStatePollingDriven.md) | 映射 | 获取轮询机的状态 |
| [轮询机问答节点设置映射](SetQuestionNodePollingDriven.md) | 映射 | 设置轮询机绑定的问答节点 |
| [轮询机问答节点获取映射](GetQuestionNodePollingDriven.md) | 映射 | 获取轮询机绑定的问答节点 |

***

### 轮询机基础指令二：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [问答节点构造轮询机映射映射](QuestionNodeConstructMapPollingDriven.md) | 映射 | 按绑定问答节点构造轮询机的可执行映射 |
| [问答节点析构轮询机映射映射](QuestionNodeDestructMapPollingDriven.md) | 映射 | 按绑定问答节点析构轮询机的可执行映射 |
| [问答节点构造轮询机可执行映射映射信息映射](QuestionNodeConstructMapMapPollingDriven.md) | 映射 | 按问答节点信息构造轮询机的映射信息 |

***

### 轮询机构造域指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [问答节点迭代构造轮询机可执行映射域映射_定义域](RQNCMDPD_Domain.md) | 命名空间 | 定义轮询机可执行映射构造域的解析位置常量 |
| [问答节点构造轮询机映射域映射](QuestionNodeConstructMapDomainPollingDriven.md) | 映射 | 构造轮询机可执行映射的定义域 |
| [问答节点迭代构造轮询机可执行映射域映射](RecursionQuestionNodeConstructMapDomainPollingDriven.md) | 映射 | 迭代构造轮询机可执行映射的定义域 |
| [问答节点迭代析构轮询机可执行映射域映射_定义域](RQNDMDPD_Domain.md) | 命名空间 | 定义轮询机可执行映射析构域的解析位置常量 |
| [问答节点析构轮询机可执行映射域映射](QuestionNodeDestructMapDomainPollingDriven.md) | 映射 | 析构轮询机可执行映射的定义域 |
| [问答节点迭代析构轮询机可执行映射域映射](RecursionQuestionNodeDestructMapDomainPollingDriven.md) | 映射 | 迭代析构轮询机可执行映射的定义域 |

  
***

### 轮询机基础指令三：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [轮询机主程序映射](PollingDrivenMain.md) | 映射 | 启动轮询机执行并分配线程 |
| [轮询机完成映射](PollingDrivenComplate.md) | 映射 | 完成轮询机的线程回收与占用解除 |
| [轮询机完成测试映射](PollingDrivenComplateTest.md) | 映射 | 判断轮询机的线程是否结束 |

***

### 轮询机基础指令四：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [释放轮询机映射](ReleasePollingDriven.md) | 映射 | 释放轮询机 |

***

## 轮询机管理相关指令：

***

### 轮询机管理结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [轮询机管理结构](PollingDrivenManager_Struct.md) | 命名空间 | 定义轮询机管理结构的位置常量 |
| [轮询机管理集合](PollingDrivenManager.md) | 集合 | 所有轮询机管理者的集合 |

***

### 轮询机管理基本指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建轮询机管理映射](NewPollingDrivenManager.md) | 映射 | 构造轮询机管理者 |
| [轮询机管理读取映射](ReadPollingDrivenManager.md) | 映射 | 按地址读取轮询机管理者中的轮询机 |
| [轮询机管理添加映射](AddPollingDrivenManager.md) | 映射 | 向轮询机管理者添加轮询机 |
| [轮询机管理移除映射](RemovePollingDrivenManager.md) | 映射 | 从轮询机管理者移除并释放轮询机 |
| [轮询机管理集合碎片整理映射](DefragmentPollingDrivenManager.md) | 映射 | 整理轮询机管理者的内存碎片 |
| [轮询机管理释放映射](ReleasePollingDrivenManager.md) | 映射 | 释放轮询机管理者 |

***

## 补充文档：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [轮询机设置节点地址信息映射](SetPollingDrivenNodeAddress.md) | 映射 | 设置轮询机的节点地址信息 |
