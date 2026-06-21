# NewAndActiveThread

***

映射NewAndActiveThread接受可执行映射集合（ActiveMapSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map NewAndActiveThread(&ActiveMapSet, &NullElementSet, NewAddActiveThreadFunction);

构造和执行线程映射（NewAndActiveThread）创建线程反馈结果元素（一个布尔元素，用于记录线程完成状态）到值域空元素上，并且通过线程分配执行定义域可执行映射。

关于如何完成线程的构造和执行，参考案例[Thread_Base案例](Thread_Base_Case.md)
