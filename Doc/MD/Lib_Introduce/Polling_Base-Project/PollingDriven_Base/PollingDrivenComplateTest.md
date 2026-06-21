# PollingDrivenComplateTest

***

映射PollingDrivenComplateTest接受轮询机集合（PollingDrivenSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map PollingDrivenComplateTest(&PollingDrivenSet, &BoolSet, PollingDrivenComplateTestFunction);

轮询机完成测试映射（PollingDrivenComplateTest）在定义域轮询机元素上进行分析，判断线程是否结束，并将结果置于值域元素。

关于如何完成轮询机完成测试，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
