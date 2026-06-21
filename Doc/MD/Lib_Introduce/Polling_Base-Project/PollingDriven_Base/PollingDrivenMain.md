# PollingDrivenMain

***

映射PollingDrivenMain接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域，定义为：

    Map PollingDrivenMain(&NullElementSet, &PollingDrivenSet, PollingDrivenMainFunction);

轮询机主程序映射（PollingDrivenMain）在值域轮询机上启动执行映射并为之分配线程。

关于如何完成轮询机映射域迭代析构，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
