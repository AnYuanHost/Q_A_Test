# ThreadFunction

***

映射ThreadFunction接受可执行映射集合（ActiveMapSet）为定义域，布尔类型集合（BoolSet）为值域，定义为：

    Map ThreadFunction(&ActivaeMapSet, &BoolSet, ThreadFunctionFunction);

线程执行映射（ThreadFunction）执行定义域可执行映射元素，并将值域布尔元素置为true。

关于如何完成线程执行，参考案例[Thread_Base案例](Thread_Base_Case.md)
