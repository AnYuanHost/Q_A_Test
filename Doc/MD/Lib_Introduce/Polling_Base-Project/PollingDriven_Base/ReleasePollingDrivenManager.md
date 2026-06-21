# ReleasePollingDrivenManager

***

映射ReleasePollingDrivenManager接受空元素集合（NullElementSet）为定义域，轮询机管理集合（PollingDrivenManager）为值域，定义为：

    Map ReleasePollingDrivenManager(&NullElementSet, &PollingDrivenManager, ReleasePollingDrivenManagerFunction);

轮询机管理释放映射（ReleasePollingDrivenManager）分析并释放值域轮询机管理元素。

关于如何完成轮询机管理释放，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
