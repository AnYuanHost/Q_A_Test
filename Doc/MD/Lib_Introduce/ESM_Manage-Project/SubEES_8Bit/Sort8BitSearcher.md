# Sort8BitSearcher

***

映射Sort8BitSearcher接受空元素集合（NullElementSet）为定义域，8比特子元素环境检索器集合（_8BitSearcher）为值域，定义如下：

    Map Sort8BitSearcher(&NullElementSet, &_8BitSearcher, Sort8BitSearcherFunction);

8比特子元素环境检索器排序映射（Sort8BitSearcher）在值域8比特子元素环境检索器元素上完成排序。

因为8比特子元素环境检索器检索信息位置固定且不会更改，该排序主要针对已置懒元素映射关系的调整。

关于如何使用8比特子元素环境检索器排序映射，跳转至[SubEES_8Bit案例](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
