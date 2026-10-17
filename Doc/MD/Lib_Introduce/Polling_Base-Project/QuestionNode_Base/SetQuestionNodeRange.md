# SetQuestionNodeRange

***

映射SetQuestionNodeRange接受问答节点参数节点集合（QuestionParameterNode）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map SetQuestionNodeRange(&QuestionParameterNode, &NullElementSet, SetQuestionNodeRangeFunction);

问答节点值域设置映射（SetQuestionNodeRange）从定义域问答节点元素中获取映射值域信息树，将其转交传递到值域空元素上。

