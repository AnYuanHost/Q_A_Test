# LoginThreadMap

***

映射LoginThreadMap接受空元素集合（NullElementSet）为定义域和值域，定义为：

    Map LoginThreadMap(&NullElementSet, &NullElementSet, LoginThreadMapFunction);

注册线程映射集合映射（LoginThreadMap）按照轮询机提供的线程接口标准在值域空元素上注册对应的映射。

关于如何完成线程映射集合注册，参考案例[Thread_Base案例](Thread_Base_Case.md)
