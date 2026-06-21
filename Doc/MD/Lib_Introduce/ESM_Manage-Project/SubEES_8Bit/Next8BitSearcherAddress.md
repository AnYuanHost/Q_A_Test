# Next8BitSearcherAddress

***

映射Next8BitSearcherAddress接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（NullElementSet）为值域，定义如下：

    Map Next8BitSearcherAddress(&OrderedPairSet, &UIntSet, Next8BitSearcherAddressFunction);

8比特子元素检索器下一地址映射（Next8BitSearcherAddress）分析定义域元素序偶元素，其格式为：<UIntSet, _8BitSearcher>，其信息为：<8比特子检索器地址信息，8比特子检索器>。分析8比特子检索器元素，计算8比特子检索器地址信息对应的下一地址信息，赋值到值域无符号整型元素上。

关于如何完成8比特子元素环境检索器下一地址的计算，跳转至[SubEES_8Bit](SubEES_8Bit_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
