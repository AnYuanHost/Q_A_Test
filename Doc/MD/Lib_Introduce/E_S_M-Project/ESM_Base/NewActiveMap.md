# NewActiveMap
***
映射NewActiveMap接受空元素集合（NullElementSet）为定义域和值域，定义如下：

    Map NewActiveMap(&NullElementSet, &NullElementSet, NewActiveMapFunction);

新建可执行映射映射（NewActiveMap）在值域空元素上创建一个三元序列，即一个空的可执行映射。

    {
        Element ActiveMapElement;
        NewActiveMapElementFunction(EmptyElement, ActiveMapElement);

        // Set Domain, Range, Map Element

        ...
    }

在案例代码中，构建并使用可执行映射元素ActiveMapElement，新建可执行映射（NewActiveMap）负责基础三元序列结构的构造。
虽然在代码编写中，可以使用元素序列相关映射来完成三元序列的构造，但这种思路不适合在虚拟机中执行，需要使用一步映射来直接解决问题。