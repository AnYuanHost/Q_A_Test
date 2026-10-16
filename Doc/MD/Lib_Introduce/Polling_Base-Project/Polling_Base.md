# Polling_Base 项目

轮询驱动基座库，是 KRS 调度的执行层：提供问题节点/问答流图结构（QuestionNode_Base）、轮询驱动零主对象（PollingDriven_Zero_Base）、节点占用（PollingDriven_Base）、零轮询驱动（ZeroPollingDriven）与 PDZ-KRS 管道（PDZ_KRS_Pipe）。

## 源文件

| 头文件 | 路径 |
| --- | --- |
| PollingDriven_Zero_Base.h | Lib.h.cpp/Polling_Base/h.cpp/PollingDriven_Zero_Base.h |
| QuestionNode_Base.h | Lib.h.cpp/Polling_Base/h.cpp/QuestionNode_Base.h |
| PollingDriven_Base.h | Lib.h.cpp/Polling_Base/h.cpp/PollingDriven_Base.h |
| ZeroPollingDriven.h | Lib.h.cpp/Polling_Base/h.cpp/ZeroPollingDriven.h |
| PDZ_KRS_Pipe.h | Lib.h.cpp/Polling_Base/h.cpp/PDZ_KRS_Pipe.h |

## 模块

| 模块 | 模块索引 | 本文档库生成实体 |
| --- | --- | --- |
| PollingDriven_Zero_Base | [PollingDriven_Zero_Base](Polling_Base/PollingDriven_Zero_Base/PollingDriven_Zero_Base.md) | 39 |
| QuestionNode_Base | [QuestionNode_Base](Polling_Base/QuestionNode_Base/QuestionNode_Base.md) | 20 |
| PollingDriven_Base | [PollingDriven_Base](Polling_Base/PollingDriven_Base/PollingDriven_Base.md) | 4 |
| ZeroPollingDriven | [ZeroPollingDriven](Polling_Base/ZeroPollingDriven/ZeroPollingDriven.md) | 2 |
| PDZ_KRS_Pipe | [PDZ_KRS_Pipe](Polling_Base/PDZ_KRS_Pipe/PDZ_KRS_Pipe.md) | 2 |

## 说明

- 固定文档库 [Polling_Base-Project](D:/AGI/Q_A/AI0001/Q_A/Doc/MD/Lib_Introduce/Polling_Base-Project/) 已覆盖的实体不在本目录重复生成，详见各模块索引「已在固定文档库完成」一节；仅被正文提及而无独立文档的实体（如 NewPollingDrivenZero、SetPollingDrivenZeroQuestionMap）视为缺失，由本文档库生成。
- 历史拼写 Recrsion（PollingDrivenZeroRecrsionReplace）保留原符号并加注。
- 纯测试运行器（如 ZeroPollingDrivenZeroTotalTest）不单独成文，集合判定函数并入所属集合文档。
- 语义由头文件声明、结构常量与命名约定推断。
