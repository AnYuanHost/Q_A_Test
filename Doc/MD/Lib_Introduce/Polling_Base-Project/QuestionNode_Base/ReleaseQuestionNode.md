# ReleaseQuestionNode

***

映射ReleaseQuestionNode接受空元素集合（NullElementSet）为定义域，问答节点集合（QuestionNodeSet）为值域，定义为：

    Map ReleaseQuestionNode(&NullElementSet, &QuestionNodeSet, ReleaseQuestionNodeFunction);

释放问答节点映射（ReleaseQuestionNode）分析并释放值域问答节点元素。

关于如何完成问答节点释放，参考案例[QuestionNode_Base案例](QuestionNode_Base_Case.md)
