# GetStatePollingDriven

***

映射GetStatePollingDriven接受轮询机集合（PollingDrivenSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map GetStatePollingDriven(&PollingDrivenSet, &UIntSet, GetStatePollingDrivenFunction);

轮询机状态获取映射（GetStatePollingDriven）从定义域轮询机元素中获取状态信息，将无符号值赋值给值域无符号整型元素。

关于如何完成轮询机状态获取，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
