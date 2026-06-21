# GetEESPollingDriven

***

映射GetEESPollingDriven接受轮询机集合（PollingDrivenSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map GetEESPollingDriven(&PollingDrivenSet, &NullElementSet, GetEESPollingDrivenFunction);

轮询机元素环境检索器获取映射（GetEESPollingDriven）从定义域轮询机元素中获取元素怒环境检索器，转交传递到值域空元素上。

该映射用于最终取出元素环境检索器的引用元素，并进行处理。

关于如何获取轮询机元素环境检索器，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
