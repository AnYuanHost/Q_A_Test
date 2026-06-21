# SelectKRSPollingDrivenZero_MapSearcher

***

映射SelectKRSPollingDrivenZero_MapSearcher接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map SelectKRSPollingDrivenZero_MapSearcher(&SuperIndexSet, &NullElementSet, SelectKRSPollingDrievnZero_MapSearcherFunction);

知识库零轮询机映射检索器检索映射（SelectKRSPollingDrivenZero_MapSearcher）在指定的静态元素（KRSPollingDrivenZero_MapSearcher）上完成对定义域超索引元素的检索，并将检索到的映射引用元素引用传递到值域空元素上。

关于如何使用知识库零轮询机映射检索器检索，参考[KRS_PollingDrivenZero案例](KRS_PollingDrivenZero_Case.md)。
