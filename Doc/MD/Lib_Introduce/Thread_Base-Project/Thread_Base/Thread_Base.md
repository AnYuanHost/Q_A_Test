# Thread_Base

***

该源文件封装std::thread线程以及一系列所用到的基础操作。

***

## 线程元素定义与基本操作：

| 指令 | 说明 |
| --- | --- |
| [ThreadSet](ThreadSet.md) | 集合ThreadSet为所有线程的集合 |
| [ThreadFunction](ThreadFunction.md) | 映射ThreadFunction接受可执行映射集合（ActiveMapSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [NewAndActiveThread](NewAndActiveThread.md) | 映射NewAndActiveThread接受可执行映射集合（ActiveMapSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ThreadComplateTest](ThreadComplateTest.md) | 映射ThreadComplateTest接受布尔类型集合（BoolSet）为定义域和值域 |
| [ThreadComplate](ThreadComplate.md) | 映射ThreadComplate接受空元素集合（NullElementSet）为定义域，布尔类型集合（BoolSet）为值域 |
| [LoginThreadMap](LoginThreadMap.md) | 映射LoginThreadMap接受空元素集合（NullElementSet）为定义域和值域 |

***

## 案例：

| 指令 | 说明 |
| --- | --- |
| [Thread_Base联合案例](Thread_Base_Case.md) | 在该案例中，将会演示庞杂系统内核是如何使用完成单个指令的线程管理的。在该案例中，组建一个标准的可执行映射，并为其提供参数，以及映射信息。随后调用管理线程的映射来完成整个线程执行的管理。 |
