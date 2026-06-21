# ReleaseElement
***
映射ReleaseElement接受空元素集合（NullElementSet）为定义域，全集（UniversalSet）为值域，定义如下：

    Map ReleaseElement(&NullElement, &UniversalSet, ReleaseElementFunction);

释放元素映射（ReleaseElement）将值域任意元素的内存空间释放，并将其值归零。（元素释放后和EmptyElement相同）

    {
        Element ParaPair;
        NewOrderedPairFunction(EmptyElement, ParaPair);

        NewUIntElementFunction(EmptyElement, GetEleOrder(ParaPiar, 0));

        ReleaseElementFunction(EmptyElement, GetEleOrder(ParaPair, 0));

        ...
    }

在案例代码中，新建无符号整型元素到序偶元素ParaPair的第一个元素上，随后调用释放元素映射将其释放。
该映射只适合通用的简单结构，被释放的元素往往已经不含有其他指针信息指向其他内存空间，释放可以保证不发生内存泄露。对于一些复杂结构，则应该使用其对应的释放映射进行释放。