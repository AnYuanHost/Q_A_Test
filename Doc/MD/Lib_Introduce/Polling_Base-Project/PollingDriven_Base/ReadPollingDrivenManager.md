# ReadPollingDrivenManager

***

映射ReadPollingDrivenManager接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map ReadPollingDrivenManager(&OrderedPairSet, &NullElementSet, ReadPollingDrivenManagerFunction);

轮询机管理读取映射（ReadPollingDrivenManager）分析定义域元素序偶集合（OrderedPairSet），其格式为：<UIntSet, PollingDrivenSet>，其信息为：<地址信息，轮询机管理元素>。按照地址信息从轮询机管理元素指定位置上读取轮询机元素，将其引用传递到值域空元素上。

如果地址信息超出轮询机管理容器范围，则抛出异常。

关于如何完成轮询机管理读取轮询机映射，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
