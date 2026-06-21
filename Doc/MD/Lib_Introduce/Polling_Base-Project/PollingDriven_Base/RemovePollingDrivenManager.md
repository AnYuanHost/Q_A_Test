# RemovePollingDrivenManager

***

映射RemovePollingDrivenManager接受无符号整型集合（UIntSet）为定义域，轮询机管理集合（PollingDrivenManager）为值域，定义为：

    Map RemovePollingDrivenManager(&UIntSet, &PollingDrivenManager, RemovePollingDrivenManagerFunction);

轮询机管理移除映射（RemovePollingDrivenManager）在值域轮询机管理元素中移除定义域无符号整型地址信息指定的轮询机并释放。

关于如何完成轮询机管理移除轮询机，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
