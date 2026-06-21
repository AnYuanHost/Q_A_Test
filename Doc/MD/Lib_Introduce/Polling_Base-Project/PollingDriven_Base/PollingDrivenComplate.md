# PollingDrivenComplate

***

映射PollingDrivenComplate接受空元素集合（NullElementSet）为定义域，轮询机集合（PollingDrivenSet）为值域，定义为：

    Map PollingDrivenComplate(&NullElementSet, &PollingDrivenSet, PollingDrivenComplateFunction);

轮询机完成映射（PollingDrivenComplate）在值域轮询机元素上完成线程回收以及元素占用解除等。

关于如何完成轮询机完成，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
