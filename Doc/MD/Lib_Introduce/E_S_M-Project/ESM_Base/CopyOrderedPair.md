# CopyOrderedPair
***
映射CopyOrderedPair定义域为元素序偶集合（OrderedPairSet），值域为空元素集合（NullElementSet），定义如下：

    Map CopyOrderedPair(&OrderedPairSet, &NullElementSet, CopyOrderedPairFunction);

拷贝序偶映射（CopyOrderedPair）将定义域的序偶元素深拷贝到值域空元素上，其会调用元素拷贝映射来拷贝第一元素和第二元素。

    {
        Element Pair1;
        NewOrderedPairFunction(EmptyElement, Pair1);

        NewUIntElementFunction(EmptyElement, GetEleOrder(Pair1, 0));

        Element Pair2;
        
        CopyOrderedPairFunction(Pair1, Pair2);

        ReleaseElementFunction(EmptyElement, GetEleOrder(Pair1, 0));
        ReleaseElementFunction(EmptyElement, GetEleOrder(Pair2, 0));

        ...
    }

在案例代码中，创建序偶元素Pair1并将其第一元素构造为无符号整型。经过拷贝序偶映射后，其无符号整型也拷贝到Pair2的第一元素上，此时代码中存在两个无符号整型的实体元素，所以后续调用两次释放函数来手动释放掉这两个元素。