# ThreadComplate

***

映射ThreadComplate接受空元素集合（NullElementSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map ThreadComplate(&NullElementSet, &BoolSet, ThreadComplateFunction);

线程完成映射（ThreadComplate）释放值域布尔元素（线程反馈信息），以此完成线程的彻底结束工作。

关于如何完成线程完成，参考案例[Thread_Base案例](Thread_Base_Case.md)
