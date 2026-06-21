# SetPollingDrivenNodeAddress

***

映射SetPollingDrivenNodeAddress接受无符号整型集合（UIntSet）为定义域，轮询机集合（PollingDrivenSet）为值域，定义为：

    Map SetPollingDrivenNodeAddress(&UIntSet, &PollingDrivenSet, SetPollingDrivenNodeAddressFunction);

轮询机设置节点地址信息映射（SetPollingDrivenNodeAddress）将定义域地址信息值赋值到值域轮询机元素的指定位置。

关于如何完成轮询机节点地址设置，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
