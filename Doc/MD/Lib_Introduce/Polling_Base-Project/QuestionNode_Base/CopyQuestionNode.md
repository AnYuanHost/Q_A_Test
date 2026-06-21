# CopyQuestionNode

***

映射CopyQuestionNode接受问答节点集合（QuestionNodeSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map CopyQuestionNode(&QuestionNodeSet, &NullElementSet, CopyQuestionNodeFunction);

拷贝问答节点映射（CopyQuestionNode）将定义域问答节点元素拷贝到值域空元素上。

关于如何完成问答节点的拷贝，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
