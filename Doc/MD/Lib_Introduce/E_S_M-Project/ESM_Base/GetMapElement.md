# GetMapElement
***
宏GetMapElement定义如下：

    #define GetMapElement(Ele) (*(Map*)(Ele).KeySpace)

宏GetMapElement用于获取被封装在元素中的映射信息，获取后可按照映射结构体进行操作。例如：

    {
        Element MapElement;
        Element DomainElement;
        Element RangeElement;

        // Initialize Map, Domain, Range Element

        GetMapElement(Map).MapActive(DomainElement, RangeElement);

        ...
    }

在案例代码中，初始化MapElement时将映射信息按固定操作完成封装，使用宏GetMapElement获得信息。所以后续可以通过该宏解析元素并使用映射结构体的MapActive成员来执行操作。