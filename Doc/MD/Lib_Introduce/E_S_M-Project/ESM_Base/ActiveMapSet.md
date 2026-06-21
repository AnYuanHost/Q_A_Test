# ActiveMapSet

***
集合ActiveMapSet是可执行映射元素的集合，其定义如下：

    Set ActiveMapSet(EmptyElement, ActiveMapSet);

可执行映射元素属于三元序列，其集合信息为<UniversalSet, UniversalSet, MapSet>，其信息结构为<DomainElement, RangeElement, MapElement>。可执行元素将定义域元素信息、值域元素信息、映射信息打包，可作为虚拟机解释指令时的基础单位，围绕该集合展开的操作可以控制系统如何执行映射。
可执行映射集合（ActiveMapSet）由所有可执行元素组成，用于可执行元素的操作。虚拟机解释指令的相关操作需要操作可执行元素，需要该集合提供基础特征信息。

    {
        Element ActiveMapElement;
        
        // Initialize Active Map Element

        GetMapElement(GetEleOrder(ActiveMapElement， 2)).MapActive(
            GetEleOrder(ActiveMapElement, 0),
            GetEleOrder(ActiveMapElement, 1)
        );

        ...
    }

在案例代码中，构造并使用可执行映射元素ActiveMapElement。经过初始化代码完成相关信息封装后，按照下文的步骤解析并执行。将ActiveMapElement第三元素映射元素通过GetMapElement进行解析，并调用成员函数MapActive。参数DomainElement、RangeElement则使用其封装的定义域信息和值域信息进行填充。
