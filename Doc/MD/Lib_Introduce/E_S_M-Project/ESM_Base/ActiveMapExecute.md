# ActiveMapExecute
***
映射ActiveMapExecute接受空元素集合（）为定义域，可执行映射集合（）为值域，其定义如下：

    Map ActiveMapExecute(&NullElementSet, &ActiveMapSet, ActiveMapExecuteFunction);

可执行映射执行映射（）分析值域可执行映射元素，将其展开、填充并执行。

    {
        Element ActiveMapElement;

        // Initialize Active Map Element

        ActiveMapExecuteFunction(EmptyElement, ActiveMapElement);

        GetMapElement(GetEleOrder(ActiveMapElement, 2)).MapActive(
            GetEleOrder(ActiveMapElement, 0),
            GetEleOrder(ActiveMapElement, 1)
        )
    }

在案例代码中，构造并使用可执行映射元素ActiveMapElement。使用映射ActiveMapExecute解析并执行的核心代码和使用宏在代码中解析是一样的，不同的是封装后映射可以添加额外的功能，比如判断定义域元素和值域元素是否符合规范。