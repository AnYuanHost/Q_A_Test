# ThreadComplatTest

***

映射ThreadComplateTest接受布尔类型集合（BoolSet）为定义域和值域，定义为：

    Map ThreadComplateTest(&BoolSet, &BoolSet, ThreadComplateTestFunction);

线程完成测试映射（ThreadComplateTest）将定义域布尔类型元素（线程反馈信息）上进行检测，判断是否完成，并将判断结果置于值域布尔元素上。

关于如何完成线程完成测试，参考案例[Thread_Base案例](Thread_Base_Case.md)
