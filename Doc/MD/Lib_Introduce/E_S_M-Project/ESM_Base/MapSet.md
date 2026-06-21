# MapSet
***
集合MapSet为所有映射类型元素的集合，其一般判断标准判断元素大小是否等于sizeof(Map)，其定义如下：

    Set MapSet(EmptyElement, MapSetTest);

映射集合（MapSet）由封装映射类型的所有元素组成，主要用于映射操作。因为一切映射都在元素上进行操作，关乎映射的操作需要依赖映射集合进行。
另一个核心特征为如果一个元素属于集合MapSet，则其可以通过宏GetMapElement完成解析。

    {
        Element MapElement;
        Element DomainElement;
        Element RangeElement;

        // Initialize Map, Domain, Range Element

        if(MapSetTest(MapElement, MapSet)){
            GetMapElement(MapElement).MapActive(DomainElement, RangeElement);
        }

        ...
    }

在案例代码中，映射元素MapElement在通过了映射测试后，才使用宏进行解析，这可以保证宏的正常使用。