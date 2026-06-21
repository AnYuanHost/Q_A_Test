# Map
***
Map（映射）结构体，记录本框架下的具体操作，一切操作通过映射实现。其结构定义如下：

    typedef bool (*MapFunction)(Element& Domain, Element& Range);

    struct Map {
	    Set* Domain;
	    Set* Range;
	    MapFunction MapActive;

	    Map();
	    Map(Set* domain, Set* range, MapFunction mapActive);
	    ~Map();
    };

MapFunction类型用于指明一类函数，其在定义域元素和值域元素上操作，并返回bool值作为一般操作状况的判断标准。
Map结构体的成员中， Domain定义域和Range值域都是Set*类型，通过集合来确定Map发生的范围。
MapActive成员确定该映射具体如何在定义域和值域上执行操作。
和Set一样，Map同样不会在运行时大规模更改。