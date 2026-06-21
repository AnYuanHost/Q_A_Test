# SetSet
***
集合SetSet为所有集合类型元素的集合，其一般判断标准判断元素大小是否等于sizeof(Set)，其定义如下：

    Set SetSet(EmptyElement, SetSetTest);

集合集合（SetSet）由封装集合类型的所有元素组成，主要用于集合操作。因为一切映射都在元素上进行操作，关乎集合的操作就需要制定域来确定，集合集合承担了这个工作。
另一个核心特征为如果一个元素属于集合SetSet，则其可以通过宏GetSetElement完成解析。

    {
        Element SetElement;

        //Initialize Set Element

        Element Ele;

        if(SetSetTest(SetElement, SetSet)){
            GetSetElement(SetElement).TestFunction(Ele, SetElement);
        }

        ...
    }

在案例代码中，集合元素SetElement在通过了集合测试后，才使用宏进行解析，这可以保证宏的正常使用。