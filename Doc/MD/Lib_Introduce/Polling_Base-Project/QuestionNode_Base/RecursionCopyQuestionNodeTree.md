# RecursionCopyQuestionNodeTree

***

映射RecursionCopyQuestionNodeTree接受元素序列集合（ElementOrderSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map RecursionCopyQuestionNodeTree(&ElementOrderSet, &NullElementSet, RecursionCopyQuestionNodeTreeFunction);

迭代拷贝问答节点信息树映射（RecursionCopyQuestionNodeTree）将定义域元素序列拷贝到值域空元素上。该拷贝会迭代拷贝其中的问答节点树节点。

关于如何完成问答节点信息树拷贝，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
