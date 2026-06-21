# LoginSolutionLanguageNodeOrder

***

映射LoginSolutionLanguageNodeOrder接受解决方案语言节点序列集合（SolutionLanguageNodeOrder）为定义域，无符号整型结合（UIntSet）为值域，定义为：

    Map LoginSolutionLanguageNodeOrder(&SolutionLanguageNodeOrder, &UIntSet, LoginSolutionLanguageNodeOrderFunction);

解决方案语言节点序列注册映射（LoginSolutionLanguageNodeOrder）在定义域解决方案语言节点序列元素中进行注册，并将注册获得的地址信息赋值给值域无符号整型元素。

关于如何完成解决方案文件语言节点序列注册，参考[Solution_Language案例](Solution_Language_Case.md)
