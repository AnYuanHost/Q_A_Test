# DefragmentPollingDrivenManager

***

映射DefragemntPollingDrivenManager接受空元素集合（NullElementSet）为定义域，轮询机管理集合（PollingDrivenManager）为值域，定义为：

    Map DefragmentPollingDrivenManager(&NullElementSet, &PollingDrivenManager, DefragmentPollingDrivenManagerFunction);

轮询机管理集合碎片整理映射（DefragmengPollingDrivenManager）在值域轮询机管理元素上完成碎片整理。

关于如何完成轮询机管理碎片整理，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
