# FstreamConstructSolutionSerial

***

映射FstreamConstructSolutionSerial接受元素序列集合（ElementOrderSet）为定义域，解决方案语言描述管理集合（SolutionLanguageExplainManager）为值域，定义为：

    Map FstreamConstructSolutionSerial(&ElementOrderSet, &SolutionLanguageExplainManager, FstreamConstructSolutionSerialFunction);

文件构造解决方案串行结构映射（FstreamConstructSolutionSerial）分析定义域元素序列元素，其结构为：<FstreamSet, BoolSet, ElementOrderSet, UIntSet>，其信息为：<文件元素，第一二图调控信息，图前置节点信息，地址用无符号整型元素>。其中，文件元素提供基本的流信息，用于后续结构建设。第一二图调控信息用于控制映射实际发生在替换前还是替换后。图前置节点信息用于用于提供构建本次节点构建时所需的前置节点信息。而地址用无符号整型仅仅提供一个地址容器，只在内部操作。该映射通过这些信息，完成最终的串行结构构造，其中构造出的节点会注册到值域解决方案语言描述管理的指定位置中，而中间产生的参数信息也会同步在参数管理中进行注册。

关于如何完成解决方案串行构造，参考[Solution_Language案例](Solution_Language_Case.md)
