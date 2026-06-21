# QuestionNode_Struct

***

命名空间QuestionNode_Struct定义为：

    {
        namespace QuestionNode_Struct {
	        constexpr unsigned int AntecedentQuestionOrder		= 0;
	        constexpr unsigned int PostQuestionOrder			= 1;
	        constexpr unsigned int MapInformation				= 2;
	        constexpr unsigned int DomainTree					= 3;
	        constexpr unsigned int RangeTree					= 4;
	        constexpr unsigned int MapActiveState				= 5;
	        constexpr unsigned int LastAddress					= 6;
	        constexpr unsigned int NextAddress					= 7;
            constexpr unsigned int SuperIndex                   = 8;
        }
    }

问答节点结构（QuestionNode_Struct）通过命名空间确定对于一个问答节点元素，应该如何解析其结构并操作其信息。问答节点以元素序列实现、存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

    {
        namespace QuestionNode_Struct {

	        constexpr unsigned int AntecedentQuestionOrder		= 0;

            // Antecedent Question Order
            // 前置问答节点序列，该元素记录问答节点的前置节点序列

	        constexpr unsigned int PostQuestionOrder			= 1;

            // Post Question Order
            // 后置问答节点序列，该元素记录问答节点的后置节点序列

	        constexpr unsigned int MapInformation				= 2;

            // Map Information
            // 问答节点映射信息，该元素记录问答节点存储的映射信息

	        constexpr unsigned int DomainTree					= 3;

            // Domain Tree
            // 问答节点定义域树，该元素记录问答节点发生的定义域信息

	        constexpr unsigned int RangeTree					= 4;

            // Range Tree
            // 问答节点值域树，该元素记录问答节点发生的值域信息

	        constexpr unsigned int MapActiveState				= 5;

            // Map Active State
            // 问答节点映射执行状态，该元素记录问答节点执行状态

	        constexpr unsigned int LastAddress					= 6;

            // Last Address
            // 问答节点上一节点地址，该元素记录问答节点在序列中的上一节点地址信息

	        constexpr unsigned int NextAddress					= 7;

            // Next Address
            // 问答节点下一节点地址，该元素记录问答节点在序列中的下一节点地址信息

            constexpr unsigned int SuperIndex                   = 8;

            // Super Index
            // 问答节点超索引，该元素补充拓展信息，以支持更多操作
            
        }
    }