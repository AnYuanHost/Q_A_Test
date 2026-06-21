# ReleasePollingDriven

***

映射ReleasePollingDriven接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域，定义为：

    Map ReleasePollingDriven(&NullElementSet, &PollingDrivenSet, ReleasePollingDrivenFunction);

释放轮询机映射（ReleasePollingDriven）分析并释放值域轮询机元素。

关于如何完成轮询机释放，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
