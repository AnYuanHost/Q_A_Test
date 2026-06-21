# SetStatePollingDriven

***

映射SetStatePollingDriven接受无符号整型集合（UIntSet）为定义域，轮询机集合（PollingDrivenSet）为值域，定义为：

    Map SetStatePollingDriven(&UIntSet, &PollingDrivenSet, SetStatePollingDrivenFunction);

轮询机状态设置映射（SetStatePollingDriven）将定义域状态代码值赋予到值域轮询机对应位置上。

关于如何完成轮询机状态设置，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
